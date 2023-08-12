import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Select from "react-select";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
const UserDataEntry = (props) => {

    const [id, setId] = useState(0);
    const [employeeid, setEmployeeid] = useState("");
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date_birth, setDob] = useState("");
    const [userRole, setUserRole] = useState("");
    const [address, setAddress] = useState("");
    const[password,setPassword] =useState("");

    const navigate = useNavigate();

    const { operation } = useParams();
    const { uniqueID } = useParams();

    //alert(operation);
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

    var warningDIV = <div className="alert alert-success pt-4" role="alert">
        <h5>Input all the data</h5>
      </div>

    const [warningDIVstate, setWarningDIVstate] = useState(warningDIV);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("clicked");
      //alert(address);
      var registerEditID = uniqueID;
      var testPassed = "false";
    
    
      if(employeeid !== "") {
        testPassed = "true";
      }
      else {
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
            <h5>Input Employeeid</h5>
          </div>
    
          setWarningDIVstate(warningDIV);
          testPassed = "false";
      }
      if(testPassed === "true") {
      if(Name !== "") {
        testPassed = "true";
      }
      else {
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
            <h5>Input Name</h5>
          </div>
    
          setWarningDIVstate(warningDIV);
          testPassed = "false";
      }
      }
      if(testPassed === "true") {
        if(email !== "") {
          testPassed = "true";
        }
      else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input Email</h5>
            </div>
    
          setWarningDIVstate(warningDIV);
            testPassed = "false";
        }
      }
         
      if(testPassed === "true") {
        if(date_birth !== "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                 <h5>Input Date of Birth</h5>
              </div>
 
          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }
      if(testPassed === "true") {
        if(userRole !== "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                <h5>Input Userrole</h5>
              </div>
    
          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }

      if(testPassed === "true") {
        if(address !== "") {
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

      if(testPassed === "true") {
        if(password !== "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                <h5>Input Password</h5>
              </div>
    
          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }
      if(testPassed === "true") {
        warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                          <h5>Verifying data</h5>
                        </div>
    
        setWarningDIVstate(warningDIV);
      }
      
  if(testPassed === "true") {

      axios
          .post('http://127.0.0.1:8000/accounts/register/', 
          {
            "employeeid":employeeid,
            "Name": Name,    
            "email": email, 
            "date_birth":date_birth,  
            "userRole":userRole,
            "address":address,
            "password":password,
            "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole
          })
          .then((res) => {
            // if(res.data['email'] == 'register with this email already exists.') {
            //   //alert(res.data['email']);
            //   warningDIV =  <div className="alert alert-danger pt-4" role="alert">
            //           <h5>Email already registered</h5>
            //         </div>
            //         setWarningDIVstate(warningDIV);
            // }
            // else {
            //   navigate("/registeredusers");
            // }
            if(res.data['email']=='register with this email already exists.')
            {
              warningDIV=<div className="alert alert-danger pt-4" role="alert">
                <h5>Email already registered</h5>
              </div>
              setWarningDIVstate(warningDIV)
            }
            else{
              navigate("/registeredusers");
            }
          });
              
      }
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
    
  >

<Controls.Input 
          disabled
          fullWidth
          id="outlined-Company Prefix"
          // label={<Typography>Customer  Create</Typography>}
          label={<h4 ><pre><h4 style={{color:"white"}}>  <font face="times new roman" size="6">           Register New User </font></h4></pre></h4>}
        

/>

</Box>

var employeeidFieldWidget = 
//   <input
//   type="text"
//   className="form-control"
//   onChange={(e) => setName(e.target.value)}
// /> 
        <TextField
          required
          id="outline-EmployeeId"
          type="number"
          label="Employee Id"
          color="secondary"
          onChange={(e) => setEmployeeid(e.target.value)}
          />

    var nameFieldWidget = 
        //   <input
        //   type="text"
        //   className="form-control"
        //   onChange={(e) => setName(e.target.value)}
        // /> 
                <TextField
                  required
                  id="outline-name"
                  label="Name"
                  color="secondary"
                  onChange={(e) => setName(e.target.value)}
                  />

    var emailFieldWidget = 
    // <input
    //       type="email"
    //       className="form-control"
    //       aria-describedby="emailHelp"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

        <TextField
                  required
                  type="email"
                  id="outline-Email"
                  label="Email"
                  color="secondary"
                  onChange={(e) => setEmail(e.target.value)}
                  />


     var Passwordwidget=
                    <TextField
                    required
                    type="password"
                    id="outline-Password"
                    label="Password"
                    color="secondary"
                    onChange={(e) => setPassword(e.target.value)}
                    />



    var DOBwidget = 
    // <input
    //       type="date"
    //       className="form-control"
    //       aria-describedby="emailHelp"
    //       onChange={(e) => setDob(e.target.value)}
    //     />

        <TextField
                  required
                  type="date"
                  id="outline-DateOfBirth"
                  label="Date Of Birth"
                  color="secondary"
                  onChange={(e) => setDob(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />

                  var userRoleWidget=<select  class="form-select" id="userselectbox" aria-label="group" onChange={(e) => setUserRole(e.target.value)} >
                  <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="supervisor">Supervisor</option>
        <option value="masterdata">Masterdata</option>
        <option value="operator">Operator</option>
            
            </select>

    var addressWidget = 
      // <textarea onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>          
              <TextField
                  required
                  id="outlined-multiline-static"
                  multiline
                  maxRows={10}
                  type="textarea"
                  label="Address"
                  color="secondary"

                  onChange={(e) => setAddress(e.target.value)}
                  />
    return(
      <>
          <div class="container-fluid">
              <div class="card shadow mb-4" id="fullcard"> 
                  <div class="card-header py-3" id="usercardhead">
                      <div className='row'>
                          <div className='col-10' id="userhead">
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
    
    <Box 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >

  <div className="container" id="userbox" >
      <div className="row" >
        {warningDIVstate}
          <div className="col-4">
          {employeeidFieldWidget}
            {nameFieldWidget}

            {emailFieldWidget}
        </div>
      <div className="col-4">
            {addressWidget}

            {userRoleWidget}
      </div>
      <div className="col-4">
            {DOBwidget}
            {Passwordwidget}
      </div>

      

      <div className="col-2" id="userbutton" >
      <button  onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
      </button>
      </div>

            <br></br>
        </div>
      </div>
  </Box>
    <hr></hr>    
                  </div>
              </div>
          </div>            
      </>
     
    )
};

export default UserDataEntry;
