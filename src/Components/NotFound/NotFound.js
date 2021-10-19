import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/error-404-concept-landing-page_52683-13617.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;