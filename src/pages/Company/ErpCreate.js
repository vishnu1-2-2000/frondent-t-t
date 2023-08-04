import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import ErpAfterLoginCheck from "./sections/ErpAfterLoginCheck";
import Loading from "../../components/Common/Loading"
function ErpCreate() {
                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<ErpAfterLoginCheck/>);
                      }
                      else {
                          navigate("/");
                      }
                    }, []);
                  
                    return (
                      <>
                        {selectedDIV_state}
                       
                      
                      </>
                    );
}

export default ErpCreate
