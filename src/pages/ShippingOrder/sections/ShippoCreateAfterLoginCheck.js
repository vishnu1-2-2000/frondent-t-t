import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Sidebar from "../../../components/Sidnav/Sidebar";
import Box from '@mui/material/Box';


import ShippoDataEntry from "./ShippoDataEntry";
import ShippoDataEdit from "./ShippoDataEdit";
function ShippoCreateAfterLoginCheck() {
  const { operation } = useParams();
  const { uniqueID } = useParams();
                  
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
  .get("http://localhost:8000/accounts/userrolePermissionsRead")
  .then((res) => {
    var authorized = false;
    res.data.forEach(element=>{
                          // alert(element.activity_name)
      if(element['activity_name'] ==='shippingorder'){
          // alert("haiii")
          // alert(res.data.length)
          // alert(res.data[0].admin['CREATE']);
          //alert(res.data[0].activity_name)
        if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                          
          if(operation === "new") {
            element.admin['CREATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEntry sendtoshipButtonStatus = "enabled"   />) : setSelectedDIV_state(notAuthorizedSection);
          }
                          
          else if(operation === "edit") {
            element.admin['UPDATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEdit/>) : setSelectedDIV_state(notAuthorizedSection);
          }
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
          if(operation === "new") {
            element.operator['CREATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEntry sendtoshipButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);      
          }
          else if(operation === "edit") {
            element.operator['UPDATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);
          }
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
          if(operation === "new") {
            element.supervisor['CREATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEntry sendtoshipButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);      
          }
          else if(operation === "edit") {
            element.supervisor['UPDATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
          }
        }
        else if(window.localStorage.getItem('loggedInUserrole') === "masterdata") {
          if(operation === "new") {
            element.masterdata['CREATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEntry />) :setSelectedDIV_state(notAuthorizedSection);      
          }
          else if(operation === "edit") {
            element.masterdata['UPDATE']==="Checked" ? setSelectedDIV_state(<ShippoDataEdit/>) :setSelectedDIV_state(notAuthorizedSection);      
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

export default ShippoCreateAfterLoginCheck