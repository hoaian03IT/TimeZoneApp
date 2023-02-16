import styled from "@emotion/styled";
import { Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const blackColor = "#000";
export const whiteColor = "#fff";
export const primaryColor = "#ff003c";
export const heightHeader = "100px";
export const greyColor = "#868c98";

export const MyLink = styled(Link)(({ animation, block }) => {
    const isAnimation = animation === "true";
    const isBlock = block === "true";
    return isBlock
        ? {
              display: "block",
              color: greyColor,
              fontWeight: 400,
              fontSize: 16,
              marginBottom: "12px",
              userSelect: "none",
              textDecoration: "none",
              ":hover": isAnimation && {
                  color: primaryColor,
                  transform: "translateX(4px)",
              },
              transition: "all .2s linear",
          }
        : {
              position: "relative",
              padding: "0 21px",
              color: blackColor,
              fontWeight: 700,
              "&:hover": {
                  color: primaryColor,
              },
              transition: "color .2s ease-out",
              cursor: "pointer",
              textAlign: "center",
              userSelect: "none",
              textDecoration: "none",
              "&.active": {
                  color: primaryColor,
              },
          };
});

export const MyTypographyProduct = styled(Typography)(({ color }) => {
    const isPrimaryColor = color === "primary";
    return {
        display: "block",
        color: isPrimaryColor ? primaryColor : blackColor,
        fontWeight: isPrimaryColor ? 400 : 700,
        textDecoration: "none",
        "&:hover": { color: isPrimaryColor ? primaryColor : blackColor },
        margin: "16px 0",
    };
});

export const MyHeading = styled(Typography)(({ theme }) => ({
    paddingBottom: "40px",
    fontWeight: 700,
    [theme.breakpoints.down("xl")]: {
        fontSize: "48px",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "37px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "33px",
    },
}));

export const MySlideButton = styled(Button)(({ reverse }) => ({
    margin: "60px 0",
    padding: "25px 29px",
    maxHeight: "50px",
    color: whiteColor,
    backgroundColor: reverse === "true" ? primaryColor : "#4a4a4b",
    zIndex: 1,
    overflow: "hidden",

    "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: reverse === "true" ? "#4a4a4b" : primaryColor,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .3s ease-in-out",
    },
    ":hover": {
        backgroundColor: reverse === "true" ? primaryColor : "#4a4a4b",
    },

    ":hover::before": {
        transform: "scaleX(1)",
    },
}));

export const MyPara = styled(Typography)({
    fontSize: "16px",
    color: "#777",
});

export const ScrollToTopButton = styled(IconButton)(({ visible }) => ({
    position: "fixed",
    right: "2%",
    bottom: visible === "true" ? "4%" : "-8%",
    backgroundColor: primaryColor,
    zIndex: 999,
    animation: `${visible === "true" ? "appear" : "disappear"} .2s ease-in-out`,

    svg: {
        color: whiteColor,
    },

    "@keyframes appear": {
        "0%": {
            bottom: "-8%",
            opacity: 0,
        },
        "100%": {
            bottom: "4%",
            opacity: 1,
        },
    },
    "@keyframes disappear": {
        "0%": {
            bottom: "4%",
            opacity: 1,
        },
        "100%": {
            bottom: "-8%",
            opacity: 0,
        },
    },
}));
