import React from 'react';
import { ImStatsBars } from 'react-icons/im';
import { IoMdTime } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink className={({ isActive }) => `mr-4 text-[#64748B] ${isActive ? 'text-white bg-[#244D3F]' : ""}`} to={'/'}><IoHomeOutline />Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => `text-[#64748B] mr-4 ${isActive ? 'text-white bg-[#244D3F]' : ""}`} to={'/timeline'}><IoMdTime />Timeline</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => `text-[#64748B] mr-4 ${isActive ? 'text-white bg-[#244D3F]' : ""}`} to={'/stats'}><ImStatsBars />Stats</NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-[24px] font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></a>
                </div>
                <div className="dropdown navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;