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
      const data = await this.props.deletePlayer(this.props.id, token);
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
  id: PropTypes.string.isRequired,
  deletePlayer: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deletePlayer,
};

export default connect(null, mapDispatchToProps)(RosterDelete);
