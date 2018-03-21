export default (state) => {
  // Due to page size changes, we could within the current pageSize's first page but not on
  // the very first row of data, so allow a page back to the very beginning
  return state.filters.row > 1;
};