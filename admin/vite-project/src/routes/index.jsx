import HomePage from "../pages/home/home"
import Order from "../pages/order/Order"
import User from "../pages/user/User"
import Product from "../pages/product/Product"
import Banner from "../pages/banner/Banner"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"


export const publicRoutes = [
    { path:'/', component:HomePage},
    { path:'/Order', component:Order},
    { path:'/User', component:User},
    { path:'/Product', component:Product},
    { path:'/Banner', component:Banner,layout: null},
]