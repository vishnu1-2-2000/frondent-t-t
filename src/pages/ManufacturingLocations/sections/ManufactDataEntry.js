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
import { Grid, Typography, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Statusselect from "../../../components/Statusselect";

function ManufactDataEntry() {
    var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                 </div>  

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [gln_number, setGlnnumber] = useState("");
  const [address, setAddress] = useState("");
  const [created_by, setCreatedby] = useState("");

  const[alertmess,setAlertmess]=useState(alertmessage)  
  const [warningmessage,setWarningmessage]=useState(warningDIV);


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
  var alertmessage= <Alert severity="success">This is a success alert — check it out!</Alert>          


  useEffect(() => {
    
  }, []);

  if(operation === 'new') {
    var headwidget=
    <Box
        component="form"
        sx={{
          // width: 500,
          // maxWidth: '100%',
          // textAlign:"center"
          
          
        }}
        noValidate
        autoComplete="off"
  ><Controls.Input 
    disabled
    // style = {{width: 235,marginLeft:50,}}
          // style = {{width: 235,marginLeft:270,marginTop:-70}}
          id="outlined-Company Prefix"
          value={loggedInUsername}
         
           
          
          
   
 />
 </Box>
    

  var nameFieldWidget = <TextField
                          required
                          id="outline-name"
                          label="Name"
                          // style = {{width: 235,marginLeft:50,}}
                          onChange={(e) => setName(e.target.value)}
                      /> 
  var addressFieldWidget = <TextField
                              required id="outline-address"
                              label="Address"
                              // style = {{width: 235,marginLeft:50,}}
                              onChange={(e) => setAddress(e.target.value)}
                          /> 
  var glnFieldWidget = <TextField required
                          id="outline-gln"
                          label="Gln"
                          // style = {{width: 235,marginLeft:50,}}
                          onChange={(e) => setGlnnumber(e.target.value)}
                      /> 
   
  var createdbyFieldWidget = <TextField
                              id="outline-createdby"
                              label="Created by"
                              disabled
                              style = {{width: 235,marginLeft:50,}}
                              value={loggedInUsername}
                            /> 
}
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

   
    //alert(address);
    var testPassed = "false";
    if(name!=""){
      testPassed="true"

    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input Location name</h5>
        </div>
      // warningDIV = <Alert severity="warning">This is a warning alert — Input Location Name!</Alert>
      setWarningmessage(warningDIV);
      testPassed = "false";
    }
    if(testPassed == "true"){
      if(gln_number!=""){
        testPassed ="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Gln</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(address!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Address</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    

   

    if(testPassed =="true"){
    if(operation === 'new') {
      // alert(name)
      // alert(gln_number)
      // alert(address)
      // alert(loggedInUsername)
      axios
        .post(window.url+'/productionline/manufacturinglocation/', 
        {
            "name": name, 
            'gln_number':gln_number,
            'address':address,   
            "created_by":loggedInUsername,
            
            "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole
           
        },
        )
        .then((res) => {
          // alert(res.data.name)
          if(res.data.name == "manufacturing locations with this name already exists."){
            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                              <h5>This Manufacturing Location already exist,Enter Another One</h5>
                            </div>
  
  setWarningmessage(warningDIV)                         
          }
          else
          {
             navigate("/manufacturinglocation");
          }
         
        });
    
    
  
        
    }
  }
}
    

  return (
    <>
                           
           <br/>        <br/>        <br/>   <br/> 
        
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25' },
      }}
      noValidate
      autoComplete="off"
    >
          {warningmessage}        
        
      <div style={{backgroundColor:"#AAF0D1"}} >
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Manufacturing Location </font></h4></center></h4>            
        
         {nameFieldWidget}
        
        {addressFieldWidget}
       
        {glnFieldWidget}


       
      
        {headwidget}
      <div className="row">
        <div className="col-4">
       
        </div>
        <div className="col-4">
       <center> <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit} >
                      Save data
                  </button></center>
        </div>
        <div className="col-4">
        </div>
        {/* <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit} >
                      Save data
                  </button> */}
       
      
      </div>
        
       
      </div>
     
    </Box>
                        </>
  );
}

export default ManufactDataEntry
