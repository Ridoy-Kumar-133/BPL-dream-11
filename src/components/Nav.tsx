
import { AiFillDollarCircle } from "react-icons/ai";
import logo from "../assets/logo.png";


const Nav = ({coin} : { coin : number}) => {

    

    return (
        <nav className="bg-red-100">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>

                <h2 className="font-bold text-3xl text-black-500 flex gap-1 items-center"><AiFillDollarCircle />{coin}</h2>
                
            </div>
        </nav>
    );
};

export default Nav;
