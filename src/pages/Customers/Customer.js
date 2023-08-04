import React, { useEffect, useState } from 'react';

import CustomerReadAfterLogin from './sections/CustomerReadAfterLogin';


import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
function Customer() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<CustomerReadAfterLogin/>);
                      }
                      
                      
                      else {
                          navigate("/");
                      }
                    }, []);
                   
                    return (
                       <>
                          {selectedDIV}
                       </>
                  )
}

export default Customer
