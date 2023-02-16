import { IconButton, List, ListItemButton, TextField, Toolbar } from "@mui/material";
import { Box, styled } from "@mui/system";
import { blackColor, heightHeader, primaryColor, whiteColor } from "../global";

export const MyToolBar = styled(Toolbar)(() => ({
    justifyContent: "space-between",
    height: heightHeader,
    backgroundColor: whiteColor,
    color: blackColor,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    justifyContent: "center",
    alignItems: "center",
}));

export const MyIconButton = styled(IconButton)(() => ({
    color: blackColor,
    "&:hover": {
        color: primaryColor,
        transition: "color .2s ease-out",
    },
}));

export const MyListItemButton = styled(ListItemButton)(() => ({
    "&:hover > a, &:hover": { color: "red", transition: "color .2s ease-out" },
}));

export const SearchBoxContainer = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: blackColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    opacity: 0.9,
}));

export const MySearchField = styled(TextField)(({ theme }) => ({
    width: "40%",
    ".MuiInput-root": {
        fontSize: "2rem",
        color: "#999",
    },
    [theme.breakpoints.down("md")]: {
        width: "70%",
    },
}));
