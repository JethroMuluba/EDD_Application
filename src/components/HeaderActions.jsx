import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function HeaderActions() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Toggle Avatar
    const [toggleAvatar, setToggleAvatar] = useState(false);
    const toggleRef = useRef(null);
    const toggleMenu = () => {
        setToggleAvatar(!toggleAvatar);
    };

    useEffect (() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setToggleAvatar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Toggle Add
    const [toggleAdd, setToggleAdd] = useState(false);
    const toggleRef2 = useRef(null);
    const toggleMenuAdd = () => {
        setToggleAdd(!toggleAdd);
    };

    useEffect (() => {
        const handleClickOutside2 = (event) => {
            if (toggleRef2.current && !toggleRef2.current.contains(event.target)) {
                setToggleAdd(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside2);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside2);
        };
    }, []);

    // Toggle Form Of Incoming
    const [showFormIncoming, setShowFormIncoming] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const formIncomingRef = useRef(null);
    const toggleForm = () => {
        setShowFormIncoming(!showFormIncoming);
    };

    useEffect(() => {
        const handleClickOutside3 = (event) => {
            if (formIncomingRef.current && !formIncomingRef.current.contains(event.target)) {
                setShowFormIncoming(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside3);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside3);
        };
    }, []);

        // Add New Incoming
        const onSubmitIncoming = (data) => {
            const addNewIncoming = {
                id: 1,
                amount: data.amount,
                date: new Date().toISOString(),
            }

            setShowMessage(true); 
            setTimeout(() => setShowMessage(false), 3000); 
            reset();
            setShowFormIncoming(false);
        }


    // Toggle Form Of Expensive
    const [showFormExpensive, setShowFormExpensive]  = useState(false);
    const [showMessageExpensive, setShowMessageExpensive] = useState(false);
    const formExpensiveRef = useRef(null);
    const toggleExpensveForm = () => {
        setShowFormExpensive(!showFormExpensive);
    };

    useEffect(() => {
        const handleClickOutside4 = (event) => {
            if (formExpensiveRef.current && !formExpensiveRef.current.contains(event.target)) {
                setShowFormExpensive(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside4);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside4);
        };
    }, []);



    // Add New Expensive
    const onSubmitNewExpensive = (data) => {
        const addNewExpensive = {
            id: 1,
            category: data.selectCategory,
            amount: data.amount,
            date: new Date().toISOString(),
            hour: new Date().getHours() + ":" + new Date().getMinutes(),
        };

        setShowFormExpensive(false);
        reset();
        setShowMessageExpensive(true);
        setTimeout(() => setShowMessageExpensive(false), 3000);
    }

    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <div ref={toggleRef2} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].add} alt="Add Icone" onClick={toggleMenuAdd} className='m-auto active:shadow-md active:rounded-full' />
                {toggleAdd && (
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-250 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        <li>
                            <div className='flex items-center gap-2 ' onClick={() => {toggleForm(); setToggleAdd(false);}}>
                                <img src={data.icones[6].add} alt=""  /> <p className='text-[#222834] font-medium hover:text-[#F4CA8D]'>Revenu</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2 'onClick={() => {toggleExpensveForm(); setToggleAdd(false);}}>
                                <img src={data.icones[6].add} alt=""/>  <p className='text-[#222834]  font-medium hover:text-[#F4CA8D]'>Dépenses</p>
                            </div>
                        </li>
                    </ul>
                )}  
            </div>

            {/* Form of Incoming */}
            {showFormIncoming && (
                <form ref={formIncomingRef} onSubmit={handleSubmit(onSubmitIncoming)} className='absolute top-[250px] right-[500px] transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[10px] shadow-3xl shadow-gray-200 transition-shadow duration-150 ease-in-out px-[50px] py-[25px] text-[12px] text-[#222834] '>
                    <div className='flex flex-col gap-[5px] items-start'>
                        <label htmlFor="" className='text-base text-[#213547] font-medium'>Catégories</label>
                        <input type="number" placeholder='Entrez votre revenu ici' name='amount'  {...register("amount", {required:true, minLength: 3, maxLength:15})} className='bg-[#fff] rounded-[5px]  text-base text-[#213547] border border-[#213547] placeholder-gray-200 py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#213547] '/>
                        {errors.amount && <span style={{color: '#DA5643', fontSize: '12px'}}>Le montant est obligatoir</span>}
                    </div>
                    <button type='submit' className='bg-[#213547] px-[20px] py-[5px] rounded-[5px] hover:bg-cyan-900 text-lg font-medium  text-white  focus:outline-[#34B77B] focus:outline active:outline-none ' >Enregistrez</button>
                </form>
            )}

                    {showMessage && (
                        <div className="absolute top-[12px] right-[500px] bg-[#34B77B] text-white px-4 py-2 rounded">
                            Revenu enregistré avec succès
                        </div>
                    )}

            {/* Form Of Expensive */}
            {showFormExpensive && (
                <form ref={formExpensiveRef} onSubmit={handleSubmit(onSubmitNewExpensive)} className='absolute top-[250px] right-[500px] transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[10px] shadow-3xl shadow-gray-200 transition-shadow duration-150 ease-in-out px-[50px] py-[25px] text-[12px] text-[#222834] '>
                    
                    <div className='flex justify-between gap-[20px] '>
                        <div className='flex flex-col gap-[5px] items-start'>
                            <label htmlFor="" className='text-base text-[#213547] font-medium'>Catégories</label>
                            <select name="selectCategogy" id="" {...register("selectCategory", { required: true })} className='bg-[#fff] text-base text-[#213547] border border-[#213547] rounded-[5px] py-[6.6px] pl-[20px] outline-none'>
                                <option value="" className='text-gray-200'>
                                    Choisissez votre catégorie
                                </option>

                                <option value="Dîme & Offr.">
                                    {data.tableData[0].category}
                                </option>

                                <option value="Nourritures">
                                    {data.tableData[1].category}
                                </option>

                                <option value="Logements">
                                    {data.tableData[2].category}
                                </option>

                                <option value="Transports">
                                    {data.tableData[3].category}
                                </option>

                                <option value="Vêtements">
                                    {data.tableData[4].category}
                                </option>

                                <option value="Éducations">
                                    {data.tableData[5].category}
                                </option>

                                <option value="Dettes">
                                {data.tableData[6].category}
                                </option>

                                <option value="Loisir & Autres">
                                    {data.tableData[7].category}
                                </option>

                                <option value="Épargnes">
                                    {data.tableData[8].category}
                                </option>
                            </select>
                            {errors.selectCategory && <span style={{ color: '#DA5643', fontSize: '12px' }}>Ce champ est requis</span>}
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="" className='text-base text-[#213547] font-medium'>Montant</label>
                            <input type="number" placeholder='Entrez votre montant ici' name='amountExp'className='bg-[#fff] rounded-[5px]  text-base text-[#213547] border border-[#213547] placeholder-gray-200 py-[5px] pl-[20px] outline-none appearance-none caret-[#213547] ' {...register("amountExp", {required:true, minLength: 3, maxLength:15})}/>
                            {errors.amountExp && <span style={{color: '#DA5643', fontSize: '12px'}}>Le montant est obligatoir</span>}
                        </div>
                    </div>

                    <button type='submit' className='bg-[#213547] px-[20px] py-[5px] rounded-[5px] hover:bg-cyan-900 text-lg font-medium  text-white  focus:outline-[#34B77B] focus:outline active:outline-none ' >Enregistrez</button>

                </form>
            )}

                            {showMessageExpensive && (
                                <div className="absolute top-[12px] right-[500px] bg-[#34B77B] text-white px-4 py-2 rounded">
                                    Dépense enregistré avec succès
                                </div>
                            )}

            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <div ref={toggleRef} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                <img className='w-8 h-8 rounded-full' onClick={toggleMenu} src={data.icones[6].userAvatar} alt="User Avatar" />
                {toggleAvatar && (
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-250 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        <li>
                            <Link to={'/Paramètres'} className='flex items-center gap-2 '>
                                <img src={data.tableData[0].editeIcone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Profil</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Login'} className='flex items-center gap-2 '>
                                <img src={data.icones[5].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Quittez</p>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default HeaderActions;
