import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: ["Andika", "Roboto", "Arial", "sans-serif"].join(","),
    },
    palette: {
        primary: {
            main: "#ff003c",
        },
        default: {
            main: "#000",
        },
        white: {
            main: "#fff",
        },
    },
});
