import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import deletePlayer from './RosterDelete.actions';

class RosterDelete extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const token = window.localStorage.getItem('token');
    try {
      console.log('props id', this.props.playerId);
      await this.props.deletePlayer(this.props.playerId, token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="delete" onClick={this.handleClick}>
        Delete
      </div>
    );
  }
}

RosterDelete.propTypes = {
  playerId: PropTypes.string.isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deletePlayer,
};

export default connect(null, mapDispatchToProps)(RosterDelete);
