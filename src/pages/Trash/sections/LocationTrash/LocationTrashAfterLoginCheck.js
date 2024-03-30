import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/Sidnav/Sidebar';

import axios from "axios";
import LocationTrashDisplay from './LocationTrashDisplay';
// import { Alert } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Loading from '../../../../components/Common/Loading';
import NotAuthorizedSection from '../../../../components/Common/NotAuthorizedSection';
const LocationTrashAfterLoginCheck= () => {
   


    const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);

   function checkAuthorization() {
    axios
    .get(window.url+"/accounts/userrolePermissionsRead")
    .then((res) => {
      var authorized = false;
      // alert("haiii")
      // alert(res.data.length)
      // alert(res.data[0].admin['CREATE']);
      
    //   alert(res.data[0]['activity_name']);

    res.data.forEach(element => {
        if(element['activity_name'] === 'trash') {
          if(window.localStorage.getItem('loggedInUserrole') === "admin") {
            //alert(element.admin['DELETE']);
                if(element.admin['DELETE']==="Checked") {
                    element.admin['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay  deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                }
            
                else if(element.admin['DELETE']==="Unchecked" ) {
                    element.admin['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay    deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                }
            
            }
          else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
            if(element.operator['DELETE']==="Checked") {
                element.operator['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay  deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                 }
              
                 else if(element.operator['DELETE']==="Unchecked" ) {
                  element.operator['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay  deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                 }
            }
          else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
            if(element.supervisor['DELETE']==="Checked") {
                element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay   deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                 }
              
                 else if(element.supervisor['DELETE']==="Unchecked" ) {
                  element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay   deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
                 }     
            }
          else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
            if(element.masterdata['DELETE']==="Checked") {
                element.masterdata['READ']==="Checked" ?setSelectedDIV_state(<LocationTrashDisplay    deleteButtonStatus = "enabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
            }
        
            else if(element.masterdata['DELETE']==="Unchecked" ) {
                element.masterdata['READ']==="Checked" ? setSelectedDIV_state(<LocationTrashDisplay  deleteButtonStatus = "disabled" />) :setSelectedDIV_state(<NotAuthorizedSection/>);
            }
        
            }
        }
      });

    });
  }

    useEffect(() => {     
      checkAuthorization();
    }, []);
   
    return (
        <div id="wrapper">
           {/* <Box sx={{ display: 'flex' }}>
            <Sidebar />  */}
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                  
                    
                    {selectedDIV_state}
                </div>
                
               

            </div>
           {/* </Box> */}
           
    </div> 
  )
}



export default LocationTrashAfterLoginCheck;


