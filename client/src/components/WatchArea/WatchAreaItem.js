import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";
import { MyHeading, MyPara, MySlideButton } from "~/styles/global";

function WatchAreaItem({ reverse, item }) {
    return (
        <Grid
            container
            alignItems="center"
            direction={reverse ? "row-reverse" : "row"}
            justifyContent="space-between"
            mt={10}>
            <Grid xl={4} lg={4} md={4} sm={12}>
                <MyHeading variant="h3">{item.title}</MyHeading>
                <MyPara variant="subtitle1">{item.description}</MyPara>
                <MySlideButton reverse="true">SHOP WATCHES</MySlideButton>
            </Grid>
            <Grid xl={4} lg={4} md={4} sm={12}>
                <Box width="100%" component="img" src={item.img} alt="image" />
            </Grid>
        </Grid>
    );
}

export { WatchAreaItem };
