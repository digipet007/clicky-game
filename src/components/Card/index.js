import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card rounded" onClick={() => props.reorderCats(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Card;
