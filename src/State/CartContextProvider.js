import cartContext from "./cart-context"

const CartContextProvider = (props) => {

    const addItemHandler = () => { };
    const delteItemHandler = () => { };

    const helperContexValue = {
        items: [],
        addItem: addItemHandler,
        deleteItem: delteItemHandler,
        amount: 0
    }

    return <cartContext.Provider value={helperContexValue}>{props.children}</cartContext.Provider>
}

export default CartContextProvider;