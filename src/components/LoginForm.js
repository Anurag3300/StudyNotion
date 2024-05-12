import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

 const LoginForm = ({setLoggedIn}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({Email:"",Password:""});
    const changeHandler =(event)=>{
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]:event.target.value
            }
        })

    }
    const [showPassword,setShowPassword] = useState(false);
    const submitHandler = (event)=>{
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Login successfully");
        navigate("/dashboard");
        console.log("printing the formLogin data");
        console.log(formData);

    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sub className='text-pink-200'>*</sub></p>
            <input
                required
                type="email"
                value={formData.Email}
                name='Email'
                onChange={changeHandler}
                placeholder='Enter Your Email Address'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sub className='text-pink-200'>*</sub></p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.Password}
                name='Password'
                onChange={changeHandler}
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'
            />
            <span className='absolute right-3 top-[38px]' onClick={()=>{setShowPassword((prev)=>!prev)}}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
            </span>
            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password </p>
            </Link>
        </label>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-5'>
            Sign In
        </button>
    </form>
  )
}
export default LoginForm;

