import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import { SecondaryBanner } from "~/components/Banner/SecondaryBanner";
import { MyHeading } from "~/styles/about";
import { MyTypography } from "~/styles/footer";

function About() {
    return (
        <>
            <SecondaryBanner title="About us" />
            <Container sx={{ mt: 20 }}>
                <Grid container rowSpacing={8}>
                    <Grid xl={9}>
                        <MyHeading variant="h4">Our Mission</MyHeading>
                        <br />
                        <MyTypography variant="subtitle2">
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna
                            aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor
                            maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
                            lacus.
                        </MyTypography>
                        <br />
                        <MyTypography variant="subtitle1">
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
                            viverra sebfd dho eiusmod tempor maecenas accumsan.
                        </MyTypography>
                    </Grid>
                    <Grid xl={9}>
                        <MyHeading variant="h4">Our Vision</MyHeading>
                        <br />
                        <MyTypography variant="subtitle2">
                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna
                            aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor
                            maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
                            lacus.
                        </MyTypography>
                        <br />
                        <MyTypography variant="subtitle1">
                            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
                            viverra sebfd dho eiusmod tempor maecenas accumsan.
                        </MyTypography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default About;
