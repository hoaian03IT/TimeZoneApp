import { Button, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import { createContext, useCallback, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { fetchAllProduct } from "~/redux/actions";
import ModelProduct from "../../components/ModelProduct";
import ListProduct from "./ListProduct";

export const AdminContext = createContext();

function Admin() {
    const [openModel, setOpenModel] = useState(false);
    const [infoModel, setInfoModel] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        valueImage: "",
        type: "create",
    });

    const handleCloseModal = useCallback(() => setOpenModel(false), []);

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.product.isLoading);

    const products = useSelector((state) => state.product.list);

    const handleCreateProduct = () => {
        setOpenModel(true);
        setInfoModel({
            ...infoModel,
            name: "",
            description: "",
            price: "",
            quantity: "",
            image: "",
            type: "create",
        });
    };

    return (
        <AdminContext.Provider value={{ infoModel, setInfoModel, setOpenModel }}>
            <SecondaryBanner title="Admin" />
            <Container sx={{ mt: 20 }}>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            border: "1px solid #713200",
                            padding: "16px",
                            userSelect: "none",
                        },
                    }}
                />
                <Grid container rowSpacing={8}>
                    <Button
                        sx={{ margin: "30px" }}
                        variant="contained"
                        color="info"
                        onClick={() => {
                            dispatch(fetchAllProduct.fetchAllProductRequest());
                        }}>
                        {loading && <CircularProgress color="white" size={16} />}
                        &ensp; FETCH All PRODUCTS
                    </Button>
                    <Button sx={{ margin: "30px" }} variant="contained" color="info" onClick={handleCreateProduct}>
                        CREATE A PRODUCT
                    </Button>
                    <Grid xl={12}>{products.length > 0 && <ListProduct products={products} />}</Grid>
                </Grid>

                <ModelProduct details={infoModel} open={openModel} onClose={handleCloseModal} />
            </Container>
        </AdminContext.Provider>
    );
}

export default Admin;
