import React, { useEffect, useState } from 'react';

import LocationReadAfterLogin from './sections/LocationReadAfterLogin';


import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
function CustomerLocation() {

                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<LocationReadAfterLogin/>);
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

export default CustomerLocation
