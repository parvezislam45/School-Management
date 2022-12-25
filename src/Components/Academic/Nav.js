import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
           <div class="navbar bg-slate-200">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Home</Link>
                            </li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li>Academic</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li> <Link to='/' className=' text-black rounded md:bg-transparent md:p-0' aria-current="page">Home</Link></li>
                        <li className='px-8'>Academic</li>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Nav;