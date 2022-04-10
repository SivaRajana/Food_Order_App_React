import React, { Fragment } from "react";
import headerImage from "../src/Assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return
    <Fragment>
        <header className={classes.header}>
            <h1>Food Order App</h1>
            <button>Cart</button>
        </header>
        <div>
            <img src={headerImage} />
        </div>
    </Fragment>
}

export default Header;