import { Component } from "react";
import { createPortal } from "react-dom";


export class Modal extends Component {


    render() {
    
        return createPortal(
            <div>
                <div>
                    <h1> Title</h1>
                </div>
            </div>
        ), document.getElementById("modal");

    }
}