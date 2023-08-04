import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import TracelinkAfterLogin from "./sections/TracelinkAfterLogin";
import Loading from "../../components/Common/Loading"

function TracelinkCreate() {
                    const navigate = useNavigate(); 

                    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);
                  
                    useEffect(() => {
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV_state(<TracelinkAfterLogin/>);
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

export default TracelinkCreate
