import { List } from "@mui/material";
import Item from "./Item";

function ListProduct({ products }) {
    return (
        <List
            sx={{
                width: "100%",
                height: 360,
                border: "1px solid #ddd",
                overflow: "hidden",
                overflowY: "scroll",
            }}>
            {products.map((product) => (
                <Item key={product._id} product={product} />
            ))}
        </List>
    );
}

export default ListProduct;
