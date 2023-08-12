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
import InputBase from '@mui/material/InputBase';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function ProductHrfEdit() {
  const [id, setId] = useState(0);
  const [hrf1,setHrf1]= useState("");
  const [hrf2,setHrf2]= useState("");
  const [hrf3,setHrf3]= useState("");
  const [hrf4,setHrf4]= useState("");
  const [hrf5,setHrf5]= useState("");
  const [hrf6,setHrf6]=useState("");
                  
                  
                    // const [produced ,setProduced ] = useState("");
  const [created_by, setCreatedby] = useState("");
  const [status, setStatus] = useState("");
                    ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID} =useParams();
                    ////    for receiving the parameters from URL
  const { operation } = useParams();
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')        
  function getHrfEditdata(){
    axios
    .get("http://127.0.0.1:8000/master/producthrf/"+uniqueID+"/",
    )
    .then((res)=>{
      setId(res.data[0].id);
      setHrf1(res.data[0].hrf1);
      setHrf2(res.data[0].hrf2)
      setHrf3(res.data[0].hrf3)
      setHrf4(res.data[0].hrf4)
      setHrf5(res.data[0].hrf5)
      setHrf6(res.data[0].hrf6)
    })
  }
                                    
  useEffect(() => {
    getHrfEditdata()
                                    
  }, []);

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
                                      // if(operation === 'new') {
                                    //     var headwidget=<h3>Create</h3>
                                        
                                    //     var hrf1Widget =           
                                    //     <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     onChange={(e) => setHrf1(e.target.value)}
                                    //   /> 
                                    //   var hrf1text =           
                                    //     <input
                                    //     type="text"
                                    //     className="form-control form-control-sm"
                                    //     onChange={(e) => setHrf1(e.target.value)}
                                    //   /> 
                                    
                                    // var hrf2Widget =  <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf2(e.target.value)}
                                    // /> 
                                    // var hrf2text =           
                                    // <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf2(e.target.value)}
                                    // />            
                                    
                                    
                                    // var hrf3Widget =           
                                    
                                    //   <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf3(e.target.value)}
                                    // /> 
                                    // var hrf3text =           
                                    //  <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf3(e.target.value)}
                                    // />  
                                    
                                    // var hrf4Widget =           
                                    
                                    //   <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf4(e.target.value)}
                                    // /> 
                                    // var hrf4text =           
                                    //  <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf4(e.target.value)}
                                    // />  
                                    
                                    // var hrf5Widget =           
                                    
                                    //   <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf5(e.target.value)}
                                    // /> 
                                    // var hrf5text =           
                                    //  <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf5(e.target.value)}
                                    // /> 
                                    
                                    // var hrf6Widget =           
                                    
                                    //   <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf6(e.target.value)}
                                    // /> 
                                    // var hrf6text =           
                                    //  <input
                                    // type="text"
                                    // className="form-control form-control-sm"
                                    // onChange={(e) => setHrf6(e.target.value)}
                                    // /> 
                                    
                                    
                                    // var hrf4Widget =           
                                    // <select class="form-select" aria-label="Default select example" onChange={(e) => setHrf4(e.target.value)}>
                                    //   <option value="admin">Select</option>
                                    // <option value="admin">AT-PZN</option>
                                    // <option value="operator">BE-ABP Code</option>
                                    // <option value="staff">BR Anvisa Registration Number</option>
                                    // <option value="staff">CA-DIN</option>
                                    // <option value="staff">CH-Swissmedic</option>
                                    // <option value="staff">CN-Subtype Code</option>
                                    // <option value="staff">DE-PPN</option>
                                    // <option value="staff">DE-PZN</option>
                                    // <option value="staff">Dosage</option>
                                    // <option value="staff">Finished good code</option>
                                    // <option value="staff">Form type</option>
                                    // <option value="staff">Generic Name</option>
                                    // </select>
                                    
                                    //     var hrf5Widget =           
                                    //       <select class="form-select" aria-label="Default select example" onChange={(e) => setHrf5(e.target.value)}>
                                    //       <option value="admin">Select</option>
                                    //       <option value="admin">AT-PZN</option>
                                    //       <option value="operator">BE-ABP Code</option>
                                    //       <option value="staff">BR Anvisa Registration Number</option>
                                    //       <option value="staff">CA-DIN</option>
                                    //       <option value="staff">CH-Swissmedic</option>
                                    //       <option value="staff">CN-Subtype Code</option>
                                    //       <option value="staff">DE-PPN</option>
                                    //       <option value="staff">DE-PZN</option>
                                    //       <option value="staff">Dosage</option>
                                    //       <option value="staff">Finished good code</option>
                                    //       <option value="staff">Form type</option>
                                    //       <option value="staff">Generic Name</option>
                                    //       </select> 
                                        // var hrf6Widget =           
                                        // <select class="form-select" aria-label="Default select example" onChange={(e) => setHrf5(e.target.value)}>
                                        // <option value="admin">Select</option>
                                        // <option value="admin">AT-PZN</option>
                                        // <option value="operator">BE-ABP Code</option>
                                        // <option value="staff">BR Anvisa Registration Number</option>
                                        // <option value="staff">CA-DIN</option>
                                        // <option value="staff">CH-Swissmedic</option>
                                        // <option value="staff">CN-Subtype Code</option>
                                        // <option value="staff">DE-PPN</option>
                                        // <option value="staff">DE-PZN</option>
                                        // <option value="staff">Dosage</option>
                                        // <option value="staff">Finished good code</option>
                                        // <option value="staff">Form type</option>
                                        // <option value="staff">Generic Name</option>
                                        // </select> 
                                    
                                    
                                          
                                      // }
                                    //   else if(operation === 'edit') {
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
                            label={<h4 ><pre><h4 style={{color:"white"}}>           Enter Product Hrf Data </h4></pre></h4>}
                                           
                                     
                        />
                  </Box>

