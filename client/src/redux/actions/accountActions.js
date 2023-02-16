import { createAction, createActions } from "redux-actions";

export const loginAccount = createActions({
    loginAccountRequest: (payload) => payload,
    loginAccountSuccess: (payload) => payload,
    loginAccountError: (err) => err,
});

export const getAccessToken = createActions({
    getAccessTokenRequest: undefined,
    getAccessTokenSuccess: (payload) => payload,
    getAccessTokenFailure: (err) => err,
});

export const getUserInfo = createActions({
    getUserInfoRequest: (token) => token,
    getUserInfoSuccess: (payload) => payload,
    getUserInfoFailure: (err) => err,
});

export const logoutAccount = createAction("logoutAccount");
