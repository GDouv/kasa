import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CurrentPageProvider } from "./utils/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Error from "./pages/Error";
import "./utils/styles/index.css";

import reportWebVitals from "./reportWebVitals";

function Layout() {
    return (
        <>
            <CurrentPageProvider>
                <Header />
                <Outlet />
                <Footer />
            </CurrentPageProvider>
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: (
            <CurrentPageProvider>
                <Error />
            </CurrentPageProvider>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/a-propos",
                element: <APropos />,
            },
            {
                path: "/fiche-logement/:id",
                element: <FicheLogement />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
