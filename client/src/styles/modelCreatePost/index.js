import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { whiteColor } from "../global";

export const MyBox = styled(Box)({
    padding: "30px 30px 0",
    height: "500px",
    maxHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: whiteColor,

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});
