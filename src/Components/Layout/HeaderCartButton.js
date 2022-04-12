import React, { useContext } from "react";
import cartContext from "../../State/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {

    const cartContextObject = useContext(cartContext);
    const totalCartItems = cartContextObject.items.reduce((accumulator, item) => {
        return accumulator + item.amount;
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;