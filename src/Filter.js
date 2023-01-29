import { useState } from "react";
import { useContextAction } from "./provider/providers";
import "./App2.css"


const Filter=()=>{
const dispatch =useContextAction();
const [value,setValue] =useState("");


const filterHandler=(e)=>{
    dispatch({type:"filter",event:e})
setValue(e.target.value)}
  




    return(
        <>
    <div> 
<select 
value={value}
onChange={filterHandler} 
>
    <option value="">All</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="xxL">xxL</option>
</select></div>


</>)}



export default Filter;