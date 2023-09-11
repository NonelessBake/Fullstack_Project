import HomePage from "../pages/home/home"
import Order from "../pages/order/Order"
import User from "../pages/user/User"
import Product from "../pages/product/Product"
import Banner from "../pages/banner/Banner"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export const publicRoutes = [
    { path:'/admin/', component:HomePage},
    { path:'/admin/Order', component:Order},
    { path:'/admin/User', component:User},
    { path:'/admin/Product', component:Product},
    { path:'/admin/Banner', component:Banner,layout: null},
]