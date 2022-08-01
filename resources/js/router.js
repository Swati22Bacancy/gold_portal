import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/home/index.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/register/index.vue")
        },
        {
            path: "/verify/user/:id",
            name: "verify",
            props: true,
            component: () => import("./views/verify/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/reset/index.vue")
        },
        /**
         * Admin routes
         */
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/admin/dashboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/sales",
            name: "sales",
            component: () => import("./views/admin/sales.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/createinvoice",
            name: "createinvoice",
            component: () => import("./views/admin/createinvoice.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/quotes",
            name: "quotes",
            component: () => import("./views/admin/quotes.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/customers",
            name: "customers",
            component: () => import("./views/admin/customers.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/createcustomer",
            name: "createcustomer",
            component: () => import("./views/admin/createcustomer.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/viewcustomer/:id",
            name: "viewcustomer",
            component: () => import("./views/admin/viewcustomer.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/groups",
            name: "groups",
            component: () => import("./views/admin/groups.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/creategroup",
            name: "creategroup",
            component: () => import("./views/admin/creategroup.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/editgroup/:id",
            name: "editgroup",
            component: () => import("./views/admin/editgroup.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/viewsales",
            name: "viewsales",
            component: () => import("./views/admin/viewsales.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("./views/admin/settings.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/currencies",
            name: "currencies",
            component: () => import("./views/admin/currencies.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-currency",
            name: "createcurrency",
            component: () => import("./views/admin/createcurrency.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/edit-currency/:id",
            name: "editcurrency",
            component: () => import("./views/admin/editcurrency.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/chart-accounts",
            name: "chartaccounts",
            component: () => import("./views/admin/chartaccounts.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-account-type",
            name: "createaccounttype",
            component: () => import("./views/admin/createaccounttype.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/product-types",
            name: "producttypes",
            component: () => import("./views/admin/producttypes.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-product-type",
            name: "createproducttype",
            component: () => import("./views/admin/createproducttype.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/edit-product-type/:id",
            name: "editproducttype",
            component: () => import("./views/admin/editproducttype.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/products",
            name: "products",
            component: () => import("./views/admin/products.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-product",
            name: "createproduct",
            component: () => import("./views/admin/createproduct.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/edit-product/:id",
            name: "editproduct",
            component: () => import("./views/admin/editproduct.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/users",
            name: "users",
            component: () => import("./views/admin/users.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-user",
            name: "createuser",
            component: () => import("./views/admin/createuser.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/edit-user/:id",
            name: "edituser",
            component: () => import("./views/admin/edituser.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/roles",
            name: "roles",
            component: () => import("./views/admin/roles.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/create-role",
            name: "createrole",
            component: () => import("./views/admin/createrole.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/edit-role/:id",
            name: "editrole",
            component: () => import("./views/admin/editrole.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/assign-permission/:id",
            name: "assignpermission",
            component: () => import("./views/admin/assignpermission.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/buttons",
            name: "buttons",
            component: () => import("./views/admin/buttons.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/cards",
            name: "cards",
            component: () => import("./views/admin/cards.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/colors",
            name: "colors",
            component: () => import("./views/admin/colors.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/borders",
            name: "borders",
            component: () => import("./views/admin/borders.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/animations",
            name: "animations",
            component: () => import("./views/admin/animations.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/other",
            name: "other",
            component: () => import("./views/admin/other.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/page-not-found",
            name: "page-not-found",
            component: () => import("./views/admin/page-not-found.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/blank",
            name: "blank",
            component: () => import("./views/admin/blank.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/charts",
            name: "charts",
            component: () => import("./views/admin/charts.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/tables",
            name: "tables",
            component: () => import("./views/admin/tables.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
