const State = (
  state = {
    activeBrand: null,
    contentFilters: null,
    tagProducts: {},
    contentList: [],
  },
  action = {}
) => {
  switch (action.type) {
    case "CONTENT_FILTERS":
      return {
        ...state,
        contentFilters: action.payload,
      };
    case "TAG_PRODUCTS":
      return {
        ...state,
        tagProducts: action.payload,
      };
    case "CONTENT_LIST":
      return {
        ...state,
        contentList: action.payload,
      };
    default:
      return state;
  }
};

export default State;
