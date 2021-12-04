import React, { useState } from "react";

function ToyCard({toy,onDelete, handleAddLike}) {

  const {id, name, image, likes} = toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={()=>handleAddLike(toy)} >Like {"<3"}</button>
      <button className="del-btn" onClick={()=>onDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
