import React from 'react';
import PropTypes from 'prop-types';

export const ListRow = ({dataRow}) => {
  return (
    <tr className="listrow">
      {dataRow.length ?
        dataRow.map((cell, i) => {
          return <td key={i} className="list_cel">{cell}</td>
        }) :
        <td>No data to show!</td>
      }
    </tr>
  );
};

ListRow.propTypes = {
  dataRow: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default ListRow;
