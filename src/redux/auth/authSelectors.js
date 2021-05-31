export const authorizationSelector = (state) =>
  state.authorization.tokens.accessToken;

export const getUserId = (state) => state.user.userInfo.id;
export const errorSelector = (state) => state.authorization.erorr;
