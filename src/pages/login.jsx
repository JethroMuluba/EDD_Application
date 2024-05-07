import React from 'react';
import data from '../data/data.json'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContextGlobal } from '../models/ContextGlobal';


const Login = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const {checkLoginData} = useContextGlobal();

  const onSubmitLoginData = (data) => {
    const checkUser = {
      email : data.email,
      password : data.password
    }

    checkLoginData(checkUser);
    reset();
  };

  
  return (

<div className='w-full bg-white '>
  <div className='w-2/4 flex absolute transform translate-y-[17px]  rounded-[10px] shadow-md shadow-black transition-shadow duration-150 ease-in-out text-[12px] text-[#222834] '>
    <img className=' w-1/2 bg-white rounded-l-[10px]' src={data.icones[9].illustration1} alt="Illustration Personal Finance" />
{/* Login Form */}
    <form onSubmit={handleSubmit(onSubmitLoginData)} className='bg-[#093648] w-1/2 flex flex-col gap-[20px] rounded-r-[10px]  py-[20px] px-[20px]'>
      <h3 className=' text-white text-lg font-medium text-center'>Connexion</h3>
      <div className='flex flex-col justify-between gap-[10px] '>
        <div className='flex flex-col gap-[5px] items-start'>
          <label htmlFor="" className=' text-white text-base'>Email</label>
          <input {...register("email", {required:true, minLength: 5, maxLength:25})} placeholder='Entrez votre email ici' name='email'className='bg-[#093648] rounded-[5px]  text-sm text-[#fff] border border-[#fff] placeholder-[#4A4A4A] py-[8px] pl-[15px] pr-[145px] outline-none appearance-none caret-[#fff] ' type="email" />
          {errors.email && <span style={{color: '#DA5643', fontSize: '12px'}}>L'email est obligatoir</span>}
        </div>

        <div className='flex flex-col gap-[5px] items-start'>
          <label htmlFor="" className=' text-white text-base'>Mot de passe</label>
          <input {...register("password", { required: true })} placeholder='Entrez votre mot de passe ici' name='password'className='bg-[#093648] rounded-[5px]  text-sm text-[#ffff] border border-[#fff] placeholder-[#4A4A4A] py-[8px] pl-[15px] pr-[145px] outline-none appearance-none caret-[#fff] ' type="text" />
          {errors.password && <span style={{color: '#DA5643', fontSize: '12px'}}>Le mot de passe est obligatoir</span>}
        </div>
      </div>

      <button type='submit' className='bg-[#F4CA8D] px-[20px] py-[5px] rounded-[5px] hover:bg-[#e2bc82] text-lg font-medium  text-white  focus:outline-[#fff] focus:outline active:outline-none '>Se connecter</button>
      <div>
        <div className='flex flex-col gap-[5px] text-center'>
          <p className='text-white text-sm'>Mot de passe oublié? <Link className='text-[#F4CA8D] hover:text-[#e2bc82]'>Cliquez ici pour le récupéper</Link></p>

          <p className='text-white text-sm'>Ou connectez-vous avec </p>

          <div className='flex gap-[16px] '>
            <img src={data.icones[9].line} alt="" />
            <Link >
              <img src={data.icones[9].googleIcone} alt="Google Icone" />
            </Link>
            <img src={data.icones[9].line}alt="" />
          </div>

          <p className='text-white text-sm'>Vous n'avez pas de compte?  <Link  to={'/register'} className='text-[#F4CA8D] hover:text-[#e2bc82]'>Enregistrez-vous ici</Link></p>
        </div>
      </div>
    </form>
  </div>

</div>
  )
}

export default Login;