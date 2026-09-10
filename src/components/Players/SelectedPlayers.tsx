import  { type Dispatch, type SetStateAction } from 'react';
import type { iplayer } from '../../Types/Player';
import { TbTrash } from 'react-icons/tb';

interface IselectedPlayersProps{
   selectedPlayers : iplayer[];
setSelectedPlayers : Dispatch<SetStateAction<iplayer[]>>;
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers} : IselectedPlayersProps) => {

    console.log(selectedPlayers)
   const handleRemovePlayer = (player: iplayer) => {
    const restPlayers = selectedPlayers.filter(
        selectedPlayer => selectedPlayer.playname !== player.playname
    );

    setSelectedPlayers(restPlayers);
};

    return (
        <div className='grid grid-cols-1 gap-7 mt-6'>
            {
                selectedPlayers.map( (player :  iplayer) => {
                    return (
                        <div className='flex gap-2  justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4'>
                            <div className='flex gap-2'>
                                <img src={player.playerImg} alt=""  className='h-15 w-15  rounded-2xl'/>
                                <div>
                                    <h2 className='font-bold text-2xl'>{player.playname}</h2>
                                    <p>{player.playerType}</p>
                                </div>
                            </div>
                            <span className='text-red-500 font-bold ' onClick={() => handleRemovePlayer(player)}>
                                <TbTrash />
                            </span>
                        </div>
                    )
                } )
            }
        </div>
    );
};

export default SelectedPlayers;