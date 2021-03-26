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
  FAMILYDETAILS: "/profile/family-details",
  SEARCH: "/profile/search",
  HOMEINFO: "/profile/get-homepage-info",
  VIEWPROFILE: "/profile/view-full-profile",
  VIEWMYPROFILE: "/profile/view-my-profile"
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
    const response = await axios.get(process.env.REACT_APP_BASE_URL + url);
    return response?.data;
  },
  APIPostCall = async (url, data) => {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + url,
      data
    );
    return response?.data;
  },
  APIPatchCall = async (url, data) => {
    const response = await axios.patch(
      process.env.REACT_APP_BASE_URL + url,
      data
    );
    return response?.data;
  };

export const premiumMatches = async () => {
  return await APIGetCall(URLS.PREMIUM);
};

export const nearbyMatches = async () => {
  return await APIGetCall(URLS.NEARBYMATCHES);
};

export const dailyRecommendations = async () => {
  return await APIGetCall(URLS.DAILYRECOMMENDATIONS);
};

export const profileVisitors = async () => {
  return await APIGetCall(URLS.PROFILEVISITORS);
};

export const receivedInterests = async () => {
  return await APIGetCall(URLS.RECEIVEDINTERESTS);
};

export const sentInterests = async () => {
  return await APIGetCall(URLS.SENTINTERESTS);
};

export const shortlisted = async () => {
  return await APIGetCall(URLS.SHORTLISTED);
};

export const acceptedByMe = async () => {
  return await APIGetCall(URLS.ACCEPTEDBYME);
};

export const acceptedByOthers = async () => {
  return await APIGetCall(URLS.ACCEPTEDME);
};

export const viewContact = async id => {
  return await APIGetCall(URLS.VIEWOTHERS + (id ? `?profile_id=${id}` : ""));
};

export const sendInterest = async id => {
  return await APIPostCall(URLS.SENDINTEREST, {
    to_profile_id: id
  });
};

export const cancelInterest = async id => {
  return await APIPostCall(URLS.CANCELINTEREST, {
    to_profile_id: id
  });
};

export const acceptInterest = async () => {
  return await APIPostCall(URLS.ACCEPTINTEREST);
};

export const declineInterest = async () => {
  return await APIPostCall(URLS.DECLINEINTEREST);
};

export const getOptions = async () => {
  return await APIGetCall(URLS.OPTIONS);
};

export const createProfile = async data => {
  return await APIPostCall(URLS.CREATEPROFILE, data);
};

export const updateProfile = async ([id, data]) => {
  return await APIPatchCall(URLS.UPDATEPROFILE + `/${id}/`, data);
};

export const createFamilyDetails = async data => {
  return await APIPostCall(URLS.FAMILYDETAILS, data);
};

export const updateFamilyDetails = async data => {
  return await APIPatchCall(URLS.FAMILYDETAILS, data);
};

export const search = async data => {
  return await APIPostCall(URLS.SEARCH, data);
};

export const viewedProfiles = async () => {
  return await APIGetCall(URLS.VIEWEDPROFIFLES);
};

export const homeInfo = async () => {
  return await APIGetCall(URLS.HOMEINFO);
};

export const viewProfile = async id => {
  return await APIGetCall(URLS.VIEWPROFILE + (id ? `?profile_id=${id}` : ""));
};

export const viewMyProfile = async id => {
  return await APIGetCall(URLS.VIEWMYPROFILE);
};

export const saveFilter = filter => {
  localStorage.setItem("filter", JSON.stringify(filter));
};

export const getFilter = filter => {
  return JSON.parse(localStorage.getItem("filter"));
};
