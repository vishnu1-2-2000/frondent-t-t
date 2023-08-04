import React, { useEffect, useState } from 'react';

import StockReadAfterLoginCheck from './sections/StockReadAfterLoginCheck';
// import Loading from '../Common/Loading';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";

function Stock() {
const [selectedDIV, setSelectedDIV] = useState(<Loading/>);

                    const navigate = useNavigate();   
                                    //  alert(window.localStorage.getItem('loggedInUsername'))
                          useEffect(() => {     
                                        if(window.localStorage.getItem('loggedInUsername') != null) {
                                            setSelectedDIV(<StockReadAfterLoginCheck/>);
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

export default Stock
