// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9hcd49
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j8wy7x

import * as Blockly from 'blockly/core';



/***********************************
	Defining Nachos Generator
************************************/

const NachosGenerator = new Blockly.Generator('Nachos');

NachosGenerator.PRECEDENCE = 0;
NachosGenerator.INDENT = "";
NachosGenerator.scrub_ = function(block, code) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock){
        return code + "\n" + NachosGenerator.blockToCode(nextBlock);
    }
    return code;
};

/** 
 * Order of Generator functions to run (not entirely sure):
    * 1. generator.workspaceToCode()
    * 2. generator.statementToCode()
    * 3. generator.scrub_() and blockToCode()
    * 4. generator.valueToCode()
    * 5. block.getFieldValue()
*/


/***********************************
	Initialising each Nachos Block + Definition for its Generator
************************************/

init_start_end();
init_movex();
init_joint();
init_pose();
init_speeds();
init_acceleration();
init_accuracy();


init_var_local_int();
init_var_local_float();

init_outputs();

basicBlocks_Generators();



function init_start_end() {
    Blockly.Blocks['start_end'] = {
        init: function() {
            this.appendValueInput("PROJ_NAME")
                .setCheck("String")
                .appendField("Program")
                .appendField(new Blockly.FieldNumber(0, 1, 9999, 1), "PROJ_NUMBER")
                .appendField("Name:");
            this.appendDummyInput()
                .appendField("START");
            this.appendStatementInput("LINES")
                .setCheck(null);
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("END");
            this.setInputsInline(false);

            this.setColour(120);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    NachosGenerator['start_end'] = function(block) {
        // var number_proj_number = block.getFieldValue('PROJ_NUMBER');
        var value_proj_name = NachosGenerator.valueToCode(block, 'PROJ_NAME', 0);

        var proj_name = "";
        if (value_proj_name) {
            proj_name = `' ${value_proj_name}`;
        }

        var code_first_block = NachosGenerator.statementToCode(block, 'LINES');
        var code_all_blocks = NachosGenerator.scrub_(block, code_first_block)

        var code = `${proj_name}\n${code_all_blocks}\nEND`;
        return code;
    };
}


function init_movex() {
    Blockly.Blocks['movex'] = {
        init: function() {
            this.appendValueInput("POSITION")
                .setCheck(["joint", "pose"])
                .appendField("Move to Position:");
            this.appendValueInput("SPEED")
                .setCheck(["speed_mms", "speed_sec", "speed_percent"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Speed:");
            this.appendValueInput("ACCELERATION")
                .setCheck("acceleration")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Acceleration:");
            this.appendValueInput("ACCURACY")
                .setCheck("accuracy")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Accuracy:");
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Interpolation:")
                .appendField(new Blockly.FieldDropdown([["Joint","P"], ["Linear","L"], ["Circular 1","C1"], ["Circular 2","C2"]]), "INTERPOLATION");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("Default values: H=1 (Tool), MS (Master Speed), and CONF (Configuration) is omitted.");
            this.setHelpUrl("");
        }
    };

    NachosGenerator['movex'] = function(block) {
        
        var type_position;
        try             { type_position = block.getInputTargetBlock('POSITION').outputConnection.getCheck(); } 
        catch (error)   { type_position = null; }

        var value_mechanism = "";
        if (type_position) {
            if      (type_position == "joint")  value_mechanism = "M1J";
            else if (type_position == "pose")   value_mechanism = "M1X";
        }

        var value_position = NachosGenerator.valueToCode(block, 'POSITION', NachosGenerator.PRECEDENCE);
        var value_speed = NachosGenerator.valueToCode(block, 'SPEED', NachosGenerator.PRECEDENCE);
        var value_acceleration = NachosGenerator.valueToCode(block, 'ACCELERATION', NachosGenerator.PRECEDENCE);
        var value_accuracy = NachosGenerator.valueToCode(block, 'ACCURACY', NachosGenerator.PRECEDENCE);
        var value_interp = block.getFieldValue('INTERPOLATION');


        var value_comment = "";
        const position_block = block.getInputTargetBlock('POSITION');
        if (position_block) {
            value_comment = position_block.getFieldValue('comment');
        }


        let code = ``;
        if (value_comment) {
            code = `MOVEX ${value_accuracy}, ${value_acceleration}, ${value_mechanism}, ${value_interp}, ${value_position}, ${value_speed}, H=1, MS ' ${value_comment}`;
        }
        else {
            code = `MOVEX ${value_accuracy}, ${value_acceleration}, ${value_mechanism}, ${value_interp}, ${value_position}, ${value_speed}, H=1, MS`;
        }

        return code;
    };
}


function init_joint() {
    Blockly.Blocks['joint'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Joints:");
            this.appendDummyInput()
                .appendField("J1=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "j1")
                .appendField("J2=")
                .appendField(new Blockly.FieldNumber(90, -360, 360), "j2")
                .appendField("J3=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "j3")
                .appendField("J4=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "j4")
                .appendField("J5=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "j5")
                .appendField("J6=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "j6");
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Comments:")
                .appendField(new Blockly.FieldTextInput(""), "comment");
            this.setInputsInline(false);
            this.setOutput(true, "joint");
            this.setColour(359);
            this.setTooltip("All values are in Degrees, ranging from -360 to 360. However, actual software limits on Nachi may be variable from time to time (ask supervisor).");
            this.setHelpUrl("");
        }
      };

      NachosGenerator['joint'] = function(block) {
        var j1 = block.getFieldValue('j1');
        var j2 = block.getFieldValue('j2');
        var j3 = block.getFieldValue('j3');
        var j4 = block.getFieldValue('j4');
        var j5 = block.getFieldValue('j5');
        var j6 = block.getFieldValue('j6');
        // var text_comment = block.getFieldValue('comment'); // This will be accessed in the "movex" block.

        var code = `(${j1}, ${j2}, ${j3}, ${j4}, ${j5}, ${j6})`;

        return [code, NachosGenerator.PRECEDENCE];
      };
}


function init_pose() {
    Blockly.Blocks['pose'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Pose:");
            this.appendDummyInput()
                .appendField("Translation:")
                .appendField("x=")
                .appendField(new Blockly.FieldNumber(0), "x")
                .appendField("y=")
                .appendField(new Blockly.FieldNumber(0), "y")
                .appendField("z=")
                .appendField(new Blockly.FieldNumber(0), "z");
            this.appendDummyInput()
                .appendField("Rotation:")
                .appendField("Rx=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "rx")
                .appendField("Ry=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "ry")
                .appendField("Rz=")
                .appendField(new Blockly.FieldNumber(0, -360, 360), "rz");
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Comments:")
                .appendField(new Blockly.FieldTextInput(""), "comment");
            this.setInputsInline(false);
            this.setOutput(true, "pose");
            this.setColour(339);
            this.setTooltip("Rotation values are in Degrees.");
            this.setHelpUrl("");
        }
      };

      NachosGenerator['pose'] = function(block) {
        var pose_x = block.getFieldValue('x');
        var pose_y = block.getFieldValue('y');
        var pose_z = block.getFieldValue('z');
        var pose_rx = block.getFieldValue('rx');
        var pose_ry = block.getFieldValue('ry');
        var pose_rz = block.getFieldValue('rz');
        // var text_comment = block.getFieldValue('comment'); // This will be accessed in the "movex" block.

        var code = `(${pose_x}, ${pose_y}, ${pose_z}, ${pose_rx}, ${pose_ry}, ${pose_rz})`;

        return [code, NachosGenerator.PRECEDENCE];
      };
      
}


function init_speeds() {
    Blockly.Blocks['speed_mms'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Speed (mm/s):")
                .appendField(new Blockly.FieldNumber(100, 1, 5000, 1), "SPD_mms");
            this.setInputsInline(false);
            this.setOutput(true, "speed_mms");
            this.setColour(230);
            this.setTooltip("Ranging from 1 to 5000 mm/s.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['speed_mms'] = function(block) {
        var spd_mms = block.getFieldValue('SPD_mms');
        // TODO: Assemble JavaScript into code variable.
        var code = `S=${spd_mms}`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, NachosGenerator.PRECEDENCE];
    };



    Blockly.Blocks['speed_sec'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Speed (sec):")
                .appendField(new Blockly.FieldNumber(5, 0.1, 100), "SPD_sec");
            this.setInputsInline(true);
            this.setOutput(true, "speed_sec");
            this.setColour(230);
            this.setTooltip("Ranging from 0.1 to 100 seconds.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['speed_sec'] = function(block) {
        var spd_sec = block.getFieldValue('SPD_sec');
        // TODO: Assemble JavaScript into code variable.
        var code = `T=${spd_sec}`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, NachosGenerator.PRECEDENCE];
    };

    

    Blockly.Blocks['speed_percent'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Speed (%):")
                .appendField(new Blockly.FieldNumber(50, 0.1, 100), "SPD_percent");
            this.setInputsInline(true);
            this.setOutput(true, "speed_percent");
            this.setColour(230);
            this.setTooltip("Ranging from 0.1 to 100%. 100% is maximum power and speed.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['speed_percent'] = function(block) {
        var spd_percent = block.getFieldValue('SPD_percent');
        // TODO: Assemble JavaScript into code variable.
        var code = `R=${spd_percent}`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, NachosGenerator.PRECEDENCE];
    };
}


function init_acceleration() {
    Blockly.Blocks['acceleration'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Acceleration:")
                .appendField(new Blockly.FieldNumber(0, 0, 3, 1), "ACC")
                .appendField(", Smoothness:")
                .appendField(new Blockly.FieldNumber(0, 0, 3, 1), "SM");
            this.setInputsInline(false);
            this.setOutput(true, "acceleration");
            this.setColour(230);
            this.setTooltip("Values are between 0 and 3. For high accelerations, use low values. For minimum smoothness, use low values. For example, A0 and S0 will provide the highest performance and accelerations.");
            this.setHelpUrl("");
        }
    };

    NachosGenerator['acceleration'] = function(block) {
        var acceleration = block.getFieldValue('ACC');
        var smooth = block.getFieldValue('SM');
        // TODO: Assemble JavaScript into code variable.
        var code = `AC=${acceleration}, SM=${smooth}`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, NachosGenerator.PRECEDENCE];
    };
}


function init_accuracy() {
    Blockly.Blocks['accuracy'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Accuracy:")
                .appendField(new Blockly.FieldNumber(1, 1, 8, 1), "ACCU")
                .appendField(" inPosition?")
                .appendField(new Blockly.FieldCheckbox("FALSE"), "INPOS");
            this.setInputsInline(false);
            this.setOutput(true, "accuracy");
            this.setColour(230);
            this.setTooltip("Value between 1 and 8. \"inPosition\" check, adds P (i.e. 1P-8P). If omitted, previous step value is used.");
            this.setHelpUrl("");
        }
    };

    NachosGenerator['accuracy'] = function(block) {
        var number_accuracy = block.getFieldValue('ACCU');
        var checkbox_inposition = block.getFieldValue('INPOS') === 'TRUE';
        // TODO: Assemble JavaScript into code variable.

        var code = `A=${number_accuracy}`;
        if (checkbox_inposition) {
            code += "P"
        }
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, NachosGenerator.PRECEDENCE];
    };
}



function init_outputs() {
    Blockly.Blocks['nachos_print'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Print:")
                .appendField(new Blockly.FieldTextInput("String to display..."), "PRINT");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(285);
            this.setTooltip("Text will be shown on the Teach Pendant display. Up to 199 single-byte alphanumeric.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['nachos_print'] = function(block) {
        var text_print = block.getFieldValue('PRINT');
        var code = `PRINT #0, ${text_print};`;
        // TODO: Check if this works.
        // TODO: Check what happens if ; was removed
        return code;
    };
}


function init_var_local_int() {
    Blockly.Blocks['var_set_local_int'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("SET Local integer: #")
                .appendField(new Blockly.FieldNumber(1, 1, 200, 1), "LOCATION");
            this.appendDummyInput()
                .appendField(" value=")
                .appendField(new Blockly.FieldNumber(110, -2147483647, 2147483647, 1), "VALUE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(330);
            this.setTooltip("Variable number between 1-200. Value range is about +/- 2 billion.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['var_set_local_int'] = function(block) {
        var number_location = block.getFieldValue('LOCATION');
        var number_value = block.getFieldValue('VALUE');
        var code = `LETLI L${number_location}%, ${number_value}`;
        //TODO: is the syntax correct.
        return code;
    };


    Blockly.Blocks['var_get_local_int'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("GET Local integer: #")
                .appendField(new Blockly.FieldNumber(1, 1, 200, 1), "LOCATION");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(330);
            this.setTooltip("Variable number between 1-200.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['var_get_local_int'] = function(block) {
        var number_location = block.getFieldValue('LOCATION');
        var code = `L${number_location}%`;
        // TODO: is this even correct??
        return [code, NachosGenerator.PRECEDENCE];
    };

}

function init_var_local_float() {
    Blockly.Blocks['var_set_local_float'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("SET Local float: #")
                .appendField(new Blockly.FieldNumber(1, 1, 200, 1), "LOCATION");
            this.appendDummyInput()
                .appendField(" value=")
                .appendField(new Blockly.FieldNumber(55.08), "VALUE");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(330);
            this.setTooltip("Variable number between 1-200. Value range between -1.0E38 ~ 1.0E38.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['var_set_local_float'] = function(block) {

        var number_location = block.getFieldValue('LOCATION');
        var number_value = block.getFieldValue('VALUE');
        var code = `LETLF L${number_location}!, ${number_value}`;
        //TODO: is the syntax correct.
        return code;
    };


    Blockly.Blocks['var_get_local_float'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("GET Local float: #")
                .appendField(new Blockly.FieldNumber(1, 1, 200, 1), "LOCATION");
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(330);
            this.setTooltip("Variable number between 1-200.");
            this.setHelpUrl("");
        }
    };
    NachosGenerator['var_get_local_float'] = function(block) {
        var number_location = block.getFieldValue('LOCATION');
        var code = `L${number_location}!`;
        // TODO: is this even correct??
        return [code, NachosGenerator.PRECEDENCE];
      };

}



function basicBlocks_Generators() {
    NachosGenerator['text'] = function(block) {
        var code = block.getFieldValue('TEXT');
        return [code, NachosGenerator.PRECEDENCE];
    };
}


export default NachosGenerator;
