import React,{useState} from "react";
import Item from "./Item";
// import items from "../data/items";

// function ShoppingList( {id, name, category}= items ) {
//  const filteringItems = items.filter((category)=> value === category )
//   const selectedCategory [currentSelectedItem, changeSelectedItem] = useState(true)
//   function changeSelectedItem(){
//   }
function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");


//   function handleFilterChange(e){
//   const newArray = [...items]
//   newArray.filter(){
//     if (e.target.value === newArray.category){
//       return{ 
//         e.target.value
//       }
//     }
//   }
// }

  function handleFilterChange(e) {
    setFilterBy(e.target.value);
    items.map((item) =>{
    console.log(filterBy)
      
      if(e.target.value === filterBy){
        return{
        ...items
      }}
    })
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilterChange} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
