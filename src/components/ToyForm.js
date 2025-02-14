import React, {useState} from "react";

function ToyForm({onAdd}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [like, setLike] =useState(0)

  function clickAdd(e){
    e.preventDefault()
    const formData = {
      name:name,
      image:image,
      likes:like
    }
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
       "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => onAdd(data))
    setName("")
    setImage("")
    setLike(0)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={clickAdd}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
