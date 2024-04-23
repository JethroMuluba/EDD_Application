import React, { useEffect, useRef, useState } from 'react'
import data from '../data/data.json';
import { Link } from 'react-router-dom';

function HeaderActions() {

    const [toggleAvatar, setToggleAvatar] = useState(false);
    const toggleRef = useRef(null);

    const [toggleAdd, setToggleAdd] = useState(false)
    const toggleRef2 = useRef(null);

    const toggleMenu = () => {
        setToggleAvatar(!toggleAvatar);
    };

    const toggleMenuAdd = () => {
        setToggleAdd(!toggleAdd);
    };

    useEffect (() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setToggleAvatar(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect (() => {
        const handleClickOutside2 = (event) => {
            if (toggleRef2.current && !toggleRef2.current.contains(event.target)) {
                setToggleAdd(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside2);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside2);
        };
    }, []);


    return (
        <div className='flex justify-between gap-[23px] items-center'>
            
            <div ref={toggleRef2} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                
                    <img src={data.icones[6].add} alt="Add Icone" onClick={toggleMenuAdd} className='m-auto active:shadow-md active:rounded-full' />

                {toggleAdd && (
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-150 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        {/* px-[10px] py-[10px] */}
                        <li>
                            <Link to={'/Paramètres'} className='flex items-center gap-2 '>
                                <img src={data.icones[1].icone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Revenu</p>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Login'} className='flex items-center gap-2 '>
                                <img src={data.icones[1].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Dépenses</p>
                            </Link>
                        </li>

                    </ul>
                )}

            </div>


            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <div ref={toggleRef} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                
                <img className='w-8 h-8 rounded-full' onClick={toggleMenu} src={data.icones[6].userAvatar} alt="User Avatar" />
                {toggleAvatar && (
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-150 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        {/* px-[10px] py-[10px] */}
                        <li>
                            <Link to={'/Paramètres'} className='flex items-center gap-2 '>
                                <img src={data.tableData[0].editeIcone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Profil</p>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Login'} className='flex items-center gap-2 '>
                                <img src={data.icones[5].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Quittez</p>
                            </Link>
                        </li>

                    </ul>
                )}

            </div>
</div>
    )
}

export default HeaderActions