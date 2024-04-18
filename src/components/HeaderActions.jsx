import React from 'react'
import data from '../data/data.json';


function HeaderActions() {
    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <button className='hover:border hover:border- hover:border-[#F4CA8D] hover:rounded-full  active:border- active:border-[#222834] active:rounded-full '>
                <img src={data.icones[6].add} alt="Add Icone" />
            </button>

            <button className='hover:border hover:border- hover:border-[#F4CA8D] hover:rounded-full  active:border- active:border-[#222834] active:rounded-full '>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <button className='hover:border hover:border- hover:border-[#F4CA8D] hover:rounded-full  active:border- active:border-[#222834] active:rounded-full '>
                <img className='w-8 h-8 rounded-full' src={data.icones[6].userAvatar} alt="User Avatar" />
            </button>
</div>
    )
}

export default HeaderActions