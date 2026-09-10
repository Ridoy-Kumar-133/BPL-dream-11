import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/Players/Players";
import type { iplayer } from "./Types/Player";

const playersFetch =  async () : Promise<iplayer[]> =>{
   const res = await fetch("/public/Data.json");
   const data = await res.json();
   return data;
}

function App() {

//  const playersPromise = playersFetch();

 const [playersPromise] = useState( ()=> playersFetch() );

 const [coin, setCoin] = useState(2500)


  return (
    <div className="container mx-auto px-4">
    <Nav coin = {coin} ></Nav>
    <Banner></Banner>
    <Suspense fallback = { <h2>Loading...........</h2> }  >
    <Players playersPromise={playersPromise} coin = {coin} setCoin = {setCoin} ></Players>
    </Suspense>
    </div>
  )
}

export default App
