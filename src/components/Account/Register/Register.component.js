import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import RegisterSchema from './Register.schema';
import register from './Register.actions';

const RegisterForm = props => (
  <Formik
    initialValues={{
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    }}
    validationSchema={RegisterSchema}
    onSubmit={async (values) => {
      try {
        await props.register(values);
      } catch (error) {
        console.log(error);
      }
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
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <div className="form__field-wrapper">
          <label className="form__field-label" htmlFor="firstName">First Name</label>
          <input
            className="form__field-input"
            type="text"
            name="first_name"
            id="firstName"
            value={values.first_name}
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.first_name && errors.first_name && <div className="form__field-error">{errors.first_name}</div>}
        </div>      

        <div className="form__field-wrapper">
          <label className="form__field-label" htmlFor="lastName">Last Name</label>
          <input
            className="form__field-input"
            type="text"
            name="last_name"
            id="lastName"
            value={values.last_name}
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.last_name && errors.last_name && <div className="form__field-error">{errors.last_name}</div>}
        </div>

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
          {touched.email && errors.email && <div className="form__field-error">{errors.email}</div>}
        </div>

        <div className="form__field-wrapper">
          <label className="form__field-label" htmlFor="password">Password</label>
          <input
            className="form__field-input"
            type="password"
            name="password"
            id="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <div className="form__field-error">{errors.password}</div>}
        </div>

        <div className="form__field-wrapper">
          <label className="form__field-label" htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="form__field-input"
            type="password"
            name="confirm_password"
            id="confirmPassword"
            value={values.confirm_password}
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.confirm_password && errors.confirm_password && <div className="form__field-error">{errors.confirm_password}</div>}
        </div>

        <div className="form__submit-btn-wrapper">
          <button className="form__submit-btn" id="register" type="submit">Register</button>
          <Link to="/login" className="form__submit-navigation">Go to Login</Link>
        </div>
      </form>
      )}
  />
);

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
