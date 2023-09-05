import { createContext} from "react";

export const AppContext = createContext({})

export const AppProvier = ({children}) => {
    const hefPage = [
        {
            name:'Home',
            hef:'/',
            img:'/src/imgs/Billboard.png'
        },
        {
            name:'Order',
            hef:'/Order',
            img:'/src/imgs/PurchaseOrder.png'
        },
        {
            name:'User',
            hef:'/User',
            img:'/src/imgs/Name.png'
        },
        {
            name:'Product',
            hef:'/Product',
            img:'/src/imgs/Product.png'
        },
        {
            name:'Banner',
            hef:'/Banner',
            img :'/src/imgs/Billboard.png'
        },
        {
            name:'Slider',
            hef:'/Slider',
            img :'/src/imgs/Slider.png'
        },
        {
            name:'Brand',
            hef:'/Brand',
            img :'/src/imgs/PriceTag.png'
        },
        {
            name:'Blog',
            hef:'/Blog',
            img :'/src/imgs/Blogger.png'
        },
        {
            name:'Contact',
            hef:'/Contact',
            img :'/src/imgs/Contact.png'
        }
    ]
    
    return <AppContext.Provider value={
        { hefPage }}>
                {children}
            </AppContext.Provider>
}