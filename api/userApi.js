import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/g-user/authentication/login";
    return axiosClient.post(url, data);
  },
  logout(gtk) {
    const url = "/g-user/authentication/revoke-token";
    return axiosClient.post(
      url,
      {},
      {
        headers: {
          Cookie: "gtk=" + gtk,
        },
      }
    );
  },
};

export default userApi;
