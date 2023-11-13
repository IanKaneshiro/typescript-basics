import React, { useState } from "react";
import { v4 as getId } from "uuid";
import ShoppingList from "./components/ShopingList";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";
function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log("Made it to the app component");
    setItems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
