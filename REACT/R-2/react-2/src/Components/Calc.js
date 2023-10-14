import React from "react";
import Buttons from './Buttons';
import Wrap from './wrap';
import Output from "./output";
import Btn from './btn';

const Calc = () => {
    const btnValues = [
        ["C","+/-","%","/"],
        ['7','8','9','*'],
        ['4','5','6','-'],
        ['1','2','3','+'],
        ['0','.','=']
    ];
    return (
        <Wrap>
            <Output value='0'/>
            <Buttons>
                <Btn className="" num="0" onClick={()=>{console.log("Button clicked !");}}/>
            </Buttons>
        </Wrap>
    )
}
export default Calc;