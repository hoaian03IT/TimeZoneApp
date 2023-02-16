import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { MyTypographyProduct } from "~/styles/global";
import { MyBox, MyBoxWrapper, MyIconButton, MySlideBox } from "~/styles/itemProducts";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ItemProduct({ item }) {
    const [favorite, setFavorite] = useState(item.favorite);
    return (
        <Grid xl={4} lg={4} md={6} sm={6}>
            <MyBoxWrapper textAlign="center">
                <MyBox>
                    <Box width="100%" component="img" src={item.img} alt="image" />
                    <MySlideBox>
                        <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                            Add to cart
                        </Typography>
                    </MySlideBox>

                    {favorite ? (
                        <MyIconButton onClick={() => setFavorite(!favorite)}>
                            <FavoriteIcon sx={{ fontSize: "2rem" }} color="primary" />
                        </MyIconButton>
                    ) : (
                        <MyIconButton onClick={() => setFavorite(!favorite)}>
                            <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
                        </MyIconButton>
                    )}
                </MyBox>
                <MyTypographyProduct component={Link} variant="h5" to="/shop">
                    {item.title}
                </MyTypographyProduct>
                <Typography>{item.price}</Typography>
            </MyBoxWrapper>
        </Grid>
    );
}

export { ItemProduct };
