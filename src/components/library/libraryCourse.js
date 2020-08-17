import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Arrow from "../arrow";
import Action from "../action";

import AnimateHeight from 'react-animate-height';

class LibraryCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: true,
            height: 0
        };
    }
    handleCallback = function(status) {
        let height = this.state.height == 0 ? 80 : 0;
        if(!status) {
            document.getElementById(this.id).classList.add("library-course-selected");
        } else {
            document.getElementById(this.id).classList.remove("library-course-selected");
        }
        this.setState({ 
            status,
            height
        });
    }.bind(this);

    render() {
        this.id = `library-course-${this.props.id}`
        return (
            <div id={ this.id } className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">{ this.props.title }</label>
                    <FontAwesomeIcon icon={ faCheck } className="library-course__icon" />
                </div>
                <div className="library-course__line" />
                <Arrow 
                    callback={ status => this.handleCallback(status) }
                    id={ this.props.id }
                    className="library-course__arrow"
                />
                <Action 
                    id = { this.props.id }
                    onClick={() => this.props.toggleEnrolled(this.props.id) } 
                    className="library-course__action" 
                />
                
                <AnimateHeight 
                    duration={ 300 }
                    height={ this.state.height }
                >
                    <div className="library-course__description">
                        <label>Course Description</label>
                        <p>{ this.props.description }</p>
                    </div>
                </AnimateHeight>
            </div>
        );
    }
}

export default connect(null, actions)(LibraryCourse);