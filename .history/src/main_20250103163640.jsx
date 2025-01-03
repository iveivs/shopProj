import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";
import { Suspense } from "react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MainPage />
                    </Suspense>
                ),
            },
            
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <ThemeProvider initialTheme={Theme.LIGHT}>
        <RouterProvider router={router} />
    </ThemeProvider>
);
