export default (state) => {
  return state.filters.row + Number.parseInt(state.filters.pageSize, 10) <= state.data.length;
};