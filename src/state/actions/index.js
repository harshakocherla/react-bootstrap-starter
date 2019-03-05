export const saveDetails = profileDetails =>
  console.log(profileDetails) || {
    type: "SAVE_PROFILE",
    payload: profileDetails
  };
