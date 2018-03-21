const addressesReducerDefaultState = {
  filters: {
    row: 1,
    pageSize: '25',
    pageSizes: [
      '5',
      '10',
      '25',
      '50',
      '75',
      '100'
    ],
    sortBy: '',
    sorts: [
      'firstName',
      'lastName',
      'city',
      'country',
      'state'
    ]
  },
  columns: [
  'firstName',
  'lastName',
  'country',
  'street',
  'city',
  'state',
  'zip',
  'phone'
  ],
  data: []
};

export const addressesReducer = (state = addressesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_ADDRESSES':
      return {
        filters: state.filters,
        columns: state.columns,
        data: action.addresses
      };

    case 'SET_PAGE_SIZE':
      return {
        filters: {
          ...state.filters,
          pageSize: action.pageSize
        },
        columns: state.columns,
        data: state.data
      };

    case 'FIRST_PAGE':
      return {
        filters: {
          ...state.filters,
          row: 1
        },
        columns: state.columns,
        data: state.data
      };

    case 'NEXT_PAGE':
      let nextPage = state.filters.row + Number.parseInt(state.filters.pageSize, 10);
      // If in the very last page, don't page forward
      nextPage = nextPage > state.data.length ? state.filters.row : nextPage;
      return {
        filters: {
          ...state.filters,
          row: nextPage
        },
        columns: state.columns,
        data: state.data
      };

    case 'PREV_PAGE':
      let prevPage = state.filters.row - Number.parseInt(state.filters.pageSize, 10);
      // If in the very first page, don't page forward
      prevPage = prevPage < 1 ? 1 : prevPage;
      return {
        filters: {
          ...state.filters,
          row: prevPage
        },
        columns: state.columns,
        data: state.data
      };

    case 'LAST_PAGE':
      let lastPage = state.data.length - Number.parseInt(state.filters.pageSize, 10) + 1;
      // if the page size exceeds the length of data, check bounds
      lastPage = lastPage < 1 ? 1 : lastPage;

      return {
        filters: {
          ...state.filters,
          row: lastPage
        },
        columns: state.columns,
        data: state.data
      };

    case 'SORT_BY_COLUMN':
      // Sorry, you cannot unsort!
      if( action.column === "" ){
        return state;
      }

      // Apply sort to data by determining which index the sorted column is
      let sortOnIndex = state.columns.indexOf(action.column);
      state.data.sort((dataRowA, dataRowB) => {
        if( dataRowA[sortOnIndex] < dataRowB[sortOnIndex] ){
          return -1;
        } else if( dataRowA[sortOnIndex] > dataRowB[sortOnIndex] ){
          return 1;
        } else {
          return 0;
        }
      });

      return {
        filters: {
          ...state.filters,
          sortBy: action.column
        },
        columns: state.columns,
        data: state.data
      };

    default:
      return state;
  }
};