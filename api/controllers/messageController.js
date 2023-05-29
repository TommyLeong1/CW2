const Message = require('../models/Message');
const { validationResult } = require('express-validator');

exports.createMessage = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { catId, name, email, message } = req.body;

  try {
    // Create the message
    const newMessage = new Message({
      cat: catId,
      name,
      email,
      message
    });

    await newMessage.save();

    res.json({ msg: 'Message sent.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error.' });
  }
};