import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { BlogPost } from "~/components/BlogPost";
import { InputWidget } from "~/components/InputWidget";
import { ButtonPagination } from "~/styles/blog";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Category } from "~/components/Category";
import { RecentPost } from "~/components/RecentPost";
import { blogPosts } from "~/data/blogPosts";

function BLog() {
    return (
        <>
            <SecondaryBanner title="Blog" />
            <Container sx={{ mt: "100px" }}>
                <Grid container justifyContent="space-between" columnSpacing={4}>
                    <Grid xl={8} lg={8} md={12} sm={12}>
                        <Grid container rowSpacing={8} justifyContent="center">
                            {blogPosts.map((item, index) => (
                                <Grid key={index}>
                                    <BlogPost item={item} />
                                </Grid>
                            ))}
                            <Grid marginBottom={10}>
                                <ButtonPagination>
                                    <ArrowBackIosIcon />
                                </ButtonPagination>
                                <ButtonPagination className="active">2</ButtonPagination>
                                <ButtonPagination>3</ButtonPagination>
                                <ButtonPagination>
                                    <ArrowForwardIosIcon />
                                </ButtonPagination>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xl={4} lg={4} md={12} sm={12}>
                        <InputWidget placeholder="Search keyword" buttonText="SEARCH" />
                        <Category />
                        <RecentPost />
                        <InputWidget title="Newsletter" placeholder="Enter email" buttonText="SUBSCRIBES" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default BLog;
