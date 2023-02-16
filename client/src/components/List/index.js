import { useState } from "react";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";

import { TablePaginationActions } from "~/utils/TablePaginationActions";
import { useStyles } from "~/styles/cart";

function List({ list, item }) {
    const ListItem = item;

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const subtotalList = list.reduce((prev, curr) => Number(prev) + curr.total, [0]);
    return (
        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ maxWidth: "100%" }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell className={classes.blueText} scope="col">
                            Product
                        </TableCell>
                        <TableCell className={classes.blueText} scope="col" align="right">
                            Price
                        </TableCell>
                        <TableCell className={classes.blueText} scope="col" align="right">
                            Quantity
                        </TableCell>
                        <TableCell className={classes.blueText} scope="col" align="right">
                            Total
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return <ListItem key={row.id} row={row} />;
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            sx={{
                                ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows": {
                                    margin: 0,
                                },
                            }}
                            rowsPerPageOptions={[3, 5, 7]}
                            count={list.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    "aria-label": "rows per page",
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
                <TableFooter>
                    <TableRow>
                        <TableCell className={classes.primaryText} colSpan={3} align="right">
                            Subtotal:
                        </TableCell>
                        <TableCell className={classes.primaryText} colSpan={2} align="right">
                            $ {subtotalList}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default List;
