/** Interesting note, preallocating 100000 is a threshold for slower implemntation! */
const THIS_MANY = 99999;

const addressData = [
    ["Zachary", "Borgetti", "USA", "2234 3rd Ave Ste 3", "Seattle", "WA", "98101", "206-778-5741"],
    ["Landon", "Donovan", "USA", "18400 S Avalon Blvd", "Carson", "CA", "90746", "310-630-2200"],
    ["Samuel L.", "Jackson", "USA", "2226 2nd Ave", "Seattle", "WA", "98121", "206-441-5660"],
    ["Michael", "Jordan", "USA", "1901 West Madison Street", "Chicago", "IL", "60612", "312-455-4000"],
    ["Aaron", "Meautiful", "Mexico", "3465 Calzada de Tlalpan", "Coyoacan", "CDMX", "04650", "+52-55-5487-3100"],
    ["Michael", "Myers", "USA", "590 Galer St", "Austin", "TX", "79935", "915-857-1770"],
    ["Maite", "Perroni", "Mexico", "2101 Av. Juarez", "Mexico City", "CDMX", "06050", "+52 55 5365 1250"],
    ["Joel", "Schaper", "USA", "1823 Terry Ave, Suite 319", "Seattle", "WA", "98121", "206-258-4687"],
    ["Brian", "Stallone", "USA", "4567 Lake Washington Blvd NE, Suite 6709", "Kirkland", "OR", "98132", "425-333-4567"],
    ["Rahul", "Veloved", "England", "118 Piccadilly", "Mayfair", "London", "W1J 7NW", "+44 (0)20-7042-7118"]
  ];

/**
 * Pick from our 10 addresses at random and return THIS_MANY + 1 of them
 *
 * @returns {any[]}
 */
const makeLotsOfAddresses = () => {
  let data = new Array(THIS_MANY);
  for( let i = 0; i < THIS_MANY + 1; i++ ){
    const random = Math.floor( Math.random() * addressData.length );
    data[i] = [...addressData[random]];
  }

  return data;
};

export const setAddresses = (addresses) => ({
  type: 'SET_ADDRESSES',
  addresses
});

export const startSetAddresses = () => {
  return (dispatch) => {
    return new Promise(resolve => {
      const addresses = makeLotsOfAddresses();
      dispatch(setAddresses(addresses));
      resolve();
    });
  };
};

export const setPageSize = (pageSize = 25) => ({
  type: 'SET_PAGE_SIZE',
  pageSize
});

export const firstPage = () => ({
  type: 'FIRST_PAGE'
});

export const nextPage = () => ({
  type: 'NEXT_PAGE'
});

export const prevPage = () => ({
  type: 'PREV_PAGE'
});

export const lastPage = () => ({
  type: 'LAST_PAGE'
});

export const setSortBy = (column = 'firstName') => ({
  type: 'SORT_BY_COLUMN',
  column
});
