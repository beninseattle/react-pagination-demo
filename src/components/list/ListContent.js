import React from 'react';
import ListRow from './ListRow';

export const ListContent = ({data}) => {
  return (
    <tbody className="listcontent">
      {data.length ?
        data.map((row, i) => {
          return <ListRow key={i} data={row} />
        }) :
        <div>No data to show!</div>
      }
    </tbody>
  );
};

export default ListContent;
