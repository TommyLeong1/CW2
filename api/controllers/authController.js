const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, signupCode } = req.body;

  try {
    // Check if the signup code is valid
    if (signupCode !== process.env.SIGNUP_CODE) {
      return res.status(400).json({ msg: 'Invalid signup code.' });
    }

    // Check if the email is already in use
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'Email already in use.' });
    }

    // Create the user
    user = new User({
      name,
      email,
      password
    });

    // Hash the password
    user.password = await bcrypt.hash(password, 10);

    // Save the user
    await user.save();

    // Create the JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error.' });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials.' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials.' });
    }

    // Create the JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error.' });
  }
};