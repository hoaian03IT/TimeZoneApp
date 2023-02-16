import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { recentPosts } from "~/data/recentPosts";
import { GridWrapper, MyDivider, MyTitle } from "~/styles/blog";
import { MyPara } from "~/styles/global";

function RecentPost() {
    return (
        <GridWrapper>
            <Typography variant="h5" sx={{ marginBottom: "12px" }}>
                Recent Posts
            </Typography>
            <MyDivider />
            {recentPosts.map((item, index) => (
                <Box key={index} display="flex" alignItems="center" padding="12px 0">
                    <Box component="img" src={item.img} alt="" />
                    <Box marginLeft="12px">
                        <MyTitle fontSize="1.1" component={Link} to={item.path}>
                            {item.title}
                        </MyTitle>
                        <MyPara>{item.createdAt}</MyPara>
                    </Box>
                </Box>
            ))}
        </GridWrapper>
    );
}

export { RecentPost };
