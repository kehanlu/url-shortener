const initState = {
  isAuthenticated: false,
  isLoading: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case "AUTH@LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "AUTH@USER_LOADED":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true
      };
    case "AUTH@OBTAIN_TOKEN":
      const { access, refresh } = action.payload;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };

    case "AUTH@LOGOUT":
    case "AUTH@ERROR":
      return {
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
