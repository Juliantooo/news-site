import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import hamburgerIcon from '../assets/images/hamburger-menu.svg'
import logo from '../assets/images/logo gnews.png'

export const Header = ({onSidebarToogle}) => {
    const history = useHistory();

    const handleClick = () =>{
        history.push('/')
    }

    return (
        <div
            className="
            w-full
            flex flex-row
            items-center
            justify-between
            h-16
            shadow-lg
            px-5
            md:px-16
            xl:px-28
            sticky
            top-0
            z-10
            bg-gray-800
            text-white
            "
        >
            <img src={logo} onClick={handleClick} alt="site-logo" className="cursor-pointer w-12 h-10 md:h-12 md:w-16 rounded-full" />
            <div className="hidden lg:flex flex-row space-x-10 text-base font-semibold">
                <Link to="/indonesia">Indonesia</Link>
                <Link to="/programing">Programing</Link>
                <Link to="/covid">Covid</Link>
                <Link to="/saved">Saved</Link>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 md:space-x-4">
                <input type="text" className="text-black h-8 md:h-10 rounded w-44 md:w-56 px-3" name="keyword" id="search" />
                <button className="px-2 md:px-4 h-8 md:h-10 text-white bg-red-500 hover:bg-blue-500 rounded">
                    <p>Search</p>
                </button>
            </div>
            <img
                className="w-6 h-6 cursor-pointer block lg:hidden"
                src={hamburgerIcon}
                alt="hamburger-menu"
                onClick={onSidebarToogle}
            />
        </div>
    )
}
