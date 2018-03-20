const filtersReducerDefaultState = {
  pageSize: 1,
  page: 1,
  sortByColumn: 1
};

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_PAGE_SIZE':
      return {
        ...state,
        pageSize: action.pageSize
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page
      };
    case 'SORT_BY_COLUMN':
      return {
        ...state,
        sortByColumn: action.column
      };

    default:
      return state;
  }
};