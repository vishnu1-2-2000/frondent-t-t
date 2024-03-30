import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";

import { Box, Button, TextField } from "@mui/material";



const UserLogin = () => {

    const navigate = useNavigate();
    var warningDIV =       
      <div class="alert alert-success" role="alert" id="loginalert">
        Enter your Email ID and Password
      </div>
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userrole, setUserrole] = useState("");
       
    const [warningDIVstate, changeWarningDIVstate] = useState(warningDIV); 

  //   var logInWidget=

  //       <div class="row">
  //         <link rel="stylesheet" href="./style.css"></link>
  //           <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
  //           <div class="col-lg-6">
  //               <div class="p-5">
  //                   <div class="text-center">
  //                       <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
  //                   </div>
                    
  //                   {warningDIVstate}
  //                   <form class="user">
  //                       <div class="form-group">
  //                       <input type="email" id="form2Example1" class="form-control form-control-user" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
  // {/* <label class="form-label" for="form2Example1" placeholder='Enter email address'>Email address</label> */}
  //                       </div>
  //                       <div class="form-group">
  //                       <input type="password" id="form2Example2" class="form-control form-control-user" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
  //                       </div>
  //                       <div class="form-group">
  //                           <div class="custom-control custom-checkbox small">
  //                               <input type="checkbox" class="custom-control-input" id="customCheck"/>
  //                               <label class="custom-control-label" for="customCheck">Remember
  //                                   Me</label>
  //                           </div>
  //                       </div>
  //                       <button type="button" class="btn btn-primary btn-user btn-block" onClick={handleSignIn}>Login</button>
  //                       <hr/>
  //                       <a href="index.html" class="btn btn-google btn-user btn-block">
  //                           <i class="fab fa-google fa-fw"></i> Login with Google
  //                       </a>
  //                       <a href="index.html" class="btn btn-facebook btn-user btn-block">
  //                           <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
  //                       </a>
  //                   </form>
  //                   <hr/>
  //                   <div class="text-center">
  //                       <a class="small" href="forgot-password.html">Forgot Password?</a>
  //                   </div>
  //                   <div class="text-center">
  //                       <a class="small" href="register.html">Create an Account!</a>
  //                   </div>
  //               </div>
  //           </div>
  //       </div>
  
  
  
  
    
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSignIn() {
    // alert(username);
    // alert(password);

    var testPassed = false;

    if(username === "" || !isValidEmail(username)) {
      // alert("haii")
      warningDIV =       
        <div class="alert alert-danger" role="alert">
          Invalid Email ID
        </div>

     changeWarningDIVstate(warningDIV);
     testPassed = false;
    }
    else {
      testPassed = true;
    }

    if(testPassed===true) {
      if(password === "") {
        warningDIV =       
          <div class="alert alert-danger" role="alert">
            Invalid password
          </div>

        changeWarningDIVstate(warningDIV);
        testPassed = false;         
      }
      else {
        testPassed = true;
      }
    }

    //alert(testPassed);

    if(testPassed === true) {
    

      axios
      .post(window.url+'/accounts/logInController', 
      {
        "username": username,    
        "password": password, 
      })
      .then((response) => {
//         alert(response.data);
        if(response.data === "UserDoesNotExist") {
          warningDIV =       
            <div class="alert alert-danger" role="alert">
              User does not exist
            </div>

          changeWarningDIVstate(warningDIV);
        }
        else if(response.data === "passwordDoesNotMatch") {
          warningDIV =       
            <div class="alert alert-danger" role="alert">
              Password does not match
            </div>

          changeWarningDIVstate(warningDIV);            
        }
        else {
          // alert(response.data['employeeid']);
          window.localStorage.setItem('loggedInUsername', username);
          window.localStorage.setItem('loggedInUserPassword', password);
          window.localStorage.setItem('loggedInUserrole', response.data['userrole']);
          window.localStorage.setItem('loggedInUsernameName', response.data['username']);
          window.localStorage.setItem('loggedInemployeeid', response.data['employeeid']);


          navigate("/registeredusers");            

        }
        
      });
    }
  }

  var headfield=
  <h2><pre>        Track & Trace Login</pre></h2>
    var usernameFieldWidget = <input
          type="text"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        /> 

    var passwordFieldWidget = <input
          type="password"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setPassword(e.target.value)}
        />

    return(
        <>
            <div className='head'>
              <div className='full'>
            
            
              <div class="container-fluid">
              <div class="card shadow mb-4" id="loginfullcard"> 
                  <div class="card-header py-3" id="logincardhead">
                      <div className='row'>
                          <div className='col-10' id="loginhead">
                         {headfield}
                          </div>
                      </div>
                                                      
                  </div>

                  <div class="card-body">  
            
                  {warningDIVstate}
<table class="table table-borderless productionOrderReportSearchTable" id="loginReportSearchTableID"  >


  
                      <tbody>
                    

                      <tr>
                     
                      <td class="productionOrderReportSearchTD">Email</td>
                      <td class="productionOrderReportSearchTD">
                      {usernameFieldWidget}
                      </td>
                      
                      
                      
                      </tr>
                      <tr>
                      <td class="productionOrderReportSearchTD">Password</td>
                      <td class="productionOrderReportSearchTD">
                      {passwordFieldWidget}
                      </td>
                      </tr>
                      
                      
                      
                     
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">
                       
                      <button className="btn btn-success" onClick={handleSignIn}>Login</button>
                      </td>
                      </tr>
                      
                      
                      
                      
                      
                      </tbody>
                      </table>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                     
        </>
       
    )
  
}

export default UserLogin;
