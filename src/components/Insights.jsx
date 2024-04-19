import React from 'react';
import data from '../data/data.json';


function Insights() {
  return (
    <div className='flex justify-around'>
        <div className='flex justify-between gap-[25px] py-[30px] pl-[27px] rounded-[10px] shadow-md py-[17px]'>

            <span className='bg-[#34B77B] rounded-full px-[20px] py-[14px] hover:bg-[#2FA46E]'>
                <img className='pt-[7px] '  src={data.Insights[0].icone} alt="Calandar Icone" />
            </span>

            <div className='flex flex-col mr-[25px] '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.Insights[0].mountant}
                </h2>

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.Insights[0].title}
                </h3>
            </div>
            <span>
                <img src={data.Insights[0].border} alt="" />
            </span>
        </div>

        <div className='flex justify-between items-start gap-[20px] py-[30px] pl-[27px] rounded-[10px] shadow-md py-[17px]'>

            <span className='bg-[#F4BA40] rounded-full px-[16px] py-[15px]  hover:bg-[#DFAA3B]'>
                <img className='pt-[2px] '  src={data.Insights[1].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.Insights[1].mountant}
                </h2>

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.Insights[1].title}
                </h3>
            </div>

            <button  className='pb-[35px] m-auto active:shadow-md active:rounded-full '>
                <img src={data.Insights[1].moreIcone} alt="" />
            </button>

            <span>
                <img src={data.Insights[1].border} alt="" />
            </span>
        </div>


    </div>
  )
}

export default Insights;