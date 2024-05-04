import React from 'react';
import data from '../data/data.json';
import { useContextGlobal } from '../models/ContextGlobal';


function Insights() {
    const {getInsightData} = useContextGlobal();
    const insightDataIncome = getInsightData.montant;

    // console.log(insightDataIncome);
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10  '>
    {/* //     {insightData ? (insightData.map((data) => (
    //                 <div key={data.id} className='flex justify-between items-center gap-[25px]  pl-[27px] rounded-[10px] shadow-md py-[17px]'>
    //                 <span>
    //                     <img className=''  src={data.icone} alt="Calandar Icone" />
    //                 </span>
        
    //                 <div className='flex flex-col mr-[25px] '>
    //                     <h2  className='text-[26px] text-[#222834] '>
    //                         FC {data.amount}
    //                     </h2>
        
    //                     <h3 className='text-base font-medium text-[#B2B3B5]'>
    //                         {data.title}
    //                     </h3>
    //                 </div>

    //                 <button  className='m-auto active:shadow-md active:rounded-full '>
    //                     <img src={data.moreIcone} alt="" />
    //                 </button>
    //                 <span>
    //                     <img src={data.border} alt="" />
    //                 </span>
    //             </div>
    //     ))) : 'Pas de revenu'} */}

    

        <div className='flex justify-between items-center gap-[20px]  pl-[27px] rounded-[10px] shadow-md py-[17px]'>

            <span className=' rounded-full px-[15px] py-[14px]'>
                <img className='pt-[2px] '  src={data.insights[0].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col '>
                {insightDataIncome && (
                    <h2 className='text-[26px] text-[#222834] '>
                        FC {insightDataIncome.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
                    </h2>
                )}

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[0].title}
                </h3>
            </div>

            <button  className='m-auto active:shadow-md active:rounded-full '>
                <img src={data.insights[0].moreIcone} alt="" />
            </button>

            <span>
                <img src={data.insights[0].border} alt="" />
            </span>
        </div>

        <div className='flex justify-between items-center gap-[20px]  pl-[27px] rounded-[10px] shadow-md py-[17px]'>

            <span className='rounded-full px-[15px] py-[14px]'>
                <img className='pt-[2px] '  src={data.insights[1].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.insights[1].amount}
                </h2>

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[1].title}
                </h3>
            </div>

            <button  className='m-auto active:shadow-md active:rounded-full '>
                <img src={data.insights[1].moreIcone} alt="" />
            </button>

            <span>
                <img src={data.insights[1].border} alt="" />
            </span>
        </div>

        <div className='flex justify-between items-center gap-[25px]  pl-[27px] rounded-[10px] shadow-md py-[17px]'>

            <span className='rounded-full px-[15px] py-[17px]'>
                <img className='pt-[px] '  src={data.insights[2].icone} alt="Calandar Icone" />
            </span>

            <div className='flex flex-col mr-[25px] '>
                <h2  className='text-[26px] text-[#222834] '>
                    FC {data.insights[2].amount}
                </h2>

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[2].title}
                </h3>
            </div>
                <span>
                    <img src={data.insights[2].border} alt="" />
                </span>
        </div>


    </div>
  )
}

export default Insights;