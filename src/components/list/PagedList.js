import React from 'react';
import {connect} from 'react-redux';

import './PagedList.css';
import PagedListHeader from './PagedListHeader';
import List from './List';

import getPageOfAddresses from '../../store/selectors/pagedAddresses';
import totalAddresses from '../../store/selectors/totalAddresses';
import getFilters from '../../store/selectors/getFilters';
import canPrevPage from "../../store/selectors/canPrevPage";
import canNextPage from "../../store/selectors/canNextPage";
import {setSortBy, setPageSize, firstPage, prevPage, nextPage, lastPage} from '../../store/actions/addresses';

function withPagination(List) {
  return class extends React.Component {

    render() {
      return (
        <div className="pagedlist">
          <PagedListHeader
            title="Awesome"
            sorts={this.props.filters.sorts}
            sortBy={this.props.filters.sortBy}
            pageSizes={this.props.filters.pageSizes}
            pageSize={this.props.filters.pageSize}
            row={this.props.filters.row}
            totalItems={this.props.totalAddresses}
            setSortBy={this.props.setSortBy}
            setPageSize={this.props.setPageSize}
            firstPage={this.props.firstPage}
            prevPage={this.props.prevPage}
            nextPage={this.props.nextPage}
            lastPage={this.props.lastPage}
            canPrevPage={this.props.canPrevPage}
            canNextPage={this.props.canNextPage}
          />
          <List
            listData={this.props.addresses}
            sortColumns={this.props.filters.sorts}
            sortBy={this.props.filters.sortBy}
            onSort={this.props.setSortBy}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    addresses: getPageOfAddresses(state),
    totalAddresses: totalAddresses(state),
    filters: getFilters(state),
    canPrevPage: canPrevPage(state),
    canNextPage: canNextPage(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSortBy: (column) => dispatch(setSortBy(column)),
  setPageSize: (size) => dispatch(setPageSize(size)),
  firstPage: () => dispatch(firstPage()),
  nextPage: () => dispatch(nextPage()),
  prevPage: () => dispatch(prevPage()),
  lastPage: () => dispatch(lastPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(List));
