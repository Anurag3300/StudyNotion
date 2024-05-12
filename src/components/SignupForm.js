import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setLoggedIn}) => {
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");
    const [formData , setFormData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    const changeHandler =(event)=>{
        setFormData((prevData)=>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })

    }
    const submitHandler =(event)=>{
        event.preventDefault();
        if(formData.password!== formData.confirmPassword){
            toast.error("Password does not match");
            return;
        }
        setLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }
        const finalData ={
            ...accountData,accountType
        }
        console.log("printing the form data");
        console.log( finalData );
        navigate("/dashboard");

        

    }
  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button  className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5  rounded-full transition-all duration-200 `} 
        onClick={()=>setAccountType("student")}>
            Student
        </button>
        <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5   rounded-full transition-all duration-200 `}
         onClick={()=>setAccountType("instructor")}>
            Instructor
        </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sub className='text-pink-200'>*</sub></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        value={formData.firstName}
                        placeholder='Enter First Name'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'

                    />
                </label>
                <label className='w-full'>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sub className='text-pink-200'>*</sub></p>
                  <input
                    required
                    type='text'
                    name='lastName'
                    onChange={changeHandler}
                    value={formData.lastName}
                    placeholder='Enter Last Name'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'
                  />
                </label>
            </div>
            <div className='mt-[20px]'>
                <label className='w-full mt-[10px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder='Enter Email Address'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'

                    />
                </label>
            </div>
            
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sub className='text-pink-200'>*</sub></p>
                    <input
                        required
                        type={showPassword ? ("text") :("password")}
                        name='password'
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder='Enter Password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'
                    />
                    <span className='absolute right-3 top-[38px]' onClick={()=>{setShowPassword((prev)=>!prev)}}>
                       {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sub className='text-pink-200'>*</sub></p>
                    <input
                        required
                        type={showConfirmPassword ? ("text") :("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        placeholder='Confirm Password '
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]'
                    />
                    <span  className='absolute right-3 top-[38px]' onClick={()=>{setShowConfirmPassword((prev)=>!prev)}}>
                       {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>
            </div>
           <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>
                Create Account
           </button>
        </form>
    </div>
  )
}
export default SignupForm;
