import React from "react";

const cartContext = React.createContext({
    items: [],
    addItem: (item) => { },
    deleteItem: (id) => { },
    amount: 4
})

export default cartContext;