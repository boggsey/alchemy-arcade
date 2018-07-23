import React from 'react';
import { Formik } from 'formik';

import RegisterSchema from './Register.schema';

const RegisterForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(
        values,
        { setSubmitting, setErrors },
      ) => {
        // Login action
        console.log(values);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="firstName">First Name</label>
            <input
              className="form__field-input"
              type="text"
              name="firstName"
              id="firstName"
              value={values.firstName}
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="lastName">Last Name</label>
            <input
              className="form__field-input"
              type="text"
              id="lastName"
              value={values.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="email">Email</label>
            <input
              className="form__field-input"
              type="email"
              name="email"
              id="email"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
          {touched.email && errors.email && <div>{errors.email}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="password">Password</label>
            <input
              className="form__field-input"
              id="password"
              type="password"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && <div>{errors.password}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form__field-input"
              id="confirmPassword"
              type="password"
              value={values.confirmPassword}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form__submit-btn-wrapper">
            <button className="form__submit-btn" type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </form>
        )}
    />
  </div >
);

export default RegisterForm;

