import React, { useEffect, useState } from 'react';

import CompanyReadAfterLogin from './sections/CompanyReadAfterLogin';

// import Loading from '../Common/Loading';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
function Company() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<CompanyReadAfterLogin/>);
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

export default Company
