import React from "react";
import Templets from "../components/Templets";
import loginImg from "../assets/login.png"

const Login = ({setLoggedIn})=>{
    return(
        <Templets
            titel="Welcome Back"
            desc1="Build skills for today,tomorrow,and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formtype="login"
            setLoggedIn={setLoggedIn}
        />
    )

}
export default Login;