import React from 'react';

import './ListHeader.css';

export const ListHeader = ({columns, sortColumns, sortBy, onSort}) => {
  const onClickSort = (column) => {
    return () => onSort(column);
  };

  return (
    <thead>
    <tr className="listheader">
      {columns.length ?
        columns.map((header, i) => {
          // split up camel case words
          const words = header.split(/(?=[A-Z])/);
          // set up sortable headers
          let cellClasses = "listheader__cell";
          let onClickFunc;
          if( sortColumns.indexOf(header) !== -1 ){
            cellClasses += " sortable";
            onClickFunc = onClickSort(header);
          }

          return <th key={i} className={cellClasses} onClick={onClickFunc}>
            {words.join(" ")}
            </th>;
        }) :
        <div>No columns for headers</div>
      }
    </tr>
    </thead>
  );
};

export default ListHeader;
