import * as basic from './usedBlocks/basicBlocks';
import './usedBlocks/nachosBlocks'


export const MyBlocks = () => {
	return (
		<>
			<sep></sep>
			<sep></sep>
			<sep></sep>

			<category name="Nachos Blocks" />
			<sep></sep>

			{/* ADD Nachos Blocks here... */}
			<category name="Move" colour="359">
				<block type="move"></block>
				<block type="joint_deg"></block>
				<block type="joint_rad"></block>
				<block type="pose_rad"></block>
        	</category>

			<sep></sep>
			<sep></sep>
			<sep></sep>
			{/* END of Nachos Blocks */}

			<category name="Basic Blocks" />
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
			<sep></sep>
			<sep></sep>
		</>
	);
}