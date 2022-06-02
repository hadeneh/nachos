import { Link } from "react-router-dom"
import { useState } from 'react';

import { BlocklyWorkspace } from 'react-blockly';


function MyBlockly() {
  
  const [xml, setXml] = useState();

  var MY_TOOLBOX = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      }
    ]
  };

  return (
    <BlocklyWorkspace
      className="width-100" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  )
}

export default MyBlockly;
