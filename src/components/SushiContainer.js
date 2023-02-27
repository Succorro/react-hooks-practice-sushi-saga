import React,{useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiArr, onEatSushi}) {
  const [sushiIndex, setSushiIndex]= useState(0);

  function handleClickMore(){
    setSushiIndex((sushiIndex) => (sushiIndex + 4))
  }
  
  return (
    <div className="belt">
      {sushiArr.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
      return (<Sushi key={sushi.id} onEatSushi={onEatSushi} sushi={sushi} 
      />)})}
      <MoreButton onClickMore= {handleClickMore} />
    </div>
  );
}

export default SushiContainer;
