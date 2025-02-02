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
function CompanyDataEdit() {
  
  var warningDIV= <div className="alert alert-success pt-4" role="alert">
    <h5>Input all the values</h5>
  </div>
                    
                    
                    
  const [id, setId] = useState(0);
  const [company_name, setComname] = useState("");
  const [address, setAddress] = useState("");
  const [zip,setZip] = useState("");
  const [state,setState] = useState("");
  const[city,setCity]=useState("");
  const[country,setCountry]=useState("");                 
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
  var loggedInemployeeid=window.localStorage.getItem('loggedInemployeeid')
                    
  function getComEditRequestData(){
    var comEditID= uniqueID;

                      
    axios
    .get(window.url+"/master/company/"+comEditID+"/",                     
    )
    .then((res)=>{
                      
      setId(res.data[0].id);                  
      setComname(res.data[0].company_name);
      setAddress(res.data[0].address);                       
      setZip(res.data[0].zip);
      setState(res.data[0].state);
      setCity(res.data[0].city);
      setCountry(res.data[0].country);                 
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
                    
                   
  if(operation === 'edit') {
    var headwidget=
  //   <Box
  //       component="form"
  //       sx={{
  //         width: 500,
  //         maxWidth: '100%',
  //         }}
  //       noValidate
  //       autoComplete="off"
  // >
    <Controls.Input 
    disabled
    // fullWidth
    
    id="outlined-Company Prefix"
    value={loggedInUsername}
    // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                      Edit Company Data</font> </h4></pre></h4>}
    />
//  </Box>
  var comnameFieldWidget = 
                            // <input
                            //     type="text"
                            //     className="form-control  form-control-sm"
                            //     value = {company_name}
                            //     onChange={(e) => setComname(e.target.value)}
                            // />
                          <TextField
                              required
                              id="outlined-Location Name"
                              label="Company Name"
                              value = {company_name}
                              onChange={(e) => setComname(e.target.value)}
                      
                          />
                    
    var addressFieldWidget = 
                            // <input
                            //   type="text"
                            //   className="form-control form-control-sm"
                            //   value = {address}
                            //   onChange={(e) => setAddress(e.target.value)}
                            // /> 

                      <TextField
                          required
                          id="outlined-Location Name"
                          label="Company Address"
                          value = {address}
                          onChange={(e) => setAddress(e.target.value)}
                  
                      />
    var zipFieldWidget =  
    //                           <input
    //                           type="text"
    //                           className="form-control form-control-sm"
    //                           value = {zip}
    //                           onChange={(e) => setZip(e.target.value)}
    //                       /> 
                          <TextField
                          required
                          id="outlined-Location Name"
                          label="Zip"
                          value = {zip}
                          onChange={(e) => setZip(e.target.value)}
                
                        />
    var stateFieldWidget =
                          //  <input
                          //   type="text"
                          //   className="form-control form-control-sm"
                          //   value = {state}
                          //   onChange={(e) => setState(e.target.value)}
                          // /> 
                          <TextField
                              required
                              id="outlined-State"
                              label="State"
                              value = {state}
                              onChange={(e) => setState(e.target.value)}
          
                          />
                       
    var glnFieldWidget = 
                          // <input
                          //   type="text"
                          //   className="form-control form-control-sm"
                          //   value = {gln}
                          //   onChange={(e) => setGln(e.target.value)}
                          // /> 

                          <TextField
                            required
                            id="outlined-Gln"
                            label="Gln"
                            value = {gln}
                            onChange={(e) => setGln(e.target.value)}
                
                          />
                    
                    
    var createdbyFieldWidget =
                          //   <input
                          //     type="text"
                          //     className="form-control form-control-sm"
                          //     value={created_by}
                          //     aria-describedby="emailHelp"
                          //     onChange={(e) => setCreatedby(e.target.value)}
                          // /> 

                          <TextField
                            disabled
                            id="outlined-createdby"
                            label="Createdby"
                            value={loggedInUsername}

                          />
                      var cityFieldWidget = 
                      // <input
                      //       type="text"
                      //       className="form-control form-control-sm"
                      //       aria-describedby="emailHelp"
                      //       onChange={(e) => setCity(e.target.value)}
                      //     />

                          <TextField
                                   
                            id="outlined-city"
                            value={city}
                            label="City"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        var countryFieldWidget = 
                        // <input
                        //   type="text"
                        //   className="form-control form-control-sm"
                        //   aria-describedby="emailHelp"
                        //   onChange={(e) => setCountry(e.target.value)}
                        // />
                        <TextField
                                  
                          id="outlined-country"
                          label="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />

    }
                
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
        if(testPassed == "true") {
          if(created_by!= "") {
            testPassed = "true";
          }
          else {
            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
            <h5>Input Createdby</h5>
            </div>         
            setWarningDIVstate(warningDIV);
            testPassed = "false";
          }
        }        
        if(testPassed == "true") {
          warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                          <h5>Verifying data</h5>
                        </div>
                        setWarningDIVstate(warningDIV);
                        }
          if(testPassed == "true") {
                    //       if(operation === 'new') {
                    //         // alert(company_name)
                    //         axios
                    //           .post('http://localhost:8000/master/company/', 
                             
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
            if(operation === 'edit') {
            axios
              .put(window.url+`/master/company/update/${comEditID}`, 
                              
                {
                  "company_name":company_name,  
                  "address":address, 
                  "state":state, 
                  "gln":gln, 
                  "country":country,
                  "city":city,   
                  "zip":zip,   
                             
                  "created_by":loggedInUsername,
                  "loggedInUsername":loggedInUsername,

                  "loggedInUserrole":loggedInUserrole,
                  "loggedInemployeeid":loggedInemployeeid,
                  "uniqueid":comEditID,
                },
                              
                )
                .then(() => {
                  navigate("/company");
                });
              }
            }
          };
                    
                    
                    
    return (
      <>
                           
                    
                    
   
                           <br/><br/><br/><br/><br/>

{warningmessage}        
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25' },
          }}
          noValidate
          autoComplete="off"
        >
           
          <div style={{backgroundColor:"#AAF0D1"}} >
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Edit Company Details </font></h4></center></h4>            
          {comnameFieldWidget}

{addressFieldWidget}

{zipFieldWidget}

    
    
           
          
          <br/>
          {stateFieldWidget}

           
{glnFieldWidget}

{headwidget}<br/>
{countryFieldWidget}
          {cityFieldWidget}
        
          <div className="row">
            <div className="col-4">
           
            </div>
            <div className="col-4">
            <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit} >
                          Save data
                      </button>
            </div>
            <div className="col-4">
            </div>
           
          
          </div>
            
           
          </div>
         
        </Box>  
                        
      </>
    );
}

export default CompanyDataEdit
