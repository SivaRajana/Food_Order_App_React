import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import cartContext from "../../State/cart-context";
import CartItem from "./CartItem";

const Cart = props => {

    const cartContextObj = useContext(cartContext);

    const addItemHandler = (item) => { };
    const removeItemHandler = (id) => { }

    const cartItems = (<ul className={classes[`cart-items`]}>{cartContextObj.items.map(item => {
        return <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={addItemHandler.bind(null, item.id)}
            onAdd={removeItemHandler.bind(null, item)}>
        </CartItem>;
    })}</ul>);

    const totalAmount = cartContextObj.totalAmount.toFixed(2);
    const cartHasItems = cartContextObj.items.length > 1;

    return (
        <Model onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>&#8377; {totalAmount}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes[`button--alt`]} onClick={props.onHideCart}>Close</button>
                {cartHasItems && <button className={classes.button}>Order Now</button>}
            </div>
        </Model>
    );
}

export default Cart;