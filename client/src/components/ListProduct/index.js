import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ItemProduct } from "./ItemProduct";

function ListProduct({ list }) {
    return (
        <Grid container columnSpacing={4} justifyContent="center" mt={10}>
            {list.map((item, index) => (
                <ItemProduct key={index} item={item} />
            ))}
        </Grid>
    );
}

export { ListProduct };
