import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, Typography, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Statusselect from "../../../components/Statusselect";
// import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import { Margin } from "@mui/icons-material";
import CreateTextbox from "../CreateTextbox";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function RegSystemDataEntry() {
  var warningDIV= <div className="alert alert-warning pt-4" role="alert">
  <h5>Input all the values</h5>
  </div>
  const [id, setId] = useState(0);
  const [ip_address, setIp] = useState("");
  const [system_name, setSystem] = useState("");
  const [line, setLine] = useState("");
  const [manufacturinglocation_id, setManufacturinglocationid] = useState([]);
  const [manufactureLocationOptionsNew,setManufacturelocationoptionsnew]=useState([]);
  const[locationname,setLocationname]=useState("");
  const [warningmessage,setWarningmessage]=useState(warningDIV);
  const[manufactvalue,setManufactvalue]=useState("");
                      ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID}=useParams();


  const [selectedClient,setSelectedClient] = useState("one"); //default value
    
        function handleSelectChange(event) {
            setSelectedClient(event.target.value);
        }
 

  let optionsNew = [];
  let comboboxoption=[]
                      ////    for receiving the parameters from URL
  const { operation } = useParams();
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
                      ////  Fetch data from local storage
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')                   
      
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;   
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 450,
      },
    },
  };    
                    
  function getRegsyEditRequestData(){
    var regsyEditID= uniqueID;
                      
    axios
    .get(window.url+"/productionline/registeredsystem/"+regsyEditID+"/",
    )
    .then((res)=>{
      setId(res.data[0].id);
      setManufacturelocationoptionsnew(res.data[0].manufactureLocationOptionsNew)
                      
      setIp(res.data[0].ip_address);
      setSystem(res.data[0].system_name);
      setLine(res.data[0].line);
    })
  }

    useEffect(() => {
        if(operation === 'edit') {
          getRegsyEditRequestData()
                        //   setId(localStorage.getItem("id"));
                        // //   setManid(localStorage.getItem("manufacturinglocation_id"));
                        //   setIp(localStorage.getItem("ip_address"));
                        //   setSystem(localStorage.getItem("system_name"));
                        //   setLine(localStorage.getItem("line"))
    }
  }, []);
  
                      // window.localStorage.setItem("customername")   
  function getManlocid() {
    axios
    .get(window.url+"/productionline/manufacturinglocation/",
    )
    .then((res) => {
                            // let batchNumberOptionsInitial = "";
      res.data.map(data => {
        optionsNew.push({ value:data.id, label:data.name });
      });
      setManufacturelocationoptionsnew(optionsNew);
    });
  }
  useEffect(() => {
    getManlocid();
  }, []);

  const getmanlocation = event => {
    setManufacturinglocationid(event. value); 
    setLocationname(event.label);
    setManufactvalue(event.value); 
                        // window.localStorage.setItem("customername")    
  }
 
  const handleChange = (event, value,label) =>{setManufacturinglocationid(value);
    setLocationname(event.target.label);
    setManufactvalue(event.target.value); 
  } 
      
  // const flatProps = {
  //   options: manufactureLocationOptionsNew.map((option) => id: option.id, label: option.label  + ` (${option.name_native})`),
    
  // };
  const handleChangeRowsPerPage = (event) => {
    setManufacturinglocationid(+event.target.value);
    setLocationname(+event.target.label);
    setManufactvalue(+event.target.value); 
    // setPage(0);
  };

  const customStyles = {
    control: base => ({
      ...base,
      height: 55,
      minHeight: 55,
      width:230,
      marginLeft:30
      
      
    })
  };
  if(operation === 'new') {
    var headwidget=
    <Box
       
        component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      noValidate
      autoComplete="off"
  ><Controls.Input
    // disabled
    //  fullWidth
    // style = {{width: 300,marginleft:100}}
    disabled
          id="outlined-Company Prefix"
         
          // label="Disabled"
          value={loggedInUsername}
          
          // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6"> Create Registered System </font></h4></pre></h4>}
          // required
          // id="outlined-required"
          // label="System Name"
          // onChange={(e) => setSystem(e.target.value)}
   
 />
 </Box>

  // var manufacturinglocationFieldWidget = 
  //   <Select className="s" onChange={getmanlocation} options={manufactureLocationOptionsNew} /> 
  //   <Box sx={{  }}>

  //                         <FormControl >
  //                         <InputLabel id="demo-simple-select-label">Manufacturing Location</InputLabel>
  //                         <NativeSelect
  //                         labelId="demo-simple-select-label"
  //                         id="demo-simple-select"
  //                         input={<OutlinedInput label="Manufacturing Location" />}
                         
  //                         MenuProps={MenuProps}
  //                         style={{width:'220px'}}
  //                         label="Manufacturing Location"
  //                         onChange={getmanlocation}
                        
  //                         ><option>Select Source Location</option> 
  //                         {manufactureLocationOptionsNew.map((data) => (
                
                
  //                         <option key={data.label} value={data.value}>
                
  //                         {data.label}
                
  //                         </option>
                
  //                         ))}
                          

  //                         </NativeSelect>
  //                         </FormControl>
  //                          </Box> 

var manufacturinglocationFieldWidget =
<Select className="s" placeholder="Select ManufacturingLocation"   styles={customStyles} onChange={getmanlocation} options={manufactureLocationOptionsNew} />  
  
//   var manufacturinglocationFieldWidget =
//     <Autocomplete
//     disablePortal
//     id="combo-box-demo"
//     value={manufacturinglocation_id}
//     onChange={getmanlocation}
   
//   // onChange={(event,value) => setManufacturinglocationid(value)}
 
//     options={manufactureLocationOptionsNew}
//     getOptionLabel={(manufactureLocationOptionsNew) =>manufactureLocationOptionsNew.label || ""}
//     sx={{ width: 300 }}
//     renderInput={(params) => <TextField {...params}  label="Movie"
    
//      />}
// />
// var manufacturinglocationFieldWidget =
// <Autocomplete
//       id="filter-demo"
//       options={manufactureLocationOptionsNew}
//       // getOptionLabel={(option) => option.title}
//       // filterOptions={filterOptions}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
//     />
  
        
    var ipaddressFieldWidget =<TextField
                                id="outline-ipaddress"
                                label="Ipaddress"
                                required
                                // style = {{width: 300}}
                                onChange={(e) => setIp(e.target.value)}
                              /> 

                        // var hjwidget=<label className="form-label">Batch Number</label> 
    var systemnameFieldWidget =  <TextField required
                                    id="outline-systemname"
                                    label="System Name"
                                    // style = {{width: 300}}
                                  onChange={(e) => setSystem(e.target.value)}
                                /> 
                                
                    
    var lineFieldWidget = <TextField required
                              type="text"
                             id="outline-line"
                             label="Line"
                            //  style = {{width: 300}}
                              onChange={(e) => setLine(e.target.value)}
                            />
                    
  }

  const customStylesbutton = {
    control: base => ({
      ...base,
      height: 55,
      minHeight: 55,
      width:303,
      margin:500,
      
      
    })
  };                  
                    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");                
    var regsyEditID= uniqueID;
                        //alert(address);
    var locationEditID= uniqueID;
                        // alert(2)
                            //alert(address);
    var testPassed = "false";
    if(locationname!=""){
      testPassed="true"
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
        <h5>Input  manufactid</h5>
      </div>
      setWarningmessage(warningDIV);
      testPassed = "false";
    }
    if(testPassed == "true"){
      if(ip_address!=""){
        testPassed ="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  ip address</h5>
        </div>
        setWarningmessage(warningDIV);
        testPassed = "false";
      }
    }
    if(testPassed == "true"){
      if(system_name!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  system name</h5>
        </div>
                        
        setWarningmessage(warningDIV);
        testPassed = "false";
                        
      }
    }
    if(testPassed == "true"){
      if(line!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  line</h5>
        </div>
        setWarningmessage(warningDIV);
        testPassed = "false";
      }
    }
                        
                           
    if(testPassed == "true"){
      if(operation === 'new') {
        // alert(manufacturinglocation_id)
        // alert(system_name)
        // alert(line)
        // alert(ip_address)
        axios
        .post(window.url+'/productionline/registeredsystem/', 
        {
          "manufacturinglocation_id":manufacturinglocation_id,
             
          "ip_address":ip_address,
          "system_name": system_name,
          "line":line,
          // "createdby":loggedInUsername,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole

        },
        )
        .then((res) => {
          if(res.data.ip_address == "registered system with this ip address already exists."){
            warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                              <h5>Ip Address Already Exist</h5>
                            </div>
  
            setWarningmessage(warningDIV)                         
          }
         
          else{
            navigate("/registeredsystem");
          }
          
        });
      }
    };
  }
  
  return (
    <>
                           
    <br/>        <br/>        <br/>   <br/> 
    {warningmessage}        
 
<Box
component="form"
sx={{
 '& .MuiTextField-root': { m: 4, width: '25' },
}}
noValidate
autoComplete="off"
>

<div style={{backgroundColor:"#AAF0D1"}} >
<h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Registered System Details </font></h4></center></h4>            
 
  {ipaddressFieldWidget}
 
 {systemnameFieldWidget}

 {lineFieldWidget}





 {headwidget}
 {manufacturinglocationFieldWidget}
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
  );
}

export default RegSystemDataEntry
