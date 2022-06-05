import React from 'react';

import BlocklyJS from 'blockly/javascript';

import './Blocks/customBlocks/customBlocks'
import './Blocks/customBlocks/generator/generator'

import BlocklyComponent, {Block} from './BlocklyComponent'; // previously from "Coding.jsx" we had: import BlocklyComponent, { Block, Value, Field, Shadow } from './MyBlockly/BlocklyComponent';
import SampleBlock from './Blocks/sampleBlocks/sampleBlocks'
import { BasicBlocks } from './Blocks/Blocks'

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
					grid={{spacing: 20, length: 4, colour: "#ccc", snap: false}}
					comments={true}
					zoom={{controls: true}}
					// initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="controls_ifelse" x="20" y="20"></block> </xml>`}
				>
                    <BasicBlocks />
				</BlocklyComponent>
			</div>
		);
	}
}

export default MyBlockly;