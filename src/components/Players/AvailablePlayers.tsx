
import type { Dispatch, SetStateAction } from "react";
import type { iplayer } from "../../Types/Player";
import PlayerCard from "./PlayerCard";


interface IAvailableProps{
    players : iplayer[];
    coin : number;
    setCoin : Dispatch<SetStateAction<number>>;
    selectedPlayers : iplayer[];
    setSelectedPlayers : Dispatch<SetStateAction<iplayer[]>>;
}

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers , setSelectedPlayers  } : IAvailableProps) => {
    
    return (
        <div className="grid grid-cols-3 gap-7 container mx-auto">
            {players.map((player : iplayer , ind : number) => {
                return (
                  <PlayerCard 
                  key={ind}
                   players={player}
                    coin = {coin}
                     setCoin = {setCoin}
                       selectedPlayers = {selectedPlayers} 
                       setSelectedPlayers = {setSelectedPlayers}
                        ></PlayerCard>  
                );
            })}
        </div>
    );
};

export default AvailablePlayers;
