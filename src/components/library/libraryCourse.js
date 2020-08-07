import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                <FontAwesomeIcon icon={ faCheck } className="library-course__icon" />
                {/* arrow component */}
                {/* action btn component */}

                <div className="library-course__description">
                    <label>Course Description</label>
                    <p> Dummy text here </p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;