const Cat = require('../models/Cat');
const { validationResult } = require('express-validator');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3 } = require('../config/aws');

exports.getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find().populate('location');

    res.json(cats);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error.' });
  }
};

exports.getCatById = async (req, res) => {
  try {
    const cat = await Cat.findById(req.params.id).populate('location');

    if (!cat) {
      return res.status(404).json({ msg: 'Cat not found.' });
    }

    res.json(cat);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Cat not found.' });
    }

    res.status(500).json({ msg: 'Server error.' });
  }
};

exports.createCat = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
