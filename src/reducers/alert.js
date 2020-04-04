const initState = {
  onAlert: false,
  severity: "info"
};

export default function(state = initState, action) {
  switch (action.type) {
    case "ALERT@SHOW":
      return {
        ...state,
        onAlert: true,
        severity: action.payload.severity ? action.payload.severity : "info",
        msg: action.payload.msg
      };
    case "ALERT@CLOSE":
      return {
        ...state,
        onAlert: false
      };
    default:
      return state;
  }
}
