import { useState } from "react";
import { useContextAction } from "./provider/providers";

const Search =()=>{
const dispatch =useContextAction();
    const [value,setValue]=useState("");
    const changeHandler=(e)=>{
        dispatch({type:"search",event:e})
        setValue(e.target.value)
    };


    return(
        <div>
           
          
           <input
           type="text"
           placeholder="search for"
           onChange={changeHandler}
           value={value}/>
           
        </div>
    )
}

export default Search;