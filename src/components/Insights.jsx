import React from 'react';
import data from '../data/data.json';


function Insights() {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-[16px] py-[30px] px-[21px] rounded-[10px] shadow-md py-[17px]'>

            <span className='bg-[#34B77B] rounded-full p-[14px] hover:bg-[#2FA46E]'>
                <img  src={data.Insights[0].icone} alt="Calandar Icone" />
            </span>

            <div className='flex flex-col '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.Insights[0].mountant}
                </h2>

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.Insights[0].title}
                </h3>
            </div>
        </div>

        <div className='flex gap-[16px] py-[30px] px-[21px] rounded-[10px] shadow-md py-[17px]'>

            <span className='bg-[#F4BA40] rounded-full p-[14px] hover:bg-[#DFAA3B]'>
                <img  src={data.Insights[1].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.Insights[1].mountant}
                </h2>

            <h3 className='text-base font-medium text-[#B2B3B5]'>
                {data.Insights[1].title}
            </h3>
        </div>
</div>


    </div>
  )
}

export default Insights;