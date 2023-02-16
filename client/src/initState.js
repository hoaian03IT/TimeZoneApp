import { accessToken, loginInfo } from "./constant";

export const getLoginInfoFromLocalStorage = () => JSON.parse(localStorage.getItem(loginInfo));
export const getAccessTokenFromLocalStorage = () => JSON.parse(localStorage.getItem(accessToken));

export const INIT_STATE = {
    userLogin: {
        userInfo: {
            id: undefined,
            fullName: undefined,
            phoneNumber: undefined,
            role: undefined,
        },
        userCart: [],
        userFavorite: [],
        isLoading: false,
    },
    product: {
        list: [],
        isLoading: false,
    },
};
