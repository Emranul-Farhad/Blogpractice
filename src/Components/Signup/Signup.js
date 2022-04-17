import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../firebase";


const auth = getAuth(app)

const Signup = () => {
  const navigate = useNavigate();
  const [signmail, setSignmail] = useState({ value: "", error: "" })
  const [signpass, setSignpass] = useState({ value: "", error: "" })
  const [conpass, setConpass] = useState({ value: "", error: "" })
  const [Error, setError] = useState("")

  const getemail = (event) => {
    const signInputmail = event.target.value
    console.log(signInputmail);
    setSignmail({ value: signInputmail, error: "" })
  }
  const getpass = (event) => {
    const signInputpass = event.target.value
    console.log(signInputpass);
    if (signInputpass < 5) {
      setSignpass({ value: "", error: "to short" })
    }
    else {
      setSignpass({ value: signInputpass, error: "" })
    }

  }

  const getconfirm = (event) => {
    const cofirmInputs = event.target.value
    console.log(cofirmInputs);
    setConpass({ value: cofirmInputs, error: "" })
  }

  const handelsign = (event) => {
    event.preventDefault();
    if (signmail.value && signpass.value === conpass.value) {

      createUserWithEmailAndPassword(auth, signmail.value, signpass.value)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = ("email used");
          setError(errorMessage)
          console.log(errorMessage);
        });

    }
    else {
      setError("dont matched")
    }
    if (signpass.value === conpass.value) {
      setError("")
    }




  }





  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={handelsign} >
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={getemail} type='email' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <p> </p>
            <div className='input-wrapper'>
              <input onBlur={getpass} type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <p> {Error} </p>
            <div className='input-wrapper'>
              <input onBlur={getconfirm}
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        < p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div >
  );
};

export default Signup;
