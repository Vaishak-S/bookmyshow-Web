import React from "react";
import { BiChevronRight,BiSearch,BiMenu,BiChevronDown } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-grey-400 text-xs flex items-center">
                        Trivandrum <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full"/>
                </div>
            </div>
        </>
    )

};

const NavMd = () => {
    return (
        <div className="w-full flex item-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input 
            type="search" 
            className="w-full bg-transparent border-none focus:outline-none" 
            placeholder="Search for movies, events, plays, sports and activities"/>
        </div>
    )
};

const NavLg = () => {
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img 
                    src="https://content3.jdmagicbox.com/comp/indore/17/0731p731std1520617/catalogue/bookmyshow-com-indore-gpo-indore-internet-websites-for-cinema-ticketing-2q4a249.jpg"
                    alt="Logo" 
                    className="w-full h-full"/>
                </div>
                <div className="w-full flex item-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch />
                    <input 
                        type="search" 
                        className="w-full bg-transparent border-none focus:outline-none" 
                        placeholder="Search for movies, events, plays, sports and activities"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-grey-00 text-xs flex items-center hover:text-white cursor-pointer">
                    Trivandrum <BiChevronDown />
                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                    Sign in
                </button>
                <div className="h-8 w-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
        </>
    )
};

const Navbar = () => {
    return (
    <>
    <nav className="bg-bms-700 p-4">

        /*Mobile Screen*/
        <div className="md:hidden "> 
            <NavSm />
        </div>

        /*Tablet Screen*/
        <div className="hidden md:flex lg:hidden">
            <NavMd /> 
        </div>

        /*Laptop Screen*/
        <div className="hidden lg:flex">
            <NavLg /> 
        </div>

    </nav>
    </>
    )
};

export default Navbar;