import React, { useEffect, useState } from 'react';


import axios from "axios";


import Sidebar from '../../../components/Sidnav/Sidebar';
import StockDataGrid from './StockDataGrid';
import { Box } from '@mui/material';

function StockReadAfterLoginCheck() {
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
                .then((res) => {
                  var authorized = false;
                  //  alert("haiii")
                  // alert(window.localStorage.getItem('loggedInUserrole'))
                  //alert( res.data[3].admin['UPDATE']);
                  //alert(res.data[2].activity_name)
                      if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          
                              res.data[4].activity_name ==='stock' && res.data[4].admin['READ']==="Checked" ? setSelectedDIV_state(<StockDataGrid   />) :setSelectedDIV_state(notAuthorizedSection);
                                                    
                          
                          
                          
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                          
                              res.data[4].activity_name ==='stock' && res.data[4].operator['READ']==="Checked" ? setSelectedDIV_state(<StockDataGrid   />) :setSelectedDIV_state(notAuthorizedSection);
                          
                          
                      
                      }
                      else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                          
                              res.data[4].activity_name ==='stock' && res.data[4].supervisor['READ']==="Checked" ? setSelectedDIV_state(<StockDataGrid  />) :setSelectedDIV_state(notAuthorizedSection);
                          
                          
                      }
                      else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                      {
                         
                              res.data[4].activity_name==="stock"&&res.data[4].masterdata['READ']==="Checked"?setSelectedDIV_state(<StockDataGrid   />):setSelectedDIV_state(notAuthorizedSection);
                          
                          
                      }
          
                      
                
                  });
              }
          
              
              
          
              useEffect(() => {     
                checkAuthorization();
                
              }, []);
             
              return (
                  <div id="wrapper">
                        
                    
                      <div id="content-wrapper" class="d-flex flex-column">
                          <div id="content">
                              {/* <Header></Header>   */}
                              {selectedDIV_state}
                          </div>
                          
                          {/* </Sidebar>Footer></Footer> */}
          
                      </div>
                      
              </div>
            )
}

export default StockReadAfterLoginCheck