import { createContext, useState} from "react";

export const AppContext = createContext({})

export const AppProvier = ({children}) => {
    const [showNavi,setShowNavi] = useState(false)
    const hefPage = [
        {
            name:'Home',
            hef:'/',
            img:'/src/imgs/Billboard.png',
            status:false
        },
        {
            name:'Order',
            hef:'/Order',
            img:'/src/imgs/PurchaseOrder.png',
            status:true
        },
        {
            name:'User',
            hef:'/User',
            img:'/src/imgs/Name.png',
            status:true
        },
        {
            name:'Product',
            hef:'/Product',
            img:'/src/imgs/Product.png',
            status:true
        },
        {
            name:'Banner',
            hef:'/Banner',
            img :'/src/imgs/Billboard.png',
            status:true
        },
        {
            name:'Slider',
            hef:'/Slider',
            img :'/src/imgs/Slider.png',
            status:true
        },
        {
            name:'Brand',
            hef:'/Brand',
            img :'/src/imgs/PriceTag.png',
            status:true
        },
        {
            name:'Blog',
            hef:'/Blog',
            img :'/src/imgs/Blogger.png',
            status:true
        },
        {
            name:'Contact',
            hef:'/Contact',
            img :'/src/imgs/Contact.png',
            status:true
        }
    ]
    const handleChangeButton = () =>{
        let styleGr = {}
        setShowNavi(true)
        if (showNavi) {
            styleGr = {with:'200px'}
        }else{
            setShowNavi(false)
            styleGr = {}
        }
    }
    return <AppContext.Provider value={
        { hefPage,setShowNavi,handleChangeButton}}>
                {children}
            </AppContext.Provider>
}