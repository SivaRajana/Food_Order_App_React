import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import cartContext from "../../../State/cart-context";

const MealItem = (props) => {

    const ctx = useContext(cartContext);

    const onAddItemHandler = (amount) => {
        ctx.addItem(
            {
                id: props.id,
                name: props.name,
                description: props.description,
                price: props.price,
                amount: amount
            }
        )
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}><span>&#8377; </span>{props.price}</div>
            </div>
            <div>
                <MealItemForm onAddItemHandler={onAddItemHandler} />
            </div>
        </li>
    );
}

export default MealItem;