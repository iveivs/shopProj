import { MainPage } from "@/pages/MainPage";

const routerNavigations = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/pizzas",
        element: <MainPage />
    },
    {
        path: "/rolls",
        element: <MainPage />
    },
    {
        path: "/others",
        element: <MainPage />
    },
    {
        path: "*",
        element: <MainPage />
    },
]