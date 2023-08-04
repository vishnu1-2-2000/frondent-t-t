import React, { useEffect, useState } from 'react';


import axios from "axios";



import ProviderDataGrid from './ProviderDataGrid';
import NotAuthorizedSection from '../../../components/Common/NotAuthorizedSection';

function ProviderReadAfterLogin() {

  const loadingSection = <div class="container-fluid" id="notauthsnprovider">
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
  function checkAuthorization() 
              {
                axios
                .get("http://localhost:8000//accounts/userrolePermissionsRead")
                .then((res) => {
                  var authorized = false;

                  res.data.forEach(element=>{
                    if(element['activity_name'] ==='snprovider'){
                      if(window.localStorage.getItem('loggedInUserrole') === 'admin'){
                        if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }
                        else if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        
                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                      }

                      if(window.localStorage.getItem('loggedInUserrole') === 'operator'){
                        if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }
                        else if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        
                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                      }
                      if(window.localStorage.getItem('loggedInUserrole') === 'supervisor'){
                        if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }
                        else if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        
                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                      }

                      if(window.localStorage.getItem('loggedInUserrole') === 'masterdata'){
                        if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }
                        else if(element.admin['DELETE'] === "Checked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Checked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                        
                        else if(element.admin['DELETE'] === "Unchecked" && element.admin['UPDATE']==="Unchecked"){
                          element.admin['READ'] ==="Checked" ? setSelectedDIV_state(<ProviderDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" />): setSelectedDIV_state(<NotAuthorizedSection/>)
                        }

                      }
                    }
                  })
                })
              
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

export default ProviderReadAfterLogin