var hrf1Widget =           
  // <select value ={hrf1} class="form-select" aria-label="Default select example" onChange={(e) => setHrf1(e.target.value)}>
  //   <option value="">Select</option>
  //   <option value="AT-PZN">AT-PZN</option>
                                    
  //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
  //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
  //   <option value="CA-DIN">CA-DIN</option>
                                    
  //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
  //   <option value="DE-PPN">DE-PPN</option>
  //   <option value="DE-PZN">DE-PZN</option>
                                    
  //   <option value="Dosage">Dosage</option>
                                    
  //   <option value="EAN_13">EAN_13</option>
                                    
  //   <option value="Form_type">Form_type</option>
  //   <option value=" Generic_Name">Generic_Name</option>
                                    
  //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
  //   <option value="GS1_company_prefix">GS1_company_prefix</option>
  //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
  //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
  //   <option value="IT_Bollino">IT_Bollino</option>
                                    
  //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
  //   <option value="License_Number">License_Number</option>
  //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
  //   <option value="NL_KLMP">NL_KLMP</option>
                                    
  //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
  //   <option value="Packet_type">Packet_type</option>
  //   <option value="Revision_Number">Revision_Number</option>
                                    
  //   <option value="PT_Aim_Number">PT_Aim_Number</option>
  // </select> 
     <Box sx={{ minWidth: 70 }}>
<FormControl >
<InputLabel id="demo-simple-select-label">HRF1</InputLabel>
<NativeSelect
InputLabelProps={{
  shrink: true,
}}
labelId="demo-simple-select-label"
id="demo-simple-select"
input={<OutlinedInput label="Customer Name" />}
MenuProps={MenuProps}
value ={hrf1}
// label="HRF1"
onChange={(e) => setHrf1(e.target.value)}
>
<option aria-label="None" value="" />
<option value="">Select HRF 1</option>
    <option value="AT-PZN">AT-PZN</option>
                                    
    <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
    <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
    <option value="CA-DIN">CA-DIN</option>
                                    
    <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
    <option value="DE-PPN">DE-PPN</option>
    <option value="DE-PZN">DE-PZN</option>
                                    
    <option value="Dosage">Dosage</option>
                                    
    <option value="EAN_13">EAN_13</option>
                                    
    <option value="Form_type">Form_type</option>
    <option value=" Generic_Name">Generic_Name</option>
                                    
    <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
    <option value="GS1_company_prefix">GS1_company_prefix</option>
    <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
    <option value="IN_Product_Code">IN_Product_Code</option>
                                    
    <option value="IT_Bollino">IT_Bollino</option>
                                    
    <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
    <option value="License_Number">License_Number</option>
    <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
    <option value="NL_KLMP">NL_KLMP</option>
                                    
    <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
    <option value="Packet_type">Packet_type</option>
    <option value="Revision_Number">Revision_Number</option>
                                    
    <option value="PT_Aim_Number">PT_Aim_Number</option>
