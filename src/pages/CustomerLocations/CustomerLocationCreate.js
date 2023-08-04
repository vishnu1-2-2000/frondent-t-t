import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import LocationCreateAfterLogin from "./sections/LocationCreateAfterLogin";
import Loading from "../../components/Common/Loading"
import { Box } from "@mui/material";
function CustomerLocationCreate() {

                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<LocationCreateAfterLogin/>);
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

export default CustomerLocationCreate
