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
import Tooltip from '@mui/material/Tooltip';

function CustomerPropertyEdit() {

 const[id,setId]=useState("");
 const[gln,setGln]=useState("");
 const[gs1_company_prefix,setGs1_company_prefix]=useState("");
 const[tobussinesspartylookupid,setLookupid]=useState("");
 const[landmark,setLandmark]=useState("");
 const[tracelinkfile_receiver,setReceiver]=useState("");
 const[sgln_extension,setSgln_Extension]=useState("")
  
 
const navigate=useNavigate();
const { operation } = useParams();
const {uniqueID} =useParams();

var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')


function getCustomerpropertyEditdata(){
                    axios
                    .get(window.url+"/master/customerproperty/"+uniqueID+"/")
                    .then((res)=>{
                       setGln(res.data[0].company_gln)
                       setGs1_company_prefix(res.data[0].company_prefix)
                       setLandmark(res.data[0].landmark)
                       setLookupid(res.data[0].tobusinessparylookupid) 
                       setReceiver(res.data[0].file_receiver)
                       setSgln_Extension(res.data[0].sgln_extension)  

                    })

                    
                    }

                    useEffect(()=>{
                                        getCustomerpropertyEditdata();                 
                                     },[])  
                                     
                                     var headwidget=
    
                                  //    <Box 
                                    
                                  //        component="form"
                                  //        sx={{
                                  //          width: 500,
                                  //          maxWidth: '100%',
                                           
                                           
                                  //        }}
                                  //    noValidate
                                  //    autoComplete="off"
                                     
                                  //  >
                             
                                   <Controls.Input 
                                           disabled
                                          //  fullWidth
                                           id="outlined-Company Prefix"
                                           value={loggedInUsername}
                                           // label={<Typography>Customer  Create</Typography>}
                                          //  label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                  Create Customer Property</font> </h4></pre></h4>}
                                         
                            
                             />
                             
                          
                         

var glnwidget=
   // <input type="text"
   //                  className="form-control"
   //                  onChange={(e) => setGln(e.target.value)}
   //                  value={gln}
   //                  />
            <TextField
                    required
                    label="Gln"
                    name="Gln"
                    value={gln}
                    onChange={(e) => setGln(e.target.value)}
                    />
     
                    
     
  
   
                    
                    
var gs1companywidget=
            // <input type="text"
            //         className="form-control"
            //         onChange={(e) => setGs1_company_prefix(e.target.value)}
            //         value={gs1_company_prefix}
            //         /> 

                    <TextField
                        required
                        label="Gs1 company Prefix"
                        name="Gs1_company_prefix"
                        value={gs1_company_prefix}
                        onChange={(e) => setGs1_company_prefix(e.target.value)}
                        />
        
                        
     
                     
   
                    
var landmarkwidget=
               // <input type="text"
               //      className="form-control"
               //      onChange={(e) => setLandmark(e.target.value)}
               //      value={landmark}
               //      />

                    <TextField
                              required
                              label="landmark"
                              name="landmark"
                              value={landmark}
                              onChange={(e) => setLandmark(e.target.value)}
               
                              />
var lookupidwidget=
                  // <input type="text"
                  //   className="form-control"
                  //   onChange={(e) => setLookupid(e.target.value)}
                  //   value={tobussinesspartylookupid}
                  //   />
                    
                    <TextField
                          required
                          label="To Bussiness Party Lookupid"
                          name="tobussinesspartyLookupid"
                          value={tobussinesspartylookupid}
                          onChange={(e) => setLookupid(e.target.value)}
                    />
                    
var filerecivercompanywidget=
                  // <input type="text"
                  //   className="form-control"
                  //   onChange={(e) => setReceiver(e.target.value)}
                  //   value={tracelinkfile_receiver}

                  //   />   
                    
                    <TextField
                        required
        
                        label="Tracelink File Receiver"
                        name="tracelinkfile_receiver"
                        value={tracelinkfile_receiver}
                        onChange={(e) => setReceiver(e.target.value)}

                    />
                    
var sglnextensionwidget=
                  // <input type="text"
                  //   className="form-control"
                  //   onChange={(e) => setSgln_Extension(e.target.value)}
                  //   value={sgln_extension}

                  //   />  
                    
                    <TextField
                        required
        
                        label="Sgln Extension"
                        name="sgln_extension"
                        value={sgln_extension}
                        onChange={(e) => setSgln_Extension(e.target.value)}

                    />

const handleSubmit = (e) => {
                    e.preventDefault();
                    console.log("clicked");
                    //alert(address);
                    // companyEditID=uniqueID;
                    // alert(gln);
                    // alert(gs1_company_prefix);
                    // alert(landmark);
                    // alert(tracelinkfile_receiver);
                    // alert(tobussinesspartylookupid);
                    // alert(sgln_extension);
                    axios
        .put(window.url+`/master/customerproperty/update/${uniqueID}`, 
      
        {
          "company_gln":gln,    
          "company_prefix":gs1_company_prefix,
          "landmark": landmark,
          "file_receiver":tracelinkfile_receiver,
        
  
          
          "tobusinessparylookupid":tobussinesspartylookupid,
          "sgln_extension":sgln_extension,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole,
          "uniqueid":uniqueID,
          
           
        },
        
        )
        .then(() => {
          navigate("/customer");
        });
      }

  return (
                    <>

<br/><br/><br/><br/><br/>

{/* {warningmessage}         */}
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25' },
          }}
          noValidate
          autoComplete="off"
        >
           
          <div style={{backgroundColor:"#AAF0D1"}} >
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Customer Property </font></h4></center></h4>            
          {glnwidget} 
          {gs1companywidget}       
          {landmarkwidget}
          

          {sglnextensionwidget}
    
    
           
          
          <br/>
       

           
{lookupidwidget}

{filerecivercompanywidget}

{headwidget}
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
  )
}

export default CustomerPropertyEdit
