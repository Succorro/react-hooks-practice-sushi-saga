import React from "react";

function Sushi({sushi, onEatSushi}) {
  const {eaten, name, img_url, price} = sushi
  
  function handleClick(){
    if(!eaten) {
      onEatSushi(sushi)
    } else {
      alert('No more food... tubby')
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
