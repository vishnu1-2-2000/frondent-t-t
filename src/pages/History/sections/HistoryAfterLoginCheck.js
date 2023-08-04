import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Sidebar from "../../../components/Sidnav/Sidebar";
import Box from '@mui/material/Box';
import HistoryDataEntry from "./HistoryDataEntry";
function HistoryAfterLoginCheck() {
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
                  
                    const notAuthorizedSection = <div class="container-fluid">
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
                        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          
                          if(operation === "new") {
                            res.data[10].activity_name ==='history' && res.data[10].admin['CREATE']==="Checked" ? setSelectedDIV_state(<HistoryDataEntry   />) : setSelectedDIV_state(notAuthorizedSection);
                          }
                          
                          
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          if(operation === "new") {
                            res.data[10].activity_name ==='history' && res.data[10].operator['CREATE']==="Checked" ? setSelectedDIV_state(<HistoryDataEntry />) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          if(operation === "new") {
                            res.data[10].activity_name ==='history' && res.data[10].supervisor['CREATE']==="Checked" ? setSelectedDIV_state(<HistoryDataEntry />) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          
                        }
                        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                          if(operation === "new") {
                            res.data[10].activity_name ==='history' && res.data[10].masterdata['CREATE']==="Checked" ? setSelectedDIV_state(<HistoryDataEntry />) :setSelectedDIV_state(notAuthorizedSection);      
                          }
                          
                        }
                      });
                    }
                  
                    useEffect(() => {
                      checkAuthorization();
                    }, []);
                  
                    return (
                      <>
                  
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
                  
                      </>
                    );
}

export default HistoryAfterLoginCheck
