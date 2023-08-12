import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Sidebar from "../../components/Sidnav/Sidebar";
import Box from '@mui/material/Box';

import UserrolePermissions from "./UserrolePermissions";
function Permission() {
var currentUserrole = window.localStorage.getItem('loggedInUserrole')
    const { operation } = useParams();
                    const { uniqueID } = useParams();
                  
                    const loadingSection = <div class="container-fluid" id="regimage">
                        <div class="card shadow mb-4"> 
                            <div class="card-body">  
                              <div class="px-3 py-5 text-primary text-center">
                                <div class="spinner-border" role="status">
                                  <span class="sr-only">Loading...</span>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>      
                  
                    const [selectedDIV_state, setSelectedDIV_state] = useState(loadingSection);
                  
                    const notAuthorizedSection = <div class="container-fluid" id="rolpermission">
                      <div class="card shadow mb-4"> 
                          <div class="card-body">  
                            
                            <div class="text-primary text-center">
                              <img src='/img/forbidden.jpg'/>
                            </div>
                          </div>
                      </div>
                    </div>
                  
                  
                    function checkAuthorization() {
                     
                        // alert(res.data.length)
                        // alert(res.data[0].admin['CREATE']);
                        //alert(res.data[0].activity_name)
                     
              
                        if(currentUserrole === "admin") {
                                        setSelectedDIV_state(<UserrolePermissions/>)              
                        } 
                        else{
                                        setSelectedDIV_state(notAuthorizedSection);
                        }  
                         
                      
                
                 
                    }
                  
                    useEffect(() => {
                      checkAuthorization();
                    }, []);
                  
                    return (
                      <>
                  
                        <div id="permissionpage2">
                        <Box sx={{ display: 'flex' }}>
                                 
                         <Sidebar/>
                         <div id="permissionpage2">
                            <div id="content-wrapper" class="d-flex flex-column">
                              <div id="content">
                                {/* <Header></Header>   */}
                                {selectedDIV_state}
                              </div>
                            {/* <Footer></Footer> */}
                          </div>
                          </div>
                        </Box>
                        </div>
                  
                      </>
                    );
}

export default Permission
