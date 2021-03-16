const stockReducer = (stock = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_STOCK':
      return action.payload;
    default:
      return stock;
  }
};

export default stockReducer;
