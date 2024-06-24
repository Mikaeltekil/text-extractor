import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AccountPage.css';

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: !isLogin ? Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required') : null,
  });

  const handleSubmit = (values) => {
    if (isLogin) {
      console.log('Logging in with:', values);
    } else {
      console.log('Signing up with:', values);
    }
  };

  return (
    <div className="account-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
              )}
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
