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

function ShipmentdataEntry() {

const [id, setId] = useState(0);
const[filesendernumber,setFilesenderno]=useState();
const[filereceivernumber,setFilereciverno]=useState();
const[filecontrolnumber,setFilecontrolno]=useState();
const[filedate,setFiledate]=useState();
const[filetime,setFiletime]=useState();
const[deliverynumber,setDeliverynumber]=useState();
const[delivery_completeflag,setDeliverycompleteflag]=useState();
const[transactionidentifier,setTransactionidentifier]=useState();
const[transactionidentifier2,setTransactionidentifier2]=useState();
const[transactiondate,setTransactiondate]=useState();
const[transactiontime,setTransactiontime]=useState();
const[shipfrom_countrycode,setShipfrom_countrycode]=useState();
const[shipto_countrycode,setShipto_countrycode] =useState();
const[salesdistribution_type,setSalesdistribution_type]=useState();
const[internal_material_code,setInternal_material_code]=useState();
const[lot_number,setLot_number]=useState();
const[quantity,setQuantity]=useState();
const[business_id_type,setBusiness_id_type]=useState();
const[business_name,setBusiness_name]=useState();
const[street1,setStreet1]=useState();
const[city,setCity]=useState();
const[State_or_region,setstate_or_region]=useState();
const[postalcode,setPostalcode]=useState();
const[ country,setCountry]=useState();
const[factilty_type1,setFactilty_type1]=useState();
const[factilty_type2,setFactilty_type2]=useState();
const[business_name2,setBusiness_name2]=useState();
const[street2,setStreet2]=useState();
const[city2,setCity2]=useState();
const[ State_or_region2,setstate_or_region2]=useState();
const[postalcode2,setPostalcode2]=useState();
const[country2,setCountry2]=useState();
const[ district,setDistrict]=useState();
const[to_business_part_lookupid1,setTo_business_part_lookupid1]=useState()
const[to_business_part_lookupid2,setTo_business_part_lookupid2]=useState()

const[filesendernolabel,setLabel]=useState();
const[filesendernumbervalue,setValue]=useState();
const[prodforgin,setProdforegin]=useState()
var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                 </div>  


const [warningmessage,setWarningmessage]=useState(warningDIV);

const { process } = useParams();
const {uniqueID}=useParams();
const [data, setData] = useState([]);
const navigate = useNavigate();
var loggedInUsername=window.localStorage.getItem('loggedInUsername')
var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
var processno= process

let optionsNew=[]  


// if(operation === 'new') {

var headwidget=
<Controls.Input 
disabled
// fullWidth

id="outlined-Company Prefix"
value={loggedInUsername}
//label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                 Enter Shippment  Data</font> </h4></pre></h4>}
/>


var filesendernumberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    value={filesendernumber}
                    // onChange={(e) => setFilesenderno(e.target.value)}
                    onChange={(e) => senderdata(e.target.value)}
                   

                        /> 
var filereceivernumberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    value={filereceivernumber}
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
                      label="File control Number"
                      id="outline-Filecontrolno"

                      onChange={(e) => setFilecontrolno(e.target.value)}
                      />
                        
                         
var filedateFieldWidget = <input
                    type="date"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={filedate}
                    onChange={(e) => setFiledate(e.target.value)}
                    />
                        
var filetimeFieldWidget = <input
                    type="time"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={filetime}
                    onChange={(e) => setFiletime(e.target.value)}
                    />

var deliverynumberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={lot_number}
                    onChange={(e) => setDeliverynumber(e.target.value)}
                    />

var delivery_completeflagFieldWidget = 
                    // <input
                    // type="text"
                    // className="form-control form-control-sm"
                    // aria-describedby="emailHelp"
                    // onChange={(e) => setDeliverycompleteflag(e.target.value)}
                    // />
                    <TextField required
                      label="Delivery Complete Flag"
                      id="outline-Deliverycompleteflag"

                      onChange={(e) => setDeliverycompleteflag(e.target.value)}
                      />
var transactionidentifierFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={processno}
                    onChange={(e) => setTransactionidentifier(e.target.value)}
                    />
var transactionidentifier2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={lot_number}
                    onChange={(e) => setTransactionidentifier2(e.target.value)}
                    />
var transactiondateFieldWidget =
                //  <input
                //     type="date"
                //     className="form-control form-control-sm"
                //     aria-describedby="emailHelp"
                //     onChange={(e) => setTransactiondate(e.target.value)}
                //     />
                    <TextField required
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}
                      label="Transaction Date"
                      id="outline-Transactiondate"

                      onChange={(e) => setTransactiondate(e.target.value)}
                      />
var transactiontimeFieldWidget = 
                    // <input
                    // type="time"
                    // className="form-control form-control-sm"
                    // aria-describedby="emailHelp"
                    // onChange={(e) => setTransactiontime(e.target.value)}
                    // />
                    <TextField required
                    InputLabelProps={{
                        shrink: true,
                      }}
                        type="time"
                      label="Transaction Time"
                      id="outline-Transactiontime"

                      onChange={(e) => setTransactiontime(e.target.value)}
                      />
