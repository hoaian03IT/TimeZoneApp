import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { blackColor, primaryColor } from "../global";

export const MyHeading = styled(Typography)(() => ({
    position: "relative",
    paddingLeft: "68px",
    color: blackColor,
    fontWeight: 700,
    "&::before": {
        position: "absolute",
        content: '""',
        width: "50px",
        height: "2px",
        backgroundColor: primaryColor,
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
    },
}));
