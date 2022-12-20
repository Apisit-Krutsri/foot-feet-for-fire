import React from "react";
import CardComponent from "./cardComponent";

const CardList = (props) => {
  return (
    <div>
      {/* <ul className='grid grid-cols-5'> */}
      <ul className='flex flex-wrap justify-center'>
        {props.cardActivity.map((data) => (
          <CardComponent
            key={data.id}
            uuid={data.uuid}
            date={data.date}
            title={data.title}
            sport={data.sport}
            firstTime={data.firstTime}
            toTime={data.toTime}
            description={data.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
