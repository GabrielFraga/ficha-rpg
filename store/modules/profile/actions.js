export function editProfileRequest(profile) {
  return {
    type: '@profile/EDIT_REQUEST',
    profile,
  };
}
export function editProfileSuccess(profile) {
  return {
    type: '@profile/EDIT_SUCCESS',
    profile,
  };
}
