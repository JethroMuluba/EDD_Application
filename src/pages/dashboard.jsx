import React from 'react'
import Header from '../components/Header';
import Insights from '../components/Insights';

function Dashboard() {
  return (
    <section className='bg-white w-4/5 text-black'>
      <Header/>
      <main className='p-[24px] '>
        <Insights/>
      </main>

    </section>
  )
}

export default Dashboard