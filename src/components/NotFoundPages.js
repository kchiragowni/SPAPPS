import React from 'react';
import { Link } from 'react-router'; 

const NotFoundPages = () =>{
    return(
        <div>
            <h4>
                404 Page Not Found
            </h4>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default NotFoundPages;