</NativeSelect>
</FormControl>
</Box>                               
                                    
var hrf2Widget =           
  // <select value ={hrf2} class="form-select" aria-label="Default select example" onChange={(e) => setHrf2(e.target.value)}>
  //   <option value="">Select</option>
  //   <option value="AT-PZN">AT-PZN</option>                              
  //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>                             
  //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
  //   <option value="CA-DIN">CA-DIN</option>
                                    
  //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
  //   <option value="DE-PPN">DE-PPN</option>
  //   <option value="DE-PZN">DE-PZN</option>
                                    
  //   <option value="Dosage">Dosage</option>
                                    
  //   <option value="EAN_13">EAN_13</option>
                                    
  //   <option value="Form_type">Form_type</option>
  //   <option value=" Generic_Name">Generic_Name</option>
                                    
  //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
  //   <option value="GS1_company_prefix">GS1_company_prefix</option>
  //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
  //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
  //   <option value="IT_Bollino">IT_Bollino</option>
                                    
  //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
  //   <option value="License_Number">License_Number</option>
  //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
  //   <option value="NL_KLMP">NL_KLMP</option>
                                    
  //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
  //   <option value="Packet_type">Packet_type</option>
  //   <option value="Revision_Number">Revision_Number</option>
                                    
  //   <option value="PT_Aim_Number">PT_Aim_Number</option>
  // </select> 
    <Box sx={{ minWidth: 70 }}>
    <FormControl >
    <InputLabel id="demo-simple-select-label">HRF2</InputLabel>
    <NativeSelect
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    input={<OutlinedInput label="Customer Name" />}
    MenuProps={MenuProps}
    value ={hrf2}
    label="HRF2"
    onChange={(e) => setHrf2(e.target.value)}
    >
      <option aria-label="None" value="" />
    <option value="">Select HRF2</option>
        <option value="AT-PZN">AT-PZN</option>
                                        
        <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                        
        <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                        
        <option value="CA-DIN">CA-DIN</option>
                                        
        <option value="CH-Swissmedic">CH-Swissmedic</option>
                                        
        <option value="DE-PPN">DE-PPN</option>
        <option value="DE-PZN">DE-PZN</option>
                                        
        <option value="Dosage">Dosage</option>
                                        
        <option value="EAN_13">EAN_13</option>
                                        
        <option value="Form_type">Form_type</option>
        <option value=" Generic_Name">Generic_Name</option>
                                        
        <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                        
        <option value="GS1_company_prefix">GS1_company_prefix</option>
        <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                        
        <option value="IN_Product_Code">IN_Product_Code</option>
                                        
        <option value="IT_Bollino">IT_Bollino</option>
                                        
        <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                        
        <option value="License_Number">License_Number</option>
        <option value="Manufacturing_Date">Manufacturing_Date</option>
                                        
        <option value="NL_KLMP">NL_KLMP</option>
                                        
        <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                        
        <option value="Packet_type">Packet_type</option>
        <option value="Revision_Number">Revision_Number</option>
                                        
        <option value="PT_Aim_Number">PT_Aim_Number</option>
    </NativeSelect>
    </FormControl>
    </Box>                                       
                                    
