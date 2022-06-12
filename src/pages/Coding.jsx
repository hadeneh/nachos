import React from 'react';
import Split from "react-split";
import { Link } from "react-router-dom";

import '../css/Coding.css';

import Blockly from 'blockly/core';
import BlocklyComponent from './MyBlockly/BlocklyComponent';
import { InitBlocks, MyBlocks } from './MyBlockly/Blocks/Blocks';
import NachosGenerator from './MyBlockly/Blocks/usedBlocks/nachosBlocks';

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'


class MyBlockly extends React.Component {

    /***********************************
     Displaying Blockly
     ************************************/
	constructor(props) {
		super(props);
		this.simpleWorkspace = React.createRef();
	}

    componentDidMount() {
        this.resizeBlockly();
        Prism.highlightAll();
    }

    resizeBlockly = () => {
        Blockly.svgResize(this.simpleWorkspace.current.workspace)
    }

    /***********************************
     Code Generate and Download
     ************************************/
    code_generated = false;

    generateCode = () => {
        // Trying to <Generate Code> after the click of the button.
        // Catch any errors that might occur.
        try {
            let code = NachosGenerator.workspaceToCode(this.simpleWorkspace.current.workspace);
            if (code) { // Checking whether the Workspace is empty or not.
                document.getElementById("code_output").innerHTML = code;
                this.code_generated = true;
            }
            else {
                document.getElementById("code_output").innerHTML = "But... \nThere is nothing in the workspace... O_O";
                shake("code_box");
                this.code_generated = false;
            }
        }
        catch (error) {
            document.getElementById("code_output").innerHTML = "Oops...\nHere is the Error:\n" + error;
            shake("code_box");
            this.code_generated = false;
        }

        Prism.highlightAll();
    }
    downloadCode = () => {
        if (this.code_generated) {
            let start_block = this.simpleWorkspace.current.workspace.getBlockById("PROJ_START");
            let program_num = start_block.getFieldValue("PROJ_NUMBER");
            const filename = `ST133TF1-A.${program_num.toString().padStart(3, "0")}`


            let code_output = document.getElementById("code_output");
            let temp_child = code_output.children[0];
            code_output.removeChild(temp_child);
            const content = code_output.innerHTML;
            code_output.appendChild(temp_child);

            download(filename, content);
        }
        else {
            shake("code_box");
        }
    }

    /***********************************
     Workspace Actions
     ************************************/
    save_workspace = () => {
        const num_blocks = this.simpleWorkspace.current.workspace.getAllBlocks(false).length;
        if (num_blocks > 0) {
            if (typeof(Storage) !== "undefined") {
                const xml = Blockly.Xml.workspaceToDom(this.simpleWorkspace.current.workspace);

                localStorage.setItem("saved_blocks", Blockly.Xml.domToText(xml));
                console.log("Workspace Saved.");
                this.simpleWorkspace.current.workspace.clear();
            }
            else {
                alert("Couldn't save workspace, due to your browser being OLD. (i.e. No Support for Web Storage API)")
            }
        }
        else {
            alert("Nothing to save...")
        }
    }
    restore_workspace = () => {
        if (typeof(Storage) !== "undefined") {
            const saved_xml = localStorage.getItem("saved_blocks");
            if (saved_xml != null) {
                this.simpleWorkspace.current.workspace.clear();
                var xml = Blockly.Xml.textToDom(saved_xml)
                Blockly.Xml.domToWorkspace(xml, this.simpleWorkspace.current.workspace)
                console.log("Workspace Restored.")
            }
            else {
                alert("No saved workspace.")
            }
        } 
        else {
            alert("Couldn't save workspace, due to your browser being OLD. (i.e. No Support for Web Storage API)")
        }
    }
    clear_workspace = () => {
        this.simpleWorkspace.current.workspace.clear();
    }
    download_workspace = () => {
        const num_blocks = this.simpleWorkspace.current.workspace.getAllBlocks(false).length;

        if (num_blocks > 0) {
            const xml = Blockly.Xml.workspaceToDom(this.simpleWorkspace.current.workspace);
            download("NachosWorkspace.txt", Blockly.Xml.domToText(xml))
        }
        else {
            alert("Nothing to download...")
        }
    }


	render() {
		return (
            <>
                <nav id='menu' className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link to="/" className="navbar-brand">Nachos</Link>
                        </div>
                        <div className='collapse navbar-collapse' id='nachos-navbar'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><Link to="/">Docs</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav id='menu2' className='navbar navbar-default'>
                    <div className='container'>
                        <div className='collapse navbar-collapse' id='nachos-navbar'>
                            <ul className='nav navbar-nav navbar-left'>
                                <li><a href style={{cursor: "e-resize"}}>Workspace:</a></li>
                                <li><a href onClick={this.save_workspace}>&lt; Save &gt;</a></li>
                                <li><a href onClick={this.restore_workspace}>&lt; Restore &gt;</a></li>
                                <li><a href onClick={this.clear_workspace}>&lt; Clear &gt;</a></li>
                                <li><a href onClick={this.download_workspace}>&lt; Download &gt;</a></li>
                            </ul>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a href style={{cursor: "e-resize"}}>Code:</a></li>
                                <li><a href onClick={this.generateCode}>&lt; Generate &gt;</a></li>
                                <li><a href onClick={this.downloadCode}>&lt; Download &gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Split 
                    className="split" 
                    direction="horizontal" 
                    minSize={0} gutterSize={11} 
                    snapOffset={50} 
                    sizes={[50, 50]}
                    // dragInterval={10}
                    // onDrag={this.resizeBlockly}
                    onDragEnd={this.resizeBlockly}  // I like this more than "onDrag"
                >
                    <div className="left-box">
                        <div className="rotated"> <h3>Expanding...</h3> </div>
                        <BlocklyComponent 
                            ref={this.simpleWorkspace}
                            readOnly={false} trashcan={true} media={'media/'}
                            move={{scrollbars: true, drag: true, wheel: true}}
                            grid={{spacing: 20, length: 4, colour: "#ccc", snap: false}}
                            comments={true}
                            zoom={{controls: true}}
                            // initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="controls_if" x="20" y="20"></block> </xml>`}
                            initialXml={InitBlocks()}
                        >
                            <MyBlocks />
                        </BlocklyComponent>
                    </div>

                    <div className="right-box">
                        <pre id='code_box' onAnimationEnd={() => shake("code_box")} className='line-numbers'>
                            <code id='code_output' className="language-nachos-language">
                                Click on &lt;Generate Code&gt;
                            </code>
                        </pre>
                    </div>
                </Split>
            </>
		);
	}
}

export default MyBlockly;


/***********************************
    Helper Methods
 ************************************/

function shake(name) {
    document.getElementById(name).classList.toggle("error-shake");
}

function download(filename, content) {
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
    element.target = '_blank';
    element.download = filename;
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


