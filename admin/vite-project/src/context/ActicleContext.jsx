import { createContext} from "react";
import request from "../utils/HTTP";
export const ActicleContext = createContext({})

export const ActicleProvier = ({ children }) => {
    const getData = ((callback) => {
        request.get('Products')
            .then((res) => {
                return res.data
            })
            .then(callback)
    })
    return <ActicleContext.Provider value={{getData}}>
        {children}
    </ActicleContext.Provider>
}