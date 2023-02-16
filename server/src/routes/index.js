import routerAccounts from "./accounts.js";
import routerProducts from "./products.js";

function route(app) {
    app.use("/user", routerAccounts);
    app.use("/product", routerProducts);
}

export { route };
