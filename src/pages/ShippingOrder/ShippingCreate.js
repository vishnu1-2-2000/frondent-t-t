import React, { useEffect, useState } from 'react';

import ShippoCreateAfterLoginCheck from './sections/ShippoCreateAfterLoginCheck';
// import Loading from '../Common/Loading';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
import Box from '@mui/material/Box';

function ShippingCreate() {

const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
                    
const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
               
                useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<ShippoCreateAfterLoginCheck/>);
                      }
                      
                      else {
                          navigate("/");
                      }
                    }, []);
                   
                    return (
                       <>
                          <Box sx={{ display: 'flex' }}>
                          {selectedDIV}
                          </Box>
                       </>
                  )
}

export default ShippingCreate
