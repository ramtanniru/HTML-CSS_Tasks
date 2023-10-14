import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Textfit} from 'react-textfit';

const Output = ({value}) => {
    return(
        <Textfit className="form-control" style={{backgroundColor:"#172D67"}} mode="single" max={70}>
            {value}
        </Textfit>
    )
}

export default Output;