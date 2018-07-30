import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import RosterAddSchema from './RosterAdd.schema';
import addPlayer from './RosterAdd.actions';

const RosterAdd = (props) => {
  return (
    <div>
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
              <label className="form__field-label" htmlFor="first_name">First Name</label>
              <input
                className="form__field-input"
                type="text"
                name="first_name"
                id="first_name"
                value={values.first_name}
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.first_name && errors.first_name && <div>{errors.first_name}</div>}

            <div className="form__field-wrapper">
              <label className="form__field-label" htmlFor="last_name">Last Name</label>
              <input
                className="form__field-input"
                type="text"
                id="last_name"
                value={values.last_name}
                placeholder="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.last_name && errors.last_name && <div>{errors.last_name}</div>}

            <div className="form__field-wrapper">
              <label className="form__field-label" htmlFor="last_name">Rating</label>
              <input
                className="form__field-input"
                type="number"
                id="rating"
                value={values.rating}
                placeholder="Rating"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.rating && errors.rating && <div>{errors.rating}</div>}

            <div className="form__field-wrapper">
              <label className="form__field-label" htmlFor="left">Left</label>
              <input
                type="radio"
                id="left"
                value={values.handedness}
                name="handedness"
                checked={values.handedness === 'left'}
                onBlur={handleBlur}
                onChange={() => {
                  setFieldValue('handedness', 'left');
                }}
              />
            </div>

            <div className="form__field-wrapper">
              <label className="form__field-label" htmlFor="left">Right</label>
              <input
                type="radio"
                id="right"
                value={values.handedness}
                name="handedness"
                checked={values.handedness === 'right'}
                onBlur={handleBlur}
                onChange={() => {
                  setFieldValue('handedness', 'right');
                }}
              />
            </div>
            {touched.handedness && errors.handedness && <div>{errors.handedness}</div>}

            <div className="form__submit-btn-wrapper">
              <button className="form__submit-btn" type="submit" disabled={isSubmitting}>Submit</button>
            </div>
          </form>
          )}
      />
    </div >
  );
};

RosterAdd.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addPlayer,
};

export default connect(null, mapDispatchToProps)(RosterAdd);
