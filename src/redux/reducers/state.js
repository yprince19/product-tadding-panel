const State = (
  state = {
    taggedDataList: {},
    activeBrand: null,
    activeContentTypes: null,
  },
  action = {}
) => {
  switch (action.type) {
    case "ACTIVE_BRAND":
      return {
        ...state,
        activeBrand: action.payload,
      };
    case "ACTIVE_CONTENT_TYPES":
      return {
        ...state,
        activeContentTypes: action.payload,
      };
    case "TAGGED_DATA":
      return {
        ...state,
        taggedDataList: action.payload,
      };
    default:
      return state;
  }
};

export default State;
