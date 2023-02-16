import { Link as LinkRouter } from "react-router-dom";
import { routes } from "~/config";
import { Box } from "@mui/system";
import { MyLink } from "~/styles/global";
import { imgs } from "~/assets/image";

function Logo() {
    return (
        <MyLink component={LinkRouter} to={routes.home}>
            <Box component="img" src={imgs.logo} alt="TimeZone-Logo" />
        </MyLink>
    );
}

export { Logo };
