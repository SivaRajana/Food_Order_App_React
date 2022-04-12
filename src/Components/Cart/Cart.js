import Model from "../UI/Model";
import classes from "./Cart.module.css";

const Cart = props => {

    const cartItems = (<ul>{[{ name: 'chapathi', price: 100, amount: 5, id: "c1" }].map(item => {
        return <li key={item.name}>{item.name}</li>
    })}</ul>)


    return (
        <Model onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>&#8377; 40</span>
            </div>
            <div className={classes.actions} >
                <button className={classes[`button--alt`]} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order Now</button>
            </div>
        </Model>
    );
}

export default Cart;