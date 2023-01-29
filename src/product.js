import styles from "./product.module.css"

const Product =(props)=>{


    return(
        <div className={styles.product}>
           
            <p>product name : {props.product.title}</p>
            <p>price: {props.product.price}$</p>
            <span >{props.product.quantity}</span>
            <button onClick={props.onIncrement}  className={styles.btn}>+</button>
            <button onClick={props.onDecrement}  className={styles.btn}>-</button>
            <button className={styles.btn}
              onClick={props.onDelete}>delete</button>
        </div>
    )
}


export default Product;