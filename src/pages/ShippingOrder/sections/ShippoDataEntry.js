import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import moment from "moment";
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
function ShippoDataEntry() {
  
    var warningDIV= <div className="alert alert-success pt-4" role="alert">
        <h5>Input all the values</h5>
      </div>
    let statusOptions = [ {value:"Shipping", label:"Shipping"},]
                  
          const [id, setId] = useState(0);
          const [shipping_order_name, setName] = useState("");
                  
                  
                    // const [subject_name, setSubjectName] = useState("");
          const [shipping_date, setShipingDate] = useState("");
          const [created_by, setCreatedby] = useState("");
          const [batch_for_export, setExport] = useState("");
          const [status,setStatus] =useState("");
                  
                  
          const [destination_location,setDestinationLoc] = useState("");
          const [deslocation,setDesLocation] =useState([]);

          const [destinationlocationlabel,setDestinationlabel]=useState("");
          const [destinationlocationvalue,setDestinationvalue]=useState("");
          const[time,setTime]=useState("");    
                  
                    // const [Sorlocation,SetSorlocation] =useState("");
                    // const [source_location, setSourceLoc] = useState("");
                  
                    
                  
                    // const [subname,setSubName] =useState("")
                    
          const[sourcelocoptions,setSourcelocoptions]=useState([])
          const[source_location,setSourcelocation]=useState("")
                  
                    
          const[subjectoptions,setSubjectoptions]=useState([])
          const[subject_name,setSubjectname]=useState("")
                  
          const [statusOptionsSelected, setStatusOptionsSelected] = useState("");
          const [statusOptionsState, setStatusOptionsState] = useState(statusOptions);
                  
                    //EDIT BOX VALUE DISPLAY
          const [sourcelocationlabel,setSourcelocationlabel]=useState("");
          const [sourcelocationvalue,setSourcelocationvalue]=useState("");
                  
                    
                  
          const [warningmessage,setWarningmessage]=useState(warningDIV);
          const { operation } = useParams();
          const {processnumber}=useParams();
          const{uniqueID}=useParams();

    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                    // let optionsNewName=[]
            let optionsNewDes=[]
                    // let optionsNewSou=[]
            let optionsNew=[]
            let optionsSubject=[]
      const navigate = useNavigate();

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
          function getShippoEditRequestData() {
                      var shippoEditID = uniqueID;
                  
                        
                        //alert(productionOrderEditID);
                      axios
                        .get("http://127.0.0.1:8000/master/shippo/"+shippoEditID+"/",
                          
                        )
                        .then((res) => {
                          
                          
                          setName(res.data[0].shipping_order_name);
                         getSourcelocationasoptions(res.data[0].source_location);
                          setShipingDate(moment(res.data[0].shipping_date).utc().format('YYYY-MM-DD'));
                          // setDesLocation(res.data[0].destination_location);
                  
                  
                          //setExpir(res.data[0].expiration_date);
                          // setSubjectName(moment(res.data[0].expiration_date).utc().format('YYYY-MM-DD'));
                          setSubjectname(res.data[0].subject_name);
                          setCreatedby(res.data[0].created_by);
                          setExport(res.data[0].batch_for_export);
                          setStatusOptionsSelected(res.data[0].status);
                          setTime(res.data[0].shipping_time);
                          // setManufacture(res.data[0].manufacturing_location);
                          // setProd(res.data[0].product_conn);
                          // setProduction(res.data[0].Production_line_id);
                          // setSerialno(res.data[0].serialnoprovider);
                          
                      
                        });
                      } 
                  
                      // function getSourcelocations(sourcelocationparams) {
                      //   axios
                      //     .get("http://localhost:8000/master/locations/",
                      //     {
                      //       auth: {
                      //         username: username,
                      //         password: password
                      //       }
                      //     },
                      //     {
                      //       'param': 'anu' 
                      //     })
                      //     .then((res) => {
                      //       // let batchNumberOptionsInitial = "";
                      //       // alert("anu")
                      //       res.data.map(data => {
                      //         if(data.id== sourcelocationparams){
                      //           setSourcelocationlabel(data.name);
                      //           setSourcelocationvalue(data.id);
                      //         }
                  
                      //       optionsNewSou.push({ value: data.id, label: data.name });
                      //     });
                            
                      //     SetSorlocation(optionsNewSou);
                      //     //  alert(optionsNewSou)
                      //   });
                      // }
      function getSourcelocation() {
                        axios
                          .get("http://localhost:8000/master/locations/",
                          
                          )
                          .then((res) => {
                            // let batchNumberOptionsInitial = "";
                            // alert("anu")
                            res.data.map(data => {
                            optionsNew.push({ value: data.id, label: data.name });
                          });
                            
                          setSourcelocoptions(optionsNew);
                          // setDestinationLoc(optionsNewDes);
                          //  alert(optionsNew)
                        });
                      }
                    
                  
            function getDestlocations() {
                        axios
                          .get("http://localhost:8000/master/locations/",
                          
                          )
                          .then((res) => {
                            // let batchNumberOptionsInitial = "";
                            // alert("anu")
                            res.data.map(data => {
                            optionsNewDes.push({ value: data.id, label: data.name });
                          });
                            
                          setDesLocation(optionsNewDes);
                          //  alert(optionsNew)
                        });
                      }
                  
                      // function getSubjectnamelocations() {
                      //   axios
                      //     .get("http://localhost:8000/master/customer/",
                      //     {
                      //       auth: {
                      //         username: username,
                      //         password: password
                      //       }
                      //     },
                      //     {
                      //       'param': 'anu' 
                      //     })
                      //     .then((res) => {
                      //       // let batchNumberOptionsInitial = "";
                      //       // alert("anu")
                      //       res.data.map(data => {
                      //         optionsNewName.push({ value: data.id, label: data.name });
                      //     });
                            
                      //     setSubName( optionsNewName);
                      //     //  alert(optionsNew)
                      //   });
                      // }
            function getSubject() {
                        axios
                          .get("http://localhost:8000/master/customer/",
                          
                          )
                          .then((res) => {
                            // let batchNumberOptionsInitial = "";
                            // alert("anu")
                            res.data.map(data => {
                            optionsSubject.push({ value: data.id, label: data.name });
                          });
                            
                          setSubjectoptions(optionsSubject);
                    
                          //  alert(optionsNew)
                        });
                      }
                  
              useEffect(() => {
                  
                      //   //alert(window.localStorage.getItem("productionOrderEditID"));
                        // getSourcelocations();
                        getDestlocations();
                        // getSubjectnamelocations();
                        getSourcelocation();
                        // getDestinationlocation();
                        getSubject();
                  
                        if(operation === 'edit') {
                  
                          getShippoEditRequestData();
                      
                      
                        }
                      
                  }, []);
                  
                      
      const getDestinationLocationoption = event => {
                        // alert(event.value)
                  setDestinationLoc(event.target.value); 
                        // setCustomername(event.label); 
                        //  window.localStorage.setItem(option) 
                        setDestinationlabel(event.target.label);
                        setDestinationvalue(event.target.value);   
                  }
      const getSourcelocationasoptions = event => {
                        //alert(event.value)
                        // setSourceLoc(event.value);
                    setSourcelocation(event.target.value);
                    setSourcelocationlabel(event.target.label);
                    setSourcelocationvalue(event.target.value) 
                        // setCustomername(event.label); 
                        //  window.localStorage.setItem(option)    
                  }
      const getSubjectasoptions = event => {
                        //alert(event.value)
                        // setSubName(event.value); 
                      setSubjectname(event.target.value); 
                        // setCustomername(event.label); 
                        //  window.localStorage.setItem(option)    
                    }
      const statusOptionsChangeFunction = event => {
                        //setBatchNumber(event.value);    
                        //alert(event.value);
                  
                      setStatusOptionsSelected(event.target.value);
                    }
                  
          if(operation === 'new') {
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
            label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">            Enter Shipping Order  Data </font></h4></pre></h4>}
          />
          </Box>
var nameFieldWidget = 
                    // <input
                    //   type="text"
                    //   className="form-control form-control-sm"
                    //   onChange={(e) => setName(e.target.value)}
                    // /> 
                      <TextField required
                      label="Name"
                      id="outline-Productionorder"

                      onChange={(e) => setName(e.target.value)}
                      />
                          //   var sorcelocFieldWidget = <input
                          //   type="text"
                          //   className="form-control form-control-sm"
                          //   onChange={(e) => setSourceLoc(e.target.value)}
                          // />
                          // var sourcelocationFieldWidget = 
                            
                          // <Select  className="s" onChange={getSourcelocationsoption} options={Sorlocation} /> 

                          var sourcelocationwidget= 
                          // <Select  className="s" options={sourcelocoptions} onChange={getSourcelocationasoptions}/>
                          <Box sx={{  }}>

                          <FormControl >
                          <InputLabel id="demo-simple-select-label">Source Location</InputLabel>
                          <NativeSelect 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          input={<OutlinedInput label="Source Location" />}
                          MenuProps={MenuProps}
                          style={{width:'220px'}}
                          label="Source Location"
                          onChange={getSourcelocationasoptions}
                          ><option>Select Source Location</option> 
                          {sourcelocoptions.map((data) => (
                
                
                          <option key={data.label} value={data.value}>
                
                          {data.label}
                
                          </option>
                
                          ))}
                          </NativeSelect>
                          </FormControl>
                          </Box>
                          

                          var destinationFieldWidget = 
                          // <Select className="s" onChange={getDestinationLocationoption} options={deslocation} /> 
                            
                          <Box sx={{  }}>

                          <FormControl >
                          <InputLabel id="demo-simple-select-label">Destination Location</InputLabel>
                          <NativeSelect 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          input={<OutlinedInput label="Destination Location" />}
                          MenuProps={MenuProps}
                          style={{width:'220px'}}
                          label="Destination Location"
                          onChange={getDestinationLocationoption}
                          ><option>Select Destination Location</option> 
                          {deslocation.map((data) => (
                
                
                          <option key={data.label} value={data.value}>
                
                          {data.label}
                
                          </option>
                
                          ))}
                          </NativeSelect>
                          </FormControl>
                          </Box>
                  
                        var createdbyFieldWidget = 
                        // <input
                        //       type="text"
                        //       className="form-control form-control-sm"
                        //       aria-describedby="emailHelp"
                        //       onChange={(e) => setCreatedby(e.target.value)}
                        //     />
                            <TextField required
                                  label="Created By"
                                  color="secondary" 
                                  id="outline-CreatedBy"

                                  onChange={(e) => setCreatedby(e.target.value)}
                                  />
                            
                            // 
                            var shipinddateFieldWidget = 
                            // <input
                            //   type="date"
                            //   className="form-control form-control-sm"
                            //   aria-describedby="emailHelp"
                            //   onChange={(e) => setShipingDate(e.target.value)}
                            // />
                            <TextField required
                                  label="Shipping Date"
                                  id="outline-ShippingDate"
                                  type="date"
                                  onChange={(e) => setShipingDate(e.target.value)}
                                  />
                            // var subjectnameFieldWidget = 
                            // <Select className="s" onChange={getSubjectnamelocationsoption} options={subname} /> 
                            // 
                            var subjectwidget=
                            // <Select  className="s" options={subjectoptions} onChange={getSubjectasoptions}/>

                            <Box sx={{  }}>

                            <FormControl >
                            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                            <NativeSelect 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            input={<OutlinedInput label="subject" />}
                            MenuProps={MenuProps}
                            style={{width:'220px'}}
                            label="subject"
                            onChange={getSubjectasoptions}
                            ><option>Select Subject</option> 
                            {subjectoptions.map((data) => (
                  
                  
                            <option key={data.label} value={data.value}>
                  
                            {data.label}
                  
                            </option>
                  
                            ))}
                            </NativeSelect>
                            </FormControl>
                            </Box>
                            var exportFieldWidget = 
                            // <input
                            //   type="text"
                            //   className="form-control form-control-sm"
                            //   aria-describedby="emailHelp"
                            //   onChange={(e) => setExport(e.target.value)}
                            // />

                            <TextField required
                                  label="Export"
                                  id="outline-Export"

                                  onChange={(e) => setExport(e.target.value)}
                                  />

                        var shipingtimeFieldWidget = 
                        // <input
                        //           type="time"
                        //           className="form-control form-control-sm"
                        //           aria-describedby="emailHelp"
                        //           onChange={(e) =>setTime(e.target.value)}
                        //         />   
                                <TextField required
                                label="Shipping Time"
                                type="time"
                                id="outline-time"

                                onChange={(e) =>setTime(e.target.value)}
                                />     
                  
                            var statusOptionsWidget= 
                          //    <Select onChange={statusOptionsChangeFunction} 
                          //                                 options={statusOptionsState}
                          //                                 value={{label:statusOptionsSelected, value:statusOptionsSelected}}  
                          //                                 className="s"
                          // />

                          <Box sx={{  }}>

                            <FormControl >
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <NativeSelect 
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            input={<OutlinedInput label="status" />}
                            MenuProps={MenuProps}
                            style={{width:'220px'}}
                            label="subject"
                            onChange={statusOptionsChangeFunction}
                            ><option>Select Status</option> 
                            {statusOptionsState.map((data) => (
                  
                  
                            <option key={data.label} value={data.value}>
                  
                            {data.label}
                  
                            </option>
                  
                            ))}
                            </NativeSelect>
                            </FormControl>
                            </Box>
                      }
                  
                      // else if(operation === 'edit') {
                      //       var headwidget=<h3>Update</h3>
                      //       var nameFieldWidget = <input
                      //             type="text"
                      //             className="form-control form-control-sm"
                      //             value = {shipping_order_name}
                      //             onChange={(e) => setName(e.target.value)}
                      //           />
                      //         //   var sorcelocFieldWidget = <input
                      //         //   type="text"
                      //         //   className="form-control form-control-sm"
                      //         //   value = {source_location}
                      //         //   onChange={(e) => setSourceLoc(e.target.value)}
                      //         // />
                      //         var sourcelocationwidget= <Select options={sourcelocoptions}  className="s" onChange={getSourcelocationasoptions} /> 
                      //         // var sourcelocationFieldWidget = 
                            
                      //     // <Select  className="s" onChange={getSourcelocationsoption} options={Sorlocation} value={{label:sourcelocationlabel,value:sourcelocationvalue}} /> 
                      //       //   var destinationFieldWidget = <input
                      //       //   type="text"
                      //       //   className="form-control form-control-sm"
                      //       //   value = {destination_location}
                      //       //   onChange={(e) => setDestinationLoc(e.target.value)}
                      //       // />
                      //       var destinationFieldWidget=<Select className="s" options={deslocation} onChange={getDestinationLocationoption}/>
                        
                      //       var createdbyFieldWidget = <input
                      //           type="text"
                      //           className="form-control form-control-sm"
                      //           value={created_by}
                      //           aria-describedby="emailHelp"
                      //           onChange={(e) => setCreatedby(e.target.value)}
                      //         />
                      //         // var subjectnameFieldWidget = <input
                      //         //   type="text"
                      //         //   className="form-control form-control-sm"
                      //         //   value={subject_name}
                      //         //   aria-describedby="emailHelp"
                      //         //   onChange={(e) => setSubjectName(e.target.value)}
                      //         // />
                      //       //   var subjectnameFieldWidget = 
                      //       // <Select className="s" onChange={getSubjectnamelocationsoption} options={subname} />
                      //       var subjectwidget=<Select  className="s" options={subjectoptions} onChange={getSubjectasoptions} />
                      //         var shipinddateFieldWidget = <input
                      //           type="date"
                      //           className="form-control form-control-sm"
                      //           value={shipping_date}
                      //           aria-describedby="date"
                      //           onChange={(e) => setShipingDate(e.target.value)}
                      //         />
                      //         var exportFieldWidget = <input
                      //           type="text"
                      //           className="form-control form-control-sm"
                      //           value={batch_for_export}
                      //           aria-describedby="emailHelp"
                      //           onChange={(e) => setExport(e.target.value)}
                      //         />
                  
                      //         var statusOptionsWidget=  <Select  className="s" onChange={statusOptionsChangeFunction} 
                      //         options={statusOptionsState}
                      //         value={{label:statusOptionsSelected, value:statusOptionsSelected}}  
                      //       /> 
                            
                          
                      //     }
          const handleSubmit = (e) => {
                      var shippoEditID = uniqueID;
                            e.preventDefault();
                            // alert(shippoEditID); 
                        // alert(2)
                            //alert(address);
                            var testPassed = "false";
                            if(shipping_order_name!=""){
                              testPassed="true"
                        
                            }
                            else {
                              warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input shipping_order_name</h5>
                                </div>
                        
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                            }
                            if(testPassed == "true"){
                              if(source_location!=""){
                                testPassed ="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>source_location</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                              }
                            }
                            if(testPassed == "true"){
                              if(destination_location!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  destination_location</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                              }
                            }
                            if(testPassed == "true"){
                              if(created_by!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  created_by</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                              }
                            }
                            if(testPassed == "true"){
                              if(subject_name!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  subject_name</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false"; 
                              }
                            }
                            if(testPassed == "true"){
                              if(shipping_date!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  shipping_date</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                              }
                            }
                            if(testPassed == "true"){
                              if(shipping_date!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  shipping_date</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false";
                              }
                            }
                            if(testPassed == "true"){
                              if(batch_for_export!=""){
                                testPassed="true"
                              }
                              else{
                                warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  batch_for_export</h5>
                                </div>
                              setWarningmessage(warningDIV);
                              testPassed = "false"; 
                              }
                            }
                            // if(testPassed == "true"){
                            //   if(status!=""){
                            //     testPassed="true"
                            //   }
                            //   else{
                            //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                            //       <h5>Input  status</h5>
                            //     </div>
                        
                            //   setWarningmessage(warningDIV);
                            //   testPassed = "false";
                        
                            //   }
                            // }
                            // if(testPassed == "true"){
                            //   if(process_order_number!=""){
                            //     testPassed="true"
                            //   }
                            //   else{
                            //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                            //       <h5>Input  process_order_number</h5>
                            //     </div>
                        
                            //   setWarningmessage(warningDIV);
                            //   testPassed = "false";
                        
                            //   }
                            // }
                        
                          if(testPassed =="true"){
                            if(operation === 'new') {
                              // alert(shipping_order_name)
                              // alert(source_location)
                              // alert(destination_location)
                              // alert(created_by)
                              // alert(subject_name)
                              // alert(shipping_date)
                              // alert(batch_for_export)
                              // alert(statusOptionsSelected)
                                    axios
                                      .post('http://127.0.0.1:8000/master/shippo/', 
                                      {
                                        "shipping_order_name":shipping_order_name, 
                                        // 'source_location':source_location,
                                        "source_location":source_location,   
                                        'destination_location':destination_location,   
                                        "created_by":created_by,
                                        // "subject_name":subname,
                                        "subject_name":subject_name,
                                        "shipping_date":shipping_date,
                                        "batch_for_export":batch_for_export,
                                        'status':statusOptionsSelected,
                                        "shipping_time":time,
                                        "loggedInUsername":loggedInUsername,

                                        "loggedInUserrole":loggedInUserrole,
                                        "process_order_number":uniqueID,
                                        "process_no_original":processnumber
                                      },
                                    
                                     
                                      )
                                      .then(() => {
                                        navigate("/shippingorder");
                                      });
                                  }
                                  // else if(operation === 'edit') {
                                  //   // alert(subname)
                                  //   axios
                                  //     .put(`http://127.0.0.1:8000/master/shippo/update/${shippoEditID}`,
                                  //       {
                                  //       "shipping_order_name": shipping_order_name,   
                                  //       "batch_for_export":batch_for_export,
                                  //       "shipping_date":shipping_date, 
                                  //       "created_by":created_by,
                                  //       'destination_location':destination_location, 
                                  //       // "subject_name":subname, 
                                  //       // 'source_location':source_location,
                                  //       "subject_name":subject_name,
                                  //       "source_location":source_location,    
                                  //       'status':statusOptionsSelected,
                                  //       "process_order_number":uniqueID,
                                  //       'loggedInUser':username,
                                  //       'userrole':userrole,
                                  //       // "process_no_original":processnumber
                                       
                                        
                                  //     },
                                  //     {
                                  //       auth: {
                                  //         username: username,
                                  //         password: password
                                  //       }
                                  //     }
                                  //     )
                                  //     .then(() => {
                                  //       navigate("/shippo/shippodatagrid");
                                  //     });
                                  // }
                          }
                        }
                          var editSaveButtonDisabled = 
                        <button disabled="true" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                  
                    var editSaveButtonEnabled = 
                        <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
                  
                    var editSaveButton = "";
        return (
          <>
                       
          <br></br>
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

<Box id="customerbox"
component="form"
sx={{
'& .MuiTextField-root': { m: 2, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<br></br>
<div id="shippingwarningdiv">
{warningmessage}
</div>
<div>
 
 {nameFieldWidget}
 

 
 </div>
 <div id="shippingsourceloc">
 {sourcelocationwidget}
 </div>
 <div id="shippingdestloc">
 {destinationFieldWidget}
 </div>

<div id="shippingbutton">
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                             
   </button>
  </div>
  <br></br>
 <div>
 {createdbyFieldWidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 {exportFieldWidget}
 <div id="subjectselectbox">
 {subjectwidget}
 </div>
 
</div>
<div >
{shipinddateFieldWidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;
{shipingtimeFieldWidget}

</div>
<div id="statusselectbox">
{statusOptionsWidget}
</div>
<br></br>
<br></br>


   
 

 





</Box> 
<hr></hr>    
         </div>
     </div>
 </div>  

</>
                    );
}

export default ShippoDataEntry
