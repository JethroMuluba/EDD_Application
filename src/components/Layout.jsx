import React from 'react'
import Sidebar from './Sidebar';
import { AnimatePresence, motion } from 'framer-motion';

function Layout({ children }) {
  return (

    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      className=' flex flex-row '>
        <Sidebar/>
        {children}
      </motion.div>
    </AnimatePresence>
    

  )
}


export default Layout;