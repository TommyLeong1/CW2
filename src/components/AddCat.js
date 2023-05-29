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
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/locations')
      .then(res => setLocations(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('/api/cats', values)
      .then(res => {
        setSubmitting(false);
        history.push(`/cats/${res.data._id}`);
      })
      .catch(err => {
        setSubmitting(false);
        console.log(err);
      });
  };

  return (
    <div className="AddCat">
      <h1>Add a Cat</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="breed">Breed:</label>
              <Field type="text" id="breed" name="breed" className="form-control" />
              <ErrorMessage name="bre