import React from 'react'
import Header from '../components/Header';
import Insights from '../components/Insights';
import ExpensiveTimeLine from '../components/ExpensiveTimeLine';
import Graphic from '../components/graphic';

function Dashboard() {
  return (
    <section className='bg-white w-4/5'>
      <Header headerTitle={`Dashboard`} />
      <main className='flex flex-col justify-items-end gap-[24px] p-[24px] '>
        <Insights/>
        <section className='flex flex-col items-start gap-[35px] md:flex-row'>
          <ExpensiveTimeLine/>
          <Graphic/>
        </section>
      </main>

    </section>
  )
}

export default Dashboard