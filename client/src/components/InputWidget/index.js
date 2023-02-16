import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GridWrapper, MyButtonSearch, MyDivider } from "~/styles/blog";

function InputWidget({ title = "", placeholder = "", buttonText = "" }) {
    const [value, setValue] = useState("");

    return (
        <GridWrapper>
            <Box>
                {!!title && (
                    <>
                        <Typography variant="h5" marginBottom="24px">
                            {title}
                        </Typography>
                        <MyDivider />
                    </>
                )}
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    fullWidth
                    id="outlined-basic"
                    label={placeholder}
                    variant="outlined"
                    color="default"
                />
                <MyButtonSearch disableRipple>{buttonText}</MyButtonSearch>
            </Box>
        </GridWrapper>
    );
}

export { InputWidget };
