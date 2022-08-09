import React from "react";

const StoreCards = (props) => {
  var itemData = props.items;
  console.log("Item data: " + itemData);
  return (
    <>
      <div className="card">
        <div className="card-title">{itemData.name}</div>
        <div className="card-body">{itemData.price}</div>
      </div>
    </>
  );
};

export default StoreCards;
