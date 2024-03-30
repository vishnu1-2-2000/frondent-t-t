import React, { useEffect, useState } from 'react';

// import SideBar from '../../../components/Sidebar/SideBar';
import Sidebar from '../../../components/Sidnav/Sidebar';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from '../../../components/Navigation/Navbar';
import Box from '@mui/material/Box';
// import { Alert } from 'react-bootstrap';
import Loading from '../../../components/Common/Loading';
import GtinDataEdit from './GtinDataEdit';
import GtinDataEntry from './GtinDataEntry';
function GtinCreateAfterLogin() {
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
                  
      const notAuthorizedSection = <div class="container-fluid" id="notauhorized">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
      <div class="card shadow mb-4"> 
                      
                          <div class="card-body">  
                          
                            <div class="text-primary text-center">
                           
                              <img src='/img/forbidden.jpg'/>
                            </div>
                          </div>
                      </div>
                    </div>
                  
                  
                    function checkAuthorization() {
                      axios
                      .get(window.url+"/accounts/userrolePermissionsRead")
                      .then((res) => {
                        var authorized = false;
                        // alert("haiii")
                        // alert(res.data.length)
                        // alert(res.data[0].admin['CREATE']);
                        //alert(res.data[0].activity_name)
                        res.data.forEach(element=>{
                          if(element['activity_name'] ==='gtinpool'){
                        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          
                          if(operation === "new") {
                            element.admin['CREATE']==="Checked" ? setSelectedDIV_state(<GtinDataEntry />) : setSelectedDIV_state(notAuthorizedSection);
                          }
                          
                          else if(operation === "edit") {
                            element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<GtinDataEdit/>) : setSelectedDIV_state(notAuthorizedSection);
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          if(operation === "new") {
                            element.operator['CREATE']==="Checked" ? setSelectedDIV_state(<GtinDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                           element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<GtinDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          if(operation === "new") {
                           element.supervisor['CREATE']==="Checked" ? setSelectedDIV_state(<GtinDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                             element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<GtinDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                          if(operation === "new") {
                             element.masterdata['CREATE']==="Checked" ? setSelectedDIV_state(<GtinDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                            element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<GtinDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                        }
                      }
                    })
                      });
                    }
                  
                    useEffect(() => {
                      checkAuthorization();
                    }, []);
                    
                  
                    return (
                      <>
                    
                        <div id="wrapper">
                        <Box sx={{ display: 'flex' }}>
                           
                                      {/* <Navbar/> */}
                                      <Sidebar/>
                          {/* <SideBar pageName = "registeredUsers"> */}
                            <div id="content-wrapper" class="d-flex flex-column">
                              <div id="content">
                                {/* <Header></Header>   */}
                                {selectedDIV_state}
                              </div>
                            {/* <Footer></Footer> */}
                          </div>
                          {/* </SideBar> */}
                          </Box>
                        </div>
                        
                  
                      </>
                    );
}

export default GtinCreateAfterLogin
