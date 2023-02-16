import styled from "@emotion/styled";
import { IconButton, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { blackColor, primaryColor } from "../global";

export const MyBox = styled(Box)(() => ({
    position: "relative",
    overflow: "hidden",
}));

export const MyBoxWrapper = styled(Box)(() => ({
    ":hover button": {
        opacity: 1,
    },
    ":hover div": { bottom: 0, opacity: 1 },
}));

export const MyIconButton = styled(IconButton)(() => ({
    position: "absolute",
    top: 2,
    right: 12,
    ":hover": {
        color: primaryColor,
    },
    opacity: 0,
    transition: "all .3s linear",
}));

export const MySlideBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    position: "absolute",
    bottom: -57,
    left: 0,
    right: 0,
    backgroundColor: primaryColor,
    transition: "all .3s ease-in",
    opacity: 0.4,
    cursor: "pointer",
    userSelect: "none",
}));

export const MyTab = styled(Tab)(() => ({
    "&.Mui-selected ": {
        color: blackColor,
    },
    textTransform: "none",
}));
