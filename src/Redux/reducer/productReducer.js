import { actionType } from "../constant/actionType";
const initialState ={
    products:[]
}
export const productReducer =(state={initialState},{type,payload})=>{
    switch (type) {
        case actionType.SET_PRODUCTS:
            return state
            
        default:
            state;
    }

}