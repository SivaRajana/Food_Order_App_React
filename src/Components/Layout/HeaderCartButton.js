import React, { useContext, useEffect, useState } from "react";
import cartContext from "../../State/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {

    const cartContextObject = useContext(cartContext);

    const [buttonAnimation, setButtonAnimation] = useState(false);
    const { items } = cartContextObject;


    const totalCartItems = items.reduce((accumulator, item) => {
        return accumulator + item.amount;
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonAnimation(true);

        const timer = setTimeout(() => {
            setButtonAnimation(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [items]);


    const buttonClasses = `${classes.button} ${buttonAnimation ? classes.bump : ""}`;

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;