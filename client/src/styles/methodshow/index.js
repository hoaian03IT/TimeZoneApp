import styled from "@emotion/styled";
import { SvgIcon, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { primaryColor, whiteColor } from "../global";

export const MyGrid = styled(Grid2)(() => ({
    marginTop: "120px",
    padding: "30px 0",
    justifyContent: "space-around",
    backgroundColor: primaryColor,
}));

export const MyTitle = styled(Typography)(() => ({
    color: whiteColor,
    fontWeight: 700,
    marginBottom: 10,
}));

export const MyPara = styled(Typography)(() => ({
    color: "#e1dcdc",
}));

export const MySvgIcon = styled(SvgIcon)(() => ({
    fontSize: "3.2rem",
    color: whiteColor,
    marginBottom: 10,
}));
