import React, { useEffect, useState } from 'react';

import ManufactReadAfterLogin from './sections/ManufactReadAfterLogin';

import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
function ManufacturingLocation() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<ManufactReadAfterLogin/>);
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

export default ManufacturingLocation
