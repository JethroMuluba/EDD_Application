import React from 'react'
import Header from '../components/Header';
import Insights from '../components/Insights';
import ExpensiveTimeLine from '../components/ExpensiveTimeLine';

function Dashboard() {
  return (
    <section className='bg-white w-4/5'>
      <Header/>
      <main className='flex flex-col gap-[24px] p-[24px] '>
        <Insights/>
        <section>
          <ExpensiveTimeLine/>
        </section>
      </main>

    </section>
  )
}

export default Dashboard