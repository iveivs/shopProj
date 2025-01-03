import { lazy } from "react";

const MainPageAsync =  lazy(() => import("./PizzasPage"))

export { MainPageAsync }