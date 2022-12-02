import React from "react";
import CardComponent from "./cardComponent";

const CardList = (props) => {
  return (
    <div>
      <ul className='grid grid-cols-5'>
        {props.cardActivity.map((data) => (
          <CardComponent
            key={data.id}
            id={data.id}
            date={data.date}
            name={data.name}
            sport={data.sport}
            description={data.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
