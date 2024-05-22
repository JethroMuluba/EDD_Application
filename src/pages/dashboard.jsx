import React from 'react'
import Header from '../components/Header';
import Insights from '../components/Insights';
import ExpensiveTimeLine from '../components/ExpensiveTimeLine';
import Graphic from '../components/graphic';
import { AnimatePresence, motion } from 'framer-motion';

function Dashboard() {
  return (
  <AnimatePresence>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    className=' relative 2xl:left-[304px] macbookAir:left-[257px] bg-white lg:w-4/5 android:w-full'>
      <Header headerTitle={`Dashboard`} />
      <main className='flex flex-col relative android:top-[75px] justify-items-end gap-[24px] p-[24px] '>
        <Insights/>
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        className='flex flex-col items-start gap-[35px] md:flex-row'>
          <ExpensiveTimeLine/>
          <Graphic/>
        </motion.section>
      </main>

    </motion.section>
  </AnimatePresence>
  )
}

export default Dashboard