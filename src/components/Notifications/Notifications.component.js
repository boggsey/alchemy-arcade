import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notifications, { success, error, warning, info, removeAll } from 'react-notification-system-redux';

const Notification = ({ notifications }) => (
  <Notifications notifications={notifications} />
);

Notification.contextTypes = {
  store: PropTypes.object,
};

export default connect(state => ({ notifications: state.notifications }))(Notification);
