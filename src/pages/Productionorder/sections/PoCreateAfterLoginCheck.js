import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../../components/Navigation/Navbar";
//import SideBar from "../../../components/Sidebar/SideBar";
import Sidebar from "../../../components/Sidnav/Sidebar";

import PoDataEntry from "./PoDataEntry";
import PoDtataEdit from "./PoDataEdit";
import Box from '@mui/material/Box';
function PoCreateAfterLoginCheck() {
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
                          // alert(element.activity_name)
                          if(element['activity_name'] ==='productionorder'){
                        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          
                          if(operation === "new") {
                            element.activity_name ==='productionorder' && element.admin['CREATE']==="Checked" ? setSelectedDIV_state(<PoDataEntry />) : setSelectedDIV_state(notAuthorizedSection);
                          }
                          
                          else if(operation === "edit") {
                            element.activity_name ==='productionorder' && element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<PoDtataEdit/>) : setSelectedDIV_state(notAuthorizedSection);
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          if(operation === "new") {
                            element.activity_name ==='productionorder' && element.operator['CREATE']==="Checked" ? setSelectedDIV_state(<PoDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                            element.activity_name ==='productionorder' && element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<PoDtataEdit/>) :setSelectedDIV_state(notAuthorizedSection);
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          if(operation === "new") {
                            element.activity_name ==='productionorder' && element.supervisor['CREATE']==="Checked" ? setSelectedDIV_state(<PoDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                            element.activity_name ==='productionorder' && element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<PoDtataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                          if(operation === "new") {
                            element.activity_name ==='productionorder' && element.masterdata['CREATE']==="Checked" ? setSelectedDIV_state(<PoDataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          else if(operation === "edit") {
                            element.activity_name ==='productionorder' && element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<PoDtataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
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

export default PoCreateAfterLoginCheck