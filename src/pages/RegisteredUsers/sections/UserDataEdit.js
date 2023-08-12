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
const UserDataEdit = (props) => {

    const [id, setId] = useState(0);
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date_birth, setDob] = useState("");
    const [userRole, setUserRole] = useState("");
    const [address, setAddress] = useState("");
    const[password,setPassword] =useState("");
    const [employeeid, setEmployeeid] = useState("");
    const [warningDIVstate, setWarningDIVstate] = useState(warningDIV);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const { operation } = useParams();
    const { uniqueID } = useParams();
    
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
    //alert(operation);

    var warningDIV = <div className="alert alert-success pt-4" role="alert">
        <h5>Input all the data</h5>
      </div>

const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                        <h5>Verifying data</h5>
                      </div>

        setWarningDIVstate(warningDIV);
      }
      
      if(testPassed === "true") {

          axios
            .put(`http://localhost:8000/accounts/update/${registerEditID}`, 
            
            {
                "employeeid":employeeid,
                "Name": Name,    
                "email": email,  
                "date_birth" : date_birth,  
                "userRole" : userRole,
                "address" : address,
                "password":password,
                "loggedInUsername":loggedInUsername,
                "loggedInUserrole":loggedInUserrole
            
            })
            .then((res) => {
                    //alert(res.data['email']);
                if(res.data['email'] == 'register with this email already exists.') {
                    //alert(res.data['email']);
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                            <h5>Email already registered</h5>
                            </div>
                            setWarningDIVstate(warningDIV);
                }
                else {
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
          label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                       Edit User Data</font> </h4></pre></h4>}
        

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
                      value={employeeid}
                      label="Employee Id"
                      color="secondary"
                      onChange={(e) => setEmployeeid(e.target.value)}
                      />

    var nameFieldWidget = 
        //   <input
        //   type="text"
        //   className="form-control"
        //   value = {Name}
        //   onChange={(e) => setName(e.target.value)}
        // />
                          <TextField
                                    required
                      
                                    label="Name"
                                    color="secondary"
                                    value = {Name}
                                    onChange={(e) => setName(e.target.value)}
                          />


    var emailFieldWidget =
    //  <input
    //     type="email"
    //     className="form-control"
    //     value={email}
    //     aria-describedby="emailHelp"
    //     onChange={(e) => setEmail(e.target.value)}
    //   />

              <TextField
                  required
                  type="email"
                  label="Email"
                  value={email}
                  color="secondary"
                  onChange={(e) => setEmail(e.target.value)}
              />

      // var Passwordwidget=
      //             <TextField
      //             required
      //             type="password"
      //             label="Password"
      //             color="secondary"
      //             value={password}
      //             onChange={(e) => setPassword(e.target.value)}
      //             />
  var Passwordwidget=
                        <TextField
                              label='Password'
                              variant="outlined"
                              InputLabelProps={{
                                      shrink: true,
                                    }}
                              type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              InputProps={{ // <-- This is where the toggle button is added.
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                )
                              }}
                          />

  var DOBwidget = 
    // <input
    //     type="date"
    //     className="form-control"
    //     value={date_birth}
    //     aria-describedby="emailHelp"
    //     onChange={(e) => setDob(e.target.value)}
    //   />
                          <TextField
                                required
                                type="date"
                                label="Date Of Birth"
                                color="secondary"
                                value={date_birth}
                                onChange={(e) => setDob(e.target.value)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                          />
    
    var userRoleWidget=<select value={userRole} class="form-select" id="userselectbox" aria-label="group" onChange={(e) => setUserRole(e.target.value)} >
    <option value="">Select Role</option>
<option value="admin">Admin</option>
<option value="supervisor">Supervisor</option>
<option value="masterdata">Masterdata</option>
<option value="operator">Operator</option>

</select>
    
    var addressWidget = 
                    // <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                        <TextField
                              required
                              id="outlined-multiline-static"
                              rows={4}
                              label="Address"
                              value={address}
                              color="secondary"
                              onChange={(e) => setAddress(e.target.value)}
                              />

    function getRegisterEditRequestData() {
      // var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
      //alert(productionOrderEditID);
      var registerEditID = uniqueID;
      // alert(registerEditID );
      axios
        .get("http://127.0.0.1:8000/accounts/register/"+registerEditID)
        .then((res) => {
        
        setId(res.data[0].id);
        setEmployeeid(res.data[0].employeeid);
        setName(res.data[0].Name);
        setEmail(res.data[0].email);
        setDob(res.data[0].date_birth);
        setUserRole(res.data[0].userRole);
        setPassword(res.data[0].password)
        setAddress(res.data[0].address);
      });
    } 

    useEffect(() => {
      if(operation === 'edit') {
        getRegisterEditRequestData();
      }
    }, []);


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

export default UserDataEdit;