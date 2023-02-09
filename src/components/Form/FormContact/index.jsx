import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../../Button';
import PropTypes from 'prop-types';

export const FormContact = (props) => {
  const { setRedirect } = props.redirect;

  const contact = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(60, 'Must be 60 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.status === 200) {
            setRedirect(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <form onSubmit={contact.handleSubmit} className="form">
      <div className="inputContainer">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Insert your name here…"
          {...contact.getFieldProps('name')}
          className={contact.errors.name ? 'formInput--error' : ''}
        />
        {contact.touched.name && contact.errors.name ? (
          <div className="formErrorMessage">{contact.errors.name}</div>
        ) : null}
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="email@example.com"
          {...contact.getFieldProps('email')}
          className={contact.errors.email ? 'formInput--error' : ''}
        />
        {contact.touched.email && contact.errors.email ? (
          <div className="formErrorMessage">{contact.errors.email}</div>
        ) : null}
      </div>
      <div className="inputContainer">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="text"
          placeholder="How can I help?"
          {...contact.getFieldProps('message')}
          className={contact.errors.message ? 'formInput--error' : ''}
        />
        {contact.touched.message && contact.errors.message ? (
          <div className="formErrorMessage">{contact.errors.message}</div>
        ) : null}
      </div>

      <Button text="Send message" margin="mr-auto" submit />
    </form>
  );
};

FormContact.propTypes = {
  redirect: PropTypes.object,
};
