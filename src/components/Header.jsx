import React from 'react';
import HeaderActions from './HeaderActions';
import MenuBurger from './Hamburger';

function Header({headerTitle}) {
  return (
    <header className=' fixed lg:w-4/5 backdrop-blur-xl bg-white/30  z-50 android:w-full macbookAir: flex justify-between items-center shadow-md py-[17px] px-[24px]'>

        <MenuBurger/>

        <h1 className=' relative android:left-[45px] text-[26px]  text-[#222834] 2xl:left-0 macbookAir:left-0 '>
            { headerTitle }
        </h1>

        <HeaderActions />

    </header>
  )
}

export default Header;