var shipfrom_countrycodeFieldWidget = 
                // <input
                //     type="text"
                //     className="form-control form-control-sm"
                //     aria-describedby="emailHelp"
                //     onChange={(e) => setShipfrom_countrycode(e.target.value)}
                //     />
                    <TextField required
                      label="Shipfrom Country Code"
                      id="outline-Shipfrom Country Code"

                      onChange={(e) => setShipfrom_countrycode(e.target.value)}
                      />
var shipto_countrycodeWidget = 
                // <input
                //     type="text"
                //     className="form-control form-control-sm"
                //     aria-describedby="emailHelp"
                //     onChange={(e) => setShipto_countrycode(e.target.value)}
                //     />

                    <TextField required
                    label="ShipTo Countrycode"
                    id="outline-ShipTo Countrycode"

                    onChange={(e) => setShipto_countrycode(e.target.value)}
                    />
var salesdistribution_typeFieldWidget =
                //  <input
                //     type="text"
                //     className="form-control form-control-sm"
                //     aria-describedby="emailHelp"
                //     onChange={(e) => setSalesdistribution_type(e.target.value)}
                //     />

                    <TextField required
                      label="Sales Distribution Type"
                      id="outline-Salesdistribution_type"

                      onChange={(e) => setSalesdistribution_type(e.target.value)}
                      />
var internal_material_codeFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setInternal_material_code(e.target.value)}
                    />
var lot_numberFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={lot_number}
                    onChange={(e) => setLot_number(e.target.value)}
                    />
var quantityFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setQuantity(e.target.value)}
                    />
var business_id_typeFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={filereceivernumber}
                    // onChange={(e) => setBusiness_id_type(e.target.value)}
                    />
var business_nameFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={business_name}
                    onChange={(e) => setBusiness_name(e.target.value)}
                    />
var street1FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={street1}
                    onChange={(e) => setStreet1(e.target.value)}
                    />
var  cityFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
var State_or_regionFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={State_or_region}
                    onChange={(e) => setstate_or_region(e.target.value)}
                    />
// var postalcodeFieldWidget = <input
//                     type="text"
//                     className="form-control form-control-sm"
//                     aria-describedby="emailHelp"
//                     value={postalcode}
//                     onChange={(e) => setPostalcode(e.target.value)}
//                     />
var countryFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />
var factilty_type1FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={factilty_type1}
                    onChange={(e) => setFactilty_type1(e.target.value)}
                    />
var factilty_type2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setFactilty_type2(e.target.value)}
                    />
var  business_name2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={business_name2}
                    onChange={(e) => setBusiness_name2(e.target.value)}
                    />
var street2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setStreet2(e.target.value)}
                    />
var city2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setCity2(e.target.value)}
                    />
var State_or_region2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setstate_or_region2(e.target.value)}
                    />
var postalcodeFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={postalcode}
                    onChange={(e) => setPostalcode(e.target.value)}
                    />
var postalcode2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setPostalcode2(e.target.value)}
                    />
var country2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={country2}
                    onChange={(e) => setCountry2(e.target.value)}
                    />
var  districtFieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setDistrict(e.target.value)}
                    />
var   to_business_part_lookupid1FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    value={ to_business_part_lookupid1}
                    onChange={(e) => setTo_business_part_lookupid1(e.target.value)}
                    />
var  to_business_part_lookupid2FieldWidget = <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    onChange={(e) => setTo_business_part_lookupid2(e.target.value)}
                    />

 const senderdata=     event => {
    // alert(event.value)
    // setProdforegin(event.value); 
  
    setLabel(event.label);
    setValue(event.source_location);
    setProdforegin(event.value); 
 }              
              
                    useEffect(() => {
                  
                        axios
                        .get(window.url+"/master/company/")
                        .then((res) => {
                            
                            
                          setFilereciverno(res.data[0].gln);
                    
                          //  alert(optionsNew)
                        });
                       
                        axios
                      
                    .get(window.url+"/master/shippo/"+uniqueID+"/",
                     
                    )
                    .then((res) => {

                        res.data.map(data => {
                            optionsNew.push({ value: data.id, label:data.source_location });
                          });
                         
                        // alert(res.data[0].destination_location)
                        setFilesenderno(res.data[0].source_location);
                        setBusiness_name2(res.data[0].source_location)
                        setTo_business_part_lookupid1(res.data[0].destination_location)
                       

                        
                        
                      });

                      axios
                        .get(window.url+"/master/shippo/"+uniqueID+"/")
                        .then((res) => {
                            
                            
                            setLot_number(res.data[0].batch_for_export);
                            setFiledate(res.data[0].shipping_date);
                            setFiletime(res.data[0].shipping_time);
                            
                    
                          //  alert(optionsNew)
                        });

                        axios
                        .get(window.url+"/master/company/")
                        .then((res) => {
                            
                            
                           setBusiness_name(res.data[0].company_name);
                           setPostalcode(res.data[0].zip);
                           setCountry(res.data[0].country);
                           setStreet1(res.data[0].address);
                           setstate_or_region(res.data[0].state)
                           setCity(res.data[0].city);

                    
                          //  alert(optionsNew)
                        });

                        axios
                        .get(window.url+"/master/shippo/"+uniqueID+"/")
                        .then((res)=>{
                            setFactilty_type1(res.data[0].subject_name )
                        })


                       
                  
                        
                    }, []);
                
                       
