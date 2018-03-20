import React from 'react';

import './PagedList.css';
import PagedListHeader from './PagedListHeader';
import List from './List';
// import {setPage} from "../../store/actions/filters";

const addresses = {
  columns: [
    'firstName',
    'lastName',
    'country',
    'street',
    'city',
    'state',
    'zip',
    'phone'
  ],
  data: [
    ["Zachary", "Borgetti", "USA", "2234 3rd Ave Ste 3", "Seattle", "WA", "98101", "206-778-5741"],
    ["Landon", "Donovan", "USA", "18400 S Avalon Blvd", "Carson", "CA", "90746", "310-630-2200"],
    ["Samuel L.", "Jackson", "USA", "2226 2nd Ave", "Seattle", "WA", "98121", "206-441-5660"],
    ["Michael", "Jordan", "USA", "1901 West Madison Street", "Chicago", "IL", "60612", "312-455-4000"],
    ["Aaron", "Meautiful", "Mexico", "3465 Calzada de Tlalpan", "Coyoacan", "CDMX", "04650", "+52-55-5487-3100"],
    ["Michael", "Myers", "USA", "590 Galer St", "Austin", "TX", "79935", "915-857-1770"],
    ["Maite", "Perroni", "Mexico", "2101 Av. Juarez", "Mexico City", "CDMX", "06050", "+52 55 5365 1250"],
    ["Joel", "Schaper", "USA", "1823 Terry Ave, Suite 319", "Seattle", "WA", "98121", "206-258-4687"],
    ["Brian", "Stallone", "USA", "4567 Lake Washington Blvd NE, Suite 6709", "Kirkland", "OR", "98132", "425-333-4567"],
    ["Rahul", "Veloved", "England", "118 Piccadilly", "Mayfair", "London", "W1J 7NW", "+44 (0)20-7042-7118"],
  ]
};

let filters = {
  page: 1,
  pageSize: 100,
  pageSizes: [
    5,
    10,
    25,
    50,
    75,
    100
  ],
  sortBy: 'firstName',
  sorts: [
    'firstName',
    'lastName',
    'city',
    'country',
    'state'
  ]
};

function withPagination(List) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addresses: {...addresses},
        filters: {...filters}
      };
    }

    setSortBy = (value) => {
      console.log("sorting by " + value);
      this.setState((prevState) => {
        const newFilters = {
          ...prevState.filters,
          sortBy: value
        };
        return {filters: newFilters};
      });
    };

    setPageSize = (value) => {
      this.setState((prevState) => {
        const newFilters = {
          ...prevState.filters,
          pageSize: value
        };
        return {filters: newFilters};
      });
    };

    prevPage = () => {
      console.log('Go to previous page');
    };

    nextPage = () => {
      console.log('Go to next page');
    };



    render() {
      return (
        <div className="pagedlist">
          <PagedListHeader
            title="Awesome"
            sorts={this.state.filters.sorts}
            sortBy={this.state.filters.sortBy}
            pageSizes={this.state.filters.pageSizes}
            pageSize={this.state.filters.pageSize}
            page={this.state.filters.page}
            totalItems={this.state.addresses.data.length}
            setSortBy={this.setSortBy}
            setPageSize={this.setPageSize}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
          <List
            listData={this.state.addresses}
            sortColumns={this.state.filters.sorts}
            sortBy={this.state.filters.sortBy}
            onSort={this.setSortBy}
          />
        </div>
      );
    }
  }
}

export default withPagination(List);
