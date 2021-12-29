const Products = (state = {
    // userDetails: sessionStorage.userData ? JSON.parse(sessionStorage.userData) : {},
}, action = {}) => {
    switch (action.type) {
        //  case "USER_DETAILS":
        //       return {
        //            ...state,
        //            userDetails: action.payload
        //       };
         
         default:
              return state;
    }
};

export default Products;