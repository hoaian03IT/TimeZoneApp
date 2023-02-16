import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import { blackColor, greyColor, primaryColor } from "../global";

export const MyTypography = styled(Typography)(({ heading }) => {
    const isMatch = heading === "true";
    return {
        color: isMatch ? blackColor : greyColor,
        fontWeight: isMatch ? 700 : 400,
        fontSize: isMatch ? 20 : 16,
        marginBottom: "8px",
        cursor: "default",
        userSelect: "none",
    };
});

export const MyLink = styled(Link)(() => ({
    padding: "0 4px",
    color: blackColor,
    ":hover > svg": {
        color: primaryColor,
        transform: "rotateY(180deg)",
    },
    svg: { transition: "all .2s linear" },
}));
