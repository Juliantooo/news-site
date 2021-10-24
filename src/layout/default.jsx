import React, { useState } from 'react';
import {SideNav} from '../components/sideNav';
import {Header} from '../components/header';
import Footer from '../components/footer';

export const Default = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleSideBarToggle = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div className="min-h-screen bg-gray-600 text-gray-200">
            {
                isSideBarOpen && <SideNav onSidebarToogle={handleSideBarToggle}/>
            }
            <Header onSidebarToogle={handleSideBarToggle} />
            <div className="w-full md:w-10/12 xl:w-9/12 mx-auto pt-5 pb-20 min-h-screen">
            {children}
            </div>
            <Footer/>
        </div>
    )
}
