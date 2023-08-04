import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import RegisteredUsersCreateAfterLoginCheck from "./sections/RegisteredUsersCreateAfterLoginCheck";
// import Loading from "../Common/Loading";
import PoCreateAfterLoginCheck from "./sections/PoCreateAfterLoginCheck";
import Loading from "../../components/Common/Loading"
import Box from '@mui/material/Box';
function ProductionorderCreate() {
                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<PoCreateAfterLoginCheck/>);
                      }
                      else {
                          navigate("/");
                      }
                    }, []);
                  
                    return (
                      <>
                        <Box sx={{ display: 'flex' }}>
                        {selectedDIV_state}
                        </Box>
                      </>
                    );
}

export default ProductionorderCreate