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
import Tooltip from '@mui/material/Tooltip';
function CustomerDataEdit() {
  var warningDIV = <div className="alert alert-success pt-4" role="alert">
                  <h5>Input all the values</h5>
                 </div>  

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [company_prefix, setCompany_prefix] = useState("");
  const [company_gln,setCompany_gln] =useState("");
  const [address,setAddress] =useState("");
  const [zip,setZip] =useState("");
  const [created_by, setCreatedby] = useState("");
  const [group,setGroup]=useState("");
  const[status,setStatus]=useState("");
  const[country,setCountry]=useState("");
  const[state,setState]=useState("");
  const[city,setCity]=useState("");
  const [testStatusChecked, setTestStatusChecked] = useState(false);

  const[warningmessage,setWarningmessage]=useState("");
  

  ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID}=useParams();

  ////    for receiving the parameters from URL
  const { operation } = useParams();
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  ////  Fetch data from local storage

  function getCustomerEditRequestData(){
    var customerEditID= uniqueID;
  
    axios
      .get(window.url+"/master/customer/"+customerEditID+"/",
      
      )
      .then((res)=>{
  //alert(res.data[0].name)
        setId(res.data[0].id);
      
        setName(res.data[0].name);
        setCompany_prefix(res.data[0].company_prefix);
        
        setCompany_gln(res.data[0].company_gln);
        setAddress(res.data[0].address);
        setCountry(res.data[0].country);
        setCity(res.data[0].city);
        setState(res.data[0].state);
        setZip(res.data[0].zip);
        setCreatedby(res.data[0].created_by);
        setGroup(res.data[0].group);
        setTestStatusChecked(res.data[0].status);
  
  
  
      })
  
  
  }




  useEffect(() => {
    if(operation === 'edit') {
      getCustomerEditRequestData()
      // setId(localStorage.getItem("id"));
      // setName(localStorage.getItem("name"));
      // setCompany_prefix(localStorage.getItem("company_prefix"));
      // setCompany_gln(localStorage.getItem("company_gln"));
      // setAddress(localStorage.getItem("address"));
      // setZip(localStorage.getItem("zip"));
      // setCreatedby(localStorage.getItem("created_by"));
    }
  }, []);

  
   if(operation === 'edit') {
    var headwidget=
    
  //   <Box 
   
  //       component="form"
  //       sx={{
  //         width: 800,
  //         maxWidth: '200%',
          
          
  //       }}
  //   noValidate
  //   autoComplete="off"
    
  // >

<Controls.Input 
          disabled
          // fullWidth
          id="outlined-Company Prefix"
          value={loggedInUsername}
         
          // label={<Typography>Customer  Create</Typography>}
          // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                    Edit Customer Details</font></h4></pre></h4>}
        

/>

// </Box>

var nameFieldWidget = 
            <TextField
            required

            label="Name"
            name="name"
            value = {name}
            onChange={(e) => setName(e.target.value)}

/>

var countryFieldWidget = <TextField
                          required
                          id="outlined-country"
                          label="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
       
                        />
var stateFieldWidget = <TextField
                        required
                        id="outlined-state"
                        label="State"
                        value={state}
                        // type="password"
                        // autoComplete="current-password"
                        onChange={(e) => setState(e.target.value)}
                      />
    var cityFieldWidget = <TextField
                          required
                          id="outlined-CITY"
                          label="City"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        
                        />
var addressFieldWidget = <TextField
                        required
                        id="outlined-Address"
                        label="Address"
                        value = {address}
                        onChange={(e) => setAddress(e.target.value)}

                        />
var zipFieldWidget = <TextField
                        required
                        id="outlined-Zip"
                        label="Zip"
                        value = {zip}
                        type="number"
                        onChange={(e) => setZip(e.target.value)}

                    />

//   var groupfield= <TextField
//         id="outlined-select-currency"
//         select
//       label="Select"
//       defaultValue="EUR"
//       helperText="Please select your currency"
//       onChange={(e) => setGroup(e.target.value)} value={group}


// >
// {currencies.map((option) => (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))}

// </TextField>

var groupfield=<select  class="form-select" id="customerselectbox" aria-label="group" onChange={(e) => setGroup(e.target.value)} value={group}>
<option value="">Select Group</option>
<option value="CMO">CMO</option>
<option value="CPO">CPO</option>
<option value="Customer">Customer</option>
<option value="Destroyer">Destroyer</option>
<option value="Manufacture">Manufacture</option>
<option value="Pharmacy">Pharmacy</option>
<option value="Transporter">Transporter</option>
<option value="Hospital">Hospital</option>
<option value="Warehouse">Warehouse</option>
<option value="Wholesaler">Wholesaler</option>

</select>



var createdbyFieldWidget = <TextField id="outlined-Createdby"
            required 
            label="Createdby"
            value={created_by}
            onChange={(e) => setCreatedby(e.target.value)}

/>

// var statusfield=   <Grid item xs={12}><Controls.Input
// id="outlined-select-Status"
// select
// label="Status"
// defaultValue="EUR"
// helperText="Please select Customer Status"
// onChange={(e) =>setStatus(e.target.value)} value={status}
// >

// {customerstatusfield.map((option1) => (
// <MenuItem key={option1.value} value={option1.value}>
// {option1.label}
// </MenuItem>
// ))}



// </Controls.Input>
// </Grid>

    
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    var customerEditID= uniqueID;
    //alert(address);
    var testPassed = "false";
    if(name!=""){
      testPassed="true"

    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  name</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";
    }
    if(testPassed == "true"){
      if(company_prefix!=""){
        testPassed ="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  company prefix</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(company_gln!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  company gln</h5>
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

    if(testPassed == "true"){
      if(zip!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Zip</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      } 
    }
    if(testPassed == "true"){
      if(created_by){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Createdby</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      } 
    }
    if(testPassed =="true"){
    
     if(operation === 'edit') {
      // alert( name) 
      axios
        .put(window.url+`/master/customer/update/${uniqueID}`,
        
        
        {
          "name":name,  
          "country":country,
          "state":state,
          "city":city,
          'address':address,
          'zip':zip , 
          'group':group,   
          "created_by":created_by,
          "status":testStatusChecked,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole,
          "uniqueid":uniqueID
        },
        
        )
        .then(() => {
          navigate("/customer");
        });
    }
  };
}

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
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Update Customer Details </font></h4></center></h4>            
          {nameFieldWidget}  
          {cityFieldWidget}
          {countryFieldWidget}
          {stateFieldWidget}

    
    
           
          
          <br/>
{addressFieldWidget}

{zipFieldWidget}
{headwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<FormControlLabel  control={<Checkbox 
      
      checked={testStatusChecked}
      style={{marginTop:10}}
      onChange={e => setTestStatusChecked(e.target.checked)}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
      label="Gilad Gray"
    />} label="Status" /> 

{groupfield}
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

export default CustomerDataEdit
