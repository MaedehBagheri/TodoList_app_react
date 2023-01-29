import ProductList from "./ProductList";
import Navbar from "./Navbar";
import "./App2.css"
import Wrapper from "./wrapper";
import ProductProvider from "./provider/providers";
import Filter from "./Filter";
import Search from "./serach";
const App2 =()=>{


        return(
            <>
      <ProductProvider>
      <Navbar />

<div className="main">
<Search /> 
            <Filter />
</div>

        <ProductList
         />
      </ProductProvider>
    
            </>
            )}









export default Wrapper(App2,"container");