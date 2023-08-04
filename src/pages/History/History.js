import React, { useEffect, useState } from 'react';

import HistoryReadAfterLogin from './sections/HistoryReadAfterLogin';
// import Loading from '../Common/Loading';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";
import { Box } from '@mui/material';
function History() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);

                    const navigate = useNavigate();   
                                    //  alert(window.localStorage.getItem('loggedInUsername'))
                          useEffect(() => {     
                                        if(window.localStorage.getItem('loggedInUsername') != null) {
                                            setSelectedDIV(<HistoryReadAfterLogin/>);
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

export default History