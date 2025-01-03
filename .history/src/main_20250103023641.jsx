import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";
import { MainPage } from "./pages/MainPage";
import { Suspense } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={}>
                        <MainPage />
                    </Suspense>
                ),
            },
            {
                path: "/pizzas",
                element: <p>Pizzas</p>,
            },
            {
                path: "/rolls",
                element: <p>Rolls</p>,
            },
            {
                path: "/others",
                element: <p>Прочие товары</p>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <ThemeProvider initialTheme={Theme.LIGHT}>
        <RouterProvider router={router} />
    </ThemeProvider>
);
