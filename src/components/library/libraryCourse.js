import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Arrow from "../arrow";
import Action from "../action";

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    <FontAwesomeIcon icon={ faCheck } className="library-course__icon" />
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />

                <div className="library-course__description">
                    <label>Course Description</label>
                    <p> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                    </p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;