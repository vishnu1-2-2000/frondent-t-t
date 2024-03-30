
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Controls from "../../../components/Controls";
import {MdOutlineSave } from 'react-icons/md';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
function PoHrfEdit() {
  const [id, setId] = useState(0);
  const [hrf1,setHrf1]= useState("");
  const [hrf2,setHrf2]= useState("");
  const [hrf3,setHrf3]= useState("");
  const [hrf4,setHrf4]= useState("");
  const [hrf5,setHrf5]= useState("");
  const [hrf6,setHrf6]=useState("");

                  
  const [hrf1value,setHrfvalue1]= useState("");
  const [hrf2value,setHrfvalue2]= useState("");
  const [hrf3value,setHrfvalue3]= useState("");
  const [hrf4value,setHrfvalue4]= useState("");
  const [hrf5value,setHrfvalue5]= useState("");
  const [hrf6value,setHrfvalue6]=useState("");
                  
                  
    // const [produced ,setProduced ] = useState("");
  const [created_by, setCreatedby] = useState("");
  const [status, setStatus] = useState("");


  const[h1,setH1]=useState();
  const[h2,setH2]=useState();
  const[h3,setH3]=useState();
  const[h4,setH4]=useState();
  const[h5,setH5]=useState();
  const[h6,setH6]=useState();
  const[h1label,setH1label]=useState();

  ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID} =useParams();
  ////    for receiving the parameters from URL
  const { operation } = useParams();
 
                    
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

  let h1options=[]
  let h2options=[]
  let h3options=[]
  let h4options=[]
  let h5options=[]
  let h6options=[]


   const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;   
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 550,
      },
    },
  }; 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const customStyles = {
    control: base => ({
      ...base,
      height: 65,
      minHeight: 55,
      width:313
      
      
    })
  };
  
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
  
  
 
  function getHrfEditdata(){
                            axios
                                .get(window.url+"/master/productionorderhrf/"+uniqueID+"/",
                                       
                                    )
                                      .then((res)=>{
                                        var tablejsonvalue =   JSON.parse(res.data[0].hrf);
                                        // alert(tablejsonvalue.hrf5)
                                    setId(res.data[0].id);
                                    setHrf1(tablejsonvalue.hrf1);
                                    setHrf2(tablejsonvalue.hrf2)
                                    setHrf3(tablejsonvalue.hrf3)
                                    setHrf4(tablejsonvalue.hrf4)
                                    setHrf5(tablejsonvalue.hrf5)
                                    setHrf6(tablejsonvalue.hrf6)
  
                                    setHrfvalue1(tablejsonvalue.hrf1value);
                                    setHrfvalue2(tablejsonvalue.hrf2value)
                                    setHrfvalue3(tablejsonvalue.hrf3value)
                                    setHrfvalue4(tablejsonvalue.hrf4value)
                                    setHrfvalue5(tablejsonvalue.hrf5value)
                                    setHrfvalue6(tablejsonvalue.hrf6value)
                                        })
                                      }
                                    
                                      useEffect(() => {
                                        getHrfEditdata()
                                        // getHrfforeignData()

                                        axios
                                        .get(window.url+"/master/hrfdata/"+uniqueID+"/")
                                        .then((res)=>{
                                          var hrfjson= JSON.parse(res.data)
                                          setHrf1(hrfjson.hrf1);
                                          setHrf2(hrfjson.hrf2)
                                          setHrf3(hrfjson.hrf3)
                                          setHrf4(hrfjson.hrf4)
                                          setHrf5(hrfjson.hrf5)
                                          setHrf6(hrfjson.hrf6)
                                        })
                                    
                                      }, []);
                                    
                   
                                      

                                    //   function getHrfforeignData(){
                                    //     axios
                                    //     .get("http://localhost:8000//master/producthrf/")
                                    //     .then((res)=>{
                                    //     res.data.map(data =>{
                                    //       //alert(data.hrf1)
                                    //     h1options.push({value:data.id,label:data.hrf1})
                                    //     h2options.push({value:data.id,label:data.hrf2})
                                    //     h3options.push({value:data.id,label:data.hrf3})
                                    //     h4options.push({value:data.id,label:data.hrf4})
                                    //     h5options.push({value:data.id,label:data.hrf5})
                                    //     h6options.push({value:data.id,label:data.hrf16})
                                        
                                    // })

                                    // setH1(h1options)
                                  
                                    // setH2(h2options)
                                    // setH3(h3options)
                                    // setH4(h3options)
                                    // setH4(h4options)
                                    // setH5(h5options)
                                    // setH6(h6options)
                                    //     })
                                    // }
                                    
                                    // const gethrf = event =>{
                                    //   setH1(event.value)
                                    //   setH1label(event.label)
                                    //   setH2(event.value)
                                    //   setH3(event.value)
                                    //   setH4(event.value)
                                    //   setH5(event.value)
                                    //   setH6(event.value)  
                                    // }                  

                                  //   var headwidget=
                                  //   <Box
                                  //   component="form"
                                  //   sx={{
                                  //     width: 500,
                                  //     maxWidth: '100%',
                                      
                                      
                                  //   }}
                                  //     noValidate
                                  //     autoComplete="off"
                                  // ><Controls.Input 
                                  //   disabled
                                  //   fullWidth
                                    
                                  //   id="outlined-Company Prefix"
                                  //   label={<h4 ><pre><h4 style={{color:"white"}}>  <font face="times new roman" size="6">          Edit Productionorder  Data</font> </h4></pre></h4>}
                                  // />
                                  // </Box>
 var hrf1Widget =<input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                          
                            value={hrf1}
                          />       
    // var hrf1Widget =           
    //                   <select value ={hrf1} class="form-select" aria-label="Default select example" styles={customStyles} onChange={(e) => setHrf1(e.target.value)}>
    //                           <option value="select">Select</option>
    //                           <option value="AT-PZN">AT-PZN</option>
                                    
    //                           <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
    //                           <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
    //                                 <option value="CA-DIN">CA-DIN</option>
                                    
    //                                 <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
    //                                 <option value="DE-PPN">DE-PPN</option>
    //                                 <option value="DE-PZN">DE-PZN</option>
                                    
    //                                  <option value="Dosage">Dosage</option>
                                    
    //                                  <option value="EAN_13">EAN_13</option>
                                    
    //                                  <option value="Form_type">Form_type</option>
    //                                  <option value="Generic_Name">Generic_Name</option>
                                    
    //                                 <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
    //                                 <option value="GS1_company_prefix">GS1_company_prefix</option>
    //                                 <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
    //                                 <option value="IN_Product_Code">IN_Product_Code</option>
                                    
    //                                 <option value="IT_Bollino">IT_Bollino</option>
                                    
    //                                 <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
    //                                  <option value="License_Number">License_Number</option>
    //                                  <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
    //                                  <option value="NL_KLMP">NL_KLMP</option>
                                    
    //                                 <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
    //                                 <option value="Packet_type">Packet_type</option>
    //                                  <option value="Revision_Number">Revision_Number</option>
                                    
    //                                  <option value="PT_Aim_Number">PT_Aim_Number</option>
    //                             </select> 

    // var hrf1Widget =  
    //               <Box sx={{ minWidth: 120 }}>
    //                   <FormControl >
    //                       <InputLabel id="demo-simple-select-label">HRF1</InputLabel>
    //                           <NativeSelect
    //                             labelId="demo-simple-select-label"
    //                             id="demo-simple-select"
    //                             // input={<OutlinedInput label="HRF1" />}
    //                             input={<BootstrapInput />}
    //                             MenuProps={MenuProps}
    //                             InputLabelProps={{
    //                               shrink:true,
    //                             }}
    //                             style={{width:'232px'}}
    //                             value={hrf1}
                                     
    //                             label="HRF1"
    //                             onChange={(e) => setHrf1(e.target.value)}
    //                   >
    //                   <option value={"Select"}>Select </option>
    //                   <option value={"AT-PZN"}>AT-PZN</option>
    //                   <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
    //                   <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
    //                   <option value={"CA-DIN"}>CA-DIN</option>
    //                   <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
    //                   <option value={"DE-PPN"}>DE-PPN</option>
    //                   <option value={"Dosage"}>Dosage</option>
    //                   <option value={"EAN_13"}>EAN_13</option>
    //                   <option value={"Form_type"}>Form_type</option>
    //                   <option value={"Generic_Name"}>Generic_Name</option>
    //                   <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
    //                   <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
    //                   <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
    //                   <option value={"IN_Product_Code"}>IN_Product_Code</option>
    //                   <option value={"IT_Bollino"}>IT_Bollino</option>
    //                   <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
    //                   <option value={"License_Number"}>License_Number</option>
    //                   <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
    //                   <option value={"NL_KLMP"}>NL_KLMP</option>
    //                   <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
    //                   <option value={"Packet_type"}>Packet_type</option>
    //                   <option value={"Revision_Number"}>Revision_Number</option>
    //                   <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
    //                   </NativeSelect>
    //                 </FormControl>
    //               </Box>

                 

                      // var hrf1Widget = <Select className="s"  onChange={gethrf} options={h1} value={{label:h1label, value:h1}} />
                      
  var hrf2Widget =<input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                    
                      value={hrf2} 
                      />             
                                    
        // var hrf2Widget =           
        //                             <select value ={hrf2} class="form-select" aria-label="Default select example" onChange={(e) => setHrf2(e.target.value)}>
        //                               <option value="select">Select</option>
        //                               <option value="AT-PZN">AT-PZN</option>
                                    
        //                             <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
        //                              <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
        //                             <option value="CA-DIN">CA-DIN</option>
                                    
        //                             <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
        //                              <option value="DE-PPN">DE-PPN</option>
        //                             <option value="DE-PZN">DE-PZN</option>
                                    
        //                              <option value="Dosage">Dosage</option>
                                    
        //                              <option value="EAN_13">EAN_13</option>
                                    
        //                              <option value="Form_type">Form_type</option>
        //                              <option value=" Generic_Name">Generic_Name</option>
                                    
        //                             <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
        //                             <option value="GS1_company_prefix">GS1_company_prefix</option>
        //                             <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
        //                             <option value="IN_Product_Code">IN_Product_Code</option>
                                    
        //                             <option value="IT_Bollino">IT_Bollino</option>
                                    
        //                             <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
        //                              <option value="License_Number">License_Number</option>
        //                              <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
        //                              <option value="NL_KLMP">NL_KLMP</option>
                                    
        //                             <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
        //                             <option value="Packet_type">Packet_type</option>
        //                              <option value="Revision_Number">Revision_Number</option>
                                    
        //                              <option value="PT_Aim_Number">PT_Aim_Number</option>
        //                             </select>
                                    
              // var hrf2Widget =    
              //                 <Box sx={{ minWidth: 120 }}>
              //                   <FormControl >
              //                       <InputLabel id="demo-simple-select-label">HRF2</InputLabel>
              //                           <NativeSelect
              //                               labelId="demo-simple-select-label"
              //                               id="demo-simple-select"
              //                               input={<BootstrapInput />}
              //                               // input={<OutlinedInput label="HRF2" />}
              //                               MenuProps={MenuProps}
              //                               InputLabelProps={{
              //                                 shrink: true,
              //                               }}
              //                               style={{width:'232px'}}
              //                               value={hrf2}
                                                       
              //                               label="HRF2"
              //                               onChange={(e) => setHrf2(e.target.value)}
              //                           >
              //                           <option value={"Select"}>Select </option>
              //                           <option value={"AT-PZN"}>AT-PZN</option>
              //                           <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
              //                           <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
              //                           <option value={"CA-DIN"}>CA-DIN</option>
              //                           <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
              //                           <option value={"DE-PPN"}>DE-PPN</option>
              //                           <option value={"Dosage"}>Dosage</option>
              //                           <option value={"EAN_13"}>EAN_13</option>
              //                           <option value={"Form_type"}>Form_type</option>
              //                           <option value={"Generic_Name"}>Generic_Name</option>
              //                           <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
              //                           <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
              //                           <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
              //                           <option value={"IN_Product_Code"}>IN_Product_Code</option>
              //                           <option value={"IT_Bollino"}>IT_Bollino</option>
              //                           <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
              //                           <option value={"License_Number"}>License_Number</option>
              //                           <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
              //                           <option value={"NL_KLMP"}>NL_KLMP</option>
              //                           <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
              //                           <option value={"Packet_type"}>Packet_type</option>
              //                           <option value={"Revision_Number"}>Revision_Number</option>
              //                           <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
              //                 </NativeSelect>
              //               </FormControl>
              //             </Box>
              var hrf3Widget =<input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            
              value={hrf3} 
              />                                          
                                    
                                    
                  // var hrf3Widget =           
                  //                   <select value ={hrf3} class="form-select" aria-label="Default select example" onChange={(e) => setHrf3(e.target.value)}>
                  //                   <option value="select">Select</option>
                  //                       <option value="AT-PZN">AT-PZN</option>
                                    
                  //                   <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
                  //                    <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
                  //                   <option value="CA-DIN">CA-DIN</option>
                                    
                  //                   <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
                  //                    <option value="DE-PPN">DE-PPN</option>
                  //                   <option value="DE-PZN">DE-PZN</option>
                                    
                  //                    <option value="Dosage">Dosage</option>
                                    
                  //                    <option value="EAN_13">EAN_13</option>
                                    
                  //                    <option value="Form_type">Form_type</option>
                  //                    <option value=" Generic_Name">Generic_Name</option>
                                    
                  //                   <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
                  //                   <option value="GS1_company_prefix">GS1_company_prefix</option>
                  //                   <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
                  //                   <option value="IN_Product_Code">IN_Product_Code</option>
                                    
                  //                   <option value="IT_Bollino">IT_Bollino</option>
                                    
                  //                   <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
                  //                   <option value="License_Number">License_Number</option>
                  //                   <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
                  //                   <option value="NL_KLMP">NL_KLMP</option>
                                    
                  //                   <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
                  //                   <option value="Packet_type">Packet_type</option>
                  //                   <option value="Revision_Number">Revision_Number</option>
                                    
                  //                   <option value="PT_Aim_Number">PT_Aim_Number</option>
                  //                   </select>
                           
                           
                  // var hrf3Widget =    
                  //          <Box sx={{ minWidth: 120 }}>
                  //            <FormControl >
                  //                <InputLabel id="demo-simple-select-label">HRF3</InputLabel>
                  //                    <NativeSelect
                  //                        labelId="demo-simple-select-label"
                  //                        id="demo-simple-select"
                  //                        input={<BootstrapInput />}
                  //                       //  input={<OutlinedInput label="HRF3" />}
                  //                        MenuProps={MenuProps}
                  //                        InputLabelProps={{
                  //                         shrink: true,
                  //                       }}
                  //                        style={{width:'232px'}}
                  //                        value={hrf3}
                                                    
                  //                        label="HRF3"
                  //                        onChange={(e) => setHrf3(e.target.value)}
                  //                    >
                  //                     <option value={"Select"}>Select </option>
                  //                    <option value={"AT-PZN"}>AT-PZN</option>
                  //                    <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
                  //                    <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
                  //                    <option value={"CA-DIN"}>CA-DIN</option>
                  //                    <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
                  //                    <option value={"DE-PPN"}>DE-PPN</option>
                  //                    <option value={"Dosage"}>Dosage</option>
                  //                    <option value={"EAN_13"}>EAN_13</option>
                  //                    <option value={"Form_type"}>Form_type</option>
                  //                    <option value={"Generic_Name"}>Generic_Name</option>
                  //                    <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
                  //                    <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
                  //                    <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
                  //                    <option value={"IN_Product_Code"}>IN_Product_Code</option>
                  //                    <option value={"IT_Bollino"}>IT_Bollino</option>
                  //                    <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
                  //                    <option value={"License_Number"}>License_Number</option>
                  //                    <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
                  //                    <option value={"NL_KLMP"}>NL_KLMP</option>
                  //                    <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
                  //                    <option value={"Packet_type"}>Packet_type</option>
                  //                    <option value={"Revision_Number"}>Revision_Number</option>
                  //                    <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
                  //          </NativeSelect>
                  //        </FormControl>
                  //      </Box> 
                  
        var hrf4Widget =<input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                
                  value={hrf4} 
                  />                           
                                    
                    // var hrf4Widget =           
                    //                 <select value ={hrf4} class="form-select" aria-label="Default select example" onChange={(e) => setHrf4(e.target.value)}>
                    //                 <option value="select">Select</option>
                    //                 <option value="AT-PZN">AT-PZN</option>
                                    
                    //                 <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
                    //                  <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
                    //                 <option value="CA-DIN">CA-DIN</option>
                                    
                    //                 <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
                    //                 <option value="DE-PPN">DE-PPN</option>
                    //                 <option value="DE-PZN">DE-PZN</option>
                                    
                    //                 <option value="Dosage">Dosage</option>
                                    
                    //                 <option value="EAN_13">EAN_13</option>
                                    
                    //                 <option value="Form_type">Form_type</option>
                    //                 <option value=" Generic_Name">Generic_Name</option>
                                    
                    //                 <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
                    //                 <option value="GS1_company_prefix">GS1_company_prefix</option>
                    //                 <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
                    //                 <option value="IN_Product_Code">IN_Product_Code</option>
                                    
                    //                 <option value="IT_Bollino">IT_Bollino</option>
                                    
                    //                 <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
                    //                  <option value="License_Number">License_Number</option>
                    //                  <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
                    //                  <option value="NL_KLMP">NL_KLMP</option>
                                    
                    //                 <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
                    //                 <option value="Packet_type">Packet_type</option>
                    //                  <option value="Revision_Number">Revision_Number</option>
                                    
                    //                  <option value="PT_Aim_Number">PT_Aim_Number</option>
                    //                 </select> 
                                    
                // var hrf4Widget =    
                //                     <Box sx={{ minWidth: 120 }}>
                //                       <FormControl >
                //                           <InputLabel id="demo-simple-select-label">HRF4</InputLabel>
                //                               <NativeSelect
                //                                   labelId="demo-simple-select-label"
                //                                   id="demo-simple-select"
                //                                   input={<BootstrapInput />}
                //                                   // input={<OutlinedInput label="HRF4" />}
                //                                   MenuProps={MenuProps}
                //                                   InputLabelProps={{
                //                                     shrink: true,
                //                                   }}
                //                                   style={{width:'232px'}}
                //                                   value={hrf4}
                                                             
                //                                   label="HRF4"
                //                                   onChange={(e) => setHrf4(e.target.value)}
                //                               >
                //                               <option value={"Select"}>Select </option>
                //                               <option value={"AT-PZN"}>AT-PZN</option>
                //                               <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
                //                               <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
                //                               <option value={"CA-DIN"}>CA-DIN</option>
                //                               <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
                //                               <option value={"DE-PPN"}>DE-PPN</option>
                //                               <option value={"Dosage"}>Dosage</option>
                //                               <option value={"EAN_13"}>EAN_13</option>
                //                               <option value={"Form_type"}>Form_type</option>
                //                               <option value={"Generic_Name"}>Generic_Name</option>
                //                               <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
                //                               <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
                //                               <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
                //                               <option value={"IN_Product_Code"}>IN_Product_Code</option>
                //                               <option value={"IT_Bollino"}>IT_Bollino</option>
                //                               <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
                //                               <option value={"License_Number"}>License_Number</option>
                //                               <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
                //                               <option value={"NL_KLMP"}>NL_KLMP</option>
                //                               <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
                //                               <option value={"Packet_type"}>Packet_type</option>
                //                               <option value={"Revision_Number"}>Revision_Number</option>
                //                               <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
                //                     </NativeSelect>
                //                   </FormControl>
                //                 </Box>      
    var hrf5Widget =<input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              
                value={hrf5} 
                />                                         

              // var hrf5Widget =           
              //                   <select value ={hrf5} class="form-select" aria-label="Default select example" onChange={(e) => setHrf5(e.target.value)}>
              //                       <option value="select">Select</option>
              //                       <option value="AT-PZN">AT-PZN</option>
                                    
              //                       <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
              //                        <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
              //                       <option value="CA-DIN">CA-DIN</option>
                                    
              //                       <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
              //                        <option value="DE-PPN">DE-PPN</option>
              //                       <option value="DE-PZN">DE-PZN</option>
                                    
              //                        <option value="Dosage">Dosage</option>
                                    
              //                        <option value="EAN_13">EAN_13</option>
                                    
              //                        <option value="Form_type">Form_type</option>
              //                        <option value=" Generic_Name">Generic_Name</option>
                                    
              //                       <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
              //                       <option value="GS1_company_prefix">GS1_company_prefix</option>
              //                       <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
              //                       <option value="IN_Product_Code">IN_Product_Code</option>
                                    
              //                       <option value="IT_Bollino">IT_Bollino</option>
                                    
              //                       <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
              //                        <option value="License_Number">License_Number</option>
              //                        <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
              //                        <option value="NL_KLMP">NL_KLMP</option>
                                    
              //                       <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
              //                       <option value="Packet_type">Packet_type</option>
              //                        <option value="Revision_Number">Revision_Number</option>
                                    
              //                        <option value="PT_Aim_Number">PT_Aim_Number</option>
              //                           </select> 
                            
        
    var hrf6Widget =<input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                    
                      value={hrf6} 
                      />             
            // var hrf5Widget =    
            //                 <Box sx={{ minWidth: 120 }}>
            //                   <FormControl >
            //                       <InputLabel id="demo-simple-select-label">HRF5</InputLabel>
            //                           <NativeSelect
            //                               labelId="demo-simple-select-label"
            //                               id="demo-simple-select"
            //                               input={<BootstrapInput />}
            //                               // input={<OutlinedInput label="HRF5" />}
            //                               MenuProps={MenuProps}
            //                               InputLabelProps={{
            //                                 shrink: true,
            //                               }}
            //                               style={{width:'232px'}}
            //                               value={hrf5}
                                                     
            //                               label="HRF5"
            //                               onChange={(e) => setHrf5(e.target.value)}
            //                           >
            //                            <option value={"Select"}>Select </option>
            //                           <option value={"AT-PZN"}>AT-PZN</option>
            //                           <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
            //                           <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
            //                           <option value={"CA-DIN"}>CA-DIN</option>
            //                           <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
            //                           <option value={"DE-PPN"}>DE-PPN</option>
            //                           <option value={"Dosage"}>Dosage</option>
            //                           <option value={"EAN_13"}>EAN_13</option>
            //                           <option value={"Form_type"}>Form_type</option>
            //                           <option value={"Generic_Name"}>Generic_Name</option>
            //                           <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
            //                           <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
            //                           <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
            //                           <option value={"IN_Product_Code"}>IN_Product_Code</option>
            //                           <option value={"IT_Bollino"}>IT_Bollino</option>
            //                           <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
            //                           <option value={"License_Number"}>License_Number</option>
            //                           <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
            //                           <option value={"NL_KLMP"}>NL_KLMP</option>
            //                           <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
            //                           <option value={"Packet_type"}>Packet_type</option>
            //                           <option value={"Revision_Number"}>Revision_Number</option>
            //                           <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
            //                 </NativeSelect>
            //               </FormControl>
            //             </Box>      
                                          
                                          
              // var hrf6Widget =           
              //                     <select class="form-select" value ={hrf6} aria-label="Default select example" onChange={(e) => setHrf6(e.target.value)}>
              //                       <option value="select">Select</option>
              //                       <option value="AT-PZN">AT-PZN</option>
                                    
              //                       <option value="BE_ABP_CODE ">BE_ABP_CODE</option>
                                    
              //                        <option value="BR_An_visa_Registration_Number">BR_An_visa_Registration_Number</option>
                                    
              //                       <option value="CA-DIN">CA-DIN</option>
                                    
              //                       <option value="CH-Swissmedic">CH-Swissmedic</option>
                                    
              //                        <option value="DE-PPN">DE-PPN</option>
              //                       <option value="DE-PZN">DE-PZN</option>
                                    
              //                        <option value="Dosage">Dosage</option>
                                    
              //                        <option value="EAN_13">EAN_13</option>
                                    
              //                        <option value="Form_type">Form_type</option>
              //                        <option value=" Generic_Name">Generic_Name</option>
                                    
              //                       <option value="GR_EOF_CODE">GR_EOF_CODE</option>
                                    
              //                       <option value="GS1_company_prefix">GS1_company_prefix</option>
              //                       <option value="HR_Croatia_National_Code">HR_Croatia_National_Code</option>
                                    
              //                       <option value="IN_Product_Code">IN_Product_Code</option>
                                    
              //                       <option value="IT_Bollino">IT_Bollino</option>
                                    
              //                       <option value="KR_KFDA_Code">KR_KFDA_Code</option>
                                    
              //                        <option value="License_Number">License_Number</option>
              //                        <option value="Manufacturing_Date">Manufacturing_Date</option>
                                    
              //                        <option value="NL_KLMP">NL_KLMP</option>
                                    
              //                       <option value="NRD_Nordic_VNR_Drug_Code">NRD_Nordic_VNR_Drug_Code</option>
                                    
              //                       <option value="Packet_type">Packet_type</option>
              //                        <option value="Revision_Number">Revision_Number</option>
                                    
              //                        <option value="PT_Aim_Number">PT_Aim_Number</option>
              //                       </select> 
      // var hrf6Widget =    
      //             <Box sx={{ minWidth: 120 }}>
      //                   <FormControl >
      //                       <InputLabel id="demo-simple-select-labelhrf6">HRF6</InputLabel>
      //                         <NativeSelect
      //                           labelId="demo-simple-select-labelhrf6"
      //                           id="demo-simple-selecthrf6"
      //                           input={<BootstrapInput />}
      //                           // input={<OutlinedInput label="HRF6" />}
      //                           MenuProps={MenuProps}
      //                           InputLabelProps={{
      //                             shrink: true,
      //                           }}
      //                        style={{width:'232px'}}
      //                        value={hrf6}
                                        
      //                        label="HRF6"
      //                        onChange={(e) => setHrf6(e.target.value)}
      //                    >
      //                   <option value={"Select"}>Select </option>
      //                    <option value={"AT-PZN"}>AT-PZN</option>
      //                    <option value={"BE_ABP_CODE"}>BE_ABP_CODE</option>
      //                    <option value={"BR_An_visa_Registration_Number"}>BR_An_visa_Registration_Number</option>
      //                    <option value={"CA-DIN"}>CA-DIN</option>
      //                    <option value={"CH-Swissmedic"}>CH-Swissmedic</option>
      //                    <option value={"DE-PPN"}>DE-PPN</option>
      //                    <option value={"Dosage"}>Dosage</option>
      //                    <option value={"EAN_13"}>EAN_13</option>
      //                    <option value={"Form_type"}>Form_type</option>
      //                    <option value={"Generic_Name"}>Generic_Name</option>
      //                    <option value={"GR_EOF_CODE"}>GR_EOF_CODE</option>
      //                    <option value={"GS1_company_prefix"}>GS1_company_prefix</option>
      //                    <option value={"HR_Croatia_National_Code"}>HR_Croatia_National_Code</option>
      //                    <option value={"IN_Product_Code"}>IN_Product_Code</option>
      //                    <option value={"IT_Bollino"}>IT_Bollino</option>
      //                    <option value={"KR_KFDA_Code"}>KR_KFDA_Code</option>
      //                    <option value={"License_Number"}>License_Number</option>
      //                    <option value={"Manufacturing_Date"}>Manufacturing_Date</option>
      //                    <option value={"NL_KLMP"}>NL_KLMP</option>
      //                    <option value={"NRD_Nordic_VNR_Drug_Code"}>NRD_Nordic_VNR_Drug_Code</option>
      //                    <option value={"Packet_type"}>Packet_type</option>
      //                    <option value={"Revision_Number"}>Revision_Number</option>
      //                    <option value={"PT_Aim_Number"}>PT_Aim_Number</option>
      //          </NativeSelect>
      //        </FormControl>
      //      </Box>                             
                                       
            var hrf1valuewidget=  <input
                                        type="text"
                                        className="form-control"
                                        value={hrf1value}
                                        onChange={(e) => setHrfvalue1(e.target.value)}
                                         
                                  />   
            var hrf2valuewidget=   <input
                                       type="text"
                                       className="form-control"
                                       value={hrf2value}
                                       onChange={(e) => setHrfvalue2(e.target.value)}
                                       
                                    />   
                                     
            var hrf3valuewidget=  <input
                                     type="text"
                                     className="form-control"
                                     value={hrf3value}
                                     onChange={(e) => setHrfvalue3(e.target.value)}
                                     
                                   />   

            var hrf4valuewidget=  <input
                                   type="text"
                                   className="form-control"
                                   value={hrf4value}
                                   onChange={(e) => setHrfvalue4(e.target.value)}
                                   
                                 />  

            var hrf5valuewidget=  <input
                                    type="text"
                                    className="form-control"
                                    value={hrf5value}
                                    onChange={(e) => setHrfvalue5(e.target.value)}
                                 
                                  />   
            var hrf6valuewidget=  <input
                                    type="text"
                                    className="form-control"
                                    value= {hrf6value}
                                    onChange={(e) => setHrfvalue6(e.target.value)}
                                 
                                  />   


                                    
    const handleSubmit = (e) => {
                              e.preventDefault();
                              console.log("clicked");
                                        //alert(address);
                                      
                                        // alert(loggedInUsername)    
                                    
                                    
                            axios
                            
                                .put(window.url+`/master/productionorderhrf/update/${uniqueID}`,
                                        
                                  
                                  {
                                            
                                    "hrf":JSON.stringify({
                                      hrf1:hrf1,
                                      hrf2:hrf2,
                                      hrf3:hrf3,
                                      hrf4:hrf4,
                                      hrf5:hrf5,
                                      hrf6:hrf6,

                                      hrf1value:hrf1value,
                                      hrf2value:hrf2value,
                                      hrf3value:hrf3value,
                                      hrf4value:hrf4value,
                                      hrf5value:hrf5value,
                                      hrf6value:hrf6value,
                                      
                                  }),                                           
                                      
                                    "loggedInUsername":loggedInUsername,

                                    "loggedInUserrole":loggedInUserrole,
                                    "uniqueid":uniqueID,
                                }
                                   
                            )
                                         
                                         
                            .then(() => {
                                  navigate("/productionorder");
                              });
                  } 
    return (
      <>
      <br></br>
      <br></br>
        <div className="d-flex justify-content-between m-2">
            {/* <h2>Create</h2> */}
            {/* {headwidget} */}
      <Link to="/product">
            <button className="btn btn-primary">Show Data</button>
      </Link>
          </div>
                              {/* <form>
                                <div className="mb-3">
                                  <label className="form-label">HRF1</label>
                                  {hrf1Widget}
                                
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">HRF2</label>
                                  {hrf2Widget}
                                
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">HRF3</label>
                                  {hrf3Widget}
                                
                                </div>
                                  <div className="mb-3">
                                  <label className="form-label">HRF4</label>
                                  {hrf4Widget}
                                 
                                </div>
                                
                               
                                <div className="mb-3">
                                  <label className="form-label">HRF5</label>
                                  {hrf5Widget}
                                
                                </div>
                                <div className="mb-3">
                                  <label className="form-label">HRF6</label>
                                  {hrf6Widget}
                                
                                </div>
                        
                              
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </button>
                              </form> */}
        <div><h5>Select HRF And Input Corresponding Values</h5></div>
        
        <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
        <tbody>
        <tr>
        <td class="productionOrderReportSearchTD" >   HRF1 </td>
        <td class="hrf1po" id="hrf1po">
            {hrf1Widget}
        </td>
          <td class="productionOrderReportSearchTD">
            {hrf1valuewidget}
        </td>
        </tr>
                              
                              
        <tr>
        <td class="productionOrderReportSearchTD"> HRF2</td>
        <td class="productionOrderReportSearchTD">
        {hrf2Widget}         
        </td>

        <td class="productionOrderReportSearchTD">
        {hrf2valuewidget}         
        </td>
        </tr>
        <tr>
        <td class="productionOrderReportSearchTD">HRF3</td>
        <td class="productionOrderReportSearchTD">
        {hrf3Widget}
        </td>

        <td class="productionOrderReportSearchTD">
        {hrf3valuewidget}
        </td>
        </tr>
                
                              
        <tr>
        <td class="productionOrderReportSearchTD"> HRF4</td>
        <td class="productionOrderReportSearchTD">
        {hrf4Widget}
        </td>

        <td class="productionOrderReportSearchTD">
        {hrf4valuewidget}
        </td>
        </tr>
                              
        <tr>
        <td class="productionOrderReportSearchTD">HRF5</td>
        <td class="productionOrderReportSearchTD">
        {hrf5Widget}
        </td>

        <td class="productionOrderReportSearchTD">
        {hrf5valuewidget}
        </td>
        </tr>
        <tr>
        <td class="productionOrderReportSearchTD">HRF6</td>
        <td class="productionOrderReportSearchTD">
        {hrf6Widget}
        </td>

        <td class="productionOrderReportSearchTD">
        {hrf6valuewidget}
        </td>
        </tr>
                              
        <tr>
        <td class="productionOrderReportSearchTD">
        <button className="btn btn-primary" onClick={handleSubmit} >Save</button>
        </td>
        </tr>
        </tbody>
        </table>
        </>
    );
}

export default PoHrfEdit





