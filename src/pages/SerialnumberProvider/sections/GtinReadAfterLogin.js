import React, { useEffect, useState } from 'react';


import axios from "axios";



import GtinDataGrid from './GtinDataGrid';
import Box from '@mui/material/Box';
import Sidebar from "../../../components/Sidnav/Sidebar";
import NotAuthorizedSection from '../../../components/Common/NotAuthorizedSection';
function GtinReadAfterLogin() {
                    const loadingSection = <div class="container-fluid">
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
                
              const notAuthorizedSection = <div class="container-fluid"id="notauthgtin">
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
                .get("http://localhost:8000//accounts/userrolePermissionsRead")
                .then((res) => {
                  var authorized = false;
                  //  alert("haiii")
                  // alert(window.localStorage.getItem('loggedInUserrole'))
                  //alert( res.data[3].admin['UPDATE']);
                  //alert(res.data[2].activity_name)
                  res.data.forEach(element=>{
                    if(element['activity_name'] ==='gtinpool'){
                      if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Checked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"   />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          
                          
                          else if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Unchecked") {
                             element.admin['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"  />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Checked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Unchecked") {
                            element.admin['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"  />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Checked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Unchecked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Unchecked" && res.element.operator['UPDATE']==="Checked") {
                            res.element.operator['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"  />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Unchecked") {
                            element.operator['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                      
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Checked") {
                             element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Unchecked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Checked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Unchecked") {
                            element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<GtinDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                          }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                      {
                          if(element.masterdata['DELETE']==="Checked"&&element.masterdata['UPDATE']==="Checked"){
                           element.masterdata['READ']==="Checked"?setSelectedDIV_state(<GtinDataGrid deleteButtonStatus="enabled" editButtonStatus="enabled" />):setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.masterdata['DELETE']==='Checked'&&element.masterdata['UPDATE']==="Unchecked")
                          {
                            element.masterdata['READ']==="Checked"?setSelectedDIV_state(<GtinDataGrid deleteButtonStatus="enabled" editButtonStatus="disabled" />):setSelectedDIV_state(notAuthorizedSection);
                          }
                          else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==="Checked")
                          {
                            element.masterdata['READ']==='Checked'?setSelectedDIV_state(<GtinDataGrid deleteButtonStatus="disabled" editButtonStatus="enabled" />):setSelectedDIV_state(notAuthorizedSection)
                          }
                          else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==='Unchecked')
                          {
                           element.masterdata['READ']==='Checked'?setSelectedDIV_state(<GtinDataGrid deleteButtonStatus="disabled" editButtonStatus="disabled" />):setSelectedDIV_state(notAuthorizedSection);
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
                  <div id="wrapper">
                   
                         
                   <Box sx={{ display: 'flex' }}>
             
             {/* <Sidebar/> */}
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

export default GtinReadAfterLogin
