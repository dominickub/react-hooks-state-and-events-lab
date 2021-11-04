import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [initialState, changeState] = useState(true)
  const appClass = initialState ? "App dark" : "App light"
  function changeClassState() {
    
    changeState(light=>!light)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeClassState}>{ initialState ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
