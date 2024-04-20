import React from 'react';
import data from '../data/data.json';


function TableExpensiveTimeline() {
  return (
    <table className='text-[#222834] table align-middle  text-left bidi-isolate '>
        <thead className='border-b  border-[#B2B3B5] border-separate box-border'>
            <tr className='w-full font-normal'>
                <th className='py-[10px] pr-[26px]'>
                    <div className=''>
                        <input className='rounded-sm ' type="checkbox" id="select_all"/>
                        <label className='cursor-pointer mb-0' htmlFor="select_all"></label>
                    </div>
                </th>

                <th className='py-[10px] pr-[80px] font-medium'>Catégories</th>
                <th className='py-[10px] pr-[60px] font-medium'>Montants</th>
                <th className='py-[10px] pr-[80px] font-medium'>Dates</th>
                <th className='py-[10px] pr-[60px] font-medium'>Heures</th>
                <th className='py-[10px] pr-[80px] font-medium'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.tableData ? (data.tableData.map((data) => (
                            <tr className=' border-b  border-[#B2B3B5] border-separate box-border'>
                            <td className='py-[10px] pr-[26px]'>
                                <div className=''>
                                    <input className='rounded-sm ' type="checkbox" id="customCheck1"/>
                                    <label className='cursor-pointer mb-0' htmlFor="customCheck1"></label>
                                </div>
                            </td>
            
                            <td className=''>
                                <span className='flex items-center'>
                                    <img src={data.icone} alt="" />
                                    {data.category }
                                </span>
                            </td>
                            <td>
                                FC {data.montants}
                            </td>
                            <td>
                                {data.dates}
                            </td>
                            <td>
                                {data.heures}
                            </td>
                            <td>
                                <span className='flex itmes-center justify-between'>
                                <button className='active:shadow-md active:rounded-full'>
                                    <img src={data.editeIcone} alt="" />
                                </button>
            
                                <button className='active:shadow-md active:rounded-full'>
                                    <img src={data.limitIcone} alt="" />
                                </button>
            
                                <button className='active:shadow-md active:rounded-full'>
                                    <img src={data.deleteIcone}alt="" />
                                </button>
                                </span>
                            </td>
                        </tr>
            ))) : (
                <h3>
                    Aucune dépenses  enregistrée pour le moment ! Veuillez cliquer sur le bouton Ajoutez pour commencer.
                </h3>
            )}
        </tbody>
    </table>
  )
}

export default TableExpensiveTimeline;