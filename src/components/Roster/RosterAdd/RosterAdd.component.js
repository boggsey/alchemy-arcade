import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import RosterAddSchema from './RosterAdd.schema';
import addPlayer from './RosterAdd.actions';

const RosterAdd = (props) => {
  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        rating: '',
        handedness: '',
      }}
      validationSchema={RosterAddSchema}
      onSubmit={async (values) => {
        const token = window.localStorage.getItem('token');
        try {
          const rosterReturn = await props.addPlayer(values, token);
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
        setFieldValue,
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
          </div>
          {touched.first_name && errors.first_name && <div>{errors.first_name}</div>}

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
          </div>
          {touched.last_name && errors.last_name && <div>{errors.last_name}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="rating">Rating</label>
            <input
              className="form__field-input"
              type="number"
              name="rating"
              id="rating"
              value={values.rating}
              placeholder="Rating"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.rating && errors.rating && <div>{errors.rating}</div>}

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="handedness">Handedness</label>
            <select
              name="handedness"
              id="handedness"
              value={values.handedness}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div className="form__submit-btn-wrapper">
            <button className="form__submit-btn" id="create" type="submit" disabled={isSubmitting}>Add Player</button>
          </div>
        </form>
        )}
    />
  );
};

RosterAdd.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addPlayer,
};

export default connect(null, mapDispatchToProps)(RosterAdd);
