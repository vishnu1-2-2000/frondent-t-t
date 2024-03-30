import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import CustomerPropertyLogin from "./sections/CustomerPropertyLogin";
import Loading from "../../components/Common/Loading"
import { Box } from "@mui/material";

function Customerproperty() {
                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<CustomerPropertyLogin/>);
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

export default Customerproperty