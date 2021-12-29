const State = (
  state = {
    activeBrand: null,
    contentFilters: null,
    tagProducts: {},
    contentList: [],
    tagCollection: {},
    hasMore: true
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
        tagProducts: 
        {
          ...state.tagProducts,
          data: {
            ...action.payload.data,
            collections: [...action.payload.data.products]
          },
        }
      };
    case "TAG_COLLECTION":
      return {
        ...state,
        tagCollection: 
        {
          ...state.tagCollection,
          data: {
            ...action.payload.data,
            collections: [...action.payload.data.collections]
          },
        }
      };
    case "CONTENT_LIST":
      return {
        ...state,
        contentList: [...state.contentList, ...action.payload.data],
        hasMore: action.payload.hasMore
      };
    case "CONTENT_LIST_REPLACE":
      return {
        ...state,
        contentList: action.payload.data,
        hasMore: action.payload.hasMore
      };
    default:
      return state;
  }
};

export default State;
