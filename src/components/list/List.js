import React from 'react';

import './List.css';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

export const List = ({listData, sortColumns, sortBy, onSort}) => {
  return (
    <table className="list">
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

export default List;
