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
function ManufactDataEdit() {
  var warningDIV= <div className="alert alert-success pt-4" role="alert">
  <h5>Input all the values</h5>
  </div>
                    
                    
                    
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [gln_number, setGlnnumber] = useState("");
  const [address, setAddress] = useState("");
  const [created_by, setCreatedby] = useState("");
                   
                    ///   For navigate function
                  
                  
                    
  const [warningmessage,setWarningDIVstate]=useState(warningDIV);
                      
                    
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
                    
function getManufactEditRequestData(){
                                      
  var manufactEditID= uniqueID;
                      
          axios
            .get("http://127.0.0.1:8000/productionline/manufacturinglocation/"+ uniqueID+"/",
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
          width: 500,
          maxWidth: '100%',
          
          
        }}
        noValidate
        autoComplete="off"
  ><Controls.Input 
    disabled
    // fullWidth
    
          id="outlined-Company Prefix"
          label={<h4 ><pre><h4 style={{color:"white"}}>Create Manufacturing Location </h4></pre></h4>}
         
   
 />
 </Box>
      var nameFieldWidget = <TextField required
                           id="outline-name"
                            label="Name"
                            value={name}
                            
                            onChange={(e) => setName(e.target.value)}
                            />
                    
                            var addressFieldWidget = <TextField required
                          id="outline-address"
                            label="Address"
                            value = {address}
                            onChange={(e) => setAddress(e.target.value)}
                          /> 
                        var glnFieldWidget = <TextField
                            id="outline-gln"
                            label="Gln"
                            value = {gln_number}
                            onChange={(e) => setGlnnumber(e.target.value)}
                        /> 
                        var createdbyFieldWidget = <TextField
                            required
                            id="outline-createdby"
                            label="Created By"

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
                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                              <h5>Input Location name</h5>
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
                        if(testPassed == "true") {
                          if(created_by != "") {
                            testPassed = "true";
                          }
                          else {
                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Input CreatedBy</h5>
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
                    
                           if(operation === 'edit') {
                                        //alert(name)
                            axios
                              .put(`http://localhost:8000/productionline/manufacturinglocation/update/${manufactEditID}`, 
                            
                              {
                                        "name":name,    
                                        'gln_number':gln_number,
                                        'address':address,   
                                        "created_by": created_by,
                              },
                              
                              )
                              .then(() => {
                                navigate("/manufacturinglocation");
                              });
                          }
                        }
                        };
                    
                    
                    
                      return (
                        <>
                           
{/*                     
                    <Box sx={{ display: 'flex' }}> 
                        <Box component="main" sx={{ flexGrow: 1, p: 1}}>

                    
                                              
                                              <br/>
                                              <div className="d-flex justify-content-between m-2">
                            <h2>Create</h2>
                            <Link to="/manufacturinglocation">
                              <button className="btn btn-primary">Show Data</button>
                            </Link>
                          </div>
                                          
                                              <div class="container">
                                                  <div class="row">
                                                   
                                                      <div class="col-12">
                                          
                                                      <div className="d-flex justify-content-between m-2">
                                               
                                              </div>
                                              {warningmessage}
                                          
                                          
                                              <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                      <tbody>
                      <tr>
                      <td class="productionOrderReportSearchTD">Gln Number</td>
                      <td class="productionOrderReportSearchTD">
                      {glnFieldWidget}
                      </td>
                      
                      
                      
                      </tr>
                      <tr>
                      <td class="productionOrderReportSearchTD">Name</td>
                      <td class="productionOrderReportSearchTD">
                      {nameFieldWidget}
                      </td>
                      </tr>
                      <tr>
                      <td class="productionOrderReportSearchTD">Address</td>
                      <td class="productionOrderReportSearchTD">
                      {addressFieldWidget}
                      </td>
                      </tr>
                      
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">Created by</td>
                      <td class="productionOrderReportSearchTD">
                      {createdbyFieldWidget}
                      </td>
                      </tr>
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">
                       
                      <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
                      </td>
                      </tr>
                      
                      
                      
                      
                      
                      </tbody>
                      </table>
                                          
                                                      </div>
                                                  </div>
                                              </div>
                    </Box>
                    </Box> */}
                          
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
         
          {nameFieldWidget}

          {addressFieldWidget}

        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

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

export default ManufactDataEdit
