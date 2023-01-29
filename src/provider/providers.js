import React,{useContext, useReducer} from "react";
import productsData from "./data.js";
const productContext =React.createContext();
const productContextDispacher =React.createContext();


const reducer =(state,action)=>{
switch(action.type){
    case "increment":
        const index =state.findIndex((item)=> item.id === action.id);

        const product ={...state[index]}
        product.quantity++;
         const product2 =[...state];
         product2[index]=product;
    
        return product2;
        case"decrement":

        const index2 =state.findIndex((item)=> item.id === action.id);

        const product3 ={...state[index2]};
        if(product3.quantity ===1){
         const filteredProduct =state.filter((p)=> p.id !== action.id);
         return filteredProduct;
        }else{
         const product2 =[...state];
         product3.quantity--;
         product2[index2]=product3;
       return product2; }


        case"remove":
        const filtredProducts =state.filter(p=> p.id !== action.id);
     return   filtredProducts;
case "change":
    const index5=state.findIndex((item)=> item.id === action.id);


    const product4 ={...state[index5]};
    product4.title=action.event.target.value;
    
    
    const selectedProduct =[...state]
    selectedProduct[index5]=product4;
    return selectedProduct;
 
 case "filter":{

const value=action.event.target.value;
     if(value === ""){
    return productsData;
     }else{
        const sizes=productsData.filter((p)=> p.size.indexOf(value) >= 0)
        return sizes;
     }
 }

 case "search":{
    const value =action.event.target.value;
    if(value === ""){
        return state;
    }else{
        const filteredProduct =state.filter((p)=> p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProduct;
    }
 }
    default: return state;
}
}








const ProductProvider =({children})=>{
    
    const [products,dispatch]=useReducer(reducer,productsData)


return(
    <productContext.Provider value={products}>
        <productContextDispacher.Provider value={dispatch}>
            {children}
        </productContextDispacher.Provider>
    </productContext.Provider>
)




}


export default ProductProvider;

export const useProduct =()=> useContext(productContext);



export const useContextAction =()=> {
    
return useContext(productContextDispacher);



}
