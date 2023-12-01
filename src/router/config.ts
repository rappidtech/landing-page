const routes = [
    {
        path: "/",
        component: () => import("../pages/Home"),
    },
    {
        path: "/templates",
        component: () => import("../pages/Templates"),
    },
    {
        path: "/planes",
        component: () => import("../pages/Planes"),
    },
    {
        path: "/login",
        component: () => import("../pages/Login"),
    },
    {
        path: "/admin",
        component: () => import("../pages/Admin"),
    },
    {
        path: "/register",
        component: () => import("../pages/Register"),
    },
];

export default routes;
