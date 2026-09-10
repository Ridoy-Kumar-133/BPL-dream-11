import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { iplayer } from "../../Types/Player";
import { FaUser, FaGlobe, FaBaseballBall } from "react-icons/fa";
import { toast } from "react-toastify";


interface IPlayerCardProps{
    players : iplayer;
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>
    selectedPlayers : iplayer[];
    setSelectedPlayers : Dispatch<SetStateAction<iplayer[]>>;
}


const PlayerCard = ({ players, coin, setCoin , selectedPlayers , setSelectedPlayers }: IPlayerCardProps) => {

  const [isSelected, setIsSelected ] = useState(false);

  const handleSelectPlayer = () =>{
     setIsSelected(true);

     const newCoinPrice = coin - players.price;
     if(newCoinPrice >= 0){
       setCoin(newCoinPrice);
       toast.success(`${players.playname} is purchase successfully`);
     }else{
      toast.error("Coin is not enough to purchase")
     }

     // selected players logic
  setSelectedPlayers([...selectedPlayers,players ])

  }

 
  return (
    <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={players.playerImg}
          alt={players.playname}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-md">
            {players.playerType}
          </span>
        </div>
      </figure>

      {/* Card Body */}
      <div className="p-5">

        {/* Player Name */}
        <div className="mb-4 flex items-center gap-2">
          <FaUser className="text-primary" />

          <h2 className="text-xl font-bold">
            {players.playname}
          </h2>
        </div>

        {/* Origin */}
        <div className="mb-5 flex items-center gap-2 text-sm text-base-content/70">
          <FaGlobe />
          <span>{players.origin}</span>
        </div>

        <div className="divider my-2"></div>

        {/* Player Details */}
        <div className="grid grid-cols-2 gap-4 py-3">

          <div>
            <p className="text-xs font-medium uppercase text-base-content/50">
              Batting
            </p>

            <p className="mt-1 font-semibold">
              {players.battingStyle}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase text-base-content/50">
              Bowling
            </p>

            <p className="mt-1 font-semibold">
              {players.bowlingStyle}
            </p>
          </div>

        </div>

        <div className="divider my-2"></div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between gap-4">

          <div>
            <p className="text-xs text-base-content/50">
              Player Price
            </p>

            <h2 className="text-2xl font-extrabold text-primary">
              ${players.price.toLocaleString()}
            </h2>
          </div>

          <button
          onClick={ () =>handleSelectPlayer() }
           className={`btn btn-primary rounded-xl px-5`}
           disabled={isSelected === true ? true : false}
           >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;