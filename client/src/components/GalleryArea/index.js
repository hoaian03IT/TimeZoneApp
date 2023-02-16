import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import { imgsGallery } from "~/data/galleryArea";
import { MyImage } from "~/styles/galleryArea";

function GalleryArea() {
    return (
        <Container maxWidth="xxl" sx={{ mt: 30, padding: "0!important" }}>
            <Grid container justifyContent="space-between" rowSpacing={{ md: 2, sm: 2, xs: 2 }}>
                <Grid xl={9.3} lg={8.8} md={12} container justifyContent="space-between">
                    <Grid xl={7.7} lg={7.7} md={5.9} sm={5.9}>
                        <MyImage component="img" src={imgsGallery[0]} alt="gallery" />
                    </Grid>
                    <Grid xl={4} lg={4} md={5.9} sm={5.9}>
                        <MyImage component="img" src={imgsGallery[1]} alt="gallery" />
                    </Grid>
                </Grid>
                <Grid xl={2.5} lg={3} md={12} container rowSpacing={{ lg: 3, md: 5 }} justifyContent="space-between">
                    <Grid lg={12} md={5.9} sm={5.9}>
                        <MyImage component="img" src={imgsGallery[2]} alt="gallery" />
                    </Grid>
                    <Grid lg={12} md={5.9} sm={5.9}>
                        <MyImage component="img" src={imgsGallery[3]} alt="gallery" />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export { GalleryArea };
