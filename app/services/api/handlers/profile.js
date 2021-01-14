export default (apiCall) => ({
  update: ({ avatar, ...payload }) =>
    apiCall({
      endpoint: 'profile/update',
      method: 'POST',
      query: payload,
      file: avatar,
    }),
  getProfile: (profileId) =>
    apiCall({
      endpoint: `profile/get/${profileId}`,
      method: 'GET',
    }),
});
