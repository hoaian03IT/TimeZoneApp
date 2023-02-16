import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { blackColor, primaryColor, whiteColor } from "../global";

export const ButtonSubmit = styled(Button)(() => ({
    margin: "0 0 30px 0",
    padding: "12px 25px",
    maxWidth: 120,
    backgroundColor: primaryColor,
    color: whiteColor,
    "&:hover": {
        backgroundColor: primaryColor,
        color: blackColor,
    },
}));

export const MyText = styled(Typography)(({ title }) => ({
    padding: "4px 0",
    color: title === "true" ? blackColor : "#777",
}));
