import { createContext, useState} from "react";

export const AppContext = createContext({})

export const AppProvier = ({children}) => {
    const [showNavi,setShowNavi] = useState(false)
    const hefPage = [
        {
            name:'Home',
            hef:'/admin',
            img:'/src/imgs/Billboard.png',
            status:true
        },
        {
            name:'Order',
            hef:'/admin/Order',
            img:'/src/imgs/PurchaseOrder.png',
            status:true
        },
        {
            name:'User',
            hef:'/admin/User',
            img:'/src/imgs/Name.png',
            status:true
        },
        {
            name:'Product',
            hef:'/admin/Product',
            img:'/src/imgs/Product.png',
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