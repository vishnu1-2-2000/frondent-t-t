import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/Navigation/Navbar";
// import SideBar from "../../../components/Sidebar/SideBar";
import Sidebar from "../../../components/Sidnav/Sidebar";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import {MdOutlineSave } from 'react-icons/md';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, TextField } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
function PoPropertyEdit() {

const [id, setId] = useState(0);
const [genericname,setGenericname]= useState("");
const [composition,setComposition]= useState("");
const [usage,setUsage]= useState("");
const [remark,setRemark]= useState("");
const [productimage,setProductImage]= useState("");
const [scheduled ,setScheduled ] = useState("2017-5-2");
const [productionOrderEditID, setProductionOrderEditID] = useState();
                    ///   For navigate function
const navigate = useNavigate();
var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')               
                    ////    for receiving the parameters from URL
const { uniqueID } = useParams();
                    var username = window.localStorage.getItem('username')
                    var password = window.localStorage.getItem('password')
                    var currentUserrole = window.localStorage.getItem('userrole')
                    ////  Fetch data from local storage
                  
                    const ITEM_HEIGHT = 48;
                    const ITEM_PADDING_TOP = 8;   
                    const MenuProps = {
                      PaperProps: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                          width: 550,
                        },
                      },
                    };                    
                  
useEffect(() => {
                      //setScheduled("2017-06-01");
                      //alert(window.localStorage.getItem("productionOrderEditID"));
        getProductOrderPropertyEditRequestData();       
}, []);
                        
function getProductOrderPropertyEditRequestData() {
                      //var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
                      //alert(uniqueID);
                  
    axios
       .get("http://127.0.0.1:8000/master/poproperty/"+uniqueID+"/",
                     
                    )
                    .then((res2) => {
                        // alert("anu")
                        //alert(res.data[0].system_name);
                        //setProductionLineSystemName(res.data[0].system_name);
                  
                        // alert(res2.data[0].generic_name);
                        //alert(res2.data[0].scheduled);
                        // if(res2.data[0].scheduled == null) {
                        //   setScheduled("2011-11-11");
                        // }
                        // else {
setScheduled(res2.data[0].scheduled); 
                        // }
setGenericname(res2.data[0].generic_name);
setComposition(res2.data[0].composition);
setUsage(res2.data[0].usage);
setRemark(res2.data[0].remark);
  });
    }
    var headwidget=
    <Box
    component="form"
    sx={{
      width: 500,
      maxWidth: '100%',
      
      
    }}
      noValidate
      autoComplete="off"
  ><Controls.Input 
    disabled
    fullWidth
    
    id="outlined-Company Prefix"
    label={<h4 ><pre><h4 style={{color:"white"}}>  <font face="times new roman" size="6">      Enter Productionorder  Property </font></h4></pre></h4>}
  />
  </Box>

var genericnameWidget =
                  // <input
                  //   type="text"
                  //   className="form-control"
                  //   value={genericname}
                  //   onChange={(e) => setGenericname(e.target.value)}
                  //     />
                    <TextField required
                      label="GenricName"
                      id="outline-genericname"
                      value={genericname}
                      onChange={(e) => setGenericname(e.target.value)}
                      />        
                      
var compositionWidget =
                  // <input
                  //   type="text"
                  //   value={composition}
                  //   className="form-control"
                  //   onChange={(e) => setComposition(e.target.value)}
                  //   />
                    <TextField required
                    label="Composition"
                    id="outline-composition"
                    value={composition}
                    onChange={(e) => setComposition(e.target.value)}
                    />   
var scheduledWidget =
                // <input
                //     type="date"
                //     value={scheduled}
                //     className="form-control"
                //     onChange={(e) => setScheduled(e.target.value)}
                //     />

                <TextField required
                    label="Scheduled"
                  
                    id="outline-scheduled"
                    value={scheduled}
                    onChange={(e) => setScheduled(e.target.value)}
                    />   
var usageWidget =
                  // <input
                  //   type="text"
                  //   value={usage}
                  //   className="form-control"
                  //   onChange={(e) => setUsage(e.target.value)}
                  //   />
                    <TextField required
                    label="Usage"
                    id="outline-usage"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    />  
var remarkWidget = 
                  // <input
                  //   type="text"
                  //   value={remark}
                  //   className="form-control"
                  //   onChange={(e) => setRemark(e.target.value)}
                  //   />

                    <TextField required
                    label="Remark"
                    id="outline-remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    />  
var productimageWidget =  
                  // <input
                  //   type="text"
                  //   value={productimage}
                  //   className="form-control"
                  //   onChange={(e) => setProductImage(e.target.value)}
                  //   />
                    <TextField required
                    label="Product Image"
                    id="outline-productimage"
                    value={productimage}
                    onChange={(e) => setProductImage(e.target.value)}
                    />  
                      
const handleSubmit = (e) => {
                        // propertyid=propertyID;
                        // alert("haii")
                          //  alert(productionOrderEditID);
                    e.preventDefault();
                    console.log("clicked");
                    if(scheduled == "Invalid date") {
                    setScheduled("2017-06-01");
                          }
                          // alert(productionOrderEditID);
                    axios
                          .put('http://127.0.0.1:8000/master/poproperty/update/'+uniqueID, 
                          {
                            "generic_name":genericname, 
                            "composition":composition, 
                            "scheduled":scheduled,
                            "usage": usage, 
                            "remark":remark,
                            "product_image": productimage,
                            "loggedInUsername":loggedInUsername,

                            "loggedInUserrole":loggedInUserrole, 
                            
                          
                          
                    
                            // "password":pass
                          },
                          
                          )
                          .then(() => {
                            navigate("/productionorder");
                          });
                    
                      }             
return (
  <>                                    
  <br></br>
  <br></br>
   
   <div class="container-fluid">
             <div class="card shadow mb-4" id="customerfullcard"> 
                 <div class="card-header py-3" id="customercardhead">
                     <div className='row'>
                         <div className='col-10' id="locationhead">
                         {headwidget}
                         </div>
                     </div>
                                                     
                 </div>

                 <div class="card-body">  
                 <br></br>
   
  <Box 
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
  >

     <div className="container" id="locationpropertybox" >
        <div className="row">
           <div className="col-4">
           {genericnameWidget}
           {compositionWidget}
                
             
           </div>
           <div className="col-4">
           {scheduledWidget}
           {usageWidget}
           </div>
           <div className="col-2">
           {remarkWidget}
           {productimageWidget}
           </div>
           <div className="col-4" id="locationpropertybutton" >
          
              <button  onClick={handleSubmit}><MdOutlineSave size={38}/>                                                
              </button>
           </div>
        </div>
     </div>
 </Box>
 </div>
             </div>
         </div>   
   <hr></hr>  
            
</>
         )
}

export default PoPropertyEdit