var hrf3Widget =           
  // <select value ={hrf3} class="form-select" aria-label="Default select example" onChange={(e) => setHrf3(e.target.value)}>
  //   <option value="">Select</option>
  //   <option value="AT-PZN">AT-PZN</option>
                                    
  //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
  //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
  //   <option value="CA-DIN">CA-DIN</option>
                                    
  //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
  //   <option value="DE-PPN">DE-PPN</option>
  //   <option value="DE-PZN">DE-PZN</option>
                                    
  //   <option value="Dosage">Dosage</option>
                                    
  //   <option value="EAN_13">EAN_13</option>
                                    
  //   <option value="Form_type">Form_type</option>
  //   <option value=" Generic_Name">Generic_Name</option>
                                    
  //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
  //   <option value="GS1_company_prefix">GS1_company_prefix</option>
  //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
  //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
  //   <option value="IT_Bollino">IT_Bollino</option>
                                    
  //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
  //   <option value="License_Number">License_Number</option>
  //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
  //   <option value="NL_KLMP">NL_KLMP</option>
                                    
  //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
  //   <option value="Packet_type">Packet_type</option>
  //   <option value="Revision_Number">Revision_Number</option>
                                    
  //   <option value="PT_Aim_Number">PT_Aim_Number</option>
  // </select>
  <Box sx={{ minWidth: 70 }}>
  <FormControl >
  <InputLabel id="demo-simple-select-label">HRF3</InputLabel>
  <NativeSelect
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  input={<OutlinedInput label="Customer Name" />}
  MenuProps={MenuProps}
  value ={hrf3}
  label="HRF3"
  onChange={(e) => setHrf3(e.target.value)}
  >
    <option aria-label="None" value="" />
  <option value="">Select HRF 3</option>
      <option value="AT-PZN">AT-PZN</option>
                                      
      <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                      
      <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                      
      <option value="CA-DIN">CA-DIN</option>
                                      
      <option value="CH-Swissmedic">CH-Swissmedic</option>
                                      
      <option value="DE-PPN">DE-PPN</option>
      <option value="DE-PZN">DE-PZN</option>
                                      
      <option value="Dosage">Dosage</option>
                                      
      <option value="EAN_13">EAN_13</option>
                                      
      <option value="Form_type">Form_type</option>
      <option value=" Generic_Name">Generic_Name</option>
                                      
      <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                      
      <option value="GS1_company_prefix">GS1_company_prefix</option>
      <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                      
      <option value="IN_Product_Code">IN_Product_Code</option>
                                      
      <option value="IT_Bollino">IT_Bollino</option>
                                      
      <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                      
      <option value="License_Number">License_Number</option>
      <option value="Manufacturing_Date">Manufacturing_Date</option>
                                      
      <option value="NL_KLMP">NL_KLMP</option>
                                      
      <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                      
      <option value="Packet_type">Packet_type</option>
      <option value="Revision_Number">Revision_Number</option>
                                      
      <option value="PT_Aim_Number">PT_Aim_Number</option>
  </NativeSelect>
  </FormControl>
  </Box> 
                                    
                                    
var hrf4Widget =           
  // <select value ={hrf4} class="form-select" aria-label="Default select example" onChange={(e) => setHrf4(e.target.value)}>
  //   <option value="">Select</option>
  //   <option value="AT-PZN">AT-PZN</option>
                                    
  //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
  //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
  //   <option value="CA-DIN">CA-DIN</option>
                                    
  //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
  //   <option value="DE-PPN">DE-PPN</option>
  //   <option value="DE-PZN">DE-PZN</option>
                                    
  //   <option value="Dosage">Dosage</option>
                                    
  //   <option value="EAN_13">EAN_13</option>
                                    
  //   <option value="Form_type">Form_type</option>
  //   <option value=" Generic_Name">Generic_Name</option>
                                    
  //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
  //   <option value="GS1_company_prefix">GS1_company_prefix</option>
  //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
  //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
  //   <option value="IT_Bollino">IT_Bollino</option>
  //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
  //   <option value="License_Number">License_Number</option>
  //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
  //   <option value="NL_KLMP">NL_KLMP</option>
                                    
  //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
  //   <option value="Packet_type">Packet_type</option>
  //   <option value="Revision_Number">Revision_Number</option>
                                    
  //   <option value="PT_Aim_Number">PT_Aim_Number</option>
  // </select> 
  <Box sx={{ minWidth: 70 }}>
  <FormControl >
  <InputLabel id="demo-simple-select-label">HRF4</InputLabel>
  <NativeSelect
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  input={<OutlinedInput label="Customer Name" />}
  MenuProps={MenuProps}
  value ={hrf4}
  label="HRF3"
  onChange={(e) => setHrf4(e.target.value)}
  >
    <option aria-label="None" value="" />
  <option value="">Select HRF 4</option>
      <option value="AT-PZN">AT-PZN</option>
                                      
      <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                      
      <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                      
      <option value="CA-DIN">CA-DIN</option>
                                      
      <option value="CH-Swissmedic">CH-Swissmedic</option>
                                      
      <option value="DE-PPN">DE-PPN</option>
      <option value="DE-PZN">DE-PZN</option>
                                      
      <option value="Dosage">Dosage</option>
                                      
      <option value="EAN_13">EAN_13</option>
                                      
      <option value="Form_type">Form_type</option>
      <option value=" Generic_Name">Generic_Name</option>
                                      
      <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                      
      <option value="GS1_company_prefix">GS1_company_prefix</option>
      <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                      
      <option value="IN_Product_Code">IN_Product_Code</option>
                                      
      <option value="IT_Bollino">IT_Bollino</option>
                                      
      <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                      
      <option value="License_Number">License_Number</option>
      <option value="Manufacturing_Date">Manufacturing_Date</option>
                                      
      <option value="NL_KLMP">NL_KLMP</option>
                                      
      <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                      
      <option value="Packet_type">Packet_type</option>
      <option value="Revision_Number">Revision_Number</option>
                                      
      <option value="PT_Aim_Number">PT_Aim_Number</option>
  </NativeSelect>
  </FormControl>
  </Box> 
                                    
                                    
