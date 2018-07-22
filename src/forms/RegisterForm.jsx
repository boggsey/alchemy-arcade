import React from 'react';
import { Formik } from 'formik';

const RegisterForm = () => (
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
            <label className="form__field-label" htmlFor="first_name">First Name</label>
            <input
              className="form__field-input"
              type="text"
              name="first_name"
              id="first_name"
              value={values.firstName}
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="last_name">Last Name</label>
            <input
              className="form__field-input"
              type="text"
              id="last_name"
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
            <label className="form__field-label" htmlFor="confirm_password">Confirm Password</label>
            <input
              className="form__field-input"
              id="confirm_password"
              type="password"
              value=""
              placeholder="Password"
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

