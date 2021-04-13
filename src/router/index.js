import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Cart = () => import("@/views/cart/cart")
const User = () => import("@/views/user/User")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/user",
    component: User
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
