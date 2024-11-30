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
var loggedInUsername=window.localStorage.getItem('loggedInUsername')
var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')


var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                 </div>  

const { processnumber } = useParams();
const [warningmessage,setWarningmessage]=useState(warningDIV);
const [data, setData] = useState([]);
const {uniqueID}=useParams();
const navigate = useNavigate();

var processno= processnumber

var headwidget=

  <Controls.Input 
disabled
// fullWidth
value={loggedInUsername}
id="outlined-Company Prefix"
//label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">        Enter Commissioning  Data</font> </h4></pre></h4>}
/>

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
                      
                    .get(window.url+"/master/shippo/"+uniqueID+"/",
                     
                    )
                    .then((res) => {

                        
                         
                       // alert(res.data[0].destination_location)
                        setFilesenderno(res.data[0].source_location);
                        setFiledate(res.data[0].shipping_date);
                        setFiletime(res.data[0].shipping_time);
                        setLotnumber(res.data[0].batch_for_export);
                       
                    });

                    axios
                        .get(window.url+"/master/company/")
                        .then((res1) => {
                         
                     
                          // alert(res1.data[0].gln)
                       
                       
                            setFilereciverno(res1.data[0].gln);
                
                    
                          //  alert(optionsNew)
                        });

                        axios
                                        .get(window.url+"/master/downloadcodes/"+processno+"/",
                                         
                                        )
                                        .then((res2) => {
                                          
                                            // alert(res.data[0].serialnumberwithgtin)
                                        // var no=JSON.parse(res.data[0].serialnumberwithgtin)
                                        // setSerialnumbers(no);
                                        setSerialnumbers(res2.data[0].serialnumberwithgtin)
                                                                              
                                    
                                          
                                      
                                        });

                                       
             
           },[]);
                   


                    const handleSubmit= (e)=>{
                                        e.preventDefault();
                                       
                                        var testpassed="false"
                                        alert(filecontrolnumber)
                                        if(filecontrolnumber!=""){
                                       
                                          testpassed="true"
                                        }
                                        else{
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                      <h5>Input  File Control Number</h5>
                                                    </div>
                                                  setWarningmessage(warningDIV);
                                          testpassed="false"
                                        }
                                        if(testpassed=="true"){
                                          // alert(testpassed)  
                                          if(eventdatetime!="")
                                          {
                                            testpassed="true"
                                          }
                                          else{
                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                            <h5>Input Event Date Time</h5>
                                          </div>
                                        setWarningmessage(warningDIV);
                                        testpassed="false"
                                          }
                                        }
                                        if(testpassed=="true"){
                                          if(EventTimeZoneOffset!="")
                                          {
                                            testpassed="true"
                                          }
                                          else{
                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                            <h5>Input   Event Timezone</h5>
                                          </div>
                                        setWarningmessage(warningDIV);
                                        testpassed="false"
                                          }
                                        }
                                        if(testpassed=="true"){
                                          if(packagingLevel!="")
                                          {
                                            testpassed="true"
                                          }
                                          else{
                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                            <h5>Input   Packaging Level</h5>
                                          </div>
                                        setWarningmessage(warningDIV);
                                        testpassed="false"
                                          }
                                        }
                                        if(testpassed=="true"){
                                          if(eventLocation!="")
                                          {
                                            testpassed="true"
                                          }
                                          else{
                                            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                            <h5>Input   Event Location</h5>
                                          </div>
                                        setWarningmessage(warningDIV);
                                        testpassed="false"
                                          }
                                        }
                                  
                                      // alert(eventdatetime) 
                                      if(testpassed=="true"){
                                     axios
                                     .post(window.url+"/master/commissioningxmldata/",
                                     {
                                       "id":id,
                                       "filesendernumber":filesendernumber,
                                    
                                       "filereceivernumber":filereceivernumber,
                                      
                                       "filedate":filedate,
                                       "filetime":filetime,
                                       "serialnumber":serialnumbers,
                                        "eventdatetime":eventdatetime,
                                        "filecontrolnumber":filecontrolnumber,
                                       "EventTimeZoneOffset":EventTimeZoneOffset,
                                       "packagingLevel":packagingLevel,
                                       "eventLocation":eventLocation,
                                       "productionLineId":productionLineId,
                                       "internalmaterialcode":internalmaterialcode,
                                       "lotnumber":lotnumber,
                                       "expirationdate":expirationdate,

                                    
                                       
                                       "process_no_original":processno,
                    
                    
                    
                    
                    
                                     })
                                     .then((res)=>{
                                      // setWarningmessage("jjjjjjjjjj")  
                                      if(res.data===100){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Gln Number In Company First And Try Again </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===300){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter filesender number in shippo table </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===400){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter filedate number in shippo table </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===500){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter filetime number in shippo table </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===600){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter lot number in shippo table </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===700){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Download codes in production order and try again </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        }
                                        
                                        if(res.data===800){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input EventTimeZoneOffset </h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                                
                                        if(res.data===900){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input File Control Number</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===950){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Internal Material Number In ProductionOrder</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        } 
                                        if(res.data===1000){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Expiration Date In ProductionOrder</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        }
                                        if(res.data===1050){
              
                                          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Production Line In ProductionOrder</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)                         
                                        }
                                       
                                       
                                        if(res.data===200){
                                          warningDIV =  <div className="alert alert-success pt-4" role="alert">
                                          <h5>Commissioning Xml File Created Successfully</h5>
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
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Enter Commissioning  Data </font></h4></center></h4>            
        
      {filecontrolnumberFieldWidget}
{eventdatetimeFieldWidget}
{eventTimeZoneOffsetFieldWidget}


       
      
        <br/>
        {packagingLevelFieldWidget}
{eventLocationFieldWidget}
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

export default Commissioningxml

