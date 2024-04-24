import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function HeaderActions() {
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

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Add New Incoming
    const onSubmitIncoming = (data) => {
        const addNewIncoming = {
            id: 1,
            amount: data.amount,
            date: new Date().toISOString(),
        }
        alert("Revenu enregistré avec succès");
        setShowFormIncoming(false)
        reset();
    }

    // Add New Expensive
    const onSubmitNewExpensive = (data) => {
        const addNewExpensive = {
            id: 1,
            category: data.selectCategory,
            amount: data.amount,
            date: new Date().toISOString(),
            hour: new Date().getHours() + ":" + new Date().getMinutes(),
        }
    }

    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <div ref={toggleRef2} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].add} alt="Add Icone" onClick={toggleMenuAdd} className='m-auto active:shadow-md active:rounded-full' />
                {toggleAdd && (
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-250 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        <li>
                            <div className='flex items-center gap-2 ' onClick={() => {toggleForm(); setToggleAdd(false);}}>
                                <img src={data.icones[1].icone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Revenu</p>
                            </div>
                        </li>
                        <li>
                            <Link to={''} className='flex items-center gap-2 '>
                                <img src={data.icones[1].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Dépenses</p>
                            </Link>
                        </li>
                    </ul>
                )}  
            </div>

            {showFormIncoming && (
                <form ref={formIncomingRef} onSubmit={handleSubmit(onSubmitIncoming)} className='absolute top-[250px] right-[500px] transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[10px] shadow-3xl shadow-gray-200 transition-shadow duration-150 ease-in-out px-[50px] py-[25px] text-[12px] text-[#222834] '>
                    <input type="number" placeholder='Entrez votre revenu ici' name='amount'  {...register("amount", {required:true, minLength: 3, maxLength:15})} className='bg-[#fff] rounded-[5px]  text-base text-[#213547] border border-[#213547] placeholder-gray-200 py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#213547] '/>
                    {errors.amount && <span style={{color: '#DA5643', fontSize: '16px'}}>Entrez au moins 3 chiffres</span>}
                    <button type='submit' className='bg-[#213547] px-[20px] py-[5px] rounded-[5px] hover:bg-cyan-900 text-lg font-medium  text-white  focus:outline-[#34B77B] focus:outline active:outline-none ' >Enregistrez</button>
                </form>
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
