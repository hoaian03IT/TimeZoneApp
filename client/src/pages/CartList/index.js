import { Button } from "@mui/material";
import { Container } from "@mui/system";

import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { useNavigate } from "react-router-dom";
import { routes } from "~/config";
import List from "~/components/List";
import { cartProducts } from "~/data/cartProducts";
import { CartItem } from "./CartItem";

function CartList() {
    const navigate = useNavigate();

    return (
        <>
            <SecondaryBanner title="Card list" />
            <Container sx={{ pt: 10, pb: 20 }}>
                <List list={cartProducts} item={CartItem} />
                <Button
                    variant="contained"
                    color="info"
                    sx={{ margin: "30px 8px", padding: "20px 30px", float: "right" }}>
                    MAKE PAYMENT
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    sx={{ margin: "30px 8px", padding: "20px 30px", float: "right" }}
                    onClick={() => navigate(routes.shop)}>
                    CONTINUE SHOPPING
                </Button>
            </Container>
        </>
    );
}

export default CartList;
