import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../actions/contactActions';
import ContactsList from './ContactsList';

class ContactsPage extends React.Component {
    render() {
        const {contacts} = this.props;
        return (
            <div>
                <h1>Contacts</h1>
                <ContactsList contacts={contacts}/>
            </div>
        );
    }
}

ContactsPage.propTypes = {
    contacts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {        
        contacts: state.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ContactsPage);
