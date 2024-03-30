import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import { SidebarData } from "../../components/SidebarData";
// import Navbar from "../../components/Navbar";
import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
function ShippingProperties() {
  const [id,setId]=useState("");
  const [exempted_from_barcoding,setExempted_Barcode]=useState("");
  const [exemption_notification_and_date,setExemted_notification]=useState("");
  const [sold_to,setSoldto]=useState("");
  const [advance_ship_notice,setAdvanceShip]=useState("");
  const [shippoEditID,setShippoEditID]=useState("");
  const [batch_for_export,setBatchforExport]=useState("");
                  
                  
  const { operation } = useParams();
  const {uniqueID} =useParams();
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                  
                  
  function getShippoEditRequestData() {
                  
    axios
        .get(window.url+"/master/shippoproperty/"+uniqueID+"/",
                      
            )
              .then((res)=>{
                  
                  setId(res.data[0].id);
                      
                  setBatchforExport(res.data[0].batch_for_export);
                  setExemted_notification(res.data[0].exemption_notification_and_date);
                        
                  setAdvanceShip(res.data[0].advance_ship_notice);
                  setExempted_Barcode(res.data[0].exempted_from_barcoding);
                        
                  setSoldto(res.data[0].sold_to);
              })
            } 
                  
  const navigate = useNavigate();

        useEffect(() => {
                      
                    getShippoEditRequestData(); 
                }, []);
                  
  var headwidget=
    
            <Controls.Input 
            disabled
            // fullWidth
            
            id="outlined-Company Prefix"
            value={loggedInUsername}
            //label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                Enter Shipping Order Propertys</font> </h4></pre></h4>}
          />
        
                  
  var barcodeFieldWidget = 
                  // <input
                  //           type="text"
                  //           className="form-control form-control-sm"
                  //           onChange={(e) => setExempted_Barcode(e.target.value)}
                  //           value={exempted_from_barcoding}
                  //         /> 
                <TextField required
                      label="Exempted_Barcode"
                      id="outline-Exempted_Barcode"
                      value={exempted_from_barcoding}
                      onChange={(e) => setExempted_Barcode(e.target.value)}
                />
                  
        var notificationFieldWidget =
                  //  <input
                  //         type="date"
                  //         className="form-control form-control-sm"
                  //         onChange={(e) => setExemted_notification(e.target.value)}
                  //         value={exemption_notification_and_date}
                  //       />
                        <TextField required
                            label="Exemted Notification"
                            id="outline-Exemted_notification"
                            value={exemption_notification_and_date}
                            onChange={(e) => setExemted_notification(e.target.value)}
                        />
                  
                  var soldFieldWidget = 
                  // <input
                  //         type="text"
                  //         className="form-control form-control-sm"
                  //         onChange={(e) => setSoldto(e.target.value)}
                  //         value={sold_to}
                  //       />
                        <TextField required
                              label="Sold To"
                              id="outline-Soldto"
                              value={sold_to}
                              onChange={(e) => setSoldto(e.target.value)}
                        />
                  
                  
                  var advanceFieldWidget = 
                  // <input
                  //       type="text"
                  //       className="form-control form-control-sm"
                  //       onChange={(e) => setAdvanceShip(e.target.value)}
                  //       value={advance_ship_notice}
                  //     />

                      <TextField required
                            label="Advance Ship Notice"
                            id="outline-advance_ship_notice"
                            value={advance_ship_notice}
                            onChange={(e) => setAdvanceShip(e.target.value)}
                      />
                      var batchforFieldWidget = 
                    //   <input
                    //   type="text"
                    //   className="form-control form-control-sm"
                    //   onChange={(e) => setBatchforExport(e.target.value)}
                    //   value={batch_for_export}
                    // />         
                    <TextField required
                            label="Batch For Export"
                            id="outline-batch_for_export"
                            value={batch_for_export}
                            onChange={(e) => setBatchforExport(e.target.value)}
                    />
                  
                  
      const handleSubmit = (e) => {
                    e.preventDefault();
                    console.log("clicked");
                        //alert(address);
                        
                        // if(operation === 'new') {
                    axios
                          .put(window.url+`/master/shippoproperty/update/${uniqueID}`, 
                            // alert(batch_for_export),
                            {
                              "exempted_from_barcoding": exempted_from_barcoding,    
                              "exemption_notification_and_date":exemption_notification_and_date,
                              "sold_to":sold_to,
                              "advance_ship_notice":advance_ship_notice,
                              "batch_for_export": batch_for_export,
                              "loggedInUsername":loggedInUsername,

                              "loggedInUserrole":loggedInUserrole,

                      
                              
                            },
                            
                            )
                            .then(() => {
                              navigate("/shippingorder");
                            });
                          }
return (
  <>                                    
                        
                        <br/>        <br/>        <br/>   <br/> 
           {/* {warningmessage}         */}
        
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <div style={{backgroundColor:"#AAF0D1"}} >
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Enter Shipping Order Properties </font></h4></center></h4>            
        
      {batchforFieldWidget}
           {barcodeFieldWidget}
           {notificationFieldWidget}<br/>
           {soldFieldWidget}
       
        
           {advanceFieldWidget}

       
      
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
            
</>
                  
  )
}

export default ShippingProperties
