import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import RosterAddSchema from './RosterAdd.schema';
import addPlayer from './RosterAdd.actions';

const options = [
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' },
];

const RosterAdd = (props) => {
  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        rating: '',
        handedness: 'left',
      }}
      validationSchema={RosterAddSchema}
      onSubmit={async (values) => {
        const token = window.localStorage.getItem('token');
        try {
          await props.addPlayer(values, token);
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
        setFieldTouched,
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

          <div className="form__field-wrapper">
            <label className="form__field-label" htmlFor="handedness">Handedness</label>
            <Select
              value={values.topics}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.topics}
              touched={touched.topics}
              options={options}
            />
          </div>

          <div className="form__field-error-wrapper">
            {touched.first_name && errors.first_name && <span className="form__field-error">{errors.first_name}</span>}
            {touched.last_name && errors.last_name && <span className="form__field-error">{errors.last_name}</span>}
            {touched.rating && errors.rating && <span className="form__field-error">{errors.rating}</span>}
            {touched.handedness && errors.handedness && <span className="form__field-error">{errors.handedness}</span>}
          </div>

          <div className="form__submit-btn-wrapper">
            <button className="form__submit-btn" id="create" type="submit">Add Player</button>
            <Link to="/roster" className="form__submit-navigation">Back to Roster</Link>
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
