const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMPANY_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default companyReducer;
