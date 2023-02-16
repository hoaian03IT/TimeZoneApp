import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GridWrapper, LinkCategory, MyDivider } from "~/styles/blog";
import { routes } from "~/config";
import { listCategory } from "~/data/category";

function Category() {
    return (
        <GridWrapper>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: "12px" }}>
                    Category
                </Typography>
                <MyDivider />
                {listCategory.map((item, index) => (
                    <LinkCategory key={index} component={Link} to={routes.home}>
                        {item}
                    </LinkCategory>
                ))}
            </Box>
        </GridWrapper>
    );
}

export { Category };
