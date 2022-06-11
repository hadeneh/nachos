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

import FileSaver from 'file-saver';


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
                this.code_generated = false;
            }
        }
        catch (error) {
            document.getElementById("code_output").innerHTML = "Oops...\nHere is the Error:\n" + error;
            this.code_generated = false;
        }

        Prism.highlightAll();
    }
    downloadCode = () => {
        if (this.code_generated) {
            const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

            const start_block = this.simpleWorkspace.current.workspace.getBlockById("PROJ_START")
            const program = start_block.getFieldValue("PROJ_NUMBER")
            FileSaver.saveAs(blob, `ST133TF1-A.${program.toString().padStart(3, "0")}`);
        }
        else {
            shake("code_box");
        }
    }

    /***********************************
     Workspace Actions
     ************************************/
    save_workspace = () => {
        if (typeof(Storage) !== "undefined") {
            const xml = Blockly.Xml.workspaceToDom(this.simpleWorkspace.current.workspace);
            if (xml) {
                localStorage.setItem("saved_blocks", Blockly.Xml.domToText(xml));
                console.log("Workspace Saved.");
                this.simpleWorkspace.current.workspace.clear();
            }
        }
        else {
            alert("Couldn't save workspace, due to your browser being OLD. (i.e. No Support for Web Storage API)")
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


