import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContextGlobal } from '../models/ContextGlobal';
import { AnimatePresence, motion } from 'framer-motion';


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
        const {addIncoming, addExpensive } = useContextGlobal();
        
        const onSubmitIncoming = (data) => {
            const addNewIncoming = {
                type : "revenu",
                montant: parseInt(data.amount),
                utilisateur : 2,
            }

            setShowMessage(true); 
            setTimeout(() => setShowMessage(false), 5000); 
            reset();
            setShowFormIncoming(false);
            addIncoming(addNewIncoming);
            // setTimeout(() => {
            //     window.location.reload();
            // }, 1000);
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
    const date = new Date();

    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    // date: date.toLocaleDateString('en-US', options).replace(/\//g, '-'),
    // heure: new Date().getHours() + ":" + new Date().getMinutes()
    // const id = uuidv4();
    // const id = getTableExpensiveData.length + 1;

        const addNewExpensive = {
            type : "depense",
            categories: data.selectCategory,
            montant: parseInt(data.amountExp),
            utilisateur : 2,
        };

        setShowFormExpensive(false);
        reset();
        setShowMessageExpensive(true);
        setTimeout(() => setShowMessageExpensive(false), 3000);
        addExpensive(addNewExpensive)
    }

    return (
        <div className='flex justify-between gap-[23px] items-center'>
            <div ref={toggleRef2} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full cursor-pointer'>
                <img src={data.icones[6].add} alt="Add Icone" onClick={toggleMenuAdd} className='m-auto active:shadow-md active:rounded-full' />
                <AnimatePresence>
                {toggleAdd && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 shadow-4xl right-0 top-[3rem]  pt-0 border-b border-b-white/20"
                  >
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-900 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-250 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
                        >
                        <li>
                            <div className='flex items-center gap-2 cursor-pointer  ' onClick={() => {toggleForm(); setToggleAdd(false);}}>
                                <img src={data.icones[6].addForDarkMode} alt=""  /> <p className='text-[#fff] font-medium hover:text-[#F4CA8D]'>Revenu</p>
                            </div>
                        </li>
                    </motion.li>

                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
                        >
                        <li>
                            <div className='flex items-center gap-2 cursor-pointer 'onClick={() => {toggleExpensveForm(); setToggleAdd(false);}}>
                                <img src={data.icones[6].addForDarkMode} alt=""/>  <p className='text-[#fff]  font-medium hover:text-[#F4CA8D]'>Dépenses</p>
                            </div>
                        </li>
                    </motion.li>
                    
                    </ul>
                    </motion.div>
                )} 
                </AnimatePresence>
            </div>

            {/* Form of Incoming */}
        <AnimatePresence>
            {showFormIncoming && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                <form ref={formIncomingRef} onSubmit={handleSubmit(onSubmitIncoming)} className='absolute android:top-[220px] 2xl:top-[250px] android:right-[10px] macbookAir:right-[400px] 2xl:right-[500px] transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[10px] shadow-3xl shadow-gray-200 transition-shadow duration-150 ease-in-out px-[50px] py-[25px] text-[12px] text-[#222834] '>
                    <div className='flex flex-col gap-[5px] items-start'>
                        <label htmlFor="" className='text-base text-[#213547] font-medium'>Revenu Mensuelle</label>
                        <input type="number" placeholder='Entrez votre revenu ici' name='amount'  {...register("amount", {required:true, minLength: 3, maxLength:15})} className='bg-[#fff] rounded-[5px]  text-base text-[#213547] border border-[#213547] placeholder-gray-200 py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#213547] '/>
                        {errors.amount && <span style={{color: '#DA5643', fontSize: '12px'}}>Le montant est obligatoir</span>}
                    </div>
                    <button type='submit' className='bg-[#213547] px-[20px] py-[5px] rounded-[5px] hover:bg-cyan-900 text-lg font-medium  text-white  focus:outline-[#34B77B] focus:outline active:outline-none ' >Enregistrez</button>
                </form>
                </motion.div>
            )}
        </AnimatePresence>

                    {showMessage && (
                        <div className="absolute top-[12px] right-[500px] bg-[#34B77B] text-white px-4 py-2 rounded">
                            Revenu enregistré avec succès.
                        </div>
                    )}

            {/* Form Of Expensive */}
        <AnimatePresence>
            {showFormExpensive && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                <form ref={formExpensiveRef} onSubmit={handleSubmit(onSubmitNewExpensive)} className='absolute android:top-[180px] macbookAir:top-[237px]  2xl:top-[250px] android:right-[10px] macbookAir:right-[300px] 2xl:right-[450px] transform translate-y-[17px] flex flex-col gap-[10px] bg-white rounded-[10px] shadow-3xl shadow-gray-200 transition-shadow duration-150 ease-in-out px-[50px] py-[25px] text-[12px] text-[#222834] '>
                    
                    <div className='flex android:flex-col macbookAir:flex-row justify-between gap-[20px] '>
                        <div className='flex flex-col gap-[5px] items-start'>
                            <label htmlFor="" className='text-base text-[#213547] font-medium'>Catégories</label>
                            <select name="selectCategogy" id="" {...register("selectCategory", { required: true })} className='bg-[#fff] text-base text-[#213547] border border-[#213547] rounded-[5px] py-[6.6px] pl-[20px] outline-none'>
                                <option value="" className='text-gray-200'>Choisissez votre catégorie</option>

                                <option value="Dîme & Offr."> <div><img src= {"https://res.cloudinary.com/dr8ofciki/image/upload/v1713473981/EDD_App/ze9j80ingyybxwwkgzhl.png"} alt="" /> Dîme & Offr.</div></option>

                                <option value="Nourritures">Nourritures</option>

                                <option value="Logements">Logements</option>

                                <option value="Transports">Transports</option>

                                <option value="Vêtements">Vêtements</option>

                                <option value="Éducations">Éducations</option>

                                <option value="Dettes">Dettes</option>

                                <option value="Loisir & Autres">Loisir & Autres</option>

                                <option value="Épargnes">Épargnes</option>
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
                </motion.div>
            )}
        </AnimatePresence>

                            {showMessageExpensive && (
                                <div className="absolute top-[12px] right-[500px] bg-[#34B77B] text-white px-4 py-2 rounded">
                                    Dépense enregistré avec succès
                                </div>
                            )}

            <button className='m-auto active:shadow-md active:rounded-full'>
                <img src={data.icones[6].notif} alt="Notification Icone" />
            </button>

            <div ref={toggleRef} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                <img onClick={toggleMenu} src={data.icones[6].userAvatar} alt="Settings icone" />
            <AnimatePresence>
                {toggleAvatar && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 shadow-4xl right-0 top-[3rem]  pt-0 border-b border-b-white/20"
                    >
                    <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-250 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                        
                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
                    >
                        <li>
                            <Link to={'/Paramètres'} className='flex items-center gap-2 '>
                                <img className=' w-6' src={data.tableData[0].editeIcone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Profil</p>
                            </Link>
                        </li>
                    </motion.li>

                    <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                        }}
                    >
                        <li>
                            <Link to={'/'} className='flex items-center gap-2 '>
                                <img className=' w-6' src={data.icones[5].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Quittez</p>
                            </Link>
                        </li>
                    </motion.li>
                    </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    );
}

export default HeaderActions;
