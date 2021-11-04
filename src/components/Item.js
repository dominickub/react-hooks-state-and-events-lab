import React,{useState} from "react";

function Item({ name, category }) {

  const [currentClassName, changingTheClassName]= useState(true)
  const cartClass = currentClassName ? "Add to Cart" : "Remove from Cart"
  function ChangeCart(){
    changingTheClassName(add=>!add)
  }

  return (
    <li className={currentClassName ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={currentClassName ? "add" : "remove"} onClick={ChangeCart} >{cartClass}</button>
    </li>
  );
}

export default Item;
