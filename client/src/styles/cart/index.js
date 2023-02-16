import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import { primaryColor } from "../global";

export const useStyles = makeStyles({
    blueText: {
        color: "#828bb2!important",
    },
    primaryText: {
        color: `${primaryColor}!important`,
        fontSize: "16px!important",
    },
});

export const ImageProduct = styled(Box)(({ theme }) => ({
    border: "1px solid #eeeeee",
    borderRadius: "3px",
    maxWidth: "150px",
    [theme.breakpoints.down("md")]: {
        maxWidth: "60px",
    },
}));
