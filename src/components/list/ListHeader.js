import React from 'react';
import PropTypes from 'prop-types';

import '../../baUtils';

export const ListHeader = ({columns, sortColumns, sortBy, onSort}) => {
  const onClickSort = (column) => {
    return () => onSort(column);
  };

  return (
    <thead>
    <tr className="listheader">
      {columns.length ?
        columns.map((header, i) => {
          // set up sortable headers
          let cellClasses = "";
          let onClickFunc;
          let sortedClass = "downtriangle";
          if( sortColumns.indexOf(header) !== -1 ){
            cellClasses += " sortable";
            onClickFunc = onClickSort(header);
          }
          if( header === sortBy ){
            sortedClass += " sorted";
          }

          return <th key={i} className={cellClasses} onClick={onClickFunc}>
            {header.camelToTitleSpaced()} <span className={sortedClass} />
            </th>;
        }) :
        <th>No columns for headers</th>
      }
    </tr>
    </thead>
  );
};

ListHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.string,
  onSort: PropTypes.func.isRequired
};

ListHeader.defaultProps = {
  sortBy: ""
};

export default ListHeader;
