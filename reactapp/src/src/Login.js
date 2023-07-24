import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { useState } from 'react';
import axios  from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Login() {

let navigate = useNavigate();

const[user,SetUser]=useState(
  {
    username:"",
    password:"",
  });
  const{username,password}=user;
  const [showPassword, setShowPassword] = useState(false);
  const onInputChange=(e)=>{
    SetUser({...user,[e.target.name]:e.target.value})
  };

  const onSubmit =async (e) =>
  {
    e.preventDefault();
    await axios.post("http://localhost:8080/post",user);
    navigate("/");
    
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  

  return (
    <>
    <div className="container-xl mb-4">
      <div className="row ">
        <div className="col-md-6 offset-md-3 p-4 mt-2 shadow align-items-center p-30">
          <h2 className="text-center m-4 ">Register Empolyee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or username
              </label>
              <input
              required
                type={"email"}
                className="form-control"
                placeholder="Enter your email"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-4">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <div className="password-wrapper">
                  <input
                    required
                    type={ showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    />
                    <span
                    className="password-toggle-icon"
                    onClick={toggleShowPassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                  
                </div>
              </div>
            <div>
              <Link to="#">Forgot Password?</Link>
             <p style={{float:"right"}}>Don't have a account?<Link to="/reg">sigin </Link></p>
            </div>
            <br/>
            <div class="d-grid gap-5 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            
            <Link className="btn btn-outline-danger" to="/">
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div> 
    
    </>
  )
}
export default Login;




// import React from 'react'
// import { useState,useEffect } from 'react'
// import { redirect, useNavigate } from 'react-router-dom'
// import './Login.css'
// import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { Link } from 'react-router-dom'



// const Login = () => {
//  const [name,setName]=useState('')
//  const [id,setId]=useState('')  
//  const [password,setPassword]=useState('')
//  const [errors, setErrors] = useState({});
//  const[isSubmit,setIsSubmit]=useState(false);
//  const navigate =useNavigate();
//  const dispatch=useDispatch();

//  const handleName=(event)=>{
//     event.preventDefault();
//     setName(event.target.value)
//   }
 
//   const handleId=(event)=>{
//     event.preventDefault();
//     setId(event.target.value)
//   }
//   const handlePassword=(event)=>{
//     event.preventDefault();
//     setPassword(event.target.value)
//   }
//   const handleSubmit=async (event)=>{
//     event.preventDefault();
//     setErrors(validateForm({name,id,password}));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
//         email:name,
//         password:password
  
//       });
//       navigate('/');
//       let token=response.data.token;
//       localStorage.setItem('token',token);
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setId('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       console.log(error);
//       setIsSubmit(false);
  
//     }
//     // setIsSubmit(true);
    
    
   
// };
  

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     }

//     else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }
//     else{
//         setIsSubmit(true)
//     }
//     return errors;

//     // setErrors(errors);
//   };

  

//   return (
//     <>
  
//     <div className='login'>
//         <form className='login_form' onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <div className='gogo'>
//             <div className='form-floating mb-3'>
//             <label for='nm'>Email</label>
//             <br></br>
//             <input type='email' className='form-control'
//             placeholder='abc@gmail.com'
//             value={name} id='nm'
//             onChange={handleName} />
//             </div>
//             {errors.name}
//             </div>

//             <div className='loginbox'>
//               <div className="jo">
//             <div className='form-floating mb-3'>
//             <label for='pwd'>Password</label>
//             <input type='password' className='form-control'
//             placeholder='password' id='pwd'
//             value={password}
//             onChange={handlePassword}/>
//             </div>
//             </div>
//             {errors.password && <span>{errors.password}</span>}
//             </div>
            
//             <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

//         </form>
//         <br></br><br></br>
//         <h2>Don't have an account? <a href='/reg'>SignUp</a></h2>
//     </div>
    
//     </>
//   )
// }

// export default Login