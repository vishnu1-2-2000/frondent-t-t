import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
 import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

function CompanyDataEntry() {
                    var warningDIV= <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                        </div>
                    
                    
                    
                      const [id, setId] = useState(0);
                      const [company_name, setComname] = useState("");
                      const [address, setAddress] = useState("");
                      const [zip,setZip] = useState("");
                      const [state,setState] = useState("");
                    
                      const [gln,setGln] = useState("");
                      const [created_by, setCreatedby] = useState("");
                    
                      const [warningmessage,setWarningDIVstate]=useState(warningDIV);
                      const [ erp, setErp] = useState("");
                      const [ sap_client, setSapclient] = useState("");
                      const [sap_destination ,setDestination] = useState("");
                      const [sap_language,setLanguage] = useState("");
                      const [sap_password, setPassword] = useState("");
                      const [sap_pool_size,setPoolsize] =useState("");
                      const[sap_server_host,setServerhost] =useState("");
                      const[ sap_service,setSapservice]=useState("");
                      const[ sap_system_id,setSapsystemid]=useState("");
                      const[sap_sytem_number,setSystemnumber]=useState("");
                      const[sap_user,setUser]=useState("");
                    
                      const[companyproperties,setProperties]=useState("");
                    
                      ///   For navigate function
                      const navigate = useNavigate();
                      const {uniqueID}=useParams();
                      ////    for receiving the parameters from URL
                      const { operation } = useParams();
                      var username = window.localStorage.getItem('username')
                      var password = window.localStorage.getItem('password')
                      var currentUserrole = window.localStorage.getItem('userrole')
                      ////  Fetch data from local storage
                      var loggedInUsername=window.localStorage.getItem('loggedInUsername')

                      var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                    
                      function getComEditRequestData(){
                        var comEditID= uniqueID;
                      
                        axios
                          .get("http://localhost:8000/master/company/"+comEditID+"/",
                          
                          )
                          .then((res)=>{
                      
                            setId(res.data[0].id);
                          
                            setComname(res.data[0].company_name);
                            setAddress(res.data[0].address);
                            
                            setZip(res.data[0].zip);
                            setState(res.data[0].state);
                            
                            setGln(res.data[0].gln);
                            setCreatedby(res.data[0].created_by);
                      
                      
                      
                          })
                      
                      
                      }
                      
                      useEffect(() => {
                        if(operation === 'edit') {
                          getComEditRequestData();
                          // setId(localStorage.getItem("id"));
                          // setComname(localStorage.getItem("company_name"));
                          // setAddress(localStorage.getItem("address"));
                          // setZip(localStorage.getItem("zip"));
                          // setState(localStorage.getItem("state"));
                       
                          // setGln(localStorage.getItem("gln"));
                          // setCreatedby(localStorage.getItem("created_by"));
                        }
                      }, []);
                    
  if(operation === 'new') {
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
    // fullWidth
    
          id="outlined-Company Prefix"
          label={<h4 ><pre><h4 style={{color:"white"}}>           Enter Company Data </h4></pre></h4>}
         
   
 />
 </Box>
  var comnameFieldWidget = 
                        // <input
                        //       type="text"
                        //       className="form-control form-control-sm"
                        //       onChange={(e) => setComname(e.target.value)}
                        //     /> 
                          <TextField
                              required
                              id="outlined-Location Name"
                              label="Company Name"
                              onChange={(e) => setComname(e.target.value)}
                      
                          />
                        var addressFieldWidget = 
                        // <input
                        //     type="text"
                        //     className="form-control form-control-sm"
                        //     onChange={(e) => setAddress(e.target.value)}
                        //   /> 

                        <TextField
                          required
                          id="outlined-Location Name"
                          label="Company Address"
                          onChange={(e) => setAddress(e.target.value)}
                  
                      />
                        var zipFieldWidget = 
                        // <input
                        //     type="text"
                        //     className="form-control form-control-sm"
                        //     onChange={(e) => setZip(e.target.value)}
                        // /> 

                        <TextField
                            required
                            id="outlined-Location Name"
                            label="Zip"
                            onChange={(e) => setZip(e.target.value)}
                  
                      />
                        var stateFieldWidget = 
                    //     <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         onChange={(e) => setState(e.target.value)}
                    // /> 
                    <TextField
                    required
                    id="outlined-State"
                    label="State"
                    onChange={(e) => setState(e.target.value)}
          
              />
                    
                         var glnFieldWidget = 
                    //      <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         onChange={(e) => setGln(e.target.value)}
                    // /> 
                    <TextField
                          required
                          id="outlined-Gln"
                          label="Gln"
                          onChange={(e) => setGln(e.target.value)}
                
                      />
                    
                        var createdbyFieldWidget = 
                        // <input
                        //       type="text"
                        //       className="form-control form-control-sm"
                        //       aria-describedby="emailHelp"
                        //       onChange={(e) => setCreatedby(e.target.value)}
                        //     />

                            <TextField
                                    disabled
                                    id="outlined-createdby"
                                    label="Createdby"
                                    value={loggedInUsername}

                      />
                    
                          
                      }
                    //   else if(operation === 'edit') {
                    //     var headwidget=<h3>Update</h3>
                    //     var comnameFieldWidget = <input
                    //           type="text"
                    //           className="form-control  form-control-sm"
                    //           value = {company_name}
                    //           onChange={(e) => setComname(e.target.value)}
                    //         />
                    
                    //         var addressFieldWidget = <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         value = {address}
                    //         onChange={(e) => setAddress(e.target.value)}
                    //       /> 
                    //     var zipFieldWidget = <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         value = {zip}
                    //         onChange={(e) => setZip(e.target.value)}
                    //     /> 
                    //     var stateFieldWidget = <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         value = {state}
                    //         onChange={(e) => setState(e.target.value)}
                    // /> 
                       
                    //      var glnFieldWidget = <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         value = {gln}
                    //         onChange={(e) => setGln(e.target.value)}
                    // /> 
                    
                    
                    //     var createdbyFieldWidget = <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         value={created_by}
                    //         aria-describedby="emailHelp"
                    //         onChange={(e) => setCreatedby(e.target.value)}
                    //       />
                        
                       
                    //   }
                    //   var propertiesWidget=<table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                    //   <tbody>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Erp</td>
                    //       <td class="productionOrderReportSearchTD">
                    //       <select  class="form-select" aria-label="Default select example" onChange={(e) => setErp(e.target.value)}>
                    //        <option value="admin">Select</option>
                    //        <option value="admin">SAP Rpc</option>
                    //        </select>    
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap client</td>
                    //       <td class="productionOrderReportSearchTD">
                    //       <input
                    //           type="text"
                    //           className="form-control form-control-sm"
                    //           onChange={(e) => setSapclient(e.target.value)}
                    //         />
                    //       </td>
                    //     </tr>
                    //     <tr>
                      
                    //       <td class="productionOrderReportSearchTD">Sap destination</td>
                    //       <td class="productionOrderReportSearchTD">
                    //       <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         onChange={(e) => setDestination(e.target.value)}
                    //       />
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap language</td>
                    //       <td class="productionOrderReportSearchTD">
                    //       <input
                    //         type="text"
                    //         className="form-control form-control-sm"
                    //         onChange={(e) => setLanguage(e.target.value)}
                    //       />
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap password</td>
                    //       <td class="productionOrderReportSearchTD">
                    //       <input
                    //       type="text"
                    //       className="form-control form-control-sm"
                    //       onChange={(e) => setPassword(e.target.value)}
                    //     /> 
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap poolsize</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //           type="text"
                    //           className="form-control"
                    //           aria-describedby="emailHelp"
                    //           onChange={(e) => setPoolsize(e.target.value)}
                    //         /> 
                          
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap serverhost</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //         type="text"
                    //         className="form-control"
                    //         aria-describedby="emailHelp"
                    //         onChange={(e) => setServerhost(e.target.value)}
                    //       />
                          
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap service</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //         type="text"
                    //         className="form-control"
                    //         aria-describedby="emailHelp"
                    //         onChange={(e) => setSapservice(e.target.value)}
                    //       />
                          
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap systemId</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //         type="text"
                    //         className="form-control"
                    //         aria-describedby="emailHelp"
                    //         onChange={(e) => setSapsystemid(e.target.value)}
                    //       />
                          
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap systemnumber</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //         type="text"
                    //         className="form-control"
                    //         aria-describedby="emailHelp"
                    //         onChange={(e) => setSystemnumber(e.target.value)}
                    //       />
                          
                    //       </td>
                    //     </tr>
                    //     <tr>
                    //       <td class="productionOrderReportSearchTD">Sap user</td>
                    //       <td class="productionOrderReportSearchTD">
                          
                    //       <input
                    //       type="text"
                    //       className="form-control"
                    //       aria-describedby="emailHelp"
                    //       onChange={(e) => setUser(e.target.value)}
                    //     />
                          
                    //       </td>
                    //     </tr>
                    //   </tbody>
                    //   </table>
                    //   const Companyproperties =(e)=>{
                    //     companyproperties ? setProperties(false) :setProperties(true);
                    //   }
                    
                      const handleSubmit = (e) => {
                        e.preventDefault();
                        console.log("clicked");
                        //alert(address);
                    
                    
                    
                        var comEditID= uniqueID;
                    
                    
                        var testPassed = "false";
                        console.log("clicked");
                        //alert(address);
                       
                        if(company_name != "") {
                          testPassed = "true";
                        }
                        else {
                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                              <h5>Input company name</h5>
                            </div>
                    
                          setWarningDIVstate(warningDIV);
                          testPassed = "false";
                        
                      }
                        if(testPassed == "true") {
                          if(address != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input Address</h5>
                              </div>
                    
                            setWarningDIVstate(warningDIV);
                            testPassed = "false";
                          }
                        }
                           
                        if(testPassed == "true") {
                          if(zip != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input Zip</h5>
                              </div>
                    
                            setWarningDIVstate(warningDIV);
                            testPassed = "false";
                          }
                        }
                        if(testPassed == "true") {
                          if(state != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input State</h5>
                              </div>
                    
                            setWarningDIVstate(warningDIV);
                            testPassed = "false";
                          }
                        }
                        if(testPassed == "true") {
                          if(gln != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input GLN</h5>
                              </div>
                    
                            setWarningDIVstate(warningDIV);
                            testPassed = "false";
                          }
                        }
                    
                        // if(testPassed == "true") {
                        //   if(created_by!= "") {
                        //     testPassed = "true";
                        //   }
                        //   else {
                        //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        //         <h5>Input Createdby</h5>
                        //       </div>
                    
                        //     setWarningDIVstate(warningDIV);
                        //     testPassed = "false";
                        //   }
                        // }
                        
                        
                        if(testPassed == "true") {
                          warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                                          <h5>Verifying data</h5>
                                        </div>
                    
                          setWarningDIVstate(warningDIV);
                        }
                        if(testPassed == "true") {
                          if(operation === 'new') {
                            // alert(company_name)
                            axios
                              .post('http://localhost:8000/master/company/', 
                             
                              {
                                "company_name":company_name,  
                                "address":address, 
                                "state":state, 
                                "gln":gln, 
                                // "country":country, 
                                "zip":zip,   
                             
                                "created_by":loggedInUsername,
                                "loggedInUsername":loggedInUsername,

                                "loggedInUserrole":loggedInUserrole
                              },
                              
                              )
                              .then(() => {
                                navigate("/company");
                              });
                        
                          }
                    //       else if(operation === 'edit') {
                    //         axios
                    //           .put(`http://127.0.0.1:8000/master/company/update/${comEditID}`, 
                              
                    //           {
                    //             "company_name":company_name,  
                    //             "address":address, 
                    //             "state":state, 
                    //             "gln":gln, 
                    //             // "country":country, 
                    //             "zip":zip,   
                             
                    //             "created_by":created_by,
                    //           },
                    //           {
                    //             auth: {
                    //               username: username,
                    //               password: password
                    //             }
                    //           }
                    //           )
                    //           .then(() => {
                    //             navigate("/company/comdatagrid");
                    //           });
                    //       }
                        }
                        };
                    
                    
                    
                      return (
                        <>
                           {/* <Navbar data= {window.localStorage.getItem('username') ? window.localStorage.getItem('username') : ""}/>
                           <div className="d-flex justify-content-between m-2">
                             
                             <div className="mb-3">
                              
                               {headwidget}
                             </div>
                             <Link to="/company/comdatagrid">
                               <button className="btn btn-primary">Show Data</button>
                             </Link>
                           </div>
                           {warningmessage}
                           <form >
                          
                             <div className="mb-3">
                               <label className="form-label">Name</label>
                               {comnameFieldWidget}
                             </div>
                             <div className="mb-3">
                              <label className="form-label">Address</label>
                               {addressFieldWidget}
                             </div>
                             <div className="mb-3">
                               <label className="form-label">Zip</label>
                               {zipFieldWidget}
                             </div>
                            <div className="mb-3">
                              <label className="form-label">State</label>
                              {stateFieldWidget}
                             </div>
                           
                             <div className="mb-3">
                               <label className="form-label">GLN</label>
                               {glnFieldWidget}
                            </div>
                    
                             <div className="mb-3">
                               <label className="form-label">Created By</label>
                              {createdbyFieldWidget}
                            </div>
                    
                          
                          <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              Submit
                            </button>
                          </form>   */}
                    
                    
                      
                    <br></br>
    <div class="container-fluid" >
              <div class="card shadow mb-4" id="customerfullcard"> 
                  <div class="card-header py-3" id="customercardhead">
                      <div className='row'>
                          <div className='col-10' id="customerhead">
                          {headwidget}
                          </div>
                      </div>
                                                      
                  </div>

                  <div class="card-body">  
                  <br></br>
    <br></br>
    
    {/* <div id="locationhead">
    {headwidget}
    </div>
    <br></br> */}
    
    <Box id="customerbox"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
      <div>
          {warningmessage}
         
          {comnameFieldWidget}

          {addressFieldWidget}

          {zipFieldWidget}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

          {stateFieldWidget}

           
          {glnFieldWidget}

          {createdbyFieldWidget}

            
          </div>

          <div >
         
          
        
          
      </div>

      <div>
      

    </div>              
 

  </div>
  <div>
      
</div>
      
    </Box> 
    <hr></hr>    
                  </div>
              </div>
          </div>   
                        </>
                      );
}

export default CompanyDataEntry
