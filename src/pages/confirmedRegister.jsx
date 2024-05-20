import React from 'react';
import data from '../data/data.json'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContextGlobal } from '../models/ContextGlobal';
import { AnimatePresence, motion} from 'framer-motion';


const ConfirmedRegister = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const {userConfirmation, confirmedEmail} = useContextGlobal();

  const onSubmitLoginData = (data) => {
    
    const confimedUser = {
      email : confirmedEmail,
      confirmationCode : data.confirmationCode
    }

    userConfirmation(confimedUser);
    reset();
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
  className='bg-[#093648] lg:w-2/4 android:w-full  lg:flex lg:flex-row android:flex-col absolute  lg:rounded-[10px] android:rounded-none lg:shadow-md android:shadow-none lg:shadow-gray-400 items-center '>
    <img className=' lg:w-1/2 android:w-full  bg-white rounded-l-[10px]' src={data.icones[9].illustration3} alt="Illustration Personal Finance" />
{/* Login Form */}
    <div className='bg-[#093648] w-1/2 android:w-full flex flex-col gap-[20px] lg:rounded-r-[10px] android:rounded-none  py-[20px] px-[20px]'>

      <h3 className=' text-white text-lg font-medium text-center'>Confirmation d'inscription</h3>

      <form onSubmit={handleSubmit(onSubmitLoginData)} className=' flex flex-col gap-3' >

      <div>
            <div className='flex flex-col gap-[15px] font-light text-center'>
            <p className='text-white text-sm'> {confirmedEmail} </p>
                <p className='text-white text-sm'>Merci d'avoir choisi d'utiliser <span className='text-[#F4CA8D] hover:text-[#e2bc82] font-medium'>EDD</span></p>

                <p className='text-white text-sm'>Veuillez saisir le code de confirmation envoyer dans l'email dont vous avez soumis lors de l'inscription </p>

                <p className='text-white text-sm'><Link  to={'/register'} className='text-[#F4CA8D] hover:text-[#e2bc82]'>Changer votre email ici</Link></p>
            </div>
            </div>

        <div className='flex flex-col justify-between gap-[20px] '>
          <div className='flex flex-col gap-[5px] items-start'>
            <label htmlFor="" className='block text-white text-base'>Code de confirmation</label>
            <input {...register("confirmationCode", {required:true, minLength: 3, maxLength:6})} placeholder='Entrez votre code ici' name='confirmationCode'className='w-full bg-[#093648] rounded-[5px]  text-sm text-[#fff] border border-[#fff] placeholder-[#4A4A4A] py-[8px] pl-[15px]  outline-none appearance-none caret-[#fff] ' type="number" />
            {errors.confirmationCode && <span style={{color: '#DA5643', fontSize: '12px'}}>Le code est obligatoir pour continuer</span>}
          </div>

          <button type='submit' className='w-full bg-[#F4CA8D] px-[20px] py-[5px] rounded-[5px] hover:bg-[#e2bc82] text-lg font-medium  text-[#093648]   focus:animate-pulse focus:outline active:outline-none '>
            <span className="hidden lg:inline">Confirmer</span>
            <span className="lg:hidden  ">Confirmer</span>
          </button>
        </div>



      </form>
    </div>
  </motion.div>
  </AnimatePresence>
</div>
  )
}

export default ConfirmedRegister;