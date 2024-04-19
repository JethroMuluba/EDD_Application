import React from 'react'
import data from '../data/data.json';


function HeaderActions() {
    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].add} alt="Add Icone" />
            </button>

            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <button className='m-auto active:shadow-md active:rounded-full'>
                <img className='w-8 h-8 rounded-full' src={data.icones[6].userAvatar} alt="User Avatar" />
            </button>
</div>
    )
}

export default HeaderActions