import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy){
    setToys([...toys, newToy])
  }

  function deleteToy(id){
    //const updateToy = toys.filter(toy => toy.id !== id)
    //setToys(updateToy)
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(() => setToys(toys.filter((toy) => toy.id !== id)))
  }

  function incrementLike(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        likes: toy.likes +1
      })
    })
    .then(() => setToys(
      // map all toys and check the spread all object of each toy and oly chnge the like
      toys.map((t) => (t.id !== toy.id? t : {...t, likes: t.likes + 1}))
    ))
  }

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAdd={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onAdd={addToy} 
        onDelete={deleteToy} 
        handleAddLike={incrementLike}
      />
    </>
  );
}

export default App;
