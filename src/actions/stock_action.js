const ADD_TO_STOCK = stocks => ({
  type: 'ADD_TO_STOCK',
  payload: stocks,
});

const ADD_COMPANY_INFO = info => ({
  type: 'ADD_COMPANY_INFO',
  payload: info,
});

export { ADD_TO_STOCK, ADD_COMPANY_INFO };
