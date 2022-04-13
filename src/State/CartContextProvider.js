import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartContextReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        console.log(prevState);
        const updatedItems = prevState.items.concat(action.item);
        const updatedtotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
        return (
            {
                items: updatedItems,
                totalAmount: updatedtotalAmount
            }
        );
    }
    if (action.type === 'REMOVE') {

    }
    return defaultState;
}


const CartContextProvider = (props) => {

    const [cartContextState, dispatchCartContextState] = useReducer(cartContextReducer, defaultState);

    const addItemHandler = (item) => {
        // console.log(item);
        dispatchCartContextState({ type: "ADD", item: item });
    };

    const delteItemHandler = (id) => {
        dispatchCartContextState({ type: "REMOVE", id: id });
    };

    const helperContexValue = {
        items: cartContextState.items,
        addItem: addItemHandler,
        deleteItem: delteItemHandler,
        totalAmount: cartContextState.totalAmount
    }

    return <cartContext.Provider value={helperContexValue}>{props.children}</cartContext.Provider>
}

export default CartContextProvider;