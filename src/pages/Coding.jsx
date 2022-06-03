import React from 'react';
import { Link } from "react-router-dom"
import Split from "react-split";


import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';

import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks'
import './generator/generator'



class MyBlockly extends React.Component {
	constructor(props) {
		super(props);
		this.simpleWorkspace = React.createRef();
	}

	generateCode = () => {
		var code = BlocklyJS.workspaceToCode(
			this.simpleWorkspace.current.workspace
		);
		console.log(code);
	}

	render() {
		return (
			<div>
				{/* <button onClick={this.generateCode}>Convert</button> */}
				<BlocklyComponent 
					ref={this.simpleWorkspace}
					readOnly={false} trashcan={true} media={'media/'}
					move={{scrollbars: true, drag: true, wheel: true}}
					grid={{spacing: 20, length: 5, colour: "#ccc", snap: false}}
					comments={true}
					zoom={{controls: true}}
					// initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="controls_ifelse" x="20" y="20"></block> </xml>`}
				>
					<Block type="test_react_field" />
					<Block type="test_react_date_field" />
					<Block type="controls_ifelse" />
					<Block type="logic_compare" />
					<Block type="logic_operation" />
					<Block type="controls_repeat_ext">
						<Value name="TIMES">
							<Shadow type="math_number">
								<Field name="NUM">10</Field>
							</Shadow>
						</Value>
					</Block>
					<Block type="logic_operation" />
					<Block type="logic_negate" />
					<Block type="logic_boolean" />
					<Block type="logic_null" />
					<Block type="logic_ternary" />
					<Block type="text_charAt">
						<Value name="VALUE">
							<Block type="variables_get">
								<Field name="VAR">text</Field>
							</Block>
						</Value>
					</Block>
				</BlocklyComponent>
			</div>
		);
	}
}


function Coding() {

	// return (
	// 	<MyBlockly />
	// );
    return (
        <Split 
			className="split" 
			direction="horizontal" 
			minSize={0} gutterSize={11} 
			snapOffset={50} 
			sizes={[57, 43]}
		>
            <div className="left-box" id="blocklyArea">
				<MyBlockly />
            </div>

            <div className="right-box">
                <h1>Click button to Download (output)</h1>
            </div>
        </Split>
    );
}

export default Coding;
