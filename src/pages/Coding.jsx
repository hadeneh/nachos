import React from 'react';
import Split from "react-split";
import { Link } from "react-router-dom";

import Blockly from 'blockly/core';
import BlocklyJS from 'blockly/javascript';

import BlocklyComponent from './MyBlockly/BlocklyComponent';
import { InitBlocks, MyBlocks } from './MyBlockly/Blocks/Blocks';
import NachosGenerator from './MyBlockly/Blocks/usedBlocks/nachosBlocks';

import '../css/Coding.css';


class MyBlockly extends React.Component {
	constructor(props) {
		super(props);
		this.simpleWorkspace = React.createRef();
	}

	generateCode = () => {
        let code;

        try {
            code = NachosGenerator.workspaceToCode(this.simpleWorkspace.current.workspace)
        }
        catch(error) {
            code = "Oops... <br>Here is the Error: <br>" + error;
        }
		// var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current.workspace);
		// console.log(code);
		// alert(code);
        if (code)   document.getElementById("code_output").innerHTML = code;
        else        document.getElementById("code_output").innerHTML = "But... <br>There is nothing in the workspace... O_O";
	}

    save = () => {
        if (typeof(Storage) !== "undefined") {
            var xml = Blockly.Xml.workspaceToDom(this.simpleWorkspace.current.workspace);
            localStorage.setItem("saved_blocks", Blockly.Xml.domToText(xml));
            console.log("Workspace Saved.");
            this.simpleWorkspace.current.workspace.clear();
        } 
        else {
            alert("Couldn't save workspace, due to your browser being OLD. (i.e. No Support for Web Storage API)")
        }
    }

    restore = () => {
        if (typeof(Storage) !== "undefined") {
            const saved_xml = localStorage.getItem("saved_blocks");
            if (saved_xml != null) {
                this.simpleWorkspace.current.workspace.clear();
                var xml = Blockly.Xml.textToDom(saved_xml)
                Blockly.Xml.domToWorkspace(this.simpleWorkspace.current.workspace, xml)
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


    clear = () => {
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
                                <li><a style={{cursor: "e-resize"}}>Workspace:</a></li>
                                <li><a onClick={this.save}>&lt; Save &gt;</a></li>
                                <li><a onClick={this.restore}>&lt; Restore &gt;</a></li>
                                <li><a onClick={this.clear}>&lt; Clear &gt;</a></li>
                            </ul>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a onClick={this.generateCode}>&lt; Generate Code &gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Split 
                    className="split" 
                    direction="horizontal" 
                    minSize={0} gutterSize={11} 
                    snapOffset={50} 
                    sizes={[57, 43]}
                    dragInterval={10}
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
                        <pre id='code_output'>Click on &lt;Generate Code&gt;</pre>
                    </div>
                </Split>
            </>
		);
	}
}

export default MyBlockly;

