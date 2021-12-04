import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onAdd, onDelete, handleAddLike}) {

  const allToys = toys.map(toy => {
    return <ToyCard 
      key={toy.id} 
      toy={toy} 
      onAdd={onAdd} 
      onDelete={onDelete} 
      handleAddLike={handleAddLike}
    />
  })

  return (
    <div id="toy-collection">{allToys}</div>
  );
}

export default ToyContainer;
