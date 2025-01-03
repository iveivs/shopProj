import { lazy } from "react";

const OthersPageAsync =  lazy(() => import("./NotFoundPage"))

export { OthersPageAsync }