import React, { useState, useEffect } from 'react';
import { fetchClients, createClient } from '../services/clientService';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', designation: '', image: '' });

  useEffect(() => {
    const loadClients = async () => {
      const data = await fetchClients();
      setClients(data);
    };
    loadClients();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = await createClient(formData);
    setClients([...clients, newClient]);
    setFormData({ name: '', description: '', designation: '', image: '' });
  };

  return (
    <div>
      <h2>Client Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Client Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Client Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="designation" placeholder="Client Designation" value={formData.designation} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Client Image URL" value={formData.image} onChange={handleChange} required />
        <button type="submit">Add Client</button>
      </form>

      <h3>Clients List</h3>
      {clients.map((client) => (
        <div key={client._id}>
          <img src={client.image} alt={client.name} />
          <h4>{client.name}</h4>
          <p>{client.description}</p>
          <p>{client.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientManagement;
