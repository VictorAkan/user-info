import React from "react"
import Sidebar from "./Sidebar"

export default class Button extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(                             
            <div>
                <Sidebar />
                <button value="ab" className="btn btn-dark text-white d-md-none" onClick={this.props.showNav}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        )
    }
}