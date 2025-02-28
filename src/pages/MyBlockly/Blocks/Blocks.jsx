import '../ToolboxLabel/ToolboxLabel'

import * as basic from './usedBlocks/basicBlocks';
import './usedBlocks/nachosBlocks'


export const InitBlocks = () => {
	return (
		`<xml xmlns="http://www.w3.org/1999/xhtml">
			<block type="start_end" id="PROJ_START" x="80" y="80">
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
				<block type="start_end" id="PROJ_START">
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


			{/**********************************
			 * Loop Category
			 ************************************/}

			<category name="Loops" colour="165">
				<block type="for_loop"></block>
				<block type="duplicate"></block>
				<block type="lists_create_with">
					<mutation items="3"></mutation>
					<value name="ADD0"><shadow type="joint_alteration"></shadow></value>
				</block>
				<block type="lists_create_with">
					<mutation items="3"></mutation>
					<value name="ADD0"><shadow type="pose_alteration"></shadow></value>
				</block>
				<block type="joint_alteration"></block>
				<block type="pose_alteration"></block>
			</category>

			{/********************************** 
			 * Variables
			************************************/}

			<category name="Variables" colour="330">
				<category name="Local Integer">
					<block type="var_set_local_int"></block>
					<block type="var_get_local_int"></block>
				</category>
				<category name="Local Float">
					<block type="var_set_local_float"></block>
					<block type="var_get_local_float"></block>
				</category>
			</category>

			{/********************************** 
			 * Output
			************************************/}

			<category name="Output" colour="285">
				<block type="nachos_print"></block>
			</category>

			<sep></sep>

			{/**********************************
			 * Blockly Blocks
			 ************************************/}

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