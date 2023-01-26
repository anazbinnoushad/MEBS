import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddUser = lazy(() => import("./pages/AddNewUser"));

const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/adduser", component: AddUser }
]

export default routes;
