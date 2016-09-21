import React, { PropTypes } from 'react';

const HelloWorld = (props) => {
    const sayHi = () => {
        alert(`Hi ${props.name}`);
    };

    return (
        <div>
            <a href="#"
                onClick={sayHi}>Say Hi</a>            
        </div>
    );
};

HelloWorld.propTypes = {
    name: PropTypes.string
};

export default HelloWorld;
