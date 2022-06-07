// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9hcd49
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j8wy7x

import * as Blockly from 'blockly/core';



/***********************************
	Defining Nachos Generator
************************************/

const NachosGenerator = new Blockly.Generator('Nachos');

NachosGenerator.PRECEDENCE = 0;
// NachosGenerator.INDENT = ""; // maybe this line could be removed entirely (but in the tutorial it said that default is 2 spaces) (but also it will get applied when I use it and I don't think I will ever need indentation in Nachi's code)
NachosGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !opt_thisOnly){
        return code + ",\n" + NachosGenerator.blockToCode(nextBlock)
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
init_acceleration_smooth();
init_accuracy();


basicBlocks_Generators();



function init_start_end() {
    Blockly.Blocks['start_end'] = {
        init: function() {
            this.appendValueInput("PROJ_NAME")
                .setCheck("String")
                .appendField("Program Name:");
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
        var value_proj_name = NachosGenerator.valueToCode(block, 'PROJ_NAME', 0);
        if (value_proj_name)    var code_proj_name = "' " + value_proj_name + "\n";
        else                    var code_proj_name = "";

        var statements_lines = NachosGenerator.statementToCode(block, 'LINES');
        
        var code = code_proj_name + "END"; 
        return code;
    };
}


function init_movex() {
    Blockly.Blocks['movex'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Move");
            this.appendValueInput("POS")
                .setCheck(["joint", "pose"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Position (joint, pose):");
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Interpolation:")
                .appendField(new Blockly.FieldDropdown([["Linear","L"], ["Circular 1","C1"], ["Circular 2","C2"], ["OFF (Joint move)","P"]]), "INTERPOLATION");
            this.appendValueInput("SPD")
                .setCheck(["speed_mms", "speed_sec", "speed_percent"])
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Speed (mm/s, sec, %):");
            this.appendValueInput("ACCELE_SMOOTH")
                .setCheck("acceleration_smooth")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Acceleration/Smoothness:");
            this.appendValueInput("ACCU")
                .setCheck("accuracy")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Accuracy:");
            this.setInputsInline(false);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("Default values: H=1 (Tool), MS (Master Speed), and CONF (Configuration) is omitted.");
            this.setHelpUrl("");
        }
    };

    // Blockly.JavaScript['movex'] = function(block) {
    //     var value_pos = Blockly.JavaScript.valueToCode(block, 'POS', Blockly.JavaScript.ORDER_ATOMIC);
    //     var dropdown_interpolation = block.getFieldValue('INTERPOLATION');
    //     var value_spd = Blockly.JavaScript.valueToCode(block, 'SPD', Blockly.JavaScript.ORDER_ATOMIC);
    //     var value_accele_smooth = Blockly.JavaScript.valueToCode(block, 'ACCELE_SMOOTH', Blockly.JavaScript.ORDER_ATOMIC);
    //     var value_accu = Blockly.JavaScript.valueToCode(block, 'ACCU', Blockly.JavaScript.ORDER_ATOMIC);
    //     // TODO: Assemble JavaScript into code variable.
    //     var code = '...;\n';
    //     return code;
    // };
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

      Blockly.JavaScript['joint'] = function(block) {
        var number_j1 = block.getFieldValue('j1');
        var number_j2 = block.getFieldValue('j2');
        var number_j3 = block.getFieldValue('j3');
        var number_j4 = block.getFieldValue('j4');
        var number_j5 = block.getFieldValue('j5');
        var number_j6 = block.getFieldValue('j6');
        var text_comment = block.getFieldValue('comment');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
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

      Blockly.JavaScript['pose'] = function(block) {
        var number_x = block.getFieldValue('x');
        var number_y = block.getFieldValue('y');
        var number_z = block.getFieldValue('z');
        var number_rx = block.getFieldValue('rx');
        var number_ry = block.getFieldValue('ry');
        var number_rz = block.getFieldValue('rz');
        var text_comment = block.getFieldValue('comment');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
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

    Blockly.JavaScript['speed_mms'] = function(block) {
        var number_spd_mms = block.getFieldValue('SPD_mms');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
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

    Blockly.JavaScript['speed_sec'] = function(block) {
        var number_spd_sec = block.getFieldValue('SPD_sec');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
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
    Blockly.JavaScript['speed_percent'] = function(block) {
        var number_spd_percent = block.getFieldValue('SPD_percent');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };
}


function init_acceleration_smooth() {
    Blockly.Blocks['acceleration_smooth'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Acceleration:")
                .appendField(new Blockly.FieldNumber(0, 0, 3, 1), "ACCELERATION")
                .appendField("+ Smoothness:")
                .appendField(new Blockly.FieldNumber(0, 0, 3, 1), "SMOOTH");
            this.setInputsInline(false);
            this.setOutput(true, "acceleration_smooth");
            this.setColour(230);
            this.setTooltip("Values are between 0 and 3. For high accelerations, use low values. For minimum smoothness, use low values. For example, A0 and S0 will provide the highest performance and accelerations.");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['acceleration_smooth'] = function(block) {
        var number_acceleration = block.getFieldValue('ACCELERATION');
        var number_smooth = block.getFieldValue('SMOOTH');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };
}


function init_accuracy() {
    Blockly.Blocks['accuracy'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Accuracy:")
                .appendField(new Blockly.FieldNumber(1, 1, 8, 1), "ACCURACY")
                .appendField(" inPosition?")
                .appendField(new Blockly.FieldCheckbox("TRUE"), "INPOSITION");
            this.setInputsInline(false);
            this.setOutput(true, "accuracy");
            this.setColour(230);
            this.setTooltip("Value between 1 and 8. \"inPosition\" check, adds P (i.e. 1P-8P). If omitted, previous step value is used.");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['accuracy'] = function(block) {
        var number_accuracy = block.getFieldValue('ACCURACY');
        var checkbox_inposition = block.getFieldValue('INPOSITION') === 'TRUE';
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };
}


function basicBlocks_Generators() {
    NachosGenerator['text'] = function(block) {
        const code = block.getFieldValue('TEXT');
        return [code, NachosGenerator.PRECEDENCE];
    };
}


export default NachosGenerator;
