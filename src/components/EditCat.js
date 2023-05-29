import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './EditCat.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  breed: Yup.string().required('Breed is required'),
  gender: Yup.string().required('Gender is required'),
  age: Yup.number().required('Age is required').positive('Age must be a positive number'),
  color: Yup.string().required('Color is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required')
});

function EditCat() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [locations, setLocations] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/cats/${id}`)
      .then(res => setCat(res.data))
      .catch(err => console.log(err));
    axios.get('/api/locations')
      .then(res => setLocations(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (values, { setSubmitting }) => {
    axios.put(`/api/cats/${id}`, values)
      .then(res => {
        setSubmitting(false);
        history.push(`/cats/${res.data._id}`);
      })
      .catch(err => {
        setSubmitting(false);
        console.log(err);
      });
  };

  if (!cat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="EditCat">
      <h1>Edit {cat.name}</h1>
      <Formik initialValues={cat} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
              <ErrorMessage name="breed" component="div" className="invalid-feedback" />
            </div>