import axios from "axios";

const URLS = {
    LOGIN: "/api/token/",
    REGISTER: "/user-management/account/register/",
    OTP: "/user-management/account/verify-otp"
  },
  setSession = token => {
    localStorage.setItem("token", token);
  },
  clearSession = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

axios.interceptors.request.use(
  request => {
    request.headers = {
      ...request.headers,
      ...(!!localStorage.getItem("token") && {
        Authorization: "Bearer " + localStorage.getItem("token")
      }),
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    };
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

export const login = async ({ username, password }) => {
  const response = await axios.post(
    process.env.REACT_APP_BASE_URL + URLS.LOGIN,
    {
      username,
      password
    }
  );

  return response;
};

export const register = async ({ username, password, mobile_no }) => {
  const response = await axios.post(
    process.env.REACT_APP_BASE_URL + URLS.REGISTER,
    {
      username,
      password,
      mobile_no
    }
  );

  return response;
};

export const otp = async (otp) => {
  const response = await axios.post(process.env.REACT_APP_BASE_URL + URLS.OTP, {
    otp
  });
  return response;
};

export const logout = () => {
  clearSession();
};

export { setSession };
