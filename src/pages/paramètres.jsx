import React from 'react'
import Header from '../components/Header';
import { AnimatePresence, motion } from 'framer-motion';

const Paramètres = () => {
  return (
    <AnimatePresence>
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
    className='relative 2xl:left-[307px] macbookAir:left-[257px] bg-white lg:w-4/5 android:w-full'>
        <Header headerTitle={"Paramètres"} />
    <main className='flex flex-col relative android:top-[75px] justify-items-end gap-[24px] p-[24px] '>
        <h3 className='text-base text-[#222834]'>
            Settings page is on building ...!
        </h3>
    </main>

  </motion.section>
  </AnimatePresence>
  )
}

export default Paramètres;