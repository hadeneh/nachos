import { Link } from "react-router-dom"

import Blockly from 'blockly' // This imports "Blockly Core" + "Build in Blocks" + "JS Generator" + "English Locale Files"

// ALTERNATIVELY (if you want to be more percise)
// import Blockly from 'blockly/core'
// import 'blockly/blocks'
// import 'blockly/python' // if you want a Python Generator
// import Fr from 'blockly/msg/fr' // if you want French locale files


const MyBlockly = () => {
  return (
      <div>
        <h1>Blockly Full Screen</h1>
      </div>
  );
}

export default MyBlockly;
