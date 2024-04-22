import React, { useEffect, useRef, useState } from 'react'
import data from '../data/data.json';
import { Link } from 'react-router-dom';

function HeaderActions() {

    const [toggleAvatar, setToggleAvatar] = useState(false);
    const toggleRef = useRef(null);

    const toggleMenu = () => {
        setToggleAvatar(!toggleAvatar);
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


    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].add} alt="Add Icone" />
            </button>

            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <div ref={toggleRef} className='w-10 flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                <img className='w-8 h-8 rounded-full' onClick={toggleMenu} src={data.icones[6].userAvatar} alt="User Avatar" />
                {toggleAvatar && (
                    <ul className='absolute flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] px-[20px] py-[10px] text-[12px] text-[#222834] '>
                        
                        <Link to={'/Paramètres'} className='hover:bg-cyan-900 '>
                            <img src={data.tableData[0].editeIcone} alt=""  />
                        </Link>
                        
                        <span >
                        </span>

                        <Link to={'/Login'} className='hover:bg-cyan-900'>
                            <img src={data.icones[5].icone} alt=""/>
                        </Link>
                        <span >
                        </span>
                    </ul>
                )}

            </div>
</div>
    )
}

export default HeaderActions