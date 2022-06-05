// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import './fields/BlocklyReactField';
import './fields/DateField';

var testReactField = {
	"type": "test_react_field",
	"message0": "custom field %1",
	"args0": [
		{
			"type": "field_react_component",
			"name": "FIELD",
			"text": "Click me"
		},
	],
	"previousStatement": null,
	"nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
	init: function() {
		this.jsonInit(testReactField);
		this.setStyle('loop_blocks');
	}
};

var reactDateField = {
	"type": "test_react_date_field",
	"message0": "date field %1",
	"args0": [
		{
			"type": "field_react_date",
			"name": "DATE",
			"date": "01/01/2020"
		},
	],
	"previousStatement": null,
	"nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
	init: function() {
		this.jsonInit(reactDateField);
		this.setStyle('loop_blocks');
	}
};
