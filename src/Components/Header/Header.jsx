import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import './Header.css';

const Header = () => {
    return (
        <nav className="container flex justify-between items-center font-lexend max-w-[1320px] mx-auto mt-12">
            <h1 className="text-[#150B2B] text-3xl font-bold leading-10">Recipe Calories</h1>
            <ul className="flex space-x-4 md:space-x-8 lg:space-x-12 text-[#150B2BB3] text-lg font-normal leading-5">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className="flex gap-4 items-center justify-center">
                <div className="bg-[#150B2B0D] rounded-[50px] py-3 px-6 flex gap-2 justify-center items-center text-2xl">
                    <CiSearch />
                    <input type="search" placeholder="Search" className="bg-transparent text-[#150B2BB3] text-lg w-full h-full outline-none"/>
                </div>
                <button className="bg-[#0BE58A] rounded-[50px] p-2 text-2xl"><FaRegUserCircle /></button>
            </div>
        </nav>
    );
};

export default Header;