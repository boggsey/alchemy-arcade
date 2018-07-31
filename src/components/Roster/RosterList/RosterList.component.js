import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import getRosterList from './RosterList.actions';
import RosterDelete from '../RosterDelete/RosterDelete.component';

class RosterList extends Component {

  componentDidMount() {
    this.getTableData();
  }

  async getTableData() {
    const token = window.localStorage.getItem('token');
    try {
      const data = await this.props.getRosterList(token);
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
                {
                  Header: 'Actions',
                  id: 'actions',
                  accessor: 'id',
                  Cell: row => (
                    <RosterDelete id={row.value} />
                  ),
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
