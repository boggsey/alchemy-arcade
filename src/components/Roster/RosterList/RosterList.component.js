import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import getRosterList from './RosterList.actions';
import RosterDelete from '../RosterDelete/RosterDelete.component';
import './RosterList.scss';

export class RosterList extends Component {

  componentDidMount() {
    this.getTableData();
  }

  async getTableData() {
    const token = window.localStorage.getItem('token');
    try {
      await this.props.getRosterList(token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ReactTable
        data={this.props.players}
        noDataText="Take me to your leader"
        minWidth="100%"
        defaultSorted={[
          {
            id: 'rating',
            desc: false,
          },
        ]}
        resizable={false}
        sortable={false}
        minRows="0"
        showPageSizeOptions={false}
        columns={[
          {
            columns: [
              {
                Header: 'Rating',
                id: 'rating',
                accessor: 'rating',
                className: '-rating',
              },
              {
                Header: 'First',
                accessor: 'first_name',
              },
              {
                Header: 'Last',
                id: 'last_name',
                accessor: 'last_name',
              },
              {
                Header: 'Hand',
                id: 'handedness',
                accessor: 'handedness',
              },
              {
                Header: 'Actions',
                id: 'actions',
                accessor: 'id',
                Cell: row => (
                  <RosterDelete playerId={row.value} />
                ),
              },
            ],
          },
        ]}
        defaultPageSize={5}
        className="-striped -highlight"
      />
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
