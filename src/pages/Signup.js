import React from "react";
import signupImg from "../assets/signup.png"
import Templets from "../components/Templets";

const Signup = ({setLoggedIn})=>{
    return (
        <Templets
            titel="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today,tomorrow,and beyond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formtype="signup"
            setLoggedIn={setLoggedIn}
        />
    )

}
export default Signup;