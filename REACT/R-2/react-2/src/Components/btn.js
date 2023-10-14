import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Btn = (props) => {
    return<button className="btn form-control text-white" type="button" onClick={props.onClick}>
        {props.num}
    </button>;
}

export default Btn;