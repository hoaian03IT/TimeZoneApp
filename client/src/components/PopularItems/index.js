import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { MyHeading, MySlideButton } from "~/styles/global";
import { popularItems } from "~/data/popularItems";
import { ListProduct } from "../ListProduct";
import { Container } from "@mui/system";

function PopularItems() {
    return (
        <Container>
            <Grid container justifyContent="center" mt={20}>
                <Grid xl={7} lg={8} md={10}>
                    <MyHeading textAlign="center" variant="h3">
                        Popular Items
                    </MyHeading>
                    <Typography textAlign="center" variant="subtitle1" sx={{ color: "#777" }}>
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida.
                    </Typography>
                </Grid>
            </Grid>
            <ListProduct list={popularItems} />
            <Grid container justifyContent="center" mt={10}>
                <MySlideButton reverse={"true"}>VIEW MORE PRODUCT</MySlideButton>
            </Grid>
        </Container>
    );
}

export { PopularItems };
