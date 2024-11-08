const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const clientRoutes = require('./routes/clientRoutes');
const contactRoutes = require('./routes/contactRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

dotenv.config();
connectDB();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
