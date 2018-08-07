import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import Notifications from 'react-notification-system-redux';
import { receiveLogout } from '../Account/Auth/Auth.actions';
import Nav from '../../components/Nav/Nav.component';
import Main from '../../components/Main/Main.component';
import AlchemyLogo from './alchemy.svg';
import './cabinet.scss';
import './joystick.scss';
import './stars.scss';

const style = {
  Containers: {
    DefaultStyle: {
      position: 'absolute',
      top: '10',
    },
  },
  NotificationItem: {
    DefaultStyle: {
      border: '2px solid #95d13c',
      boxShadow: '0',
      background: '0',
      borderRadius: '0',
      fontFamily: '"Press Start 2P"',
      fontSize: '10px',
      paddingRight: '18px',
      paddingBottom: '10px',
      lineHeight: '16px',
      margin: '10px 0 10px 0',
      height: 'auto',
    },
    error: {
      boxShadow: 'none',
      color: '#95d13c',
    },
  },
  Dismiss: {
    DefaultStyle: {
      backgroundColor: 'none',
      color: '#95d13c',
    },
  },
};

const App = (props) => {
  const { isAuthenticated, logout, notifications, location } = props;

  return (
    <div>
      <div className="cabinet-top">
        <div className="cabinet-top-face">
          <SVGInline svg={AlchemyLogo} />
        </div>
        <div className="cabinet-top-support" />
      </div>
      <div className="cabinet-viewport">
        <div className={`cabinet-screen ${location.pathname === '/error' ? 'error-page' : null}`}>
          <Notifications notifications={notifications} style={style} />
          <Nav isAuthenticated={isAuthenticated} receiveLogout={logout} />
          <Main isAuthenticated={isAuthenticated} />
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
      </div>
      <div className="cabinet-bottom">
        <div className="cabinet-panel">
          <div className="joystick" />
          <div className="joystick-shadow" />
        </div>
        <div className="cabinet-bottom-face" />
      </div>
    </div>
  );
};

App.defaultProps = {
  notifications: [],
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { AuthReducer, NotificationReducer } = state;
  const notifications = NotificationReducer;
  const { isAuthenticated } = AuthReducer;

  return {
    isAuthenticated,
    notifications,
  };
}

const mapDispatchToProps = {
  logout: receiveLogout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
