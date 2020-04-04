const initState = {
  data: [],
  baseUrl: "http://localhost:3000"
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
