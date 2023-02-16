import styled from "@emotion/styled";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import { blackColor } from "../global";

export const MyLink = styled(Link)(() => ({
    fontSize: "1.5rem",
    color: blackColor,
    margin: "16px 0",
}));

export const MyBox = styled(Box)(() => ({
    "&:hover img": {
        transform: "scale(1.04)",
    },
    img: {
        margin: 0,
        transition: "transform .4s ease-in-out",
    },

    overflow: "hidden",
}));
