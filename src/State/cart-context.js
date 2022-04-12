import React from "react";

const cartContext = React.createContext({
    item: [],
    addItem: (item) => { },
    deleteItem: (id) => { }
})

export default cartContext;