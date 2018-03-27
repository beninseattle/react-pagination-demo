import React from 'react';
import PropTypes from 'prop-types';

import ListRow from './ListRow';

export const ListContent = ({data}) => {
  return (
    <tbody className="listcontent">
    {data.length ?
      data.map((row, i) => {
        return <ListRow key={i} dataRow={row}/>
      }) :
      <div>No data to show!</div>
    }
    </tbody>
  );
};

ListContent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.any
    )
  ).isRequired
};

export default ListContent;
