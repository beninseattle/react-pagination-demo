import React from 'react';

import './PagedListHeader.css';

const PagedListHeader = ({
                           title, sorts, sortBy, pageSizes, pageSize, page, totalItems,
                           setSortBy, setPageSize, prevPage, nextPage
                         }) => {
  const pageStart = (page - 1) * pageSize + 1;
  const pageEnd = pageStart + pageSize > totalItems ? totalItems : pageStart + pageSize;

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
            {
              sorts.map((sort, i) => {
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
          <span className="pagingbutton" onClick={prevPage}>&lt;</span>
          <span className="pagingbutton" onClick={nextPage}>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default PagedListHeader;