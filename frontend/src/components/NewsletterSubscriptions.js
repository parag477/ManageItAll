import React, { useEffect, useState } from 'react';
import { getSubscriptions } from '../services/subscriptionService';

const NewsletterSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      const data = await getSubscriptions();
      setSubscriptions(data);
    };
    loadSubscriptions();
  }, []);

  return (
    <div>
      <h2>Newsletter Subscriptions</h2>
      {subscriptions.map((subscription) => (
        <div key={subscription._id}>
          <p>{subscription.email}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsletterSubscriptions;
