import React, {PropTypes} from 'react';
import ContactListRow from './ContactListRow';
import { Button } from 'office-ui-fabric-react/lib/Button';
//import { Table } from 'office-ui-fabric-react/lib/Table';

const ContactsList = ({contacts}) => {
    return (
        <div>
            <table className="ms-Table">
                <tbody>
                    {contacts.map(contact =>
                        <ContactListRow key={contact.id} contact={contact} />
                    )}
                </tbody>
            </table>
            <Button>Home</Button>
        </div>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default ContactsList;
