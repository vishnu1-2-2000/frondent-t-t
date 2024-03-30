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
import Tooltip from '@mui/material/Tooltip';
function ProductErpEdit() {
  const [id, setId] = useState(0);
  const [finished_good_code, setFinished_good_code] = useState("");
  const [Serial_Num_Provider_name, setSerial_Num_Provider_name] = useState("");
  const [item_reference ,setItem_reference] = useState("");
  const [location_code,setLocation_code] = useState("");
  const [regulation, setRegulation] = useState("");
  const [sscc_prn,setSscc_prn] =useState("");                            
                    ///   For navigate function
  const navigate = useNavigate();
                                      
                    ////    for receiving the parameters from URL
  const { operation } = useParams();
  const {uniqueID} =useParams();
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                    ////  Fetch data from local storage
                                      
  function getCompanyEditRequestData() {
    axios
    .get(window.url+"/master/producterp/"+uniqueID+"/",)
    .then((res)=>{                              
      setId(res.data[0].id);                                 
      setFinished_good_code(res.data[0].finished_good_code);
      setItem_reference(res.data[0].item_reference); 
      setRegulation(res.data[0].regulation);
      setLocation_code(res.data[0].location_code); 
      setSerial_Num_Provider_name(res.data[0].Serial_Num_Provider_name);
      setSscc_prn(res.data[0].sscc_prn);
    })
  } 
  useEffect(() => {                                     
    getCompanyEditRequestData(); 
  }, []);
                    // if(operation === 'new') {
    var headwidget=
                 <Controls.Input 
                      disabled
              
                      
                            id="outlined-Company Prefix"
                            // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">               Enter Product Erp Data</font> </h4></pre></h4>}
                           value={loggedInUsername}
                     
                  />
              
                    // var erpwidget =<select  class="form-select" aria-label="Default select example" onChange={(e) => setErp(e.target.value)} value={erp}>
                    //  <option value="">Select</option>
                    // <option value="sap rpc">SAP Rpc</option>
                    // </select>
                                      
  var finishgoodcodeFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control form-control-sm"
  //   onChange={(e) => setFinished_good_code(e.target.value)}
  //   value={finished_good_code}
  // /> 
                        <TextField required
                            label="Finished Good Code"
                            id="outline-gtin"
                            value={finished_good_code}
                            onChange={(e) => setFinished_good_code(e.target.value)}
                        /> 
                    
  var serialnumFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control form-control-sm"
  //   onChange={(e) => setSerial_Num_Provider_name(e.target.value)}
  //   value={Serial_Num_Provider_name}
  // /> 
                  <TextField required
                    label="Serial Num Provider Name"
                    id="outline-gtin"
                    value={Serial_Num_Provider_name}
                    onChange={(e) => setSerial_Num_Provider_name(e.target.value)}
                  /> 
                                          
  var locationcodeFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control form-control-sm"
  //   onChange={(e) => setLocation_code(e.target.value)}
  //   value={location_code}
  // /> 
                    <TextField required
                      label="Location Code"
                      id="outline-gtin"
                      value={location_code}
                      onChange={(e) => setLocation_code(e.target.value)}
                    /> 
                    
  var regulationFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control form-control-sm"
  //   onChange={(e) => setRegulation(e.target.value)}
  //   value={regulation}
  // /> 
                    <TextField required
                      label="Regulation"
                      id="outline-gtin"
                      value={regulation}
                      onChange={(e) => setRegulation(e.target.value)}
                    />
                                      
  var sscFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control form-control-sm"
  //   onChange={(e) => setSscc_prn(e.target.value)}
  //   value={sscc_prn}
  // /> 
                      <TextField required
                        label="Sscc Prn"
                        id="outline-gtin"
                        value={sscc_prn}
                        onChange={(e) => setSscc_prn(e.target.value)}
                      />
                                      
  var itemrefFieldWidget = 
  // <input
  //   type="text"
  //   className="form-control"
  //   aria-describedby="emailHelp"
  //   onChange={(e) => setItem_reference(e.target.value)}
  //   value={item_reference}
  // />
                        <TextField required
                        label="Item Reference"
                        id="outline-gtin"
                        value={item_reference}
                        onChange={(e) => setItem_reference(e.target.value)}
                        />
                                         
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
                                          // alert(finished_good_code);
                                          // companyEditID=uniqueID;
                                        // alert(sap_service);
                                          // if(operation === 'new') {
    axios
    .put(window.url+`/master/producterp/update/${uniqueID}`, 
                                            
      {
          "finished_good_code":finished_good_code,    
          "location_code":location_code,
          "item_reference": item_reference,
          "Serial_Num_Provider_name":Serial_Num_Provider_name,
                                            
                                                    
          "sscc_prn":sscc_prn,
          "regulation":regulation,
          "loggedInUsername":loggedInUsername,

          "loggedInUserrole":loggedInUserrole,
          "uniqueid":uniqueID
                                                  
                                                  
                                                  
        },)
      .then(() => {
        navigate("/product");
      });
  }
                                       
                                      
  return (
    <>

                
<br/><br/><br/>


  

<Box
component="form"
sx={{
  '& .MuiTextField-root': { m: 4, width: '25' },
}}
noValidate
autoComplete="off"
>
 
<div style={{backgroundColor:"#AAF0D1"}} >
<h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Enter Product Erp Data</font></h4></center></h4>            
{finishgoodcodeFieldWidget}
          {serialnumFieldWidget}
          {locationcodeFieldWidget}
{headwidget}


 

<br/>
{itemrefFieldWidget}
              {sscFieldWidget}
              {regulationFieldWidget} 
<br/>




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
 

</div>
  
 
</div>

</Box> 
        </>
  );
}

export default ProductErpEdit
