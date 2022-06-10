// Sample of the Blocks that originally came with "blockly-react".

import { Block, Value, Field, Shadow } from '../../BlocklyComponent';

const SampleBlocks = () => {
	return (
		<>
			<Block type="test_react_field" />
			<Block type="test_react_date_field" />
			<Block type="controls_ifelse" />
			<Block type="controls_if" />
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
		</>
	);
}

export default SampleBlocks;