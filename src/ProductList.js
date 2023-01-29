
import Product from "./product";
import { useContextAction, useProduct } from "./provider/providers";





const ProductList =(props)=>{
   const products =useProduct();
   const dispatch=useContextAction();


const renderProduct =()=>{

   if(products.length === 0) return <div>no product</div>;

   return products.map((product,index)=>{
             
      return <Product 
      onIncrement={()=>dispatch({type:"increment", id:product.id})}
      onDecrement={()=>dispatch({type:"decrement", id:product.id})}
     product={product}
        key={index}
        onChange={(e)=>dispatch({type:"change", id:product.id ,event:e})}
        onDelete={()=>dispatch({type:"remove", id:product.id})}
        /> })}

        return(
         <div>
           { !products.length && <div> oops!</div>}
               {renderProduct()}
         </div>
        );
        }



export default ProductList;