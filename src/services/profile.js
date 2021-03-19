import axios from "axios";
import { logout } from "./api";

const URLS = {
  PREMIUM: "/profile/get-premium-matches",
  PROFILEVISITORS: "/profile/get-profile-visitors",
  NEARBYMATCHES: "/profile/get-nearby-matches",
  DAILYRECOMMENDATIONS: "/profile/get-daily-recommendations",
  RECEIVEDINTERESTS: "/profile/get-received-interests",
  ACCEPTEDME: "/profile/get-who-accepted-me",
  ACCEPTEDBYME: "/profile/get-accepted-by-me",
  SHORTLISTED: "/profile/get-shortlisted-profiles",
  SENTINTERESTS: "/profile/get-sent-interests",
  VIEWEDPROFIFLES: "/profile/get-viewed-profiles",
  VIEWOTHERS: "/profile/view-other-contacts",
  SENDINTEREST: "/profile/send-interest",
  CANCELINTEREST: "/profile/cancel-interest",
  ACCEPTINTEREST: "/profile/accept-interest",
  DECLINEINTEREST: "/profile/decline-interest",
  OPTIONS: "/profile/get-options",
  CREATEPROFILE: "/profile/create",
  UPDATEPROFILE: "/profile/update",
  FAMILYDETAILS: "/profile/family-details"
};

axios.interceptors.request.use(
  request => {
    request.headers = {
      ...request.headers,
      ...(!!localStorage.getItem("token") && {
        Authorization: "Bearer " + localStorage.getItem("token")
      }),
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    };
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err?.response?.status === 401 && localStorage.getItem("token")) {
      logout();
    } else {
      return Promise.reject(err.response);
    }
  }
);

const APIGetCall = async url => {
    const response = await axios.get(url);
    return response?.data;
  },
  APIPostCall = async (url, data) => {
    const response = await axios.post(url, data);
    return response?.data;
  },
  APIPatchCall = async (url, data) => {
    const response = await axios.patch(url, data);
    return response?.data;
  };

export const premiumMatches = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.PREMIUM);
};

export const nearbyMatches = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.NEARBYMATCHES);
};

export const dailyRecommendations = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.DAILYRECOMMENDATIONS);
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

export const viewOthers = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.VIEWOTHERS);
};

export const sendInterest = async () => {
  return await APIPostCall(process.env.REACT_APP_BASE_URL + URLS.SENDINTEREST);
};

export const cancelInterest = async () => {
  return await APIPostCall(
    process.env.REACT_APP_BASE_URL + URLS.CANCELINTEREST
  );
};

export const acceptInterest = async () => {
  return await APIPostCall(
    process.env.REACT_APP_BASE_URL + URLS.ACCEPTINTEREST
  );
};

export const declineInterest = async () => {
  return await APIPostCall(
    process.env.REACT_APP_BASE_URL + URLS.DECLINEINTEREST
  );
};

export const getOptions = async () => {
  return await APIGetCall(process.env.REACT_APP_BASE_URL + URLS.OPTIONS);
};

export const createProfile = async data => {
  return await APIPostCall(
    process.env.REACT_APP_BASE_URL + URLS.CREATEPROFILE,
    data
  );
};

export const updateProfile = async ([id, data]) => {
  return await APIPatchCall(
    process.env.REACT_APP_BASE_URL + URLS.UPDATEPROFILE + `/${id}/`,
    data
  );
};

export const createFamilyDetails = async (data) => {
  return await APIPostCall(
    process.env.REACT_APP_BASE_URL + URLS.FAMILYDETAILS,
    data
  );
};

export const viewedProfiles = async () => {
  return await APIGetCall(
    process.env.REACT_APP_BASE_URL + URLS.VIEWEDPROFIFLES
  );
};
