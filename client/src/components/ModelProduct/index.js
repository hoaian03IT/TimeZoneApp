import { Button, CircularProgress, Input, Modal, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createProduct, updateProduct } from "~/redux/actions/productActions";
import { MyBox } from "~/styles/modelCreatePost";
import { updateToast } from "~/utils/updateToast";
import FileBase64 from "react-file-base64";
import { Box } from "@mui/system";

function ModelProduct({ details, open, onClose }) {
    const [value, setValue] = useState({
        _id: details._id || "",
        name: details.name,
        description: details.description,
        price: details.price,
        quantity: details.quantity,
        valueImage: "",
        image: details.image,
        type: details.type,
    });

    useEffect(() => {
        setValue({
            _id: details._id || "",
            name: details.name,
            description: details.description,
            price: details.price,
            quantity: details.quantity,
            valueImage: "",
            image: details.image,
            type: details.type,
        });
    }, [details]);

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.product.isLoading);

    const handleSubmit = () => {
        if (value.name !== "" && value.description !== "" && value.price !== "" && value.quantity !== "") {
            if (value.type === "create") {
                dispatch(createProduct.createProductRequest(value));
                resetForm();
            } else {
                dispatch(updateProduct.updateProductRequest(value));
            }
        } else {
            updateToast("error", "Please type all of inputs!");
        }
    };

    const resetForm = () =>
        setValue({
            name: "",
            description: "",
            price: "",
            quantity: "",
            image: "",
            valueImage: "",
            type: "create",
        });

    return (
        <Modal open={open} onClose={onClose}>
            <MyBox sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">{details?.type === "create" ? "Create Product" : "Update Product"}</Typography>

                <Input
                    type="text"
                    placeholder="Name: "
                    value={value.name}
                    onChange={(e) => setValue({ ...value, name: e.target.value })}
                />

                <Input
                    type="text"
                    placeholder="Description: "
                    value={value.description}
                    multiline={true}
                    rows={3}
                    onChange={(e) => setValue({ ...value, description: e.target.value })}
                />

                <Input
                    type="number"
                    placeholder="Price: (dollars)"
                    value={value.price}
                    onChange={(e) => setValue({ ...value, price: e.target.value })}
                />

                <Input
                    type="number"
                    placeholder="Quantity: "
                    value={value.quantity}
                    onChange={(e) => setValue({ ...value, quantity: e.target.value })}
                />

                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={value.valueImage}
                    onDone={({ base64 }) => setValue({ ...value, image: base64 })}
                />

                {value.image && <Box component="img" src={value.image} alt="" height={80} width={80} />}

                <Button variant="outlined" onClick={handleSubmit}>
                    {loading && <CircularProgress color="primary" size={24} />}
                    &ensp; SAVE
                </Button>
            </MyBox>
        </Modal>
    );
}

export default memo(ModelProduct);
