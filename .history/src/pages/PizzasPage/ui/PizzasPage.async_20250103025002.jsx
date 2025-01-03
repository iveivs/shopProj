import { lazy } from "react";

const RollsPageAsync =  lazy(() => import("./PizzasPage"))

export { PizzasPageAsync }