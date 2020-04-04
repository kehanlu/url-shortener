const initState = {
  data: [],
  baseUrl: process.env.REACT_APP_BASE_URL
};

export default function(state = initState, action) {
  switch (action.type) {
    case "URL@FETCH_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "URL@ADD":
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    default:
      return state;
  }
}
