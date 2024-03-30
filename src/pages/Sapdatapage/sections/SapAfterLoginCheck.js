import React, { useEffect, useState } from 'react';

// import Sidebar from '../../Common/Sidebar';
// import Header from '../../Common/Header';
// import Footer from '../../Common/Footer';
import axios from "axios";
import UserDataGrid from './UserDataGrid';
// import { Alert } from 'react-bootstrap';
import Sidebar from '../../../components/Sidnav/Sidebar';



function SapAfterLoginCheck() {

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

  function checkAuthorization() {
         axios
         .get(window.url+"/accounts/userrolePermissionsRead")

         .then ((res =>{
            var authorized = false;
            res.data.forEach(element=>{

                 if(element['activity_name']==='sapdata'){
                  if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                    if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Checked") {
                        element.admin['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Unchecked") {
                        element.admin['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Checked") {
                        element.admin['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Unchecked") {
                         element.admin['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                }
                else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                    if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Checked") {
                        element.operator['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Unchecked") {
                        element.activity_name ==='registeredUsers' && element.operator['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Checked") {
                         element.operator['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Unchecked") {
                        element.operator['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                
                }
                else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                    if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Checked") {
                         element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Unchecked") {
                         element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Checked") {
                         element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Unchecked") {
                        element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<UserDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                    }
                }
                else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
                {
                    if(element.masterdata['DELETE']==="Checked"&&element.masterdata['UPDATE']==="Checked"){
                        element.masterdata['READ']==="Checked"?setSelectedDIV_state(<UserDataGrid deleteButtonStatus="enabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.masterdata['DELETE']==='Checked'&&element.masterdata['UPDATE']==="Unchecked")
                    {
                        element.masterdata['READ']==="Checked"?setSelectedDIV_state(<UserDataGrid deleteButtonStatus="enabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
                    }
                    else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==="Checked")
                    {
                        element.masterdata['READ']==='Checked'?setSelectedDIV_state(<UserDataGrid deleteButtonStatus="disabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection)
                    }
                    else if(element.masterdata['DELETE']==='Unchecked'&&element.masterdata['UPDATE']==='Unchecked')
                    {
                        element.masterdata['READ']==='Checked'?setSelectedDIV_state(<UserDataGrid deleteButtonStatus="disabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
                    }
    
                }
                 }   



            })

         }))          
}    

  return (
    <div>
      
    </div>
  )
}

export default SapAfterLoginCheck

