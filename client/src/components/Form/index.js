import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import { memo } from "react";
import { MyBox, MyButton, MyText } from "~/styles/loginSignUp";

const Form = memo(({ children: typeOfForm, titleBackground = "", paraBackground = "", textBtn = "", onClickBtn }) => {
    return (
        <Container sx={{ mt: 20 }}>
            <Grid container spacing={6} alignItems="center">
                <Grid xl={6} lg={6} md={6} sm={6} xs={12}>
                    <MyBox>
                        {titleBackground && (
                            <MyText variant="h5" title="true">
                                {titleBackground}
                            </MyText>
                        )}
                        {paraBackground && <MyText variant="subtitle1">{paraBackground}</MyText>}
                        {textBtn && (
                            <MyButton variant="outlined" color="white" onClick={onClickBtn}>
                                {textBtn}
                            </MyButton>
                        )}
                    </MyBox>
                </Grid>
                <Grid xl={6} lg={6} md={6} sm={6} xs={12}>
                    {typeOfForm}
                </Grid>
            </Grid>
        </Container>
    );
});

export { Form };
