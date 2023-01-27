import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddUser = lazy(() => import("./pages/AddNewUser"));
const User = lazy(() => import("./pages/UserList"));
const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/adduser", component: AddUser },
    { path: "/users", component: User }
]

export default routes;
