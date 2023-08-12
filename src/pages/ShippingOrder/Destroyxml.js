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

                    
                    
                    
const { processnumber } = useParams();
const [data, setData] = useState([]);
const navigate = useNavigate();
                    
var processno= processnumber
                    
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
fullWidth

id="outlined-Company Prefix"
label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                 Enter Destroyed  Data</font> </h4></pre></h4>}
/>
</Box>

                    
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
                                                            // alert(serialnumbers)
                    
                                                            // axios
                                                            // .get("http://127.0.0.1:8000/master/downloadcodes/"+processno+"/",
                                                             
                                                            // )
                                                            // .then((res) => {
                                                              
                                                              
                                                            // // var no=JSON.parse(res.data[0].serialnumberwithgtin)
                                                            // // setSerialnumbers(no);
                                                            // setSerialnumbers(res.data[0].serialnumberwithgtin)
                                                                                                  
                                                        
                                                              
                                                          
                                                            // });
                                                           
                                                      
                                                           
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
                                                        //    "eventdatetime":eventdatetime,
                                                           "EventTimeZoneOffset":EventTimeZoneOffset,
                                                           "packagingstatus":PackagingSerialNumberStatus,
                                                           "eventLocation":eventLocation,
                                                           "itemAttribute":itemAttribute,
                                                           "reasonDescription":reasonDescription,
                                        //                    "lotnumber":lotnumber,
                                        //                    "expirationdate":expirationdate,
                    
                                                        
                                                           
                                                           "process_no_original":processno,
                                        
                                        
                                        
                                        
                                        
                                                         })
                                                         
                                        }              
                                                        
                      return (
                        <>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        <div className="container">
                         <Box sx={{ display: 'flex' }}>
                                                     
                                    <Sidebar/>
                        
                    
                    <br></br>
                    <div class="container-fluid" >
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
                    {filesendernumberFieldWidget}
                    
                    {filereceivernumberFieldWidget}
                    
                    {filecontrolnumberFieldWidget}
                    
                    <div id="shipmentxmlbutton">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                   
                    </button>
                    </div>
                    <br></br>
                   
                    <div>
                    
                    {filedateFieldWidget}
                    {filetimeFieldWidget}
                    
                    
                    {eventdatetimeFieldWidget}
                    
                    
                    
                    </div>
                    
                    <div >
                    {eventTimeZoneOffsetFieldWidget}
                    {packagingLevelFieldWidget}
                    {eventLocationFieldWidget}
                    
                    
                    </div>
                    
                    <div>
                    
                    {reasondescriptionFieldWidget}
                    </div>              
                    
                    
                    </div>
                    <div>
                    
                    </div>
                    
                    </Box> 
                    <hr></hr>    
                    </div>
                    </div>
                    </div>  
                    </Box> 
                    </div>
                     </>
                        
                      )
}

export default Destroyxml
