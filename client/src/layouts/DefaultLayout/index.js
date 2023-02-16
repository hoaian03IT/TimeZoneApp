import { Box } from "@mui/system";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ScrollToTop } from "~/components/ScrollToTop";
import { heightHeader } from "~/styles/global";

function DefaultLayout({ children }) {
    return (
        <div>
            <ScrollToTop />
            <Header />
            <Box maxWidth sx={{ marginTop: heightHeader }}>
                {children}
            </Box>
            <Footer />
        </div>
    );
}

export { DefaultLayout };
