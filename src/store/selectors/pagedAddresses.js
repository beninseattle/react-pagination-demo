export default (state) => {

  // Select visible page of addresses, row is 1-indexed
  const pageStart = state.filters.row;
  const pageSize = Number.parseInt(state.filters.pageSize, 10);
  const pageEnd = pageStart + pageSize - 1 > state.data.length
    ? state.data.length
    : pageStart + pageSize - 1;

  let visibleData = [];
  for( let i = pageStart - 1; i < pageEnd; i++){
    visibleData.push([...state.data[i]]);
  }

  return {
    columns: state.columns,
    data: visibleData
  };
};