import { lazy } from "react";

const PizzasPageAsync =  lazy(() => import("./RollsPage"))

export { PizzasPageAsync }