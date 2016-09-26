import React, { PropTypes } from 'react';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    sayHi() {
        alert(`Hi ${this.props.name}`);
    }

    render(){
        return(
            <div>
                <a href="#"
                    onClick={this.sayHi.bind(this)}>Say hi!
                </a>
            </div>
        );
    }
}

AboutPage.propTypes = {
    name: PropTypes.string
};

export default AboutPage;
