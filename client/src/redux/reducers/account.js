import { getType } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { accessToken, isLoggedIn, loginInfo, refreshToken } from "~/constant";
import { INIT_STATE } from "~/initState";
import { updateToast } from "~/utils/updateToast";
import { getAccessToken, getUserInfo, loginAccount, logoutAccount } from "../actions";

export default function accountReducer(state = INIT_STATE.userLogin, action) {
    switch (action.type) {
        case getType(loginAccount.loginAccountRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(loginAccount.loginAccountSuccess):
            updateToast("success", "Login successfully! Please wait...", {
                duration: 500,
            });
            localStorage.setItem(isLoggedIn, true);
            localStorage.setItem(accessToken, JSON.stringify(action.payload.accessToken));
            Cookies.set(refreshToken, action.payload.refreshToken, { expires: 365, secure: true });
            return {
                ...state,
                userInfo: {
                    id: action.payload.user._id,
                    fullName: action.payload.user.fullName,
                    phoneNumber: action.payload.user.phoneNumber,
                    role: action.payload.user.role,
                },
                userCart: action.payload.user.cart,
                userFavorite: action.payload.user.favorite,
                isLoading: false,
            };
        case getType(loginAccount.loginAccountError):
            updateToast("error", action.payload.response.data.msg || action.payload.message);
            return {
                ...state,
                isLoading: false,
            };
        case getType(getAccessToken.getAccessTokenSuccess):
            localStorage.setItem(accessToken, JSON.stringify(action.payload.accessToken));
            return state;
        case getType(logoutAccount):
            localStorage.removeItem(isLoggedIn);
            localStorage.removeItem(loginInfo);
            localStorage.removeItem(accessToken);
            Cookies.remove(refreshToken);
            return state;

        case getType(getUserInfo.getUserInfoSuccess):
            return {
                ...state,
                userInfo: {
                    id: action.payload._id,
                    fullName: action.payload.fullName,
                    phoneNumber: action.payload.phoneNumber,
                    role: action.payload.role,
                },
                userCart: action.payload.cart,
                userFavorite: action.payload.favorite,
                isLoading: false,
            };
        default:
            return state;
    }
}
