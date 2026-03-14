import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import ProductDetail from "../views/ProductDetail.vue"
import Checkout from "../views/Checkout.vue"

import AdminLayout from "../views/admin/AdminLayout.vue"
import AdminProducts from "../views/admin/AdminProducts.vue"
import AdminReports from "../views/admin/AdminReports.vue"

const routes = [

{
path: "/",
name: "home",
component: Home
},

{
path: "/product/:id",
name: "product",
component: ProductDetail
},

{
path: "/checkout",
name: "checkout",
component: Checkout,
meta: { requiresAuth: true }
},

{
path: "/admin",
component: AdminLayout,
meta: { requiresAdmin: true },

children: [

{
path: "products",
component: AdminProducts
},

{
path: "reports",
component: AdminReports
}

]

}

]

const router = createRouter({
history: createWebHistory(),
routes
})

/* Guards */

router.beforeEach((to, from, next) => {

const isAuthenticated = false
const isAdmin = false

if (to.meta.requiresAuth && !isAuthenticated) {
alert("Você precisa estar logado.")
return next("/")
}

if (to.meta.requiresAdmin && !isAdmin) {
alert("Acesso restrito ao admin.")
return next("/")
}

next()

})

export default router