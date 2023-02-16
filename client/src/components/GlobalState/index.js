import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { accessToken, isLoggedIn } from "~/constant";
import { getAccessToken, getUserInfo, logoutAccount } from "~/redux/actions";

export const DataProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const refreshToken = Cookies.get("refreshToken");
        const isLogged = localStorage.getItem(isLoggedIn);

        if (isLogged) {
            const fetchRefreshToken = () => {
                dispatch(getAccessToken.getAccessTokenRequest({ refreshToken: refreshToken }));
                setTimeout(() => fetchRefreshToken(), 24 * 60 * 60 * 1000);
            };
            fetchRefreshToken();
        } else {
            dispatch(logoutAccount());
        }

        const token = JSON.parse(localStorage.getItem(accessToken));
        token && dispatch(getUserInfo.getUserInfoRequest(token));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};
