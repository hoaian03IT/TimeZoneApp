import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router";
import { imgs } from "~/assets/image";
import { routes } from "~/config";
import { MyBox, MyImage } from "~/styles/banner";
import { MyTypography } from "~/styles/banner";
import { MySlideButton } from "~/styles/global";

function PrimaryBanner() {
    const navigate = useNavigate();
    return (
        // to fill the full width background color
        <Container maxWidth="xxl" sx={{ backgroundColor: "#f0f0f2", mb: 30 }}>
            <Container>
                <MyBox display="grid" gap={2}>
                    <Box gridColumn="span 8">
                        <MyTypography variant="h1">Select Your New Perfect Style</MyTypography>
                        <Typography variant="subtitle1">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat is aute irure.
                        </Typography>
                        <MySlideButton size="large" onClick={() => navigate(routes.shop)}>
                            SHOP NOW
                        </MySlideButton>
                    </Box>
                    <MyImage component="img" src={imgs.watchBanner} alt=""></MyImage>
                </MyBox>
            </Container>
        </Container>
    );
}

export { PrimaryBanner };
