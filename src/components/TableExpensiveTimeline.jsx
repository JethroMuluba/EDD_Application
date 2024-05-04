import React from 'react';
import data from '../data/data.json';
import { useContextGlobal } from '../models/ContextGlobal';


function TableExpensiveTimeline() {

    const {getTableExpensiveData} = useContextGlobal();
  return (
    <div className="overflow-x-auto">
        <table className='min-w-full divide-y divide-gray-200 text-[#222834]'>
            <thead className=''>
                <tr className='w-full font-normal'>
                    <th className='py-[10px] pr-[26px]'>
                        <input className='rounded-sm ' type="checkbox" id="select_all"/>
                        <label className='cursor-pointer mb-0' htmlFor="select_all"></label>
                    </th>

                    <th className='py-[10px] pr-[80px] font-medium '>Catégories</th>
                    <th className='py-[10px] pr-[60px] font-medium'>Montants</th>
                    <th className='py-[10px] pr-[80px] font-medium'>Dates</th>
                    <th className='py-[10px] pr-[60px] font-medium'>Heures</th>
                    <th className='py-[10px] pr-[80px] font-medium'>Actions</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
                {getTableExpensiveData ? (getTableExpensiveData.map((data) => (
                            <tr key={data.id} >
                                <td className='py-[10px] pr-[26px] whitespace-nowrap'>
                                    <div className=''>
                                        <input className='rounded-sm ' type="checkbox" id={`customCheck${data.id}`}/>
                                        <label className='cursor-pointer mb-0' htmlFor={`customCheck${data.id}`}></label>
                                    </div>
                                </td>
                
                                <td className='whitespace-nowrap'>
                                    <span className='flex items-center'>
                                        {/* <img src={data.icone} alt="" /> */}
                                        {data.categories }
                                    </span>
                                </td>
                                <td className='whitespace-nowrap'>
                                    FC {data.montant}
                                </td>
                                <td className='whitespace-nowrap'>
                                    {new Date(data.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')}
                                </td>
                                <td className='whitespace-nowrap'>
                                    {new Date(data.heure).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                </td>
                                <td>
                                    <span className='flex itmes-center justify-between'>
                                    <button className='active:shadow-md active:rounded-full'>
                                        <img src={"https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/x1nwk5qt3dcgzlercluo.svg"} alt="Edite Icone" />
                                    </button>
                
                                    <button className='active:shadow-md active:rounded-full'>
                                        <img src={"https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/nda2ylaauwzirnblonyf.svg"} alt="Limite Icone" />
                                    </button>
                
                                    <button className='active:shadow-md active:rounded-full'>
                                        <img src={"https://res.cloudinary.com/dr8ofciki/image/upload/v1713555965/EDD_App/vl8mzzj3qjjx9bdjnnhn.svg"}alt="Detede Icone" />
                                    </button>
                                    </span>
                                </td>
                            </tr>
                ))) : (
                <tr className=''>
                    <td className='px-6 py-4 whitespace-nowrap ' colSpan="6">
                        <div className='flex gap-2'>
                            <h3 className="text-gray-500">Aucune dépenses enregistrée pour le moment ! Veuillez cliquer sur</h3>
                            <button className='active:shadow-md active:rounded-full'>
                                <img src={data.icones[6].add} alt="" />
                            </button>
                            <h3 className="text-gray-500">pour commencer</h3>
                        </div>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default TableExpensiveTimeline;