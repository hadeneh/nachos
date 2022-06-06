// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9hcd49
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j8wy7x

import * as Blockly from 'blockly/core';

init_move_Block();
init_joints_deg_Block();
init_joints_rad_Block();
init_pose_rad_Block();


function init_move_Block() {
    Blockly.Blocks['move'] = {
        init: function() {
          this.appendValueInput("position")
              .setCheck(["joint_deg", "joint_rad"])
              .appendField("Move to:");
          this.setInputsInline(false);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
       this.setTooltip("");
       this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['move'] = function(block) {
        var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n';
        return code;
    };
}


function init_joints_deg_Block() {
    Blockly.Blocks['joint_deg'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("Joints (deg):");
          this.appendDummyInput()
              .appendField("J1=")
              .appendField(new Blockly.FieldNumber(0, -360, 360), "j1")
              .appendField("J2=")
              .appendField(new Blockly.FieldNumber(0, -360, 360), "j2")
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
          this.setOutput(true, null);
          this.setColour(359);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

    Blockly.JavaScript['joint_deg'] = function(block) {
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


function init_joints_rad_Block() {
    Blockly.Blocks['joint_rad'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("Joints (rad):");
          this.appendDummyInput()
              .appendField("J1=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j1")
              .appendField("J2=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j2")
              .appendField("J3=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j3")
              .appendField("J4=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j4")
              .appendField("J5=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j5")
              .appendField("J6=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "j6");
          this.appendDummyInput()
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField("Comments:")
              .appendField(new Blockly.FieldTextInput(""), "comment");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour(359);
       this.setTooltip("");
       this.setHelpUrl("");
        }
    };

		Blockly.JavaScript['joint_rad'] = function(block) {
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


function init_pose_rad_Block() {
    Blockly.Blocks['pose_rad'] = {
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
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "rx")
              .appendField("Ry=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "ry")
              .appendField("Rz=")
              .appendField(new Blockly.FieldNumber(0, -6.3, 6.3), "rz");
          this.appendDummyInput()
              .setAlign(Blockly.ALIGN_RIGHT)
              .appendField("Comments:")
              .appendField(new Blockly.FieldTextInput(""), "comment");
          this.setInputsInline(false);
          this.setOutput(true, null);
          this.setColour(339);
       this.setTooltip("");
       this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['pose_rad'] = function(block) {
        var number_x = block.getFieldValue('x');
        var number_y = block.getFieldValue('y');
        var number_z = block.getFieldValue('z');
        var number_rx = block.getFieldValue('rx');
        var number_rx = block.getFieldValue('rx');
        var number_rx = block.getFieldValue('rx');
        var text_comment = block.getFieldValue('comment');
        // TODO: Assemble JavaScript into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
}


