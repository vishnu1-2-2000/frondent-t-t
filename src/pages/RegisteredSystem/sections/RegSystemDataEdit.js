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
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
function RegSystemDataEdit() {
  var warningDIV= <div className="alert alert-success pt-4" role="alert">
                  <h5>Input all the values</h5>
                </div>
  const [id, setId] = useState(0);                
  const [ip_address, setIp] = useState("");
  const [system_name, setSystem] = useState("");
  const [line, setLine] = useState("");
  const [manufacturinglocation_id, setManufacturinglocationid] = useState("");
  const [manufactureLocationOptionsNew,setManufacturelocationoptionsnew]=useState([]);

  const[manufactlabel,setManufactlabel]=useState("");
  const[manufactvalue,setManufactvalue]=useState("");
  
  const[locationname,setLocationname]=useState("");
  const [warningmessage,setWarningmessage]=useState(warningDIV);
                      ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID}=useParams();
  let optionsNew = [];
                      ////    for receiving the parameters from URL
  const { operation } = useParams();
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
                      ////  Fetch data from local storage
                    
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
    .get("http://localhost:8000/productionline/registeredsystem/"+regsyEditID+"/",
    )
    .then((res)=>{
      setId(res.data[0].id);
      // setManufacturelocationoptionsnew(res.data[0].manufactureLocationOptionsNew)
      setIp(res.data[0].ip_address);
      setSystem(res.data[0].system_name);
      setLine(res.data[0].line);
      getManufacturinglocselecteddata(res.data[0].manufacturinglocation_id)
      setManufacturinglocationid(res.data[0].manufacturinglocation_id)

    })
  }
  useEffect(() => {
    if(operation === 'edit') {
      getRegsyEditRequestData()
                        //   setId(localStorage.getItem("id"));
                        // //   setManid(localStorage.getItem("manufacturinglocation_id"));
                        //   setIp(localStorage.getItem("ip_address"));
                        //   setSystem(localStorage.getItem("system_name"));
                        //   setLine(localS
      }
  }, []);
                    
  const getmanlocation = event => {
    setManufacturinglocationid(event.target.value); 
    setLocationname(event.target.label); 

    setManufactlabel(event.target.label);
    setManufactvalue(event.target.value);
                        // window.localStorage.setItem("customername")    
  }
                      // window.localStorage.setItem("customername")   
  function getManlocid(manufacturinglocationparams) {
    axios
    .get("http://localhost:8000/productionline/manufacturinglocation/",
    )
    .then((res) => {
                              // let batchNumberOptionsInitial = "";
      res.data.map(data => {
        optionsNew.push({ value: data.id, label: data.name });
      });
      setManufacturelocationoptionsnew(optionsNew);
    });
  }

  function getManufacturinglocselecteddata(manufacturinglocationparams) {
    axios
    .get("http://localhost:8000/productionline/manufacturinglocation/",
    )
    .then((res) => {
                              // let batchNumberOptionsInitial = "";
      res.data.map(data => {
       if(data.id == manufacturinglocationparams){
        setManufactlabel(data.name)
        setManufactvalue(data.id)
       }
      });
      setManufacturelocationoptionsnew(optionsNew);
    });
  }
                      
  useEffect(() => {
    getManlocid();
  }, []);
                    
                    //   if(operation === 'new') {
                    //     var headwidget=<h2>Create</h2>
                    //     var manufacturinglocationFieldWidget = <Select className="s" onChange={getmanlocation} options={manufactureLocationOptionsNew} /> 
                    //     var ipaddressFieldWidget = <input
                    //           type="text"
                    //           className="form-control"
                    //           onChange={(e) => setIp(e.target.value)}
                    //         /> 
                    //     // var hjwidget=<label className="form-label">Batch Number</label> 
                    //     var systemnameFieldWidget =  <input
                    //         type="text"
                    //         className="form-control"
                    //         onChange={(e) => setSystem(e.target.value)}
                    //       /> 
                    
                    //     var lineFieldWidget = <input
                    //           type="text"
                    //           className="form-control"
                    //           aria-describedby="emailHelp"
                    //           onChange={(e) => setLine(e.target.value)}
                    //         />
                    
                          
                    //   }
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
          label={<h4 ><pre><h4 style={{color:"white"}}>Update Registered System </h4></pre></h4>}
         
   
 />
 </Box>
    var manufacturinglocationFieldWidget = 
    // <Select className="s" onChange={getmanlocation} options={manufactureLocationOptionsNew} /> 

    <Box sx={{  }}>

    <FormControl >
    <InputLabel id="demo-simple-select-label">Manufacturing Location</InputLabel>
    <NativeSelect 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    input={<OutlinedInput label="Manufacturing Location" />}
    MenuProps={MenuProps}
    style={{width:'220px'}}
    value={manufactvalue}
    label={manufactlabel}
    label="Manufacturing Location"
    onChange={getmanlocation}
    ><option>Select Source Location</option> 
    {manufactureLocationOptionsNew.map((data) => (


    <option key={data.label} value={data.value}>

    {data.label}

    </option>

    ))}
    </NativeSelect>
    </FormControl>
    </Box>
    var ipaddressFieldWidget =<TextField
                                id="outline-ipaddress"
                                label="Ip Address"
                                required
                                value={ip_address}
                                onChange={(e) => setIp(e.target.value)}
                              /> 
                        // var hjwidget=<label className="form-label">Batch Number</label> 
    var systemnameFieldWidget =  <TextField required
                                    id="outline-systemname"
                                    label="System Name"
                                value={system_name}
                                  onChange={(e) => setSystem(e.target.value)}
                                /> 
                    
    var lineFieldWidget = <TextField required
                              type="text"
                             id="outline-line"
                             label="Line"
                             value={line}
                              onChange={(e) => setLine(e.target.value)}
                            />
                    
                       
  }
                    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    var regsyEditID= uniqueID;
                        //alert(address);
                    
    var locationEditID= uniqueID;
                        // alert(2)
                            //alert(address);
    var testPassed = "false";
    if(manufacturinglocation_id!=""){
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
                    //     if(operation === 'new') {
                    //       axios
                    //         .post('http://localhost:8000/productionline/registeredsystem/', 
                    //         {
                    //           "manufacturinglocation_id": manufacturinglocation_id,    
                    //           "ip_address":ip_address,
                    //           "system_name": system_name,
                    //           "line":line
                    //         },
                    //         {
                    //           auth: {
                    //             username: username,
                    //             password: password
                    //           }
                    //         }
                    //         )
                    //         .then(() => {
                    //           navigate("/regsystem/regsystemdatagrid");
                    //         });
                            
                    //     }
        if(operation === 'edit') {
          axios
          .put(`http://localhost:8000/productionline/registeredsystem/update/${regsyEditID}`, 
                              
          {
            "manufacturinglocation_id": manufacturinglocation_id,    
            "ip_address":ip_address,
            "system_name": system_name,
            "line":line
          },
          
          )
          .then(() => {
            navigate("/regsystem/regsystemdatagrid");
          });
        }
      };
    }
                    
  return (
    <>
                          
                          <br></br>
             <br></br>
             <br></br>
             <br></br>
    <div class="container-fluid">
              <div class="card shadow mb-4" id="regsyfullcard"> 
                  <div class="card-header py-3" id="regstycardhead">
                      <div className='row'>
                          <div className='col-10' id="regstyhead">
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
    
    <Box id="regsystembox"
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
          {systemnameFieldWidget}
        
          {ipaddressFieldWidget}

        

        
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>
        
          {lineFieldWidget}

         

            
          </div>

          <div id="regsymanufactbox" >
          {manufacturinglocationFieldWidget}
          
        
          
      </div>
      <br></br>

                   
 

  </div>
  
      
    </Box> 
    <hr></hr>    
                  </div>
              </div>
          </div>   
</>
);
}

export default RegSystemDataEdit
