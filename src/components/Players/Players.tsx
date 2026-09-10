import { type iplayer } from "../../Types/Player"; // অথবা আপনার ডিক্লেয়ার করা টাইপের নাম
import { use, useState, type Dispatch, type SetStateAction } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface playersProps {
    playersPromise: Promise<iplayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: playersProps) => {
    const players = use(playersPromise);

    const [buttonType, setButtonType] = useState("selected"); // available or selected
    const [selectedPlayers, setSelectedPlayers] = useState<iplayer[]>([]);

    const handleUpdateButtonType = (type: "available" | "selected") => {
        setButtonType(type);
    };

    return (
        <div>
            <div className="flex justify-between gap-4 container mx-auto my-4">
                <h2 className="font-bold text-xl">
                    {buttonType === "available"
                        ? "Available Players"
                        : "Selected players"}
                </h2>
                <div>
                    <button
                        onClick={() => handleUpdateButtonType("available")}
                        className={`btn  ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => handleUpdateButtonType("selected")}
                        className={`btn  ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
                    >
                        Selected
                    </button>
                </div>
            </div>

            {buttonType === "available" ? (
                <AvailablePlayers
                    players={players}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                ></AvailablePlayers>
            ) : (
                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                ></SelectedPlayers>
            )}
        </div>
    );
};

export default Players;
