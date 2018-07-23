import React from 'react';
import { Formik } from 'formik';
import LoginSchema from './Login.schema';

const Login = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
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
  </div>
);

export default Login;
