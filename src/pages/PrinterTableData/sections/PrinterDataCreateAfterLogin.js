import React, { useEffect, useState } from 'react';

import { Link, useParams } from "react-router-dom";
import Sidebar from '../../../components/Sidnav/Sidebar';

import axios from "axios";
import Navbar from '../../../components/Navigation/Navbar';
import Box from '@mui/material/Box';

import Loading from '../../../components/Common/Loading';
import PrinterdataEntry from './PrinterdataEntry';
import PrinterDataEdit from './PrinterDataEdit';
import NotAuthorizedSection from '../../../components/Common/NotAuthorizedSection';


function PrinterDataCreateAfterLogin() {
  const [selectedDIV_state,setSelectedDIV_state]=useState(<Loading/>);
  const { operation } = useParams();
  const { uniqueID } = useParams();
  const notAuthorizedSection = <div class="container-fluid" id="notauthprinterpool">
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
                        if(element['activity_name'] ==='printerpool'){
                      if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                        
                        if(operation === "new") {
                          element.admin['CREATE']==="Checked" ? setSelectedDIV_state(<PrinterdataEntry />) : setSelectedDIV_state(notAuthorizedSection);
                        }
                        
                        else if(operation === "edit") {
                          element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<PrinterDataEdit/>) : setSelectedDIV_state(notAuthorizedSection);
                        }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                        if(operation === "new") {
                          element.operator['CREATE']==="Checked" ? setSelectedDIV_state(<PrinterdataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                        }
                        else if(operation === "edit") {
                          element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<PrinterDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);
                        }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                        if(operation === "new") {
                          element.supervisor['CREATE']==="Checked" ? setSelectedDIV_state(<PrinterdataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                        }
                        else if(operation === "edit") {
                           element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<PrinterDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
                        }
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                        if(operation === "new") {
                          element.masterdata['CREATE']==="Checked" ? setSelectedDIV_state(<PrinterdataEntry/>) :setSelectedDIV_state(notAuthorizedSection);      
                        }
                        else if(operation === "edit") {
                         element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<PrinterDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
                        }
                      }
                    }
                  })
                });
              }
    useEffect(()=>{
                checkAuthorization();
            },[]);
                
    return(
      <div id="wrapper">
        <Box sx={{ display: 'flex' }}>
                            <br></br>
                  {/* <Navbar />  */}
          <Sidebar/>
          <Box component="main" sx={{ flexGrow: 1, p: 1}}>
                        {/* <SideBar > */}
                
            <div id="content-wrapper" className='d-flex flex-column'>
              <div id="content">                
                {selectedDIV_state}
              </div>                
            </div>
                        {/* </SideBar> */}
          </Box>
        </Box>                
      </div>
    )
}

export default PrinterDataCreateAfterLogin
