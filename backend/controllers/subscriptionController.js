const Subscription = require('../models/Subscription');

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createSubscription = async (req, res) => {
  const { email } = req.body;
  try {
    const subscription = new Subscription({ email });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
