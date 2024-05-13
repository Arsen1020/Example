import React from "react";
import './Button.css'
class Button extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        return <button className={`button ${this.props.className}`} onClick={this.props.onclick}>{this.props.label}</button>
    }

}
export default Button