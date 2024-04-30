import React from 'react'
import data from '../data/data.json'


function TopExpensiveTimelineElements() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12'>
        <div className='flex items-center gap-[12px] '>
            <h3 className='text-base font-medium text-[#222834]'>
                {data.expensiveData[0].title}
            </h3>

            <div className='flex gap-[6px]'>
                <button className='flex items-center gap-[5px] text-[#222834] border rounded-[5px] px-[8px] py-[2px] active:shadow-md'>
                    {data.expensiveData[0].previewDate}
                    <span>
                        <img src={data.icones[7].arrowDown} alt="Icone Arrow Down" />
                    </span>
                </button>

                <button className='flex items-center gap-[5px] text-[#222834] border rounded-[5px] px-[8px] py-[2px] active:shadow-md'>
                    {data.expensiveData[0].nowDate}
                    <span>
                        <img src={data.icones[7].arrowDown} alt="Icone Arrow Down" />
                    </span>
                </button>
                
            </div>
        </div>
        <div  className='flex items-center gap-[12px] '>
            <h3 className='text-base font-medium text-[#222834]'>
                {data.expensiveData[0].filter}
            </h3>

            <button className='flex items-center gap-[5px] text-[#222834] border rounded-[5px] px-[8px] py-[2px] active:shadow-md'>
                    {data.expensiveData[0].filterMode[0].filterByDay}
                    <span>
                        <img src={data.icones[7].arrowDown} alt="Icone Arrow Down" />
                    </span>
                </button>
        </div>
    </div>
  )
}

export default TopExpensiveTimelineElements