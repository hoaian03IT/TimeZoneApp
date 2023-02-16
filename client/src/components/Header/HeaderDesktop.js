import { NavLink as LinkRouter } from "react-router-dom";
import { MyList } from "~/styles/appbar";
import { publicRoutes } from "~/routes";
import { Logo } from "../Logo";
import { MyLink } from "~/styles/global";

function HeaderDesktop() {
    return (
        <>
            <Logo />
            <MyList type="row">
                {publicRoutes.map((route, index) => {
                    if (route.name) {
                        let name = route.path.slice(1);
                        name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
                        return (
                            <MyLink
                                key={index}
                                component={LinkRouter}
                                to={route.path}
                                sx={{ "&.active": { color: "red" } }}>
                                {name}
                            </MyLink>
                        );
                    }
                    return null;
                })}
            </MyList>
        </>
    );
}

export { HeaderDesktop };
