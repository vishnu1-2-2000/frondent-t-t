import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import CustomerCreateAfterLogin from "./sections/CustomerCreateAfterLogin";
import Loading from "../../components/Common/Loading"
import { Box } from "@mui/material";
function CustomerCreate() {
                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<CustomerCreateAfterLogin/>);
                      }
                      else {
                          navigate("/");
                      }
                    }, []);
                  
                    return (
                      <>
                    
                    <Box sx={{ display: 'flex' }}> 

                            

 
                  <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
                {selectedDIV_state}
                    </Box>
                    </Box>
                      </>
                      
                    );
}

export default CustomerCreate
