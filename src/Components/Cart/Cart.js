import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import cartContext from "../../State/cart-context";
import CartItem from "./CartItem";

const Cart = props => {

    const cartContextObj = useContext(cartContext);

    const addItemHandler = (item) => {
        cartContextObj.addItem({
            ...item, amount: 1
        });
    };
    const removeItemHandler = (id) => {
        cartContextObj.deleteItem(id);
    }

    const cartItems = (<ul className={classes[`cart-items`]}>{cartContextObj.items.map(item => {
        return <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
        >
        </CartItem>;
    })}</ul>);

    const totalAmount = cartContextObj.totalAmount.toFixed(2);
    const cartHasItems = cartContextObj.items.length >= 1;

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