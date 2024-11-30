import React, { useEffect, useState } from 'react';
//import SideBar from '../../../components/Sidebar/SideBar';

import axios from "axios";
import PoDataGrid from './PoDataGrid';


import Navbar from '../../../components/Navigation/Navbar';
import Sidebar from '../../../components/Sidnav/Sidebar';
import Box from '@mui/material/Box';

function PoReadAfterLoginCheck() {

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
      .get(window.url+"/accounts/userrolePermissionsRead")
      .then((res) => {
        var authorized = false;
        //  alert("haiii")
        // alert(window.localStorage.getItem('loggedInUserrole'))
        //alert( res.data[2].admin['CREATE']);
        //alert(res.data[2].activity_name)
        res.data.forEach(element=>{
            // alert(element.activity_name)
            if(element['activity_name'] ==='productionorder'){
            if(window.localStorage.getItem('loggedInUserrole') === "admin") {
                if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                }
                
         
                    
                
                
                else if(element.admin['DELETE']==="Checked" && element.admin['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.admin['DELETE']==="Unchecked" && element.admin['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled"  sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                
            }
            

            else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
                if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.operator['DELETE']==="Checked" && element.operator['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.operator['DELETE']==="Unchecked" && element.operator['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
            
            }
            else if(window.localStorage.getItem('loggedInUserrole')==="masterdata"){
            
                if(element.masterdata['DELETE']==="Checked" && element.masterdata['UPDATE']==="Checked"){
                    element.activity_name==="productionorder" && element.masterdata['READ']==="Checked"?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="enabled" editButtonStatus="enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>):setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.masterdata['DELETE']==='Checked' && element.masterdata['UPDATE']==="Unchecked")
                {
                    element.activity_name==='productionorder' && element.masterdata['READ']==="Checked"?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="enabled" editButtonStatus="disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>):setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.masterdata['DELETE']==='Unchecked' && element.masterdata['UPDATE']==="Checked")
                {
                    element.activity_name==='productionorder' && element.masterdata['READ']==='Checked'?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="disabled" editButtonStatus="enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>):setSelectedDIV_state(notAuthorizedSection)
                }
                else if(element.masterdata['DELETE']==='Unchecked' && element.masterdata['UPDATE']==='Unchecked')
                {
                    element.activity_name==='productionorder' && element.masterdata['READ']==='Checked'?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="disabled" editButtonStatus="disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>):setSelectedDIV_state(notAuthorizedSection);
                }

            }
            else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
                if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.supervisor['DELETE']==="Checked" && element.supervisor['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Checked") {
                    element.activity_name ==='productionorder' && element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled" propertyButtonStatus ="enabled" sendtoshipButtonStatus = "enabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
                else if(element.supervisor['DELETE']==="Unchecked" && element.supervisor['UPDATE']==="Unchecked") {
                    element.activity_name ==='productionorder' && element.supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled" propertyButtonStatus ="disabled" sendtoshipButtonStatus = "disabled" viewButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
                }
            }
         

            // else if(window.localStorage.getItem('loggedInUserrole') === "admin") {
            //     if(res.data[2].admin['CREATE']==="Checked"  ) {
            //         res.data[2].activity_name ==='sendtoshipping' && res.data[2].admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid sendtoshipButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
            //     }
                // else if(res.data[1].admin['DELETE']==="Checked" && res.data[1].admin['UPDATE']==="Unchecked") {
                //     res.data[2].activity_name ==='sendtoshipping' && res.data[2].admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid sendtoshipButtonStatus = "enabled" />) :setSelectedDIV_state(notAuthorizedSection);
                // }
                // else if(res.data[1].admin['DELETE']==="Unchecked" && res.data[1].admin['UPDATE']==="Checked") {
                //     res.data[2].activity_name ==='sendtoshipping' && res.data[2].admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid sendtoshipButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                // }
                // else if(res.data[1].admin['DELETE']==="Unchecked" && res.data[1].admin['UPDATE']==="Unchecked") {
                //     res.data[2].activity_name ==='sendtoshipping' && res.data[2].admin['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid sendtoshipButtonStatus = "disabled" />) :setSelectedDIV_state(notAuthorizedSection);
                // }
            //}
            // else if(window.localStorage.getItem('loggedInUserrole') === "operator") {
            //     if(res.data[1].operator['DELETE']==="Checked" && res.data[1].operator['UPDATE']==="Checked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].operator['DELETE']==="Checked" && res.data[1].operator['UPDATE']==="Unchecked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].operator['DELETE']==="Unchecked" && res.data[1].operator['UPDATE']==="Checked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].operator['DELETE']==="Unchecked" && res.data[1].operator['UPDATE']==="Unchecked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].operator['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            
            // }
            // else if(window.localStorage.getItem('loggedInUserrole') === "supervisor") {
            //     if(res.data[1].supervisor['CREATE']==="Checked" && res.data[1].supervisor['UPDATE']==="Checked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].supervisor['CREATE']==="Checked" && res.data[1].supervisor['UPDATE']==="Unchecked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "enabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].supervisor['CREATE']==="Unchecked" && res.data[1].supervisor['UPDATE']==="Checked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "enabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].supervisor['CREATE']==="Unchecked" && res.data[1].supervisor['UPDATE']==="Unchecked") {
            //         res.data[1].activity_name ==='productionorder' && res.data[1].supervisor['READ']==="Checked" ? setSelectedDIV_state(<PoDataGrid deleteButtonStatus = "disabled" editButtonStatus = "disabled"/>) :setSelectedDIV_state(notAuthorizedSection);
            //     }
            // }
            // else if(window.localStorage.getItem('loggedInUserrole')==="masterdata")
            // {
            //     if(res.data[1].masterdata['DELETE']==="Checked"&&res.data[1].masterdata['UPDATE']==="Checked"){
            //         res.data[1].activity_name==="productionorder"&&res.data[1].masterdata['READ']==="Checked"?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="enabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].masterdata['DELETE']==='Checked'&&res.data[1].masterdata['UPDATE']==="Unchecked")
            //     {
            //         res.data[1].activity_name==='productionorder'&&res.data[1].masterdata['READ']==="Checked"?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="enabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
            //     }
            //     else if(res.data[1].masterdata['DELETE']==='Unchecked'&&res.data[1].masterdata['UPDATE']==="Checked")
            //     {
            //         res.data[1].activity_name==='productionorder'&&res.data[1].masterdata['READ']==='Checked'?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="disabled" editButtonStatus="enabled"/>):setSelectedDIV_state(notAuthorizedSection)
            //     }
            //     else if(res.data[1].masterdata['DELETE']==='Unchecked'&&res.data[1].masterdata['UPDATE']==='Unchecked')
            //     {
            //         res.data[1].activity_name==='productionorder'&&res.data[1].masterdata['READ']==='Checked'?setSelectedDIV_state(<PoDataGrid deleteButtonStatus="disabled" editButtonStatus="disabled"/>):setSelectedDIV_state(notAuthorizedSection);
            //     }

            // }
        }
    })  
      
        });
        
    }

    
    

    useEffect(() => {     
      checkAuthorization();
      
    }, []);
   
    return (
        <div id="wrapper">
           
                  {/* <Navbar/>     */}
            {/* <SideBar > */}
            {/* <Sidebar/> */}
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    {/* <Header></Header>   */}
                    {selectedDIV_state}
                </div>
                
                {/* </Sidebar>Footer></Footer> */}

            </div>
            {/* </SideBar> */}
           
    </div>
  )
}

export default PoReadAfterLoginCheck