export const LogicCategoryBlocks = () => {
    return (
        <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="controls_if">
                <mutation else="1"></mutation>
            </block>
            <block type="controls_if">
                <mutation elseif="1" else="1"></mutation>
            </block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="logic_null"></block>
            <block type="logic_ternary"></block>
        </category>
    );
}


export const LoopsCategoryBlocks = () => {
    return (
        <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <block type="math_number">
                        <field name="NUM">10</field>
                    </block>
                </value>
            </block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for">
                <field name="VAR">i</field>
                <value name="FROM">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="TO">
                    <block type="math_number">
                        <field name="NUM">10</field>
                    </block>
                </value>
                <value name="BY">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
            </block>
            <block type="controls_forEach"></block>
            <block type="controls_flow_statements"></block>
        </category>
    );
}


export const MathCategoryBlocks = () => {
    return (
        <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
                <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
            <block type="math_trig"></block>
            <block type="math_constant"></block>
            <block type="math_number_property"></block>
            <block type="math_round"></block>
            <block type="math_on_list"></block>
            <block type="math_modulo"></block>
            <block type="math_constrain">
                <value name="LOW">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="HIGH">
                    <block type="math_number">
                        <field name="NUM">100</field>
                    </block>
                </value>
            </block>
            <block type="math_random_int">
                <value name="FROM">
                    <block type="math_number">
                        <field name="NUM">1</field>
                    </block>
                </value>
                <value name="TO">
                    <block type="math_number">
                        <field name="NUM">100</field>
                    </block>
                </value>
            </block>
            <block type="math_random_float"></block>
            <block type="math_atan2"></block>
        </category>
    );
}


export const ListsCategoryBlocks = () => {
    return (
        <category name="Lists" colour="%{BKY_LISTS_HUE}">
            <block type="lists_create_empty"></block>
            <block type="lists_create_with"></block>
            <block type="lists_repeat">
                <value name="NUM">
                    <block type="math_number">
                        <field name="NUM">5</field>
                    </block>
                </value>
            </block>
            <block type="lists_length"></block>
            <block type="lists_isEmpty"></block>
            <block type="lists_indexOf"></block>
            <block type="lists_getIndex"></block>
            <block type="lists_setIndex"></block>
        </category>
    );
}

export const TextCategoryBlocks = () => {
    return (
        <category name="Text" colour="#5ba58c">
            <block type="text">
                <field name="TEXT"></field>
            </block>
            <block type="text_join">
                <mutation items="2"></mutation>
            </block>
            <block type="text_append">
                <field name="VAR" id="`8hy.[+:Z:1xwdUW#`yi">item</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_length">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_isEmpty">
                <value name="VALUE">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="text_indexOf">
                <field name="END">FIRST</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="}H4ykkwa9R{VGY/TGf?T">text</field>
                    </block>
                </value>
                <value name="FIND">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_charAt">
                <mutation at="true"></mutation>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                    <block type="variables_get">
                        <field name="VAR" id="}H4ykkwa9R{VGY/TGf?T">text</field>
                    </block>
                </value>
            </block>
            <block type="text_getSubstring">
                <mutation at1="true" at2="true"></mutation>
                <field name="WHERE1">FROM_START</field>
                <field name="WHERE2">FROM_START</field>
                <value name="STRING">
                    <block type="variables_get">
                        <field name="VAR" id="}H4ykkwa9R{VGY/TGf?T">text</field>
                    </block>
                </value>
            </block>
            <block type="text_changeCase">
                <field name="CASE">UPPERCASE</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_trim">
                <field name="MODE">BOTH</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_print">
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
            <block type="text_prompt_ext">
                <mutation type="TEXT"></mutation>
                <field name="TYPE">TEXT</field>
                <value name="TEXT">
                    <shadow type="text">
                        <field name="TEXT">abc</field>
                    </shadow>
                </value>
            </block>
        </category>
    );
}


