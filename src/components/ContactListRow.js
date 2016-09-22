import React, { PropTypes } from 'react';

const ContactListRow = ({contact}) => {
    return (
        <tr>
            <td>{contact.nedu}</td>
        </tr>
    );
};

ContactListRow.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactListRow;
