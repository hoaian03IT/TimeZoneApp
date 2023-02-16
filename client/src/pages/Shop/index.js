import { useState } from "react";
import { Tabs } from "@mui/material";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { Container } from "@mui/system";
import { MyTab } from "~/styles/itemProducts";
import { ListProduct } from "~/components/ListProduct";
import { popularItems } from "~/data/popularItems";
import { Method } from "~/components/Method";

function Shop() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <SecondaryBanner title="Watch shop" />
            <Container sx={{ mt: 20 }}>
                <Tabs value={activeTab} onChange={(e, value) => setActiveTab(value)}>
                    <MyTab value={0} label="NewestArrivals" />
                    <MyTab value={1} label="Price High to Low" />
                    <MyTab value={2} label="Most Popular" />
                </Tabs>
                <ListProduct list={popularItems} />
            </Container>
            <Method />
        </>
    );
}

export default Shop;
