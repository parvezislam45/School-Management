import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 shadow-sm'>
            <div class="navbar bg-emerald-400">
                <div class="navbar-start text-white ">
                    <div class="dropdown text-white">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-white md:p-0' aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to='/academic'className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current="page">Academics</Link>
                        </li>
                        <li>
                            <Link to='/history'className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current="page">History</Link>
                        </li>
                        <li>
                            <Link to='/tutor'className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current="page">Tutor</Link>
                        </li>
                        <li>
                            <Link to='/blog'className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current="page">Blog</Link>
                        </li>
                        <li>
                            <Link to='/contract'className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current="page">Contract Us</Link>
                        </li>
                        </ul>
                    </div>
                    <h1 class=" text-md font-bold">David Online System</h1>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <Link to='/'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to='/academic'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Academics</Link>
                        </li>
                        <li>
                            <Link to='/history'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">History</Link>
                        </li>
                        <li>
                            <Link to='/tutor'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Tutor</Link>
                        </li>
                        <li>
                            <Link to='/blog'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Blog</Link>
                        </li>
                        <li>
                            <Link to='/contract'className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white' aria-current="page">Contract Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;