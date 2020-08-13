import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";



class Action extends Component {

    handleAction = function() {
        this.props.onClick()

    }.bind(this);

    render() {
        return (
            <a
                id='action'
                onClick={() => this.handleAction() } 
                className={ `${this.props.className} action` }>
            </a>

            // <button onClick={() => this.props.onClick() } className={ `${this.props.className} action` }>
            //     <FontAwesomeIcon icon={ faPlusCircle } />
            //     {/* fas faTimesCircle */}
            // </button>
        );
    }
}

export default Action;