import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddCat.css';

const initialValues = {
  name: '',
  breed: '',
  gender: '',
  age: '',
  color: '',
  description: '',
  location: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  breed: Yup.string().required('Breed is required'),
  gender: Yup.string().required('Gender is required'),
  age: Yup.number().required('Age is required').positive('Age must be a positive number'),
  color: Yup.string().required('Color is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required')
});

function AddCat() {
  const [locations, setLocations] = useState([]);
  const history = useHistory