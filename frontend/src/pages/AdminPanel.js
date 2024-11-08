import React from 'react';
import ProjectManagement from '../components/ProjectManagement';
import ClientManagement from '../components/ClientManagement';
import ContactSubmissions from '../components/ContactSubmissions';
import NewsletterSubscriptions from '../components/NewsletterSubscriptions';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ProjectManagement />
      <ClientManagement />
      <ContactSubmissions />
      <NewsletterSubscriptions />
    </div>
  );
};

export default AdminPanel;
