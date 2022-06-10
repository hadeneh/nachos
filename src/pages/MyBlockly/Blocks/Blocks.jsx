import '../ToolboxLabel/ToolboxLabel'

import * as basic from './usedBlocks/basicBlocks';
import './usedBlocks/nachosBlocks'


export const InitBlocks = () => {
	return (
		`<xml xmlns="http://www.w3.org/1999/xhtml">
			<block type="start_end" x="80" y="80">
				<value name="PROJ_NAME">
					<shadow type="text">
						<field name="TEXT">Concrete_3D_Printing</field>
					</shadow>
				</value>
			</block>
		</xml>`
	);
}


export const MyBlocks = () => {
	return (
		<>
			<toolboxlabel name="Nachos Blocks" img_src="./img/logo.png" css-label="customLabel"></toolboxlabel>
			<sep></sep>


			{/********************************** 
			 * Start Category
			************************************/}
			<category name="Start" colour="120">
				<block type="start_end">
					<value name="PROJ_NAME"><shadow type="text"><field name="TEXT">Concrete_3D_Printing</field></shadow></value>
				</block>
			</category>


			{/********************************** 
			 * Move Category
			************************************/}
			<category name="Move" colour="359">
				<block type="movex">
					<value name="ACCELERATION"><shadow type="acceleration"></shadow></value>
					<value name="ACCURACY"><shadow type="accuracy"></shadow></value>
				</block>
				<block type="joint"></block>
				<block type="pose"></block>
				<block type="speed_mms"></block>
				<block type="speed_sec"></block>
				<block type="speed_percent"></block>
        	</category>

			<sep></sep>

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