var hrf5Widget =           
  // <select value ={hrf5} class="form-select" aria-label="Default select example" onChange={(e) => setHrf5(e.target.value)}>
  //   <option value="">Select</option>
  //   <option value="AT-PZN">AT-PZN</option>
                                    
  //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
  //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
  //   <option value="CA-DIN">CA-DIN</option>
                                    
  //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
  //   <option value="DE-PPN">DE-PPN</option>
  //   <option value="DE-PZN">DE-PZN</option>
                                    
  //   <option value="Dosage">Dosage</option>
                                    
  //   <option value="EAN_13">EAN_13</option>
                                    
  //   <option value="Form_type">Form_type</option>
  //   <option value=" Generic_Name">Generic_Name</option>
                                    
  //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
  //   <option value="GS1_company_prefix">GS1_company_prefix</option>
  //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
  //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
  //   <option value="IT_Bollino">IT_Bollino</option>
                                    
  //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
  //   <option value="License_Number">License_Number</option>
  //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
  //   <option value="NL_KLMP">NL_KLMP</option>
                                    
  //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
  //   <option value="Packet_type">Packet_type</option>
  //   <option value="Revision_Number">Revision_Number</option>
                                    
  //   <option value="PT_Aim_Number">PT_Aim_Number</option>
  // </select> 
     <Box sx={{ minWidth: 70 }}>
     <FormControl >
     <InputLabel id="demo-simple-select-label">HRF5</InputLabel>
     <NativeSelect
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     input={<OutlinedInput label="Customer Name" />}
     MenuProps={MenuProps}
     value ={hrf5}
     label="HRF5"
     onChange={(e) => setHrf5(e.target.value)}
     >
      <option aria-label="None" value="" />
     <option value="">Select HRF 5</option>
         <option value="AT-PZN">AT-PZN</option>
                                         
         <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                         
         <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                         
         <option value="CA-DIN">CA-DIN</option>
                                         
         <option value="CH-Swissmedic">CH-Swissmedic</option>
                                         
         <option value="DE-PPN">DE-PPN</option>
         <option value="DE-PZN">DE-PZN</option>
                                         
         <option value="Dosage">Dosage</option>
                                         
         <option value="EAN_13">EAN_13</option>
                                         
         <option value="Form_type">Form_type</option>
         <option value=" Generic_Name">Generic_Name</option>
                                         
         <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                         
         <option value="GS1_company_prefix">GS1_company_prefix</option>
         <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                         
         <option value="IN_Product_Code">IN_Product_Code</option>
                                         
         <option value="IT_Bollino">IT_Bollino</option>
                                         
         <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                         
         <option value="License_Number">License_Number</option>
         <option value="Manufacturing_Date">Manufacturing_Date</option>
                                         
         <option value="NL_KLMP">NL_KLMP</option>
                                         
         <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                         
         <option value="Packet_type">Packet_type</option>
         <option value="Revision_Number">Revision_Number</option>
                                         
         <option value="PT_Aim_Number">PT_Aim_Number</option>
     </NativeSelect>
     </FormControl>
     </Box>                                 
                                          
  var hrf6Widget =   

    // <select class="form-select" value ={hrf6} aria-label="Default select example" onChange={(e) => setHrf6(e.target.value)}>
    //   <option value="">Select</option>
    //   <option value="AT-PZN">AT-PZN</option>
                                    
    //   <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
    //   <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
    //   <option value="CA-DIN">CA-DIN</option>
                                    
    //   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
    //   <option value="DE-PPN">DE-PPN</option>
    //   <option value="DE-PZN">DE-PZN</option>
                                    
    //   <option value="Dosage">Dosage</option>
                                    
    //   <option value="EAN_13">EAN_13</option>
                                    
    //   <option value="Form_type">Form_type</option>
    //   <option value=" Generic_Name">Generic_Name</option>
                                    
    //   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
    //   <option value="GS1_company_prefix">GS1_company_prefix</option>
    //   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
    //   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
    //   <option value="IT_Bollino">IT_Bollino</option>
                                    
    //   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
    //   <option value="License_Number">License_Number</option>
    //   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
    //   <option value="NL_KLMP">NL_KLMP</option>
                                    
    //   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
    //   <option value="Packet_type">Packet_type</option>
    //   <option value="Revision_Number">Revision_Number</option>
                                    
    //   <option value="PT_Aim_Number">PT_Aim_Number</option>
    // </select> 
      <Box sx={{ minWidth: 70 }}>
     <FormControl >
     <InputLabel id="demo-simple-select-label">HRF6</InputLabel>
     <NativeSelect
     labelId="demo-simple-select-label"
     id="demo-simple-select"
     input={<OutlinedInput label="Customer Name" />}
     MenuProps={MenuProps}
     value ={hrf6}
     label="HRF6"
     InputLabelProps={{
      shrink: true,
    }}

     onChange={(e) => setHrf6(e.target.value)}
     >
      <option aria-label="None" value="" />
     <option value="">Select HRF 6</option>
         <option value="AT-PZN">AT-PZN</option>
                                         
         <option value=" BE_ABP_CODE ">BE_ABP_CODE</option>
                                         
         <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                         
         <option value="CA-DIN">CA-DIN</option>
                                         
         <option value="CH-Swissmedic">CH-Swissmedic</option>
                                         
         <option value="DE-PPN">DE-PPN</option>
         <option value="DE-PZN">DE-PZN</option>
                                         
         <option value="Dosage">Dosage</option>
                                         
         <option value="EAN_13">EAN_13</option>
                                         
         <option value="Form_type">Form_type</option>
         <option value=" Generic_Name">Generic_Name</option>
                                         
         <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                         
         <option value="GS1_company_prefix">GS1_company_prefix</option>
         <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                         
         <option value="IN_Product_Code">IN_Product_Code</option>
                                         
         <option value="IT_Bollino">IT_Bollino</option>
                                         
         <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                         
         <option value="License_Number">License_Number</option>
         <option value="Manufacturing_Date">Manufacturing_Date</option>
                                         
         <option value="NL_KLMP">NL_KLMP</option>
                                         
         <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                         
         <option value="Packet_type">Packet_type</option>
         <option value="Revision_Number">Revision_Number</option>
                                         
         <option value="PT_Aim_Number">PT_Aim_Number</option>
     </NativeSelect>
     </FormControl>
     </Box>                                                
                                       
                                      // }
                                    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");                                    //alert(address)                                
    axios
      .put(`http://127.0.0.1:8000/master/producthrf/update/${uniqueID}`, 
                                          //alert(hrf1),
        {
          "hrf1":hrf1,
          "hrf2":hrf2,
          "hrf3":hrf3,
          "hrf4":hrf4,
          "hrf5":hrf5,
          "hrf6":hrf6,
          "loggedInUsername":loggedInUsername,

          "loggedInUserrole":loggedInUserrole
        },
      )
      .then(() => {
        navigate("/product");
      });
    }
  return (
    <>

                
    <br></br>
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
        
        <Box id="producthrfbox"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <br></br>
          <div id="producthrf">
          {hrf1Widget}
          </div>
          <div id="producthrf2">
          {hrf2Widget} 
          </div>
          <div id="producthrf3">        
          {hrf3Widget}
          </div>
          <div id="producthrfbutton">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                          
                </button>
          
    </div>
            
               
              <div  id="producthrf4" >
              {hrf4Widget}
              </div>
              <div  id="producthrf5">
              {hrf5Widget}
              </div>
              <div  id="producthrf6">
              {hrf6Widget}
              </div>
              
            
    
                
             
    
              
    
          
          
    
                    
     
    
      
      <div>
          
    </div>
          <br></br>
        </Box> 
        <hr></hr>    
                      </div>
                  </div>
              </div>  
    
        </>
);
}

export default ProductHrfEdit
