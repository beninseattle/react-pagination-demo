import React from 'react';
import PropTypes from 'prop-types';

import '../../baUtils';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

export const List = ({listData, sortColumns, sortBy, onSort}) => {
  // TODO: This isn't great. Is there a way to better keep this necessary media query in sync with the CSS?
  let smallScreenLabelData = "@media\n" +
    "only screen and (max-width: 900px),\n" +
    "(min-device-width: 768px) and (max-device-width: 1024px) {\n";
  for( let i = 1; i <= listData.columns.length; i++ ){
    smallScreenLabelData += `.list td:nth-of-type(${i}):before {content: "${listData.columns[i-1].camelToTitleSpaced()}"}\n`;
  }
  smallScreenLabelData += "}";

  return (
    <table className="list">
      <style scoped="scoped">{smallScreenLabelData}</style>
      <ListHeader
        columns={listData.columns}
        sortColumns={sortColumns}
        sortBy={sortBy}
        onSort={onSort}
      />
      <ListContent data={listData.data}/>
    </table>
  );
};

List.propTypes = {
  listData: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ),
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.any.isRequired
      )
    )
  }).isRequired,
  sortColumns: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  sortBy: PropTypes.string,
  onSort: PropTypes.func.isRequired
};

List.defaultProps = {
  sortBy: ''
};

export default List;
