import React, { useState } from 'react';
import data from '../data/data.json'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContextGlobal } from '../models/ContextGlobal';
import { AnimatePresence, motion} from 'framer-motion';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";


const Login = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const {checkLoginData, setConfirmedEmail, errorMessage} = useContextGlobal();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLoginData = (data) => {
    const checkUser = {
      email : data.email,
      password : data.password,
    }

    checkLoginData(checkUser);
    setConfirmedEmail(data.email);
    setShowErrorMessage(true);
    setTimeout(() => setShowErrorMessage(false), 5000)
  };

  
  return (

<div className=' android:w-full flex justify-center items-center h-screen bg-gray-100'>
  <AnimatePresence>
  <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1,
      }}
  className='lg:w-2/4 android:w-full  lg:flex lg:flex-row android:flex-col absolute  lg:rounded-[10px] android:rounded-none lg:shadow-md android:shadow-none lg:shadow-gray-400 '>
    <img className=' lg:w-1/2 android:w-full  bg-white rounded-l-[10px]' src={data.icones[9].illustration1} alt="Illustration Personal Finance" />
{/* Login Form */}
    <div className='bg-[#093648] w-1/2 android:w-full flex flex-col gap-[20px] lg:rounded-r-[10px] android:rounded-none  py-[20px] px-[20px]'>

      <h3 className=' text-white text-lg font-medium text-center'>Connexion</h3>

      <form onSubmit={handleSubmit(onSubmitLoginData)} className=' flex flex-col gap-3' >
        <div className='flex flex-col justify-between gap-[20px] '>
          <div className='flex flex-col gap-[5px] items-start'>
            <label htmlFor="" className='block text-white text-base'>Email</label>
            <input {...register("email", {required:true, minLength: 5, maxLength:60})} placeholder='Entrez votre email ici' name='email'className='w-full bg-[#093648] rounded-[5px]  text-sm text-[#fff] border border-[#fff] placeholder-[#4A4A4A] py-[8px] pl-[15px]  outline-none appearance-none caret-[#fff] ' type="email" />
            {errors.email && <span style={{color: '#DA5643', fontSize: '12px'}}>L'email est obligatoir</span>}
          </div>

          <div className='flex flex-col gap-[5px] items-start'>
            <label htmlFor="" className='block text-white text-base'>Mot de passe</label>
            
            <input {...register("password", { required: true })} placeholder='Entrez votre mot de passe ici' name='password'className='w-full bg-[#093648] rounded-[5px]  text-sm text-[#ffff] border border-[#fff] placeholder-[#4A4A4A] py-[8px] pl-[15px] outline-none appearance-none caret-[#fff] leading-tight' type={showPassword ? "text" : "password"} />
            {/* {`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`} */}
            
            <button
              type="button"
              className="absolute right-8 android:top-[594px]  lg:top-[201px] transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
            {errors.password && <span style={{color: '#DA5643', fontSize: '12px'}}>Le mot de passe est obligatoir</span>}
          </div>

                {showErrorMessage && (<motion.p 
                                          initial={{ scale: 0, opacity: 0 }}
                                          animate={{ scale: 1, opacity: 1 }}
                                          transition={{
                                          type: "spring",
                                          stiffness: 260,
                                          damping: 20,
                                          delay: 0.1,
                                          }}
                className=' text-red-600 font-normal text-sm'>{errorMessage}</motion.p>)}
                

          <button type='submit' className='w-full bg-[#F4CA8D] px-[20px] py-[5px] rounded-[5px] hover:bg-[#e2bc82] text-lg font-medium  text-[#093648]   ocus:animate-pulse focus:outline active:outline-none '>
            <span className="hidden lg:inline">Se connecter</span>
            <span className="lg:hidden  ">Se connecter</span>
          </button>
        </div>


        <div>
          <div className='flex flex-col gap-[5px] font-light text-center'>
            <p className='text-white text-sm'>Mot de passe oublié? <Link to="#" className='text-[#F4CA8D] hover:text-[#e2bc82]'>Cliquez ici pour le récupéper</Link></p>

            <p className='text-white text-sm'>Ou connectez-vous avec </p>

            <div className='flex gap-[16px] android:justify-between '>
              <img className='macbookAir:w-[100px] 2xl:w-auto' src={data.icones[9].line} alt="" />
              <Link >
                <img src={data.icones[9].googleIcone} alt="Google Icone" />
              </Link>
              <img className='macbookAir:w-[100px] 2xl:w-auto' src={data.icones[9].line}alt="" />
            </div>

            <p className='text-white text-sm'>Vous n'avez pas de compte?  <Link  to={'/register'} className='text-[#F4CA8D] hover:text-[#e2bc82]'>Enregistrez-vous ici</Link></p>
          </div>
        </div>
      </form>
    </div>
  </motion.div>
  </AnimatePresence>
</div>
  )
}

export default Login;