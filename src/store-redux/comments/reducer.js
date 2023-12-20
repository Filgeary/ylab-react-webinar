export const initialState = {
  data: {},
  waiting: false,
  postedCommentData: {},
  postedCommentWaiting: false,
  postedCommentSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "comments/load-start":
      return { ...state, data: {}, waiting: true };

    case "comments/load-success":
      return { ...state, data: action.payload.data, waiting: false };

    case "comments/load-error":
      return { ...state, data: {}, waiting: false };

    case "comments/add-start":
      return {
        ...state,
        postedCommentData: {},
        postedCommentWaiting: true,
        postedCommentSuccess: false,
      };

    case "comments/add-success":
      return {
        ...state,
        postedCommentData: action.payload.data,
        postedCommentWaiting: false,
        postedCommentSuccess: true,
      };

    case "comments/add-error":
      return {
        ...state,
        postedCommentData: {},
        postedCommentWaiting: false,
        postedCommentSuccess: false,
      };

    default:
      return state;
  }
};

export default reducer;
