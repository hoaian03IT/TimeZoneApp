import styled from "@emotion/styled";
import { Button, Divider, Icon, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { blackColor, primaryColor, whiteColor } from "../global";

export const MyImage = styled(Box)(() => ({
    width: "100%",
    height: "350px",
    objectFit: "cover",
    objectPosition: "center",
}));

export const MyTitle = styled(Link)(({ fontSize }) => ({
    fontWeight: 700,
    fontSize: `${fontSize}rem`,
    color: blackColor,
    ":hover": {
        color: primaryColor,
    },
    textDecoration: "none",
    transition: "color .1s linear",
}));

export const MyPara = styled(Typography)(() => ({
    margin: "24px 0",
    color: "#777",
}));

export const MyInfoLink = styled(Link)(() => ({
    display: "inline-block",
    alignItems: "center",
    color: "#999",
    ":hover": {
        color: primaryColor,
    },
    textDecoration: "none",
}));

export const MyBox = styled(Box)(() => ({
    padding: "60px 30px 35px 35px",
    position: "relative",
}));

export const MyBoxWrapper = styled(Box)(() => ({
    boxShadow: "0px 10px 20px 0px rgb(221 221 221 / 30%)",
}));

export const MyIcon = styled(Icon)(() => ({
    fontSize: "1.2rem",
}));

export const GridWrapper = styled(Grid2)(() => ({
    marginBottom: "24px",
    padding: "30px",
    width: "100%",
    backgroundColor: "#fbf9ff",
}));

export const MyButtonSearch = styled(Button)(() => ({
    marginTop: "16px",
    width: "100%",
    height: "50px",
    color: whiteColor,
    backgroundColor: primaryColor,
    "&:hover": {
        color: blackColor,
        backgroundColor: whiteColor,
    },
    border: `1px solid ${primaryColor}`,
    fontSize: "16px",
}));

export const ButtonPagination = styled(Button)(() => ({
    margin: "4px",
    height: "40px",
    color: "#999",
    fontSize: "16px",
    svg: {
        fontSize: "16px",
    },

    "&:hover": {
        color: primaryColor,
    },

    border: "1px solid #f0e9ff",

    "&.active": {
        color: primaryColor,
        borderColor: primaryColor,
    },
}));

export const LinkCategory = styled(Link)(() => ({
    display: "block",
    padding: "12px 0",
    fontSize: "16px",
    color: "#777",
    "&:hover": {
        color: primaryColor,
    },
    textDecoration: "none",
}));

export const MyDivider = styled(Divider)(() => ({
    marginBottom: "24px",
    backgroundColor: "#777",
}));
