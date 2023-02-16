import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { imgs } from "~/assets/image";

export const MyBox = styled(Box)(({ background }) => {
    const isBackground = background === "true";
    return {
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: isBackground && "center",
        overflow: "hidden",
        backgroundImage: isBackground && `url(${imgs.backgroundBanner})`,
        minHeight: isBackground && "494px",
        "@keyframes appear": {
            "0%": {
                transform: "translateX(-100%)",
                opacity: 0,
            },
            "60%": {
                transform: "translateX(0)",
                opacity: 1,
            },
            "80%": {
                transform: "translateX(-20px)",
                opacity: 1,
            },
            "100%": {
                transform: "translateX(0)",
                opacity: 1,
            },
        },
        animation: isBackground ? "" : "appear 1s ease-in-out",
    };
});

export const MyTypography = styled(Typography)(({ theme }) => ({
    margin: "40px 0",
    fontWeight: 700,
    [theme.breakpoints.down("xl")]: {
        fontSize: "96px",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "60px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "33px",
    },
}));

export const MyImage = styled(Box)(({ theme }) => ({
    "@keyframes bubble": {
        "0%, 100%": {
            transform: "scale(1)",
        },
        "20%": {
            transform: "scale(1.02)",
        },
    },

    width: "24vw",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    animation: "bubble 1.8s ease-in-out infinite",
}));
