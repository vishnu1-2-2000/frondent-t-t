import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
import ProductErpAfterLogin from './sections/ProductErpAfterLogin';
function ProductErp() {
  const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
              
  const navigate = useNavigate();   
       //alert(window.localStorage.getItem('loggedInUsername'))
                     
      useEffect(() => {     
                            if(window.localStorage.getItem('loggedInUsername') != null) {
                                  setSelectedDIV(<ProductErpAfterLogin/>);
                              }
                                          
                            else {
                                      navigate("/");
                                }
                      }, []);
                                       
  return (
            <>
              <Box sx={{ display: 'flex' }}> 
                    
                <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
                          {selectedDIV}
                </Box>
            </Box>
        </>
    )
}

export default ProductErp
