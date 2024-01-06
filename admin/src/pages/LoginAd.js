import React from 'react'
import styled from 'styled-components'
import NavbarAd from '../components/NavbarAd';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import  { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure,signInStart,signInSuccess } from "../redux/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";



function LoginAd() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData , setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentAdmin,loading,error} = useSelector((state) => state.admin)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleSumbit = async (e) =>{
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res  = await axios.post("https://bharatroofers.com/api/property/admin-login", formData)
      console.log(res)
      if (res.data && res.data.success === true) {
        dispatch(signInSuccess(res.data));
        console.log(res.data);
        cogoToast.success(`${res.data.message}`);
        navigate("/");
        return;
      }
      if (res.data && res.data.success === false) {
        dispatch(signInFailure(res.data));
        cogoToast.error(`${res.data.message}`);
        return;
      }
    
    }
    catch(err){
      if (err.response && err.response.data) {
        dispatch(signInFailure(err.response.data));
        console.log(error);
        cogoToast.error(`${err.response.data.message}`);
      }
    }

  }
  return (
    <Wrapper>
      <NavbarAd/>
<div className='container'>
  <div className="row">
    <div className="col-lg-4"></div>
    <div className="col-lg-4 border rounded-4 mb-2 bg-primary " id='size'>
      
    <div className="formcontent form1">
              <h1 className='text-center'>Login</h1>
             
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
             
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={handleSumbit}>Submit</button>
              </div>
              {/* <p className="mb-2 mt-2" >
                Don't have an account?{" "}
                <span>
                  <Link to="/admin_register" className='text-white'>Signup</Link>
                </span>
              </p> */}
              <p className="text-center mt-2">
              <Link to="/admin_forgot" className='text-white'>Forgot Password</Link>
              </p>
             
             
            </div>
</div>
    <div className="col-lg-4"></div>
</div>
</div>


    </Wrapper>
  )
}

export default LoginAd
const Wrapper = styled.div`
  .form1{
  margin-bottom: 4rem;
     margin-top: 3rem;
     

 
  
  }  
  .container{
    height: 45rem;
    margin-top: 9rem;
  }
label{
  font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
}
h3{
  font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
}
button{
  font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
}
.form-text{
  font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
}
#size{
  margin-right: 12px;
  margin-left: 10px;
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 75%;
    margin-left: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1020px) {
    width: 50%;
    margin-left: 170px;
  }
}
`