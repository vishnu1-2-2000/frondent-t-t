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

function Commissioningxml() {

const [id, setId] = useState(0);
const[ filesendernumber,setFilesenderno]=useState();
const[filereceivernumber,setFilereciverno]=useState();
const[filecontrolnumber,setFilecontrolno]=useState();
const[filedate,setFiledate]=useState();
const[filetime,setFiletime]=useState();
const[serialnumbers,setSerialnumbers]=useState([]);
const[eventdatetime,setEventdatetime]=useState("");
const[EventTimeZoneOffset,setEventTimeZoneOffset]=useState();
const[packagingLevel,setPackagingLevel]=useState("");
const[eventLocation,setEventLocation]=useState("");
const[productionLineId,setProductionLineId]=useState("");
const[internalmaterialcode,setInternalmaterialcode]=useState("");
const[lotnumber,setLotnumber]=useState("");
const[expirationdate,setExpirationdate]=useState("");



const { processnumber } = useParams();
const [data, setData] = useState([]);
const {uniqueID}=useParams();
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
label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">        Enter Commissioning  Data</font> </h4></pre></h4>}
/>
</Box>
var filesendernumberFieldWidget = 
                    // <input
                    // type="text"
                    // className="form-control form-control-sm"
                    // onChange={(e) => setFilesenderno(e.target.value)}
                    //     /> 

                    <TextField required
                        label="File Sender Number"
                        id="outline-File Sender Number"
  
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
                    // type="text"
                    // className="form-control form-control-sm"
                    // aria-describedby="emailHelp"
                    // onChange={(e) => setFilecontrolno(e.target.value)}
                    // />

                    <TextField required
                        label="File Control Number"
                        id="outline-Filecontrolno"
  
                        onChange={(e) => setFilecontrolno(e.target.value)}
                        />
                        
                         
var filedateFieldWidget = 
                // <input
                //     type="date"
                //     className="form-control form-control-sm"
                //     aria-describedby="emailHelp"
                //     onChange={(e) => setFiledate(e.target.value)}
                //     />
                    <TextField required
                        label="File Date"
                        id="outline-File Date"
  
                        onChange={(e) => setFiledate(e.target.value)}
                        />
                        
var filetimeFieldWidget = <input
                    type="time"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setFiletime(e.target.value)}
                    />

var serialnumbersnumberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setSerialnumbers(e.target.value)}
                    />
var eventdatetimeFieldWidget = 
                    // <input
                    // type="datetime-local"
                    // className="form-control form-control-sm"
                    // aria-describedby="emailHelp"
                    // onChange={(e) => setEventdatetime(e.target.value)}
                    // />
                    <TextField required
                    type="datetime-local"
                    InputLabelProps={{
                        shrink: true,
                      }}
                        label="Event Date Time"
                        id="outline-Eventdatetime"
  
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
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        label="EventTimeZoneOffset"
                        id="outline-EventTimeZoneOffset"
                        onChange={(e) => setEventTimeZoneOffset(e.target.value)}
                        />

var packagingLevelFieldWidget = 
                    // <input
                    // type="text"
                    // className="form-control form-control-sm"
                    // aria-describedby="emailHelp"
                    // onChange={(e) => setPackagingLevel(e.target.value)}
                    // />
                    <TextField required
                    label="Packaging Level"
                    id="outline-PackagingLevel"

                    onChange={(e) => setPackagingLevel(e.target.value)}
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

var productionLineIdFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setProductionLineId(e.target.value)}
                    />

var internalmaterialcodeFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setInternalmaterialcode(e.target.value)}
                    />

var lotnumberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setLotnumber(e.target.value)}
                    />
var expirationdateFieldWidget = <input
                    type="date"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setExpirationdate(e.target.value)}
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
           useEffect(()=>
           {
            axios
                      
                    .get("http://127.0.0.1:8000/master/shippo/"+uniqueID+"/",
                     
                    )
                    .then((res) => {

                        
                         
                        // alert(res.data[0].destination_location)
                        setFilesenderno(res.data[0].source_location);
                        setFiledate(res.data[0].shipping_date);
                        setFiletime(res.data[0].shipping_time);
                        setLotnumber(res.data[0].batch_for_export);
                       
                    });

                    axios
                        .get("http://127.0.0.1:8000//master/company/")
                        .then((res) => {
                            
                            
                          setFilereciverno(res.data[0].gln);
                    
                          //  alert(optionsNew)
                        });

                        axios
                                        .get("http://127.0.0.1:8000//master/downloadcodes/"+processno+"/",
                                         
                                        )
                                        .then((res) => {
                                          
                                            // alert(res.data[0].serialnumberwithgtin)
                                        // var no=JSON.parse(res.data[0].serialnumberwithgtin)
                                        // setSerialnumbers(no);
                                        setSerialnumbers(res.data[0].serialnumberwithgtin)
                                                                              
                                    
                                          
                                      
                                        });

                                       
             
           },[]);
                   


                    const handleSubmit= (e)=>{
                                        e.preventDefault();
                                       

                                        
                                  
                                       
                                     axios
                                     .post("http://127.0.0.1:8000//master/commissioningxmldata/",
                                     {
                                       "id":id,
                                       "filesendernumber":filesendernumber,
                                    
                                       "filereceivernumber":filereceivernumber,
                                       "filecontrolnumber":filecontrolnumber,
                                       "filedate":filedate,
                                       "filetime":filetime,
                                       "serialnumber":serialnumbers,
                                        // "eventdatetime":eventdatetime,
                                       "EventTimeZoneOffset":EventTimeZoneOffset,
                                       "packagingLevel":packagingLevel,
                                       "eventLocation":eventLocation,
                                       "productionLineId":productionLineId,
                                       "internalmaterialcode":internalmaterialcode,
                                       "lotnumber":lotnumber,
                                       "expirationdate":expirationdate,

                                    
                                       
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
<div class="card shadow mb-4" id="commissioningxmlfullcard"> 
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
{filecontrolnumberFieldWidget}
{eventdatetimeFieldWidget}
{eventTimeZoneOffsetFieldWidget}

<div id="shipmentxmlbutton">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={handleSubmit}><MdOutlineSave size={38}/>
                               
</button>
</div>
<br></br>
<br></br>
<div>

{packagingLevelFieldWidget}
{eventLocationFieldWidget}






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
</Box> 
</div>
 </>
  )
}

export default Commissioningxml

