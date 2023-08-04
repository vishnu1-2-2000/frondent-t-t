import React, { useEffect, useState } from 'react';


import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
import PrinterDataReadAfterLogin from './sections/PrinterDataReadAfterLogin';
function PrinterdataRead() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<PrinterDataReadAfterLogin/>);
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

export default PrinterdataRead
