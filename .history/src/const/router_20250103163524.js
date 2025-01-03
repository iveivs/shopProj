import { MainPage } from "@/pages/MainPage";
import { PizzasPage } from "@/pages/PizzasPage";
import { RollsPage } from "@/pages/RollsPage";

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
        element: <RollsPage />
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