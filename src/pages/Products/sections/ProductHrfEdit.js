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
import Tooltip from '@mui/material/Tooltip';

function ProductHrfEdit() {
  
  const [id, setId] = useState(0);
  const [hrf1,setHrf1]= useState("");
  const [hrf2,setHrf2]= useState("");
  const [hrf3,setHrf3]= useState("");
  const [hrf4,setHrf4]= useState("");
  const [hrf5,setHrf5]= useState("");
  const [hrf6,setHrf6]=useState("");

  const[hrfclear,setHrfclear]=useState(true);

  const[hrf1state,setHrf1State]=useState(false);
  const[hrf2state,setHrf2State]=useState(true);
  const[hrf3state,setHrf3State]=useState(true);
  const[hrf4state,setHrf4State]=useState(true);
  const[hrf5state,setHrf5State]=useState(true);
  const[hrf6state,setHrf6State]=useState(true);
  
   var warningDiv= <div  role="alert">
   {/* <h5>Input all the values</h5>  */}
       </div>               
  const [warningmessage,setWarningmessage]=useState(warningDiv);                
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
        .get(window.url+"/master/producthrf/"+uniqueID+"/",
        )
    .then((res)=>{
      setId(res.data[0].id);
      setHrf1(res.data[0].hrf1);
      setHrf2(res.data[0].hrf2)
      setHrf3(res.data[0].hrf3)
      setHrf4(res.data[0].hrf4)
      setHrf5(res.data[0].hrf5)
      setHrf6(res.data[0].hrf6)
     if(res.data[0].hrf1!=""){
      setHrf2State(false)
     }
     else{
      setHrf2State(true)
     }

     if(res.data[0].hrf2!=""){
      setHrf3State(false)
     }
     else{
      setHrf3State(true)
     }

     
     if(res.data[0].hrf3!=""){
      setHrf4State(false)
     }
     else{
      setHrf4State(true)
     }

     if(res.data[0].hrf4!=""){
      setHrf5State(false)
     }
     else{
      setHrf5State(true)
     }

     if(res.data[0].hrf5!=""){
      setHrf6State(false)
     }
     else{
      setHrf6State(true)
     }
     
    })
  }
                                    
  useEffect(() => {
    getHrfEditdata()
   
                                    
  }, []);

  const vms=(event)=>{
    if(event.target.checked==true)
    {
      setHrfclear(false)
    }
    else{
      setHrfclear(true)
    }
  }

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
                            label={<h4 ><pre><h4 style={{color:"white"}}> <font face="times new roman" size="6">         Enter Product Hrf Data </font> </h4></pre></h4>}
                                           
                                     
                        />
                  </Box>

     
 
                        
                                    
         
   
                                       
                                   
     
  
  
                                    
  
                             
         
  
                         
                                    
          
  
                            
 

    
   

  var statuswidget= <input type="checkbox" name="hrfclear" onChange={vms}/>                                  

  const clearall=(e)=>{
          e.preventDefault();
          console.log("clicked");
        axios
        .put(window.url+`/master/producthrf/update/${uniqueID}`, 
                                          //alert(hrf1),
        {
          "hrf1":"",
          "hrf2":"",
          "hrf3":"",
          "hrf4":"",
          "hrf5":"",
          "hrf6":"",
          "loggedInUsername":loggedInUsername,

          "loggedInUserrole":loggedInUserrole,
          "uniqueid":uniqueID,
        },
      )
      .then((res) => {
       
        // navigate("/product");
      });

      }                                
                                    
  const handleSubmit = (e) => {
    var testpassed=false
    if(hrf1!="")
    {
      testpassed=true
    }
    else{
      warningDiv =<div className="alert alert-danger pt-4" role="alert">
      <h5>Input Hrf1</h5>
      </div>
      setWarningmessage(warningDiv)
      testpassed=false;
    }

  
    //  if(testpassed=="true")
    //   {
        alert(testpassed)
        alert(hrf1)
        axios
        .put(window.url+`/master/producthrf/update/${uniqueID}`, 
                                           
        {
          "hrf1":hrf1,
          "hrf2":hrf2,
          "hrf3":hrf3,
          "hrf4":hrf4,
          "hrf5":hrf5,
          "hrf6":hrf6,
          "loggedInUsername":loggedInUsername,
  
          "loggedInUserrole":loggedInUserrole,
          "uniqueid":uniqueID,
        },
      )
      .then((res) => {
       
      
        
      });
   
    
      
      // }
      // else{
      //   warningDiv =<div className="alert alert-danger pt-4" role="alert">
      //   <h5>Input Hrf1</h5>
      //   </div>
      //   setWarningmessage(warningDiv)
      //   testpassed=false;
      // }
    
    
  
  
  }
  return (
    <>

                
    <br></br>
    <br></br>
    <center>
      <h2><font face="times new roman" size="6">Add Product Hrf</font></h2>
  <div>
    

<select value ={hrf1} class="form-select" aria-label="Default select example" onChange={(e) => setHrf1(e.target.value)} disabled={hrf1state} >
<option value="" style={{ display: "none" }}>Select Hrf1</option>
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
</select>

<select value ={hrf2} class="form-select" aria-label="Default select example" onChange={(e) => setHrf2(e.target.value)} disabled={hrf2state}>
<option value="" style={{ display: "none" }}>Select Hrf2</option>
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
</select>
</div>

<div >        
<select value ={hrf3} class="form-select" aria-label="Default select example" onChange={(e) => setHrf3(e.target.value)} disabled={hrf3state}>
<option value="" style={{ display: "none" }}>Select Hrf3</option>
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
</select>
</div>
<div >
 

</div>

  

<div>

  <select value ={hrf4} class="form-select" aria-label="Default select example" onChange={(e) => setHrf4(e.target.value)} disabled={hrf4state}>
<option value="" style={{ display: "none" }}>Select Hrf4</option>
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
</select> 
    </div>
    <div >
    <select value ={hrf5} class="form-select"  aria-label="Default select example" onChange={(e) => setHrf5(e.target.value)} disabled={hrf5state}>

<option value="" style={{ display: "none" }}>Select Hrf5</option>
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
</select> 
    </div>
    <div  >
    <select class="form-select" value ={hrf6} aria-label="Default select example" onChange={(e) => setHrf6(e.target.value)} disabled={hrf6state}>
<option value=""  style={{ display: "none" }}>Select Hrf6</option>
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
</select> 
</div>
<br/>
<div >


     &nbsp;&nbsp;&nbsp; <button className="btn btn-primary"  onClick={handleSubmit}>Save
                                                
      </button>
    

</div>

         
         
        {/* </Box>  */}
        <hr></hr>  
        <br></br>
          {statuswidget}&nbsp;&nbsp;&nbsp;Do You Want to Clear All Hrf&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" onClick={clearall} disabled={hrfclear}> Clear All Hrf </button>  
                    
          </center>       
    
        </>
);
}

export default ProductHrfEdit
