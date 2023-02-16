import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import { listNewArrivals } from "~/data/newArrivals";
import { MyBox } from "~/styles/newarrivals";
import { MyHeading, MyTypographyProduct } from "~/styles/global";

function NewArrivals() {
    return (
        <Container>
            <MyHeading variant="h3">New Arrivals</MyHeading>
            <Grid2 container spacing={4} justifyContent="center">
                {listNewArrivals.map((item, index) => (
                    <Grid2 item key={index} sx={{ textAlign: "center" }}>
                        <MyBox>
                            <Box
                                component="img"
                                src={item.img}
                                alt={item.name}
                                sx={{ margin: "8px 0", display: "block" }}
                            />
                        </MyBox>
                        <MyTypographyProduct variant="h5" component={Link} to="/shop">
                            {item.name}
                        </MyTypographyProduct>
                        <MyTypographyProduct color="primary">{item.price}</MyTypographyProduct>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
}

export { NewArrivals };
