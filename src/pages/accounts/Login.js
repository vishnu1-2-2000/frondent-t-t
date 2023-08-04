import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import UserLogin from './Sections/UserLogin';

import Loading from '../../components/Common/Loading';

const Login = () => {

  const navigate = useNavigate();
  const [selectedDIV, setSelectedDIV] = useState(<Loading/>);       
 
  useEffect(() => {
    //  alert(window.localStorage.getItem('loggedInUsername'));
    if(window.localStorage.getItem('loggedInUsername')) {
      axios
      .post('http://192.168.200.131:8000/accounts/userAuthVerify', 
      {
        "username": window.localStorage.getItem('loggedInUsername'),    
        "password": window.localStorage.getItem('loggedInUserPassword'), 
      })
      .then((response) => {
        // alert(response.data);

        if(response.data === "notExists") {
          setSelectedDIV(<UserLogin/>);
          
        }
        else {
          window.localStorage.setItem('loggedInUsername', window.localStorage.getItem('loggedInUsername'));
          window.localStorage.setItem('loggedInUserPassword', window.localStorage.getItem('loggedInUserPassword'));
          window.localStorage.setItem('loggedInUserrole', window.localStorage.getItem('loggedInUserrole'));
          window.localStorage.setItem('loggedInemployeeid', window.localStorage.getItem('loggedInemployeeid'));
        
          navigate("/home");
        }
        //navigate("/dashboard");
        //setSelectedDIV(<UserLogin/>);

      });
    }
    else {
   
      setSelectedDIV(<UserLogin/>);
     
    }
  });

    return(
        <>
          
                    {selectedDIV}
                
                
        </>

    )
  
}

export default Login;