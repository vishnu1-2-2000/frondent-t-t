import React, { useEffect, useState } from 'react';



import axios from "axios";
import Sidebar from '../../../components/Sidnav/Sidebar';

// import { Alert } from 'react-bootstrap';
import Loading from '../../../components/Common/Loading';
import ErpSettings from './ErpSettings';
import Box from '@mui/material/Box';
function ErpAfterLoginCheck() {
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
                                        //alert(res.data.activity_name)
                        res.data.forEach(element=>{
                            if(element['activity_name'] === 'company') {
                        
                                if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                                 
                                    element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<ErpSettings/>) :setSelectedDIV_state(notAuthorizedSection);
                                  
                                }
                                else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                                    
                                    element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<ErpSettings/>) :setSelectedDIV_state(notAuthorizedSection);
                                
                                }
                                else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                               
                                    element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<ErpSettings/>) :setSelectedDIV_state(notAuthorizedSection);   
                                
                                }
                                else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                                {
                                   
                                    element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<ErpSettings/>) :setSelectedDIV_state(notAuthorizedSection);
                                    
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
                        <br></br>
                        <br></br>
                        <br></br>
              
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

export default ErpAfterLoginCheck
