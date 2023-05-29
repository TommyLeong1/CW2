const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const catRoutes = require('./routes/catRoutes');
const messageRoutes = require('./routes/messageRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/cats', catRoutes);
app.use('/api/messages', messageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;