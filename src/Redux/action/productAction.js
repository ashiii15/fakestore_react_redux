import { actionType } from "../constant/actionType"

export const setProducts =(products)=>{
    return {
        type :actionType.SET_PRODUCTS,
        payload : products
    }
   
}