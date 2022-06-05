import * as all from './helperBlocks';


export const BasicBlocks = () => {
	return (
		<>
			<sep></sep>
			<sep></sep>
			<sep></sep>
			{/* END of Nachos Blocks */}

			<category name="Basic Blocks" />
			<sep></sep>
			<all.LogicCategoryBlocks />
			<all.LoopsCategoryBlocks />
			<all.MathCategoryBlocks />
			<all.TextCategoryBlocks />
			<all.ListsCategoryBlocks />

			<sep></sep>
			
			<category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}" />
			<category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}" />
			
			<sep></sep>
			<sep></sep>
			<sep></sep>
		</>
	);
}