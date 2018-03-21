import React from 'react';

import './PagedListHeader.css';

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
      <div className="pagedlistheader__left">
        <div className="title">List of {title}</div>
        <div className="sortby">
          Sort by:
          <select id="sortby" name="sort" value={sortBy} onChange={sortOnChange}>
            <option value=""></option>
            {
              sorts.map((sort, i) => {
                // TODO: Firefox doesn't appear to text-transform: cap in the select popup
                let sortWords = sort.split(/(?=[A-Z])/);
                return <option key={i} value={sort}>{sortWords.join(" ")}</option>;
              })
            }
          </select>
          <span className="arrow" />
        </div>
      </div>
      <div className="pagedlistheader__right">
        <div className="pagesize">
          items per page:
          <select id="pagesize" name="pagesize" value={pageSize} onChange={pageSizeOnChange}>
            {
              pageSizes.map((sizes, i) => <option key={i}>{sizes}</option>)
            }
          </select>
          <span className="arrow" />
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

export default PagedListHeader;