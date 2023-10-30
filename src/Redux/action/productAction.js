import { actionType } from "../constant/actionType"

export const setProducts =(products)=>{
    return {
        type :actionType.SET_PRODUCTS,
        payload : products
    }
   
}
export const selectProducts =(products)=>{
    return{
        type:actionType.SELECTED_PRODUCTS,
        payload:products
    }
}