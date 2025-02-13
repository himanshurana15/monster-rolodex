// import { Component } from "react";
// import Card from "../card/card.component";
import "./card.styles.css";


const Card = ({monster}) => {
  const {name,email,id,}= monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
}

export default Card;
