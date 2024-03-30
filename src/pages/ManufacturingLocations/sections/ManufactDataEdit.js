import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, Typography, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Statusselect from "../../../components/Statusselect";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function ManufactDataEdit() {
  var warningDIV= <div className="alert alert-success pt-4" role="alert">
  <h5>Input all the values</h5>
  </div>                
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [gln_number, setGlnnumber] = useState("");
  const [address, setAddress] = useState("");
  const [created_by, setCreatedby] = useState("");
  const[alertmess,setAlertmess]=useState(alertmessage)                  
  const [warningmessage,setWarningDIVstate]=useState(warningDIV);
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
function getManufactEditRequestData(){                                   
  var manufactEditID= uniqueID;            
          axios
            .get(window.url+"/productionline/manufacturinglocation/"+ uniqueID+"/",
            )
              .then((res)=>{
                            //alert(res.data[0].name)
                setId(res.data[0].id);         
                setName(res.data[0].name);
                setGlnnumber(res.data[0].gln_number);           
                setAddress(res.data[0].address);
                // setCreatedby(res.data[0].created_by);              
            })               
        }
                      
  useEffect(() => {
      if(operation === 'edit') {
          getManufactEditRequestData();                    
      }
    }, []);
                    
                
  if(operation === 'edit') {
    var headwidget=
    <Box
        component="form"
        sx={{
          // width: 500,
          maxWidth: '100%',   
        }}
        noValidate
        autoComplete="off"
  ><Controls.Input 
    disabled
    // fullWidth
    value={loggedInUsername}
          id="outlined-Company Prefix"
          // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">Edit Manufacturing Location </font></h4></pre></h4>}
         
   
 />
 </Box>

  var nameFieldWidget = <TextField required
                          id="outline-name"
                          label="Name"
                          value={name}
                          color="secondary"
                          onChange={(e) => setName(e.target.value)}
                        />
                    
  var addressFieldWidget = <TextField required
                            id="outline-address"
                            label="Address"
                            color="secondary"
                            style={{color:"white"}}
                            value = {address}
                            onChange={(e) => setAddress(e.target.value)}
                          /> 
  var glnFieldWidget =  <TextField
                            id="outline-gln"
                            label="Gln"
                            color="secondary"
                            value = {gln_number}
                            onChange={(e) => setGlnnumber(e.target.value)}
                        /> 
  var createdbyFieldWidget =<TextField
                              required
                              id="outline-createdby"
                              label="Created By"
                              color="secondary"
                              value = {loggedInUsername}
                              disabled
                            // onChange={(e) => setCreatedby(e.target.value)}
                            /> 
                       
                         }
                   
  const handleSubmit = (e) => {
                      e.preventDefault();
                      console.log("clicked");
                        //alert(address);
                    
                    
                    
  var manufactEditID= uniqueID;
                        var testPassed = "false";
                        console.log("clicked");
                        //alert(address);
                       
                        if(name != "") {
                          testPassed = "true";
                        }
                        else {
                          // warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                          //     <h5>Input Location name</h5>
                          //   </div>
                          warningDIV = <Alert severity="warning">This is a warning alert — Input Location Name!</Alert>
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
                          if(gln_number != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input Gln</h5>
                              </div>
                    
                            setWarningDIVstate(warningDIV);
                            testPassed = "false";
                          }
                        }
                        // if(testPassed == "true") {
                        //   if(created_by != "") {
                        //     testPassed = "true";
                        //   }
                        //   else {
                        //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        //         <h5>Input CreatedBy</h5>
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
                  
                           if(operation === 'edit') {
                                        //alert(name)
                            axios
                              .put(window.url+`/productionline/manufacturinglocation/update/${manufactEditID}`, 
                            
                              {
                                        "name":name,    
                                        'gln_number':gln_number,
                                        'address':address,   
                                        "created_by": loggedInUsername,
                                        "uniqueid":manufactEditID,
                                        "loggedInUsername":loggedInUsername,
                                        "loggedInUserrole":loggedInUserrole
                              },
                              
                              )
                              .then((res) => {
                                if(res.data===200){
                              // alert(res.data)
                                  warningDIV=    <Alert severity="success">This is a success alert — Data Saved Successfully!</Alert>
                                  setWarningDIVstate(warningDIV);
                             
                                  
                                }
                                // navigate("/manufacturinglocation");
                              });
                              // navigate("/manufacturinglocation");
                          }
                        }
                        // <Link to="/manufacturinglocation">About</Link>
                        // navigate("/manufacturinglocation");
                        };
                    
                    
                    
                      return (
                        <>
                           
           <br/>        <br/>        <br/>   <br/>         
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
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Edit Manufacturing Location </font></h4></center></h4>            
        
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

export default ManufactDataEdit
