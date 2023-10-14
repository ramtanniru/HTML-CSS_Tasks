import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Buttons = ({children}) => {
    return(
        <div className="" style={{backgroundColor:"#050C26"}}>
            {children}
        </div>
    );
}

export default Buttons;