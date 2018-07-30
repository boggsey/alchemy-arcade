import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import getRosterList from './RosterList.actions';

class RosterList extends Component {

  componentDidMount() {
    this.getTableData();
  }

  async getTableData() {
    const token = window.localStorage.getItem('token');
    try {
      const data = await this.props.getRosterList(token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.props.players}
          columns={[
            {
              columns: [
                {
                  Header: 'First Name',
                  accessor: 'first_name',
                },
                {
                  Header: 'Last Name',
                  id: 'last_name',
                  accessor: 'last_name',
                },
                {
                  Header: 'Rating',
                  id: 'rating',
                  accessor: 'rating',
                },
                {
                  Header: 'Handedness',
                  id: 'handedness',
                  accessor: 'handedness',
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

RosterList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRosterList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  players: state.RosterListReducer.players,
});

const mapDispatchToProps = {
  getRosterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RosterList);
