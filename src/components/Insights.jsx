import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useContextGlobal } from '../models/ContextGlobal';
import { AnimatePresence, motion } from 'framer-motion';


function Insights() {
    const {getInsightData, getTableExpensiveData} = useContextGlobal();
    const insightDataIncome = getInsightData.montant;

    //Calculate all the expenses of the day and display only the total of these expenses as well as the rest of Income
    const [totalDailyExpenses, setTotalDailyExpenses] = useState();
    const [totalExpenses, setTotalExpenses] = useState();

    //Calculate the Rest of Income
        const incomeRest = insightDataIncome - totalExpenses;

    
    useEffect(() => {
        const currentDate = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
    
        const filteredExpenses = getTableExpensiveData.filter(expense => {
            const expenseDate = new Date(expense.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
            return expenseDate === currentDate;
        });
    
        const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.montant, 0);

        //Get All Expenses
        const expenses = getTableExpensiveData;

        //Calculate All Expenses
        const totalExpense = expenses.reduce((total, expense) => total + expense.montant, 0);
    
        setTotalDailyExpenses(totalExpenses);
        setTotalExpenses(totalExpense);
        
    }, [getTableExpensiveData]);
    return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
    >
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
    >
        <div className='flex justify-between items-center macbookAir:gap-[18px] macbookAir: lg:gap-[25px] macbookAir:  android:pl-[10px] lg:pl-[27px] macbookAir:pl-[10px] rounded-[10px] shadow-md py-[17px]'>

            <span className=' rounded-full px-[15px] py-[17px]'>
                <img className=''  src={data.insights[0].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col macbookAir:mr-[10px] lg:mr-[20px] text-[#222834] font-medium text-[18px]'>
                {insightDataIncome ? (
                    <h2 className='text-[26px] text-[#222834] '>
                        FC {insightDataIncome.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
                    </h2>
                ) : ('Pas de revenu')}

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[0].title}
                </h3>
            </div>

            {/* <button  className='m-auto active:shadow-md active:rounded-full '>
                <img src={data.insights[0].moreIcone} alt="" />
            </button> */}

            <span>
                <img src={data.insights[0].border} alt="" />
            </span>
        </div>
    </motion.div>

    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
    >
        <div className='flex justify-between items-center macbookAir:gap-[18px] macbookAir: lg:gap-[25px] macbookAir:  android:pl-[10px] lg:pl-[27px] macbookAir:pl-[10px] rounded-[10px] shadow-md py-[17px]'>

            <span className='rounded-full px-[15px] py-[17px]'>
                <img className=' '  src={data.insights[1].icone} alt="Clock Icone" />
            </span>

            <div className='flex flex-col macbookAir:mr-[10px] lg:mr-[20px] text-[#222834] font-medium text-[18px]'>
                {totalDailyExpenses ? (
                    <h2  className='text-[26px] text-[#222834] '>
                        FC {totalDailyExpenses.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
                    </h2>
                    ) : ('Pas de Dépense')}


                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[1].title}
                </h3>
            </div>

            {/* <button  className='m-auto active:shadow-md active:rounded-full '>
                <img src={data.insights[1].moreIcone} alt="" />
            </button> */}

            <span>
                <img src={data.insights[1].border} alt="" />
            </span>
        </div>
    </motion.div>

    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
    >
        <div className='flex justify-between items-center macbookAir:gap-[18px] macbookAir: lg:gap-[25px] macbookAir:  android:pl-[10px] lg:pl-[27px] macbookAir:pl-[10px] rounded-[10px] shadow-md py-[17px]'>

            <span className='rounded-full px-[15px] py-[17px]'>
                <img className=''  src={data.insights[2].icone} alt="Calandar Icone" />
            </span>

            <div className='flex flex-col macbookAir:mr-[10px] lg:mr-[20px] text-[#222834] font-medium text-[18px]'>
            {incomeRest ? (
                    <h2  className='text-[26px] text-[#222834] '>
                        FC {incomeRest.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
                    </h2>
                    ) : ('Pas de Reste')}

                <h3 className='text-base font-medium text-[#B2B3B5]'>
                    {data.insights[2].title}
                </h3>
            </div>
                <span>
                    <img src={data.insights[2].border} alt="" />
                </span>
        </div>
    </motion.div>


    </div>
    </motion.div>
    </AnimatePresence>
)
}

export default Insights;