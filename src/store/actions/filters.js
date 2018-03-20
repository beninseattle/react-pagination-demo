export const setPageSize = (pageSize = 25) => ({
  type: 'SET_PAGE_SIZE',
  pageSize
});

export const setPage = (page = 1) => ({
  type: 'SET_PAGE',
  page
});

export const sortByColumn = (column = 1) => ({
  type: 'SORT_BY_COLUMN',
  column
});
