import { Link } from "react-router-dom";
import { AppBar, Badge, ButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";
import { MyIconButton, MyToolBar } from "~/styles/appbar";
import { routes } from "~/config";
// import { useUIContext } from "../Provider/UIProvider";
import { cartProducts } from "~/data/cartProducts";
import { SearchBox } from "../SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { logoutAccount } from "~/redux/actions";

function Header() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const dispatch = useDispatch();

    const [showSearch, setShowSearch] = useState(false);

    const handleHideSearch = useCallback(() => setShowSearch(false), []);
    const handleExposeSearch = useCallback(() => setShowSearch(true), []);

    const handleLogoutAccount = () => {
        dispatch(logoutAccount());
        window.location.href = routes.home;
    };

    const { role } = useSelector((state) => state.account.userInfo);

    return (
        <Container>
            <SearchBox visible={showSearch} onClose={handleHideSearch} />
            <AppBar sx={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", backgroundColor: "#fff" }}>
                <MyToolBar>
                    {isMatch ? <HeaderMobile /> : <HeaderDesktop />}
                    <ButtonGroup>
                        <MyIconButton onClick={handleExposeSearch}>
                            <SearchIcon />
                        </MyIconButton>
                        {role ? (
                            <MyIconButton onClick={handleLogoutAccount}>
                                <LogoutIcon />
                            </MyIconButton>
                        ) : (
                            <Link to={routes.login}>
                                <MyIconButton>
                                    <AccountCircleOutlinedIcon />
                                </MyIconButton>
                            </Link>
                        )}
                        <Link to={routes.cartList}>
                            <Badge
                                badgeContent={cartProducts.length}
                                color="primary"
                                sx={{
                                    "& .MuiBadge-badge": {
                                        top: "8px",
                                        right: "8px",
                                    },
                                }}>
                                <MyIconButton>
                                    <ShoppingCartOutlinedIcon />
                                </MyIconButton>
                            </Badge>
                        </Link>
                        {role === "admin" && (
                            <Link to={routes.admin}>
                                <MyIconButton>
                                    <AdminPanelSettingsIcon />
                                </MyIconButton>
                            </Link>
                        )}
                    </ButtonGroup>
                </MyToolBar>
            </AppBar>
        </Container>
    );
}

export { Header };
