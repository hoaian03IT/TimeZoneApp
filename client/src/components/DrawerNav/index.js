import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { MyIconButton, MyList, MyListItemButton } from "~/styles/appbar";
import ReorderIcon from "@mui/icons-material/Reorder";
import { publicRoutes } from "~/routes";
import { MyLink } from "~/styles/global";
import { Drawer } from "@mui/material";

function DrawerNav() {
    const [show, setShow] = useState(false);

    return (
        <>
            <MyIconButton onClick={() => setShow(!show)}>
                <ReorderIcon />
            </MyIconButton>
            <Drawer anchor="left" open={show} onClose={() => setShow(!show)}>
                <MyList sx={{ width: 160 }}>
                    {publicRoutes.map((route, index) => {
                        if (route.name) {
                            let name = route.path.slice(1);
                            name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
                            return (
                                <MyListItemButton key={index} sx={{ borderBottom: "1px solid #f0f4f1" }}>
                                    <MyLink component={LinkRouter} to={route.path} onClick={() => setShow(false)}>
                                        {name}
                                    </MyLink>
                                </MyListItemButton>
                            );
                        }
                        return null;
                    })}
                </MyList>
            </Drawer>
        </>
    );
}

export { DrawerNav };
