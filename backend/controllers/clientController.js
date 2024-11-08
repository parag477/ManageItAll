const Client = require('../models/Client');

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createClient = async (req, res) => {
  const { name, description, designation, image } = req.body;
  try {
    const client = new Client({ name, description, designation, image });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
