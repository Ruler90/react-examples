import React from 'react';

// const FruitsInfoBox = (props) => {
// let quantityText;

// if (props.info.quantity === 0) {
//   quantityText = 'You have no fruits';
// } else {
//   quantityText = `Fruits quantity: ${props.info.quantity}`;
// }

// const quantityText = props.info.quantity === 0 ? 'You have no fruits' : `Fruits quantity: ${props.info.quantity}`;

const FruitsInfoBox = (props) => (
  <div className="fruits-info">
    <p className="fruits-info__text">
      {props.info.quantity === 0 ? 'You have no fruits'
        : `Fruits quantity: ${props.info.quantity}`}
    </p>
  </div>
);

export default FruitsInfoBox;
