import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import cartContext from "../../State/cart-context";

const Cart = props => {

    const cartItems = (<ul>{[{ name: 'chapathi', price: 100, amount: 5, id: "c1" }].map(item => {
        return <li key={item.name}>{item.name}</li>
    })}</ul>)

    const cartContextObj = useContext(cartContext);
    const totalAmount = cartContextObj.items.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);

    return (
        <Model onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>&#8377; {totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes[`button--alt`]} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order Now</button>
            </div>
        </Model>
    );
}

export default Cart;