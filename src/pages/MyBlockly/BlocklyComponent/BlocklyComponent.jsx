import React from 'react';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    componentDidMount() {
        const { initialXml, children, ...rest } = this.props;
        
        this.primaryWorkspace = Blockly.inject(this.blocklyDiv.current, {toolbox: this.toolbox.current, ...rest, maxInstances:{"start_end": 1}});

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <div ref={this.blocklyDiv} id="blocklyDiv" />
                <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolbox}>
                    {children}
                </xml>
            </React.Fragment>
        );
    }
}

export default BlocklyComponent;
