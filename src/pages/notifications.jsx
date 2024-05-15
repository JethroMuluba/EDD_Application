import React from 'react'
import Header from '../components/Header';

const Notifications = () => {
  return (
    <section className='relative 2xl:left-[307px] macbookAir:left-[257px] bg-white lg:w-4/5 android:w-full'>
        <Header headerTitle={"Notifications"} />
    <main className='flex flex-col relative android:top-[75px] justify-items-end gap-[24px] p-[24px]'>
        <h3 className='text-base text-[#222834]'>
          Notification page is on building
        </h3>
    </main>

  </section>
  )
}

export default Notifications;