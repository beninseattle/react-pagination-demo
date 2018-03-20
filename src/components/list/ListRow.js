import React from 'react';

import './ListRow.css';

export const ListRow = ({data}) => {
  return (
    <tr className="listrow">
      {data.length ?
        data.map((cell, i) => {
          return <td key={i} className="list_cel">{cell}</td>
        }) :
        <div>No data to show!</div>
      }
    </tr>
  );
};

export default ListRow;
