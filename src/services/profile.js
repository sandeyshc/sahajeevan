import axios from "axios";
import { logout } from "./api";

const URLS = {
  PREMIUM: "/profile/get-premium-matches",
  PROFILEVISITORS: "/profile/get-profile-visitors",
  RECEIVEDINTERESTS: "/profile/get-received-interests",
  ACCEPTEDME: "/profile/get-who-accepted-me",
  ACCEPTEDBYME: "/profile/get-accepted-by-me",
  SHORTLISTED: "/profile/get-shortlisted-profiles",
  SENTINTERESTS: "/profile/get-sent-interests",
  VIEWEDPROFIFLES: "/profile/get-viewed-profiles",
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

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err?.response?.status === 401 && localStorage.getItem("token")) {
      logout();
    } else {
      return Promise.reject(err.response);
    }
  }
);

const APIGetCall = async (url) => {
  const response = await axios.get(url);
  return response?.data;
};

export const premiumMatches = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.PREMIUM);
};

export const profileVisitors = async () => {
  return await APIGetCall(
    process.env.REACT_APP_BASE_URL + URLS.PROFILEVISITORS
  );
};

export const receivedInterests = async () => {
  return await APIGetCall(
    process.env.REACT_APP_BASE_URL + URLS.RECEIVEDINTERESTS
  );
};

export const sentInterests = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.SENTINTERESTS);
};

export const shortlisted = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.SHORTLISTED);
};

export const acceptedByMe = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.ACCEPTEDBYME);
};

export const acceptedByOthers = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.ACCEPTEDME);
};

export const viewedProfiles = async () => {
  return await APIGetCall(
    process.env.REACT_APP_BASE_URL + URLS.VIEWEDPROFIFLES
  );
};
