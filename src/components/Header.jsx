import React from 'react';
import HeaderActions from './HeaderActions';

function Header({headerTitle}) {
  return (
    <header className=' fixed backdrop-blur-xl bg-white/30  z-50 android:w-full flex justify-between items-center shadow-md py-[17px] px-[24px]'>

        <h1 className='text-[26px] text-[#222834] '>
            { headerTitle }
        </h1>

        <HeaderActions />

    </header>
  )
}

export default Header;