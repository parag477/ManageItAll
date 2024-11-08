import React, { useEffect, useState } from 'react';
import { fetchContacts } from '../services/contactService';

const ContactSubmissions = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadContacts = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    loadContacts();
  }, []);

  return (
    <div>
      <h2>Contact Submissions</h2>
      {contacts.map((contact) => (
        <div key={contact._id}>
          <p><strong>Name:</strong> {contact.fullName}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Mobile Number:</strong> {contact.mobileNumber}</p>
          <p><strong>City:</strong> {contact.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContactSubmissions;
