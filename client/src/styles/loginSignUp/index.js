import styled from "@emotion/styled";
import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { whiteColor } from "../global";

export const MyBox = styled(Box)(({ theme }) => ({
    padding: "80px 70px",
    width: "100%",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    backgroundImage: "linear-gradient(90deg,rgba(176,142,173,1), rgba(97,68,95,1))",

    [theme.breakpoints.down("md")]: {
        height: "400px",
        padding: "40px 35px",
    },
}));

export const MyText = styled(Typography)(({ title }) => ({
    margin: "12px 0",
    fontWeight: title === "true" ? 700 : 400,
    color: whiteColor,
}));

export const MyButton = styled(Button)(() => ({
    padding: "18px 36px",
    marginTop: "28px",
}));

export const MyTitle = styled(Typography)(() => ({
    margin: "12px 0",
    fontWeight: 700,
}));

export const MyLink = styled(Link)(() => ({
    marginTop: "24px",
    color: "#777",
    textDecoration: "none",
    textAlign: "right",
}));
