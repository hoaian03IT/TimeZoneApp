import { IconButton, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ImageProduct, useStyles } from "~/styles/cart";

function CartItem({ row }) {
    const classes = useStyles();
    const handleDeleteProduct = (e) => {};

    return (
        <TableRow>
            <TableCell>
                <IconButton data-index={row.id} onClick={handleDeleteProduct}>
                    <DeleteOutlineIcon />
                </IconButton>
            </TableCell>
            <TableCell scope="col" sx={{ display: "flex", alignItems: "center" }}>
                <Box pr={4}>
                    <ImageProduct component="img" src={row.srcImg} alt="" />
                </Box>
                {row.name}
            </TableCell>
            <TableCell className={classes.blueText} scope="col" align="right">
                $ {row.price}
            </TableCell>
            <TableCell scope="col" align="right">
                {row.quantity}
            </TableCell>
            <TableCell className={classes.blueText} scope="col" align="right">
                $ {row.total}
            </TableCell>
        </TableRow>
    );
}

export { CartItem };
