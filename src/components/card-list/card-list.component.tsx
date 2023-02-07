import { Monster } from "../../App";

import "./card-list.styles.css";

import Card from "../card/card.component";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  console.log("render card-list component");

  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
