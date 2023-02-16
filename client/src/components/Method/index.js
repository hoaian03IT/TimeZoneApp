import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { MyPara } from "~/styles/methodshow";
import { MyGrid, MySvgIcon, MyTitle } from "~/styles/methodshow";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

function Method() {
    return (
        <Container>
            <MyGrid maxWidth="lg" container rowSpacing={4} columnSpacing={4}>
                <Grid xl={3}>
                    <Box>
                        <MySvgIcon>
                            <LocalShippingOutlinedIcon />
                        </MySvgIcon>
                        <MyTitle variant="h6">Free Shipping Method</MyTitle>
                        <MyPara variant="subtitle1">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</MyPara>
                    </Box>
                </Grid>
                <Grid xl={3}>
                    <Box>
                        <MySvgIcon>
                            <LockOpenOutlinedIcon />
                        </MySvgIcon>
                        <MyTitle variant="h6">Secure Payment System</MyTitle>
                        <MyPara variant="subtitle1">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</MyPara>
                    </Box>
                </Grid>
                <Grid xl={3}>
                    <Box>
                        <MySvgIcon>
                            <AutorenewOutlinedIcon />
                        </MySvgIcon>
                        <MyTitle variant="h6">Secure Payment System</MyTitle>
                        <MyPara variant="subtitle1">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</MyPara>
                    </Box>
                </Grid>
            </MyGrid>
        </Container>
    );
}

export { Method };
