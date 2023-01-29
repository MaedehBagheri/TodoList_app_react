
import styles from "./navbar.module.css";
import { useProduct } from "./provider/providers";

const Navbar =()=>{
 const product=useProduct();
 const totlaItems=product.filter((p)=> p.quantity>0).length;
    return(
<header className={styles.nav} >

    <h2>mawland shopping</h2>
    <span>{totlaItems}</span>
</header>
    )
}

export default Navbar;