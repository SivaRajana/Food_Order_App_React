import React, { Fragment } from "react";
import headerImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order App</h1>
                <HeaderCartButton onClick={props.onShowCart}  />

            </header>
            <div className={classes[`main-image`]}>
                <img src={headerImage} alt="Food poster" />
            </div>
        </Fragment>
    );
}

export default Header;