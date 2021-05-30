export const authorizationSelector = (state) =>
  state.authorization.tokens.accessToken;

export const getUserId = (state) => state.user.userInfo.id;