//                   }

                  const handleSubmit= (e)=>{
                    e.preventDefault();
                    // alert(filereceivernumber)
                    var testpassed="false"
                    // alert(filecontrolnumber)
                    if(filecontrolnumber!==""){
                   
                      testpassed="true"
                    }
                    else{
                      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  File Control Number</h5>
                                </div>
                              setWarningmessage(warningDIV);
                      testpassed="false"
                    }
                    if(testpassed==="true"){
                      // alert(testpassed)  
                      if(delivery_completeflag!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Delivery Complete Flag</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                    if(testpassed==="true"){
                      if(transactiondate!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Transaction Date</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                    if(testpassed==="true"){
                      if(transactiontime!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Transaction Time</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                    if(testpassed==="true"){
                      if(salesdistribution_type!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Sales Distribution Type</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                    if(testpassed==="true"){
                      if(shipfrom_countrycode!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Ship From Country Code</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                    if(testpassed==="true"){
                      if(shipto_countrycode!=="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input Ship To Country Code</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
              
              
              
                  // alert(eventdatetime) 
                  if(testpassed==="true"){
                    
                 axios
                 .post(window.url+"/master/xmldata/",
                 {
                   "id":id,
                   "filesendernumber":filesendernumber,
                
                   "filereceivernumber":filereceivernumber,
                   "filecontrolnumber":filecontrolnumber,
                   "filedate":filedate,
                   "filetime":filetime,
                
                   "deliverynumber":lot_number,
                   "delivery_completeflag":delivery_completeflag,
                   "transactionidentifier":processno,
                   "transactionidentifier2":lot_number,
                
                   "transactiondate":transactiondate,
                   "transactiontime":transactiontime,
                   "shipfrom_countrycode":shipfrom_countrycode,

                   "shipto_countrycode":shipto_countrycode,
                   "salesdistribution_type":salesdistribution_type,
                   "internal_material_code":internal_material_code,
                   "lot_number":lot_number,

                   "quantity":quantity,
                   "business_id_type":filereceivernumber,
                   "business_name":business_name,
                   "street1":street1,

                   "city":city,
                   "State_or_region": State_or_region,
                   "postalcode": postalcode,
                   "country":country,
                 

                //    "quantity":quantity,
                //    "business_id_type":business_id_type,
                  //  "business_name":business_name,
                  //  "street1":street1,

                   "factilty_type1": factilty_type1,
                   "factilty_type2":factilty_type2,
                   "business_name2":business_name2,
                   "street2":street2,

                   "city2": city2,
                   "State_or_region2":State_or_region2,
                   "postalcode2":postalcode2,
                   "district":district,
                   "country2":country2,

                   "to_business_part_lookupid1":to_business_part_lookupid1,
                   "to_shiptolocationlookupid": to_business_part_lookupid2,
                   "process_no_original":processno,

                })
                .then((res)=>{
                  if(res.data===50){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Gln In Company First And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===100){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter File Sender Number  In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===150){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter BusinessName  In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===250){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter BusinessParty Lookupid  In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===300){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Lot Number  In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===350){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter FileDate In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===400){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter FileTime In Shippo  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===450){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Business Name In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===500){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Postal Code Of Business  In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===550){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Country Of Business  In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===600){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Street Of Business  In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===650){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter State Or Region Of Business  In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===700){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter City Of Business  In Company  And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===750){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Facility Type  In Shippo And Try Again</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===800){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input File Control Number</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===850){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Delivery Complete Flag</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===900){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Transaction Date</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===950){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Transaction Time</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===1000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Sales Distribution Type</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===1050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Ship From CountryCode</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===1070){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Input Ship To CountryCode</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }

                  if(res.data===3000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Internal Material Number In Product</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===3050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Quantity In ProductionOrder</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===4050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Company Gln In Customer</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===5000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Address In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===5050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter City In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===6000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter State In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===6050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Zip In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===7000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter District In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===7050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Country In Locations</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===8000){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Business PartyLookupid In Customer Properties</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }
                  if(res.data===8050){
                    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                                            <h5>Enter Ship toLocationLookupid In CustomerLocation Properties</h5>
                                                          </div>
                                  
                                            setWarningmessage(warningDIV)  
                  }

                  if(res.data===200){
                    warningDIV =  <div className="alert alert-success pt-4" role="alert">
                    <h5>Shipping Xml File Created Successfully</h5>
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
           {/* {warningmessage}         */}
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
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">  Enter Shippment  Data</font></h4></center></h4>            
        
      {filecontrolnumberFieldWidget}

{delivery_completeflagFieldWidget}

{transactiondateFieldWidget}<br/>
{salesdistribution_typeFieldWidget}

       
      
      
       
        {transactiontimeFieldWidget}


{shipfrom_countrycodeFieldWidget}<br/>
{shipto_countrycodeWidget}
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

export default ShipmentdataEntry

