import React from "react";
const ContactsList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(
    contact => contact.name.indexOf(filterText) !== -1
  );
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.email}>
          <img
            src={contact.thumbnail}
            role="presentation"
            alt="contact picture"
          />
          <div className="contactData">
            <strong>{contact.name}</strong>
            <br />
            <small>{contact.email}</small>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
