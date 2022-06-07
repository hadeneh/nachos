import '../ToolboxLabel/ToolboxLabel'

import * as basic from './usedBlocks/basicBlocks';
import './usedBlocks/nachosBlocks'


export const InitBlocks = () => {
	return (
		`<xml xmlns="http://www.w3.org/1999/xhtml">
			<block type="start_end" x="80" y="80"></block>
		</xml>`
	);
}


export const MyBlocks = () => {
	return (
		<>
			<toolboxlabel name="Nachos Blocks" img_src="./img/logo.png" css-label="customLabel"></toolboxlabel>
			<sep></sep>

			<category name="Move" colour="359">
				<block type="start_end"></block>
				<block type="move"></block>
				<block type="joint_deg"></block>
				<block type="joint_rad"></block>
				<block type="pose_rad"></block>
        	</category>

			<sep></sep>
			{/* END of Nachos Blocks */}

			<toolboxlabel name="Basic Blocks" img_src="./img/blockly_logo.svg" css-label="customLabel"></toolboxlabel>
			<sep></sep>
			<basic.LogicCategoryBlocks />
			<basic.LoopsCategoryBlocks />
			<basic.MathCategoryBlocks />
			<basic.TextCategoryBlocks />
			<basic.ListsCategoryBlocks />

			<sep></sep>
			
			<category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}" />
			<category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}" />
			
			<sep></sep>
		</>
	);
}