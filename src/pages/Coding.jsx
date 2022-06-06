import React from 'react';
import Split from "react-split";
import { Link } from "react-router-dom"

import BlocklyJS from 'blockly/javascript';

import BlocklyComponent from './MyBlockly/BlocklyComponent'; // previously from "Coding.jsx" we had: import BlocklyComponent, { Block, Value, Field, Shadow } from './MyBlockly/BlocklyComponent';
import { InitBlocks, MyBlocks } from './MyBlockly/Blocks/Blocks'

import '../css/Coding.css';


class MyBlockly extends React.Component {
	constructor(props) {
		super(props);
		this.simpleWorkspace = React.createRef();
	}

	generateCode = () => {
		var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current.workspace);
		console.log(code);
        
        document.getElementById("code_output").innerHTML = code;
		alert(code);
	}

	render() {
		return (
            <>
                <nav id='menu' className='navbar navbar-default'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nachos-navbar'>
                                <span className='sr-only'>Toggle navigation</span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                            <Link to="/" className="navbar-brand">Nachos</Link>
                        </div>

                        <div className='collapse navbar-collapse' id='nachos-navbar'>
                            <ul className='nav navbar-nav navbar-left'>
                                <li><a onClick={this.generateCode}>&lt; Generate Code &gt;</a></li>
                                {/* <li><Link to="/coding">&lt; Generate Code &gt;</Link></li> */}
                            </ul>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><Link to="/">Docs</Link></li>
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
                        <h1 id='code_output'>Generated code...</h1>
                    </div>
                </Split>
            </>
		);
	}
}

export default MyBlockly;

