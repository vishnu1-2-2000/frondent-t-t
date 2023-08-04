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
      .get("http://localhost:8000/master/customer/"+customerEditID+"/",
      
      )
      .then((res)=>{
  //alert(res.data[0].name)
        setId(res.data[0].id);
      
        setName(res.data[0].name);
        setCompany_prefix(res.data[0].company_prefix);
        
        setCompany_gln(res.data[0].company_gln);
        setAddress(res.data[0].address);
        
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
    
    <Box 
   
        component="form"
        sx={{
          width: 800,
          maxWidth: '200%',
          
          
        }}
    noValidate
    autoComplete="off"
    
  >

<Controls.Input 
          disabled
          // fullWidth
          id="outlined-Company Prefix"
         
          // label={<Typography>Customer  Create</Typography>}
          label={<h4 ><pre><h4 style={{color:"white"}}>       Edit Customer Details</h4></pre></h4>}
        

/>

</Box>

var nameFieldWidget = 
            <TextField
            required

            label="Name"
            name="name"
            value = {name}
            onChange={(e) => setName(e.target.value)}

/>

var companyprefixFieldWidget = <TextField
                                required
                                id="outlined-Company Prefix"
                                label="Company Prefix"
                                value = {company_prefix}
                                onChange={(e) => setCompany_prefix(e.target.value)}

                                />
var companyglnFieldWidget = <TextField
                              required
                              id="outlined-Company Gln"
                              label="Company Gln"
                              value = {company_gln}
                              // type="password"
                              // autoComplete="current-password"
                              onChange={(e) => setCompany_gln(e.target.value)}
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
        .put(`http://localhost:8000/master/customer/update/${id}`,
        
        
        {
          "name": name,  
          'company_prefix': company_prefix,
          'company_gln':company_gln,
          'address':address,
          'zip':zip , 
          'group':group,   
          "created_by": created_by,
          "status":testStatusChecked,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole
        },
        
        )
        .then(() => {
          navigate("/customer/cusdatagrid");
        });
    }
  };
}

  return (
    <>
    <br></br>
      <div class="container-fluid">
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
         
          {nameFieldWidget}

          {companyprefixFieldWidget}

          {companyglnFieldWidget}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

            {addressFieldWidget}

           
            {createdbyFieldWidget}

            {zipFieldWidget}

            
          </div>

          <div >
          {groupfield}
          <br></br>
          
        <div className="col-1">
            <FormControlLabel  control={<Checkbox 
        // {...label}
              checked={testStatusChecked}

              onChange={e => setTestStatusChecked(e.target.checked)}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
              label="Gilad Gray"
            />} label="Status" />
        </div>
          
      </div>

      <div>
      

    </div>              
 

  </div>
  <div>
      
</div>
      
    </Box>
    </div>
              </div>
          </div>   

    </>
  );
}

export default CustomerDataEdit
