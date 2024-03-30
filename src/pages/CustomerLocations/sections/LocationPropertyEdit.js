import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Select from "react-select";
import Tooltip from '@mui/material/Tooltip';


function LocationPropertyEdit() {
  
const [id, setId] = useState(0);
const[loc_gln,setLocGln]=useState("");
const[district,setDistrict]=useState("");
const[ship_to_locationlookup_id,setShipToLocationId]=useState("");
const[sgln_extension,setSgln_Extension]=useState("");
const[tracelink_file_sender,setTracelinkFileSender]=useState("");

const navigate=useNavigate();
const { operation } = useParams();
const {uniqueID} =useParams();
var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

function getLocationPropertyEditdata(){
 
 axios
 .get(window.url+"/master/locationproperty/"+uniqueID+"/",
 
 )
 .then((res)=>{
       setId(res.data[0].id);
       setDistrict(res.data[0].district)
       setLocGln(res.data[0].loc_gln)
       setShipToLocationId(res.data[0].ship_to_locationlookup_id)
       setSgln_Extension(res.data[0].sgln_extension)
       setTracelinkFileSender(res.data[0].tracelink_file_sender)


 })
}
useEffect(()=>{
   getLocationPropertyEditdata();                 
},[]) 

   var headwidget=
           <Controls.Input 
                  disabled
                  // fullWidth

                  id="outlined-Company Prefix"
                  value={loggedInUsername}
                  // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">   Enter Customer Location Property </font></h4></pre></h4>}
               

            />
          
var districtwidget=
      //    <input type="text"
    //   className="form-control form-control-sm"
   //   onChange={(e) => setDistrict(e.target.value)}
   //  value={district}
   //   />
            <TextField
                  required
                  id="outlined-District"
                  label="District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}

            />

var glnwidget=
                  //    <input type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setLocGln(e.target.value)}
                  //   value={loc_gln}
                  //   />

                    <TextField
                        required
                        id="outlined-Location Gln"
                        label="Location Gln"
                        value={loc_gln}
                        onChange={(e) => setLocGln(e.target.value)}
              
                     />
                                        
var shiptowidget=
                  //    <input type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setShipToLocationId(e.target.value)}
                  //   value={ship_to_locationlookup_id}
                  //   />

                    <TextField
                           required
                           id="outlined-Ship To Location LookupId"
                           label="Ship To Location LookupId"
                           value={ship_to_locationlookup_id}
                           onChange={(e) => setShipToLocationId(e.target.value)}
              
                  />
                   

var sglnwidget=
                  //    <input type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setSgln_Extension(e.target.value)}
                  //   value={sgln_extension}
                  //   />

                    <TextField
                        required
                        id="outlined-Sgln Extension"
                        label="Sgln Extension"
                        value={sgln_extension}
                        onChange={(e) => setSgln_Extension(e.target.value)}
              
                  />
var tracelinkwidget=
                  //    <input type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setTracelinkFileSender(e.target.value)}
                  //   value={tracelink_file_sender}
                  //   /> 
                    
                    <TextField
                        required
                        id="outlined-Tracelink File Sender"
                        label="Tracelink File Sender"
                        value={tracelink_file_sender}
                        onChange={(e) => setTracelinkFileSender(e.target.value)}
              
                  />
                    

const handleSubmit = (e) => {
         e.preventDefault();
         console.log("clicked");
                    //alert(address);
                    // companyEditID=uniqueID;
                    // alert(sap_service);
         axios
        .put(window.url+`/master/locationproperty/update/${uniqueID}`, 
      
        {
            "district":district,    
            "ship_to_locationlookup_id":ship_to_locationlookup_id,
            "tracelink_file_sender": tracelink_file_sender,
            "loc_gln":loc_gln,
            "tracelink_file_sender":tracelink_file_sender,
            "sgln_extension":sgln_extension,
            "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole,
            "uniqueid":uniqueID
          
           
        },
        
        )
        .then(() => {
            navigate("/customerlocation");
        });
      }





  return (
   <>


<br></br>
    <br></br>
    <br/><br/><br/><br/> 
    
      
 
<Box
component="form"
sx={{
 '& .MuiTextField-root': { m: 4, width: '25' },
}}
noValidate
autoComplete="off"
>

<div style={{backgroundColor:"#AAF0D1"}} >
<h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Customer Location Property </font></h4></center></h4>            

{districtwidget}
 
{glnwidget} 

{tracelinkwidget}
<br/>





{/* {createdbyFieldWidget} */}
{sglnwidget}
{shiptowidget}
{headwidget}


    <br/> <br/>
<div className="row">
 <div className="col-4">

 </div>
 <div className="col-4">
   <center><button
             type="submit"
             className="btn btn-primary"
             onClick={handleSubmit} >
               Save data
           </button></center>
 </div>
 <div className="col-4">
 </div>
 


</div>
 

</div>

</Box>
        
</>
  )
}

export default LocationPropertyEdit
