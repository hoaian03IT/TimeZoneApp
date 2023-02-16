import Contact from "~/pages/Contact";
import Home from "~/pages/Home";

import { routes } from "~/config";
import About from "~/pages/About";
import Latest from "~/pages/Latest";
import BLog from "~/pages/Blog";
import Shop from "~/pages/Shop";
import Login from "~/pages/Login";
import SignUp from "~/pages/SignUp";
import CartList from "~/pages/CartList";
import Admin from "~/pages/Admin";

export const publicRoutes = [
    { path: routes.home, component: Home, name: true },
    { path: routes.shop, component: Shop, name: true },
    { path: routes.about, component: About, name: true },
    { path: routes.latest, component: Latest, name: true },
    { path: routes.blog, component: BLog, name: true },
    { path: routes.contact, component: Contact, name: true },
    { path: routes.login, component: Login },
    { path: routes.signUp, component: SignUp },
    { path: routes.cartList, component: CartList },
    { path: routes.admin, component: Admin },
];
