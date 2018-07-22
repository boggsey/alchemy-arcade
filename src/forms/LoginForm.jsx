import React from 'react';
import { Formik } from 'formik';

const LoginForm = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors },
      ) => {
        // Login action
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
        <form className="login-form" onSubmit={handleSubmit}>
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

          <div className="form__submit-btn-wrapper">
            <button className="form__submit-btn" type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </form>
        )}
    />
  </div >
);

export default LoginForm;
