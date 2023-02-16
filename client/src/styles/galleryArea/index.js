import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const MyImage = styled(Box)(() => ({
    width: "100%",
    height: "100%",
    opacity: 0.9,
    objectFit: "cover",
    "&:hover": {
        opacity: 1,
    },
    transition: "opacity .3s linear",
}));
