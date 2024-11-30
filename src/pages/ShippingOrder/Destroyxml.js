import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import moment from "moment";
import Sidebar from "../../components/Sidnav/Sidebar";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../components/useForm";
import Controls from "../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Destroyxml() {
const [id, setId] = useState(0);
const[ filesendernumber,setFilesenderno]=useState();
const[filereceivernumber,setFilereciverno]=useState();
const[filecontrolnumber,setFilecontrolno]=useState();
const[filedate,setFiledata]=useState();
const[filetime,setFiletime]=useState();
const[serialnumbers,setSerialnumbers]=useState([]);
const[eventdatetime,setEventdatetime]=useState("");
const[EventTimeZoneOffset,setEventTimeZoneOffset]=useState();
const[PackagingSerialNumberStatus,setPackagingsnStatus]=useState("");
const[eventLocation,setEventLocation]=useState("");
const[itemAttribute,setItemattribute]=useState("");
const[reasonDescription,setReasondescription]=useState("");

const[destroyednumbrs,setDestroyednumbers]=useState("")

var loggedInUsername=window.localStorage.getItem('loggedInUsername')
var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')                  

var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                 </div>  

const [warningmessage,setWarningmessage]=useState(warningDIV);                  
                    
const { processnumber } = useParams();

const [data, setData] = useState([]);
const navigate = useNavigate();
                    
var processno= processnumber



                    
var headwidget=

    <Controls.Input 
disabled
// fullWidth
value={loggedInUsername}
id="outlined-Company Prefix"
//label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                 Enter Destroyed  Data</font> </h4></pre></h4>}
/>


                    
var filesendernumberFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     onChange={(e) => setFilesenderno(e.target.value)}
                                    //         /> 

                                <TextField required
                                        label="File Sender Number"
                                        id="outline-Deliverycompleteflag"
                      
                                        onChange={(e) => setFilesenderno(e.target.value)}
                                    />      
var filereceivernumberFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     onChange={(e) => setFilereciverno(e.target.value)}
                                    //     />

                                        <TextField required
                                        label="File Reciver Number"
                                        id="outline-File Reciver Number"
                      
                                        onChange={(e) => setFilereciverno(e.target.value)}
                                    />  
                                          
                                          
                                  
var filecontrolnumberFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setFilecontrolno(e.target.value)}
                                    //     />

                                        <TextField required
                                        label="File Control Number"
                                        id="outline-File Reciver Number"
                      
                                        onChange={(e) => setFilecontrolno(e.target.value)}
                                    />  
                                            
                                             
var filedateFieldWidget = 
                                    // <input
                                    //     type="date"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setFiledata(e.target.value)}
                                    //     />

                                        <TextField required
                                        type="date"
                                        label="File date"
                                        id="outline-File date"
                                        InputLabelProps={{
                                            shrink: true,
                                         }}
                                        onChange={(e) => setFiledata(e.target.value)}
                                    />  
                                            
var filetimeFieldWidget = 
                                    // <input
                                    //     type="time"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setFiletime(e.target.value)}
                                    //     />
                                        <TextField required
                                        label="File Time"
                                        type="time"
                                        id="outline-File Time"
                                        InputLabelProps={{
                                            shrink: true,
                                         }}
                                        onChange={(e) => setFiletime(e.target.value)}
                                    />  

                    
var serialnumbersnumberFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setSerialnumbers(e.target.value)}
                                    //     />

                                        <TextField required
                                        label="Serialnumbers"
                                        id="outline-Serialnumbers"
                      
                                        onChange={(e) => setSerialnumbers(e.target.value)}
                                    />  
var eventdatetimeFieldWidget = 
                                    // <input
                                    //     type="datetime"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setEventdatetime(e.target.value)}
                                    //     />

                                        <TextField required
                                        type="datetime"
                                        label="Event Date Time"
                                        
                                        id="outline-Serialnumbers"
                                        InputLabelProps={{
                                            shrink: true,
                                         }}
                                        onChange={(e) => setEventdatetime(e.target.value)}
                                    />  
                    
var eventTimeZoneOffsetFieldWidget = 
                                    // <input
                                    //     type="time"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setEventTimeZoneOffset(e.target.value)}
                                    //     />

                                        <TextField required
                                        label="EventTimeZoneOffset"
                                        type="time"
                                        id="outline-Serialnumbers"
                                        InputLabelProps={{
                                            shrink: true,
                                         }}
                                        onChange={(e) => setEventTimeZoneOffset(e.target.value)}
                                    />  
                    
                    
var packagingLevelFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setPackagingsnStatus(e.target.value)}
                                    //     />
                                        <TextField required
                                        label="PackagingsnStatus"
                                       
                                        id="outline-PackagingsnStatus"
                      
                                        onChange={(e) => setPackagingsnStatus(e.target.value)}
                                    />  
                    
                    
var  eventLocationFieldWidget = 
                                    // <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     aria-describedby="emailHelp"
                                    //     onChange={(e) => setEventLocation(e.target.value)}
                                    //     />

                                        <TextField required
                                        label="Event Location"
                                       
                                        id="outline-EventLocation"
                      
                                        onChange={(e) => setEventLocation(e.target.value)}
                                    />  
                    
var itemattributeFieldWidget = 
                                // <input
                                //         type="text"
                                //         className="form-control form-control-sm"
                                //         aria-describedby="emailHelp"
                                //         onChange={(e) => itemAttribute(e.target.value)}
                                //         />
                                        <TextField required
                                        label="Item Attribute"
                                       
                                        id="outline-itemAttribute"
                      
                                        onChange={(e) => itemAttribute(e.target.value)}
                                    />  
                    
var reasondescriptionFieldWidget = 
                                // <input
                                //         type="text"
                                //         className="form-control form-control-sm"
                                //         aria-describedby="emailHelp"
                                //         onChange={(e) => setReasondescription(e.target.value)}
                                //         />
                                        <TextField required
                                        label="Reason Description"
                                       
                                        id="outline-Reasondescription"
                      
                                        onChange={(e) => setReasondescription(e.target.value)}
                                    />  

                    
                    // function getNumbers(){
                    //                     axios
                    //                     .get("http://127.0.0.1:8000/master/downloadcodes/"+processno+"/",
                                                             
                    //                     )
                    //                     .then((res) => {
                                                              
                                                              
                    //                     var no=JSON.parse(res.data[0].serialnumberwithgtin)
                    //                     setSerialnumbers(no);
                    //                     // alert(no)
                                                                                                  
                                                        
                                                              
                                                          
                    //                     });
                    //            }
                    //            useEffect(()=>
                    //            {
                    //              getNumbers();
                                 
                    //            },[]);
                                       
                    
                    
                                        const handleSubmit= (e)=>{
                                                            e.preventDefault();
                                                           
                    
                                                            // axios
                                                            // .get("http://127.0.0.1:8000/master/downloadcodes/"+processno+"/",
                                                             
                                                            // )
                                                            // .then((res) => {
                                                              
                                                              
                                                            // // var no=JSON.parse(res.data[0].serialnumberwithgtin)
                                                            // // setSerialnumbers(no);
                                                            // setSerialnumbers(res.data[0].serialnumberwithgtin)
                                                                                                  
                                                        
                                                              
                                                          
                                                            // });
                                                           
                                                            var testPassed = "false";

                                                            if(filesendernumber !=""){
                                                            testPassed = "true";
                                                        
                                                            }
                                                            else {
                                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                              <h5>Input File Sender number</h5>
                                                        
                                                            
                                                            </div>
                                                            setWarningmessage(warningDIV)
                                                            testPassed = "false";
                                                            }
                                                        
                                                        //////////////////  Product name testing
                                                        
                                                            if(testPassed == "true") {
                                                            if(filereceivernumber != "") {
                                                              testPassed = "true";
                                                            }
                                                            else {
                                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                              <h5>Input File Receiver Number</h5>
                                                            </div>
                                                              setWarningmessage(warningDIV)
                                                              testPassed="false";
                                                            }
                                                            }
                                                            if(testPassed == "true") {
                                                                if(filecontrolnumber != "") {
                                                                  testPassed = "true";
                                                                }
                                                                else {
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                  <h5>Input File Control Number</h5>
                                                                </div>
                                                                  setWarningmessage(warningDIV)
                                                                  testPassed="false";
                                                                }
                                                                }
                                                                if(testPassed == "true") {
                                                                    if(filedate != "") {
                                                                      testPassed = "true";
                                                                    }
                                                                    else {
                                                                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                      <h5>Input File Date</h5>
                                                                    </div>
                                                                      setWarningmessage(warningDIV)
                                                                      testPassed="false";
                                                                    }
                                                                    }
                                                                    if(testPassed == "true") {
                                                                        if(filetime != "") {
                                                                          testPassed = "true";
                                                                        }
                                                                        else {
                                                                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                          <h5>Input File Time</h5>
                                                                        </div>
                                                                          setWarningmessage(warningDIV)
                                                                          testPassed="false";
                                                                        }
                                                                        }
                                                                        if(testPassed == "true") {
                                                                            if(eventdatetime != "") {
                                                                              testPassed = "true";
                                                                            }
                                                                            else {
                                                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                              <h5>Input Eventdatetime</h5>
                                                                            </div>
                                                                              setWarningmessage(warningDIV)
                                                                              testPassed="false";
                                                                            }
                                                                            }
                                                                            if(testPassed == "true") {
                                                                                if(EventTimeZoneOffset != "") {
                                                                                  testPassed = "true";
                                                                                }
                                                                                else {
                                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                                  <h5>Input Event TimeZone</h5>
                                                                                </div>
                                                                                  setWarningmessage(warningDIV)
                                                                                  testPassed="false";
                                                                                }
                                                                                }
                                                                                if(testPassed == "true") {
                                                                                    if(PackagingSerialNumberStatus != "") {
                                                                                      testPassed = "true";
                                                                                    }
                                                                                    else {
                                                                                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                                      <h5>Input Packaging Status</h5>
                                                                                    </div>
                                                                                      setWarningmessage(warningDIV)
                                                                                      testPassed="false";
                                                                                    }
                                                                                    }
                                                                                    if(testPassed == "true") {
                                                                                        if(eventLocation != "") {
                                                                                          testPassed = "true";
                                                                                        }
                                                                                        else {
                                                                                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                                          <h5>Input Event Location</h5>
                                                                                        </div>
                                                                                          setWarningmessage(warningDIV)
                                                                                          testPassed="false";
                                                                                        }
                                                                                        }
                                                                                        if(testPassed == "true") {
                                                                                            if(reasonDescription != "") {
                                                                                              testPassed = "true";
                                                                                            }
                                                                                            else {
                                                                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                                              <h5>Input Reason Description</h5>
                                                                                            </div>
                                                                                              setWarningmessage(warningDIV)
                                                                                              testPassed="false";
                                                                                            }
                                                                                            }
                                                                                            if(testPassed == "true") {  
                                                         axios
                                                         .post(window.url+"/master/destroyxmldata/",
                                                         {
                                                           "id":id,
                                                           "filesendernumber":filesendernumber,
                                                        
                                                           "filereceivernumber":filereceivernumber,
                                                           "filecontrolnumber":filecontrolnumber,
                                                           "filedate":filedate,
                                                           "filetime":filetime,
                                        //                    "serialnumber":serialnumbers,
                                                           "eventdatetime":eventdatetime,
                                                           "EventTimeZoneOffset":EventTimeZoneOffset,
                                                           "packagingstatus":PackagingSerialNumberStatus,
                                                           "eventLocation":eventLocation,
                                                           "itemAttribute":itemAttribute,
                                                           "reasonDescription":reasonDescription,
                                        //                    "lotnumber":lotnumber,
                                        //                    "expirationdate":expirationdate,
                    
                                                        
                                                           
                                                           "process_no_original":processno,
                                        
                                        
                                        
                                        
                                        
                                                         })
                                                         .then((res)=>{
                                                            if(res.data===100){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>There Are No Rejected Numbers For This Batch.Please Upload It And Try Again</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===250){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input File Sender Number</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===300){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input File Receiver Number</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===350){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input  File ControlNumber</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===400){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input File Date</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===450){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input EventTimeZone Offset</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===500){
                                                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                                <h5>Input FileTime</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)  
                                                            }
                                                            if(res.data===200){
                                                                warningDIV =  <div className="alert alert-success pt-4" role="alert">
                                                                <h5>Destoy Xml File Created Successfully</h5>
                                                              </div>
                                      
                                                setWarningmessage(warningDIV)   
                                                // navigate("/shipping/export/"+ processno+"/"+id)                      
                                            } 
                      
                                                         })
                                                        }
                                                         
                                        }              
                                                        
                      return (
                        <>
                        <br/>        <br/>        <br/>   <br/><br/><br/> <br/><br/>
           {/* {warningmessage}         */}
           <Box sx={{ display: 'flex' }}>
           <Sidebar/>   
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
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Enter Destroy  Data </font></h4></center></h4>            
        
      {filesendernumberFieldWidget}
                    
                    {filereceivernumberFieldWidget}
                    
                    {filecontrolnumberFieldWidget}
                    {filedateFieldWidget}

       
      
        <br/>
       
                    {filetimeFieldWidget}
                    
                    
                    {eventdatetimeFieldWidget}
                    {eventTimeZoneOffsetFieldWidget}
                    {packagingLevelFieldWidget}
                    <br/>
                  
                    {eventLocationFieldWidget}
                    {reasondescriptionFieldWidget}
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
        {/* <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit} >
                      Save data
                  </button> */}
       
      
      </div>
        
       
      </div>
     
    </Box>
    </Box> 
                     </>
                        
                      )
}

export default Destroyxml
