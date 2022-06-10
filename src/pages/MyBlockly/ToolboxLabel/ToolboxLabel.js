import Blockly from 'blockly/core';

class ToolboxLabel extends Blockly.ToolboxItem {

    // constructor(toolboxItemDef, parentToolbox) {
    //   super(toolboxItemDef, parentToolbox);
    // }

    /** override */
    init() {
        this.labelDiv = document.createElement('div');          // Create the div.
        
        if (this.toolboxItemDef_['img_src']) {
            const img = document.createElement('img');          // Create the img.
            img.src = this.toolboxItemDef_['img_src'];          // Set img source - i.e. <toolboxlabel img_src="something.png">
            img.alt = "Label's Logo";
            
            this.labelDiv.appendChild(img);
        }
        
        const label = document.createElement('label');          // Create the label.
        label.textContent = this.toolboxItemDef_['name'];       // Set label name from passed attributes - i.e. <toolboxlabel name="something">
        this.labelDiv.appendChild(label);

        const cssConfig = this.toolboxItemDef_['cssconfig'];                // Any attributes that begin with css- will get added to a cssconfig object.
        if (cssConfig) this.labelDiv.classList.add(cssConfig['label']);     // Add the class.
    }

    /** override */
    getDiv() {
        return this.labelDiv;
    }
}
  
Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    'toolboxlabel',
    ToolboxLabel);