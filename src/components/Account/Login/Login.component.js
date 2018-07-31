import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import LoginSchema from './Login.schema';
import login from './Login.actions';

const LoginForm = props => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        try {
          const loginReturn = await props.login(values);
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
        <form className="login-form" onSubmit={handleSubmit} noValidate>
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
            <button className="form__submit-btn" id="login" type="submit" disabled={isSubmitting}>Login</button>
          </div>
        </form>
        )}
    />
  </div>
);

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
