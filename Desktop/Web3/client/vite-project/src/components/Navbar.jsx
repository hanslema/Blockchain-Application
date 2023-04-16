import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const Navbaritem = (title, classProps) =>   {
    return (
        <li classname='mx-4 cursor-pointer $(classProps)'>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav classname="w-full flex md:justify-center justify-between items-center p-4">
            <div classname="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" classname="w-32 cursor-pointer" />
            </div>
            <ul classname="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <Navbaritem key={item + index} title={item} /> 
                ))}
                <li classname="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div classname='flex-relative'>
                {toggleMenu
                ? <AiOutlineClose fontSize={28} classname='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/>
                : <HiMenuAlt4 fontSize={28} classname='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/>
                }
                {toggleMenu && (
                    <ul 
                    classname='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'                     
                    >
                        <li classname ='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <Navbaritem key={item + index} title={item} classProps='my-2 text-lg' /> 
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}
export default Navbar;