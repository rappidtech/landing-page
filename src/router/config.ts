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
        path: "/registro",
        component: () => import("../pages/Registro"),
    },
    {
        path: "/verificacion",
        component: () => import("../pages/Verificacion"),
    },
    {
        path: "/verificada",
        component: () => import("../pages/Verificada"),
    },
    {
        path: "/welcome",
        component: () => import("../pages/Welcome"),
    },
];

export default routes;
