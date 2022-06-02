import { Link } from "react-router-dom"
import Split from "react-split";


function Coding() {
    return (
        <Split  className="split" direction="horizontal" minSize={0} gutterSize={11} snapOffset={50}>
            
            <div className="left-box" id="blocklyArea">
                <h1>This is Blockly</h1>
                <Link to="/blockly">
									<button className='btn btn-custom btn-lg page-scroll'>
										&lt; Open Blockly &gt;
									</button>
								</Link>
            </div>

            <div className="right-box">
                <h1>Click button to Download (output)</h1>
            </div>
        </Split>
    );
}



//////////////////////// Playing with Split:


// function CodingTest() {
//     return (
//         <div style={{maxHeight: "100vh"}}>
//             <Split className="split_vertical" direction="vertical" minSize={0} gutterSize={11} snapOffset={50}>
//                 <div>
//                     <h1>Top</h1>
//                 </div>
//                 <Split  className="split_horizontal" direction="horizontal" minSize={0} gutterSize={11} snapOffset={50}>
//                     {/* BLOCKLY */}
//                     <div>
//                         <h1>Bottom Left</h1>
//                     </div>
//                     {/* OUTPUT */}
//                     <div>
//                         <h1>Bottom Right</h1>
//                     </div>
//                 </Split>
//             </Split>
//         </div>
//     );
// }

/*************************** SOME CSS for CodingTest
 * 
.split_horizontal {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}

.gutter.gutter-vertical {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  cursor: row-resize;
}

 */


export default Coding;
