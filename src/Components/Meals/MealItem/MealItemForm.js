import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
// import cartContext from "../../../State/cart-context";

const MealItemForm = props => {
    // const ctxCart = useContext(cartContext);
    const amountInputRef = useRef();
    const [amountEnteredIsValid, setAmountEnteredIsValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let amountEntered = amountInputRef.current.value;
        amountEntered = +amountEntered;
        if (amountEntered < 1 || amountEntered > 4) {
            setAmountEnteredIsValid(false);
            return;
        }

        props.onAddItemHandler(amountEntered);
        // console.log(amountEntered);

    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '4',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountEnteredIsValid && <p>{"Invalid Entry"}</p>}
        </form>
    );
}

export default MealItemForm;