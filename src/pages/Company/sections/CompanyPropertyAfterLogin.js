import React, { useEffect, useState } from 'react';

import Sidebar from '../../../components/Sidnav/Sidebar';

import axios from "axios";
import Box from '@mui/material/Box';

// import { Alert } from 'react-bootstrap';
import Loading from '../../../components/Common/Loading';

import CompanyProperty from './CompanyProperty';
import { Navbar } from 'react-bootstrap';
function CompanyPropertyAfterLogin() {
                    const [selectedDIV_state,setSelectedDIV_state]=useState(<Loading/>);
                    const notAuthorizedSection = <div class="container-fluid">
                    <div class="card shadow mb-4"> 
                        <div class="card-body">  
                          
                          <div class="text-primary text-center">
                            <img src='/img/forbidden.jpg'/>
                          </div>
                        </div>
                    </div>
                  </div>
                function checkAuthorization()
                {
                    axios
                    .get("http://localhost:8000/accounts/userrolePermissionsRead")
                    .then((res)=>{
                        res.data.forEach(element=>{
                            if(element['activity_name'] === 'company') {
                        
                                if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                                 
                                    element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<CompanyProperty/>) :setSelectedDIV_state(notAuthorizedSection);
                                  
                                }
                                else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                                    
                                    element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<CompanyProperty/>) :setSelectedDIV_state(notAuthorizedSection);
                                
                                }
                                else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                               
                                    element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<CompanyProperty/>) :setSelectedDIV_state(notAuthorizedSection);   
                                
                                }
                                else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                                {
                                   
                                    element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<CompanyProperty/>) :setSelectedDIV_state(notAuthorizedSection);
                                    
                                }
                            }
                        });
                    });
                }
                useEffect(()=>{
                checkAuthorization();
                },[]);
                
                return(
                    <div id="wrapper">
                        <Box sx={{ display: 'flex' }}>
                          <Sidebar/>
                                   
                          
                            <div id="content-wrapper" class="d-flex flex-column">
                              <div id="content">
                                {/* <Header></Header>   */}
                                {selectedDIV_state}
                              </div>
                            {/* <Footer></Footer> */}
                          </div>
                         </Box>
                        </div>
                )
                
}

export default CompanyPropertyAfterLogin
