import React from 'react';
import PropTypes from 'prop-types';

import '../../baUtils';

const PagedListHeader = ({
                           title, sorts, sortBy, pageSizes, pageSize, row, totalItems,
                           setSortBy, setPageSize, firstPage, prevPage, nextPage, lastPage,
                           canPrevPage, canNextPage
                         }) => {
  const pageStart = row;
  const intPageSize = Number.parseInt(pageSize, 10);
  const pageEnd = pageStart + intPageSize - 1 > totalItems ? totalItems : pageStart + intPageSize - 1;
  const pagePrevClass = canPrevPage ? 'pagingbutton' : 'pagingbutton pagingdisabled';
  const pageNextClass = canNextPage ? 'pagingbutton' : 'pagingbutton pagingdisabled';

  const sortOnChange = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  const pageSizeOnChange = (e) => {
    e.preventDefault();
    setPageSize(e.target.value);
  };

  return (
    <div className="pagedlistheader">
      <div>
        <div className="title">List of {title}</div>
        <div className="sortby">
          Sort by:
          <select title="Select a field to sort" id="sortby" name="sort" value={sortBy} onChange={sortOnChange}>
            <option value="" />
            {
              sorts.map((sort, i) => {
                return <option key={i} value={sort}>{sort.camelToTitleSpaced()}</option>;
              })
            }
          </select>
          <span className="downtriangle" />
        </div>
      </div>
      <div className="pagedlistheader__right">
        <div className="pagesize">
          items per page:
          <select title="Select the number of rows per page" id="pagesize" name="pagesize" value={pageSize} onChange={pageSizeOnChange}>
            {
              pageSizes.map((sizes, i) => <option key={i}>{sizes}</option>)
            }
          </select>
          <span className="downtriangle" />
        </div>
        <div className="paging">
          {pageStart} - {pageEnd} <span className="lightfont">of</span> {totalItems}
          <span title="Go to first page" className={pagePrevClass} onClick={firstPage}><span className="dive">&#124;</span>&lt;</span>
          <span title="Previous page" className={pagePrevClass} onClick={prevPage}>&lt;</span>
          <span title="Next page" className={pageNextClass} onClick={nextPage}>&gt;</span>
          <span title="Go to last page" className={pageNextClass} onClick={lastPage}>&gt;<span className="dive">&#124;</span></span>
        </div>
      </div>
    </div>
  );
};

PagedListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  sorts: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortBy: PropTypes.string,
  pageSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  pageSize: PropTypes.string,
  row: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  firstPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  lastPage: PropTypes.func.isRequired,
  canPrevPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired
};

PagedListHeader.defaultProps = {
  pageSize: '10'
};


export default PagedListHeader;