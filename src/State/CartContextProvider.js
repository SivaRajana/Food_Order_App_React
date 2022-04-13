import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartContextReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        // console.log(prevState);
        let updatedItems;
        const updatedtotalAmount = prevState.totalAmount + action.item.price * action.item.amount;

        const newItemIndex = prevState.items.findIndex((item) => action.item.id === item.id);
        console.log(action.item.id, newItemIndex);
        const newItem = prevState.items[newItemIndex];
        if (newItem) {
            const updatedItem = { ...newItem, amount: newItem.amount + action.item.amount };
            updatedItems = [...prevState.items]
            updatedItems[newItemIndex] = updatedItem;
        }
        else {
            updatedItems = prevState.items.concat(action.item);
        }
        return (
            {
                items: updatedItems,
                totalAmount: updatedtotalAmount
            }
        );
    }
    if (action.type === 'REMOVE') {
        let updatedItems;
        const indexOfRemovedItem = prevState.items.findIndex((item) => item.id === action.id);
        const updatedAmount = prevState.totalAmount - prevState.items[indexOfRemovedItem].price;
        let updatedItem = prevState.items[indexOfRemovedItem];
        if (updatedItem.amount > 1) {
            updatedItem = { ...updatedItem, amount: updatedItem.amount - 1 }
            updatedItems = [...prevState.items];
            updatedItems[indexOfRemovedItem] = updatedItem;
            return (
                {
                    items: updatedItems,
                    totalAmount: updatedAmount
                }
            )
        }
        if (updatedItem.amount === 1) {
            let updatedItems = prevState.items.filter(item => item.id !== action.id);
            return ({
                items: updatedItems,
                totalAmount: updatedAmount
            })
        }
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