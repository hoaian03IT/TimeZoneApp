import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <DefaultLayout>
                                <Page />
                            </DefaultLayout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
