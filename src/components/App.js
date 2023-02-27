import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [sushis, setSushi] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(sushis => {
      const updatedSushis = sushis.map ((sushi) => {
        return {...sushi, eaten: false}})
      setSushi(updatedSushis);
    })
  },[])

  function handleEatSushi(eatenSushi) {
    if(wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id ) 
        return {...sushi, eaten: true};
        return sushi
      });
      setSushi(updatedSushis)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert('Not enough money :(')
    }
  }

  console.log(sushis)
  const eatenSushis = sushis.filter((sushi) => sushi.eaten)
  return (
    <div className="app">
      <SushiContainer sushiArr={sushis} onEatSushi={handleEatSushi} />
      <Table wallet={wallet} plates={eatenSushis} />
    </div>
  );
}

export default App;
