const filterReducer = (state = "", action) => {
  switch(action.type) {
    case 'ADD_FILTER':
      return state.filter(s => state.companyName === s);
    default:
      return state;  
  }
}

export default filterReducer;