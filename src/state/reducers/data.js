export const profileDetails = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_PROFILE":
      return { ...state, profileDetails: action.payload };
    default:
      return state;
  }
};
