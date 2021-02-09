import axios from "axios";

const URLS = {
    login: "/api/token",
  },
  setSession = (token) => {
    localStorage.setItem("token", token);
  },
  clearSession = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

axios.interceptors.request.use(
  (request) => {
    request.headers = {
      ...request.headers,
      ...(!!localStorage.getItem("token") && {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }),
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    };
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async ({ username, password }) => {
  axios
    .post(process.env.REACT_APP_BASE_URL + URLS.login, {
      username,
      password,
    })
    .then(({ data }) => {
      setSession(data.access);
    });
};

export const logout = () => {
  clearSession();
};
