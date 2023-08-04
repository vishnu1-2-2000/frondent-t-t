import React, { useEffect, useState } from 'react';


import axios from "axios";
import DashboardDataGrid from './DashboardDataGrid';
import Loading from '../../../components/Common/Loading';
import Sidebar from '../../../components/Sidnav/Sidebar';
import { Box,useTheme  } from "@mui/material";


function DashbordReadAfterLogin() {
                    const [selectedDIV_state,setSelectedDIV_state]=useState(<Loading/>);
                    const notAuthorizedSection = <div class="container-fluid" id="notauthdashboard">
                    <div class="card shadow mb-4"> 
                        <div class="card-body">  
                          
                          <div class="text-primary text-center">
                            <img src='/img/forbidden.jpg'/>
                          </div>
                        </div>
                    </div>
                  </div>
//                
function checkAuthorization() {
                    axios
                    .get("http://localhost:8000//accounts/userrolePermissionsRead")
                    .then((res) => {
                      var authorized = false;
                      // alert("haiii")
                      // alert(res.data.length)
                      // alert(res.data[0].admin['CREATE']);
                      
                    //   alert(res.data[0]['activity_name']);
                
                      res.data.forEach(element => {
                        if(element['activity_name'] === 'dashboard') {
                          if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                            // alert(element.admin['READ']);
                         
                           element.admin['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid/>) :setSelectedDIV_state(notAuthorizedSection);
                       
                            
                           
                          
                          }
                          else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                           
                              element.operator['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid/>) :setSelectedDIV_state(notAuthorizedSection);
                          
                            
                              
                            
                          }
                          else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          
                             element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid/>) :setSelectedDIV_state(notAuthorizedSection);
                          
                              
                                   
                          }
                          else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
                           
                               element.masterdata['READ']==="Checked"?setSelectedDIV_state(<DashboardDataGrid/>):setSelectedDIV_state(notAuthorizedSection);
                            
                       
                           
                            
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

// const loadingSection = <div class="container-fluid">
//                     <div class="card shadow mb-4"> 
//                         <div class="card-body">  
//                           <div class="px-3 py-5 text-primary text-center">
//                             <div class="spinner-border" role="status">
//                               <span class="sr-only">Loading...</span>
//                             </div>
//                           </div>
//                         </div>
//                     </div>
//                 </div>
          
//               const [selectedDIV_state, setSelectedDIV_state] = useState(loadingSection);
                
//               const notAuthorizedSection = <div class="container-fluid">
//                         <div class="card shadow mb-4"> 
//                             <div class="card-body">  
                              
//                               <div class="text-primary text-center">
//                                 <img src='/img/forbidden.jpg'/>
//                               </div>
//                             </div>
//                         </div>
//                     </div>
          
//           function checkAuthorization() 
//           {
//             axios
//             .get("http://localhost:8000/accounts/userrolePermissionsRead")
//             .then((res) => {
//               var authorized = false;
//               //  alert("haiii")
//               // alert(window.localStorage.getItem('loggedInUserrole'))
//               //alert( res.data[3].admin['UPDATE']);
//               //alert(res.data[2].activity_name)
//               alert(res.data[12].admin['READ'])
//                   if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                     
//                           res.data[12].activity_name ==='dashboard' && res.data[12].admin['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid   />) :setSelectedDIV_state(notAuthorizedSection);
                                                
                      
                      
                      
//                   }
//                   else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                      
//                           res.data[12].activity_name ==='dashboard' && res.data[12].operator['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid  />) :setSelectedDIV_state(notAuthorizedSection);
                      
                      
                  
//                   }
//                   else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                      
//                           res.data[12].activity_name ==='dashboard' && res.data[12].supervisor['READ']==="Checked" ? setSelectedDIV_state(<DashboardDataGrid />) :setSelectedDIV_state(notAuthorizedSection);
                      
                      
//                   }
//                   else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
//                   {
                     
//                           res.data[12].activity_name==="dashboard"&&res.data[12].masterdata['READ']==="Checked"?setSelectedDIV_state(<DashboardDataGrid/>):setSelectedDIV_state(notAuthorizedSection);
                      
                      
//                   }
      
                  
            
//               });
//           }
          
              
              
          
//               useEffect(() => {     
//                 checkAuthorization();
                
//               }, []);
             
//               return (
//                   <div id="wrapper">
                   
                         
//                       <div id="content-wrapper" class="d-flex flex-column">
//                           <div id="content">
//                               {/* <Header></Header>   */}
//                               {selectedDIV_state}
//                           </div>
                          
//                           {/* </Sidebar>Footer></Footer> */}
          
//                       </div>
                     
//               </div>
//             )
                
}

export default DashbordReadAfterLogin
