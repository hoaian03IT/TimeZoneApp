import { Grid, List, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link as LinkRouter } from "react-router-dom";
import { routes } from "~/config";
import { MyTypography } from "~/styles/footer";
import { MyLink } from "~/styles/global";
import { MyLink as MyLinkFooter } from "~/styles/footer";
import { Logo } from "../Logo";
import { theme } from "~/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const listLink = [
    {
        heading: "Quick Links",
        links: [
            { title: "About", path: routes.home },
            { title: "Offers & Discounts", path: routes.home },
            { title: "Get Coupon", path: routes.home },
            { title: "Contact Us", path: routes.home },
        ],
    },
    {
        heading: "New Products",
        links: [
            { title: "Woman Cloth", path: routes.home },
            { title: "Fashion Accessories", path: routes.home },
            { title: "Man Accessories", path: routes.home },
            { title: "Rubber made Toys", path: routes.home },
        ],
    },
    {
        heading: "Support",
        links: [
            { title: "Frequently Asked Questions", path: routes.home },
            { title: "Terms & Conditions", path: routes.home },
            { title: "Privacy Policy", path: routes.home },
            { title: "Report a Payment Issue", path: routes.home },
        ],
    },
];

function Footer() {
    return (
        <Container sx={{ marginTop: "200px" }}>
            <Grid container direction="row" columnSpacing={4} justifyContent="center">
                <Grid item lg={3} md={5} sm={12} xs={12}>
                    <Logo />
                    <MyTypography variant="body1" sx={{ marginTop: "40px" }}>
                        Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.
                    </MyTypography>
                </Grid>
                {listLink.map((item, index) => (
                    <Grid key={index} item lg={3} md={5} sm={12} xs={12}>
                        <MyTypography heading="true" variant="h6">
                            {item.heading}
                        </MyTypography>
                        <List>
                            {item.links.map((link, index) => (
                                <MyLink key={index} block="true" animation="true" component={LinkRouter} to={link.path}>
                                    {link.title}
                                </MyLink>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <MyTypography variant="subtitle1">
                    Copyright ©2022 All rights reserved | This template is made with{" "}
                    <FavoriteIcon className="footer-heart-icon" sx={{ color: theme.palette.primary.main }} /> by{" "}
                    <Typography variant="inherit" sx={{ color: theme.palette.primary.main, display: "inline" }}>
                        Colorlib
                    </Typography>
                </MyTypography>
                <Box>
                    <MyLinkFooter href={routes.home}>
                        <FacebookIcon />
                    </MyLinkFooter>
                    <MyLinkFooter href={routes.home}>
                        <TwitterIcon />
                    </MyLinkFooter>
                    <MyLinkFooter href={routes.home}>
                        <LinkedInIcon />
                    </MyLinkFooter>
                    <MyLinkFooter href={routes.home}>
                        <PublicIcon />
                    </MyLinkFooter>
                </Box>
            </Box>
        </Container>
    );
}

export { Footer };
