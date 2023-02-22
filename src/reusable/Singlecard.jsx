import React from "react";

const SingleCard = (props) => {
  const { title, data, icon } = props.item;
  return (
    <div className="single__card">
      <div className="card__content">
        <h4>{title}</h4>
        <span>{data}</span>
      </div>

      <span className="card__icon">
        <i class={icon}></i>
      </span>
    </div>
  );
};

export default SingleCard;