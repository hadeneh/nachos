import React from 'react';
import { Link } from "react-router-dom"
import Split from "react-split";

import MyBlockly from './MyBlockly/MyBlockly';
import '../css/Coding.css';


function Coding() {
    return (
        <Split 
			className="split" 
			direction="horizontal" 
			minSize={0} gutterSize={11} 
			snapOffset={50} 
			sizes={[57, 43]}
		>
            <div className="left-box">
				<MyBlockly />
            </div>

            <div className="right-box">
                <h1>Click button to Download (output)</h1>
            </div>
        </Split>
    );
}

export default Coding;
