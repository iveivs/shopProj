import { MainPage } from "@/pages/MainPage";
import { PizzasPage } from "@/pages/PizzasPage";

const routerNavigations = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/pizzas",
        element: <PizzasPage />
    },
    {
        path: "/rolls",
        element: <Roll />
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