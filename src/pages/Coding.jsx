import React from 'react';
import Split from "react-split";
// import { Link } from "react-router-dom"

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
		alert(code);
	}

	render() {
		return (
            <Split 
                className="split" 
                direction="horizontal" 
                minSize={0} gutterSize={11} 
                snapOffset={50} 
                sizes={[57, 43]}
            >
                <div className="left-box">
                    <BlocklyComponent 
                        ref={this.simpleWorkspace}
                        readOnly={false} trashcan={true} media={'media/'}
                        move={{scrollbars: true, drag: true, wheel: true}}
                        grid={{spacing: 20, length: 4, colour: "#ccc", snap: false}}
                        comments={true}
                        zoom={{controls: true}}
                        // initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="controls_if" x="20" y="20"></block> </xml>`}
                        // initialXml={InitBlocks()}
                        >
                        <MyBlocks />
                    </BlocklyComponent>
                </div>

                <div className="right-box">
                    <button onClick={this.generateCode}>Convert</button>
                    <h1>Click button to Download (output)</h1>
                </div>
            </Split>
		);
	}
}

export default MyBlockly;

