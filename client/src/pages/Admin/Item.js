import { IconButton, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteProduct } from "~/redux/actions";
import { useContext } from "react";
import { AdminContext } from ".";

function Item({ product }) {
    const dispatch = useDispatch();

    const { setInfoModel, setOpenModel } = useContext(AdminContext);

    const handleEditProduct = () => {
        setOpenModel(true);
        setInfoModel({
            _id: product._id,
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            price: product.price,
            image: product.image,
            type: "update",
        });
    };

    const handleDeleteProduct = () => {
        dispatch(deleteProduct.deleteProductRequest(product._id));
    };

    return (
        <ListItem sx={{ borderBottom: "1px solid #ddd" }}>
            <ListItemAvatar>
                <Box
                    sx={{
                        mr: 4,
                        width: 100,
                        height: 100,
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    component="img"
                    src={product.image}
                    alt=""
                />
            </ListItemAvatar>
            <ListItemText
                sx={{
                    mr: 6,
                    maxWidth: 100,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                {product.name}
            </ListItemText>
            <ListItemText
                sx={{
                    width: 300,
                    mr: 10,
                }}>
                {product.description}
            </ListItemText>
            <ListItemText>Price: {product.price} $</ListItemText>
            <ListItemText>Quantity: {product.quantity}</ListItemText>
            <ListItemIcon>
                <IconButton onClick={handleEditProduct}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={handleDeleteProduct}>
                    <DeleteOutlineIcon />
                </IconButton>
            </ListItemIcon>
        </ListItem>
    );
}

export default Item;
