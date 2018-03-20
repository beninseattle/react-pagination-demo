const addressesReducerDefaultState = [
  {
    firstName: 'Abe',
    lastName: 'Alias',
    street: '123 Somewhere St',
    city: 'Somewhereville',
    zip: '77777-7777',
    country: 'USA',
    phone: '555-123-4567'
  },
  {
    firstName: 'Bob',
    lastName: 'Bowers',
    street: '123 Somewhere St',
    city: 'Somewhereville',
    zip: '77777-7777',
    country: 'USA',
    phone: '555-123-4567'
  },
  {
    firstName: 'Charlie',
    lastName: 'Charles',
    street: '123 Somewhere St',
    city: 'Somewhereville',
    zip: '77777-7777',
    country: 'USA',
    phone: '555-123-4567'
  },
  {
    firstName: 'David',
    lastName: 'Davidson',
    street: '123 Somewhere St',
    city: 'Somewhereville',
    zip: '77777-7777',
    country: 'USA',
    phone: '555-123-4567'
  },
  {
    firstName: 'Eddie',
    lastName: 'Edwards',
    street: '123 Somewhere St',
    city: 'Somewhereville',
    zip: '77777-7777',
    country: 'USA',
    phone: '555-123-4567'
  },
];
export const addressesReducer = (state = addressesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};