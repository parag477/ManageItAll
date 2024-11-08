const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createContact = async (req, res) => {
  const { fullName, email, mobileNumber, city } = req.body;
  try {
    const contact = new Contact({ fullName, email, mobileNumber, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
