import React from 'react';
import { Redirect } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => (
  <div className="message">
    {'This isn\'t the component you\'re looking for.'}
    <Redirect to="/error" />
  </div>
);

export default ErrorPage;