// export const LibraryCategory = () => {
//     return (
//         <category name="Library" expanded="true">
//             <category name="Randomize">
//                 <block type="procedures_defnoreturn">
//                     <mutation>
//                         <arg name="list"></arg>
//                     </mutation>
//                     <field name="NAME">randomize</field>
//                     <statement name="STACK">
//                         <block type="controls_for" inline="true">
//                             <field name="VAR">x</field>
//                             <value name="FROM">
//                                 <block type="math_number">
//                                     <field name="NUM">1</field>
//                                 </block>
//                             </value>
//                             <value name="TO">
//                                 <block type="lists_length" inline="false">
//                                     <value name="VALUE">
//                                         <block type="variables_get">
//                                             <field name="VAR">list</field>
//                                         </block>
//                                     </value>
//                                 </block>
//                             </value>
//                             <value name="BY">
//                                 <block type="math_number">
//                                     <field name="NUM">1</field>
//                                 </block>
//                             </value>
//                             <statement name="DO">
//                                 <block type="variables_set" inline="false">
//                                     <field name="VAR">y</field>
//                                     <value name="VALUE">
//                                         <block type="math_random_int" inline="true">
//                                             <value name="FROM">
//                                                 <block type="math_number">
//                                                     <field name="NUM">1</field>
//                                                 </block>
//                                             </value>
//                                             <value name="TO">
//                                                 <block type="lists_length" inline="false">
//                                                     <value name="VALUE">
//                                                         <block type="variables_get">
//                                                             <field name="VAR">list</field>
//                                                         </block>
//                                                     </value>
//                                                 </block>
//                                             </value>
//                                         </block>
//                                     </value>
//                                     <next>
//                                         <block type="variables_set" inline="false">
//                                             <field name="VAR">temp</field>
//                                             <value name="VALUE">
//                                                 <block type="lists_getIndex" inline="true">
//                                                     <mutation statement="false" at="true"></mutation>
//                                                     <field name="MODE">GET</field>
//                                                     <field name="WHERE">FROM_START</field>
//                                                     <value name="AT">
//                                                         <block type="variables_get">
//                                                             <field name="VAR">y</field>
//                                                         </block>
//                                                     </value>
//                                                     <value name="VALUE">
//                                                         <block type="variables_get">
//                                                             <field name="VAR">list</field>
//                                                         </block>
//                                                     </value>
//                                                 </block>
//                                             </value>
//                                             <next>
//                                                 <block type="lists_setIndex" inline="false">
//                                                     <value name="AT">
//                                                         <block type="variables_get">
//                                                             <field name="VAR">y</field>
//                                                         </block>
//                                                     </value>
//                                                     <value name="LIST">
//                                                         <block type="variables_get">
//                                                             <field name="VAR">list</field>
//                                                         </block>
//                                                     </value>
//                                                     <value name="TO">
//                                                         <block type="lists_getIndex" inline="true">
//                                                             <mutation statement="false" at="true"></mutation>
//                                                             <field name="MODE">GET</field>
//                                                             <field name="WHERE">FROM_START</field>
//                                                             <value name="AT">
//                                                                 <block type="variables_get">
//                                                                     <field name="VAR">x</field>
//                                                                 </block>
//                                                             </value>
//                                                             <value name="VALUE">
//                                                                 <block type="variables_get">
//                                                                     <field name="VAR">list</field>
//                                                                 </block>
//                                                             </value>
//                                                         </block>
//                                                     </value>
//                                                     <next>
//                                                         <block type="lists_setIndex" inline="false">
//                                                             <value name="AT">
//                                                                 <block type="variables_get">
//                                                                     <field name="VAR">x</field>
//                                                                 </block>
//                                                             </value>
//                                                             <value name="LIST">
//                                                                 <block type="variables_get">
//                                                                     <field name="VAR">list</field>
//                                                                 </block>
//                                                             </value>
//                                                             <value name="TO">
//                                                                 <block type="variables_get">
//                                                                     <field name="VAR">temp</field>
//                                                                 </block>
//                                                             </value>
//                                                         </block>
//                                                     </next>
//                                                 </block>
//                                             </next>
//                                         </block>
//                                     </next>
//                                 </block>
//                             </statement>
//                         </block>
//                     </statement>
//                 </block>
//             </category>
//             <category name="Jabberwocky">
//                 <block type="text_print">
//                     <value name="TEXT">
//                         <block type="text">
//                             <field name="TEXT">'Twas brillig, and the slithy toves</field>
//                         </block>
//                     </value>
//                     <next>
//                         <block type="text_print">
//                             <value name="TEXT">
//                                 <block type="text">
//                                     <field name="TEXT">  Did gyre and gimble in the wabe:</field>
//                                 </block>
//                             </value>
//                             <next>
//                                 <block type="text_print">
//                                     <value name="TEXT">
//                                         <block type="text">
//                                             <field name="TEXT">All mimsy were the borogroves,</field>
//                                         </block>
//                                     </value>
//                                     <next>
//                                         <block type="text_print">
//                                             <value name="TEXT">
//                                                 <block type="text">
//                                                     <field name="TEXT">  And the mome raths outgrabe.</field>
//                                                 </block>
//                                             </value>
//                                         </block>
//                                     </next>
//                                 </block>
//                             </next>
//                         </block>
//                     </next>
//                 </block>
//                 <block type="text_print">
//                     <value name="TEXT">
//                         <block type="text">
//                             <field name="TEXT">"Beware the Jabberwock, my son!</field>
//                         </block>
//                     </value>
//                     <next>
//                         <block type="text_print">
//                             <value name="TEXT">
//                                 <block type="text">
//                                     <field name="TEXT">  The jaws that bite, the claws that catch!</field>
//                                 </block>
//                             </value>
//                             <next>
//                                 <block type="text_print">
//                                     <value name="TEXT">
//                                         <block type="text">
//                                             <field name="TEXT">Beware the Jubjub bird, and shun</field>
//                                         </block>
//                                     </value>
//                                     <next>
//                                         <block type="text_print">
//                                             <value name="TEXT">
//                                                 <block type="text">
//                                                     <field name="TEXT">  The frumious Bandersnatch!"</field>
//                                                 </block>
//                                             </value>
//                                         </block>
//                                     </next>
//                                 </block>
//                             </next>
//                         </block>
//                     </next>
//                 </block>
//             </category>
//         </category>
//     );
// }