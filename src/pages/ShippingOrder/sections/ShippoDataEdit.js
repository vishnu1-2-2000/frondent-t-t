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
import Tooltip from '@mui/material/Tooltip';

const  ShippoDataEdit= (props) => {

    let statusOptions = [ {value:"Draft", label:"Draft"},
    {value:"Inproduction", label:"Inproduction"},
    {value:"Closed", label:"Closed"}]

    const [id, setId] = useState(0);
    const [shipping_order_name,setShippingname]=useState("")
    const[shipping_type,setShippingtype]=useState("")
    const[shipping_date,setShippingdate]=useState("")
    const[time,setTime]=useState("");
    const[status,setStatus]=useState("")
    const[created_by,setCreatedby]=useState("")
    const[regulation,setRegulation]=useState("")
    const[quantity,setQuantity]=useState("")
  
    const[sourcelocoptions,setSourcelocoptions]=useState("")
    const[source_location,setSourcelocation]=useState("")
  
    const[destlocoptions,setDestlocoptions]=useState("")
    const[destination_location,setDestinationlocation]=useState("")
  
    const[subjectoptions,setSubjectoptions]=useState("")
    const[subject_name,setSubjectname]=useState("")
    const [shippoEditID, setShippoEditID] = useState();
    const [statusOptionsSelected, setStatusOptionsSelected] = useState("");
    const [statusOptionsState, setStatusOptionsState] = useState(statusOptions);
    const [showPropertiesState, setShowPropertiesState] = useState(false);
  
    const [batch_for_export, setExport] = useState("");
    const [exempledfrombarcode,setExempledfrombarcode]= useState("");
    const [exemptiondate,setExemptiondate]= useState("");
    const [exempledcountry,setExempledcountry]= useState("");
    const [soldto,setSoldto]= useState("");
    const [deliveryno,setDeliveryno] = useState("");
    const [advanceshipnotice,setAdvanceshipnotice] = useState("");

    // const [shippoEditID, setShippoEditID] = useState();
    const [destinationLocationSelectedLabel,setDestinationLocationSelectedLabel] = useState("");
    const [destinationLocationSelectedValue,setDestinationLocationSelectedValue] = useState("");
    const [sourceLocationSelectedLabel,setSourceLocationSelectedLabel] = useState("");
    const [sourceLocationSelectedValue,setSourceLocationSelectedValue] = useState("");
    const [subjectSelectedLabel,setSubjectSelectedLabel] = useState("");
    const [subjectSelectedValue,setSubjectSelectedValue] = useState("");
    const[process_order_number,set_process_order_number]=useState("")
    const navigate = useNavigate();

    const { operation } = useParams();
    const { uniqueID } = useParams();
    const {processnumber } = useParams();
    const{batchnumber}=useParams();
    let optionsNew = [];

    let optionsSubject=[]
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
    //alert(operation);

    var warningDIV = <div className="alert alert-success pt-4" role="alert">
        <h5>Input all the data</h5>
      </div>

const [warningDIVstate, setWarningDIVstate] = useState(warningDIV);
function getShippoEditRequestData() {
    var shippoEditID = uniqueID;
    // var shippoEditID = window.localStorage.getItem("shippoEditID");
    // alert(shippoEditID);
    axios
      .get(window.url+"/master/shippo/"+shippoEditID+"/",
      
    )
    .then((res) => {
      
      // alert(res.data[0].shipping_date)
      setShippingdate(res.data[0].shipping_date);
      setShippingname(res.data[0].shipping_order_name);
      //setExpir(res.data[0].expiration_date);
    
      // setStatusOptionsSelected(res.data[0].status);

      setShippingtype(res.data[0].shipping_type);
      setSourcelocation(res.data[0].source_location);
      setSelectedSourceLocationFunction(res.data[0].source_location);
      setDestinationlocation(res.data[0].destination_location);
      setSelectedDestinationLocationFunction(res.data[0].destination_location);
      setSelectedSubjectFunction(res.data[0].subject_name);
      setSubjectname(res.data[0].subject_name);
      set_process_order_number(res.data[0].process_order_number);
      setTime(res.data[0].shipping_time);
      setExport(res.data[0].batch_for_export)
      setStatusOptionsSelected(res.data[0].status)
      // setProduction(res.data[0].Production_line_id);
      // setSerialno(res.data[0].serialnoprovider);
      //setStatus(localStorage.getItem("status"));
      //setRegulation(localStorage.getItem("regulation"));
     
      //setPackVer(localStorage.getItem("packaging_Version"));
      //setExpir(localStorage.getItem("expiration_date"));
      //setProductiondate(localStorage.getItem("production_date"));
      // setRequested(localStorage.getItem("requested"))
      // setProduced(localStorage.getItem("produced"))
      // getProcessorderindividual()

    });
  }  
 
  function setSelectedSourceLocationFunction(selectedSourceLocationFunParam) {
    // alert(selectedDestinationLocationFunParam);
    axios
      .get(window.url+"/master/locations/",
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
        res.data.map(data => {

        if(data.id === selectedSourceLocationFunParam) {
          //alert(data.name)
          setSourceLocationSelectedLabel(data.name);
          setSourceLocationSelectedValue(data.id);
           
          //setSourceLocationSelectedDefault({ value: 8, label: data.name });
          //setSourceLocationOptionsWidget(sourceLocationOptionsWidgetTemp);
        }
      });

    });
  }

  function setSelectedDestinationLocationFunction(selectedDestinationLocationFunParam) {
    //alert(selectedDestinationLocationFunParam);
    axios
      .get(window.url+"/master/locations/",
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
        res.data.map(data => {

        if(data.id === selectedDestinationLocationFunParam) {
            // alert(data.id)
          setDestinationLocationSelectedLabel(data.name);
          setDestinationLocationSelectedValue(data.id);
           
          //setSourceLocationSelectedDefault({ value: 8, label: data.name });
          //setSourceLocationOptionsWidget(sourceLocationOptionsWidgetTemp);
        }
      });

    });
  }

  function setSelectedSubjectFunction(selectedSubjectFunParam) {
    //alert(selectedDestinationLocationFunParam);
    axios
      .get(window.url+"/master/customer/",
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
        res.data.map(data => {

        if(data.id === selectedSubjectFunParam) {
          setSubjectSelectedLabel(data.name);
          setSubjectSelectedValue(data.id);
           
          //setSourceLocationSelectedDefault({ value: 8, label: data.name });
          //setSourceLocationOptionsWidget(sourceLocationOptionsWidgetTemp);
        }
      });

    });
  }


  function getSourcelocation() {
    axios
      .get(window.url+"/master/locations/",
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        // alert("anu")
        res.data.map(data => {
        optionsNew.push({ value: data.id, label: data.name });
      });
        
      setSourcelocoptions(optionsNew);
      setDestlocoptions(optionsNew);
      //  alert(optionsNew)
    });
  }

  function getSubject() {
    axios
      .get(window.url+"/master/customer/",
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
  const statusOptionsChangeFunction = event => {
    //setBatchNumber(event.value);    
    //alert(event.value);

    setStatusOptionsSelected(event.value);
  }
  useEffect(() => {

    //alert(window.localStorage.getItem("productionOrderEditID"));
    getSourcelocation();
    // getDestinationlocation();
    getSubject();
    if(operation === 'edit') {

    //   getProductOrderEditRequestData();
      getShippoEditRequestData()
    }

  }, []);


  const getSourcelocationasoptions = event => {
    // alert(event.value)
    setSourcelocation(event.value);
    setSourceLocationSelectedLabel(event.label);
    setSourceLocationSelectedValue(event.value); 
    // setCustomername(event.label); 
    //  window.localStorage.setItem(option)    
  }
  const getDestinationlocationasoptions= event => {
    // alert(event.value)
    setDestinationlocation(event.value); 
    setDestinationLocationSelectedLabel(event.label);
    setDestinationLocationSelectedValue(event.value);
    // setCustomername(event.label); 
    //  window.localStorage.setItem(option)    
  }
  const getSubjectasoptions = event => {
    // alert(event.value)
    setSubjectname(event.value); 
    setSubjectSelectedLabel(event.label);
    setSubjectSelectedValue(event.value);
    // setCustomername(event.label); 
    //  window.localStorage.setItem(option)    
  }
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
  var headwidget=
  // <Box
  //     component="form"
  //     sx={{
  //       width: 500,
  //       maxWidth: '100%',
        
        
  //     }}
  //       noValidate
  //       autoComplete="off"
  //   >
  <Controls.Input 
      disabled
      // fullWidth
      
      id="outlined-Company Prefix"
      value={loggedInUsername}
      //label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                 Edit Shipping Order  Data </font></h4></pre></h4>}
    />
    // </Box>

  var shippingnamewidget=
              //   <input
              //   type="text"
              //   className="form-control"
              //   value={shipping_order_name}
              //   onChange={(e) => setShippingname(e.target.value)}
                
              // />
              <TextField required
              label="Name"
              id="outline-Productionorder"
              value = {shipping_order_name}
              onChange={(e) => setShippingname(e.target.value)}
          />

          const customStyles = {
            control: base => ({
              ...base,
              height: 55,
              minHeight: 55,
              width:230,
              // marginLeft:30
              
              
            })
          };

var sourcelocationwidget= <Select options={sourcelocoptions}  className="s" onChange={getSourcelocationasoptions} value={{label:sourceLocationSelectedLabel, value:sourceLocationSelectedValue}}/> 

var destinationlocationwidget=<Select  className="s" options={destlocoptions} onChange={getDestinationlocationasoptions}  value={{label:destinationLocationSelectedLabel, value:destinationLocationSelectedValue}} />

var subjectwidget=

 <Select  className="s" options={subjectoptions}  onChange={getSubjectasoptions} value={{label:subjectSelectedLabel, value:subjectSelectedValue}}/>


var shippingtypewidget=
//  <input 
//   type="text"
//   className="form-control"
//   value={shipping_type}
//   onChange={(e) => setShippingtype(e.target.value)}
//   /> 
          <TextField required
          label="Export"
          id="outline-export"
          value={batch_for_export}
          onChange={(e) => setExport(e.target.value)}
          />
var shippingdatewidget=

                    // <input
                    //   type="Date"
                    //   className="form-control"
                    //   value={shipping_date}

                    //   onChange={(e) => setShippingdate(e.target.value)}
                    //   />  

  <TextField required
  type="date"
  label="Shipping Date"
  id="outline-shippingdate"
  value={shipping_date}
  onChange={(e) => setShippingdate(e.target.value)}
  />

  var shipingtimeFieldWidget = 
  
//   <input
//   type="time"
//   className="form-control form-control-sm"
//   aria-describedby="emailHelp"
//   value={time}
//   onChange={(e) =>setTime(e.target.value)}
// />

<TextField required
label="Shipping Time"
type="time"
id="outline-time"
value={time}
onChange={(e) =>setTime(e.target.value)}
/>    

var statusOptionsWidget=  
 
<TextField required
label="Status"

id="outline-time"
value={statusOptionsSelected}
onChange={(e) =>setStatusOptionsSelected(e.target.value)}
/>    






    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("clicked");
      //alert(address);

    
      var shippoEditID = uniqueID;
      // alert(shippoEditID);

      // alert(productionOrderIDforShippingOrder)
      e.preventDefault();
      // console.log("clicked");
      var testPassed = "false";
      // alert(prod);
      // alert(batch)
      // alert(production);
      // alert(manufacture)
      // alert(created_by)
      // alert(status)

      // if(testPassed == "true") {
        if(shipping_order_name != "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input shippingorder name</h5>
            </div>

          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      // }

      if(testPassed == "true") {
        if(source_location != "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input sourcelocation</h5>
            </div>

          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }
      if(testPassed == "true") {
        if(destination_location != "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input destinationlocation</h5>
            </div>

          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }
      if(testPassed == "true") {
        if(subject_name != "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input subjectname</h5>
            </div>

          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }
      // if(testPassed == "true") {
      //   if(shipping_type != "") {
      //     testPassed = "true";
      //   }
      //   else {
      //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
      //         <h5>Input shippingtype</h5>
      //       </div>

      //     setWarningDIVstate(warningDIV);
      //     testPassed = "false";
      //   }
      // }
      if(testPassed == "true") {
        if(shipping_date!= "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
              <h5>Input shippingdate</h5>
            </div>

          setWarningDIVstate(warningDIV);
          testPassed = "false";
        }
      }

      if(testPassed == "true") {
        warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                        <h5>Verifying data</h5>
                      </div>

        setWarningDIVstate(warningDIV);
      }
      
      if(testPassed === "true") {
        var shippoEditID = uniqueID;

    //  alert(shipping_order_name)
    //  alert(source_location)
    //  alert(destination_location)
    //  alert(subject_name)
    //  alert(shipping_type)
    //  alert(shipping_date)
        axios
          .put(window.url+`/master/shippo/update/${shippoEditID}`, 
            
          {
            "shipping_order_name":shipping_order_name, 
            "source_location":source_location,   
            "destination_location":destination_location, 
            "subject_name":subject_name,
            // "shipping_type":shipping_type,  
            "batch_for_export":batch_for_export,
            "shipping_date":shipping_date,
            "shipping_time":time,
            "created_by":loggedInUsername,
            "process_order_number":process_order_number,
            // "status":status,
            "process_no_original":processnumber,
            "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole
            
          })
          .then((res) => {
                    // alert(res.data['email']);   
              navigate("/shippingorder");      
          });
      
      }
    }
  
    return(
      <>
                        
                        <br/>        <br/>        <br/>   <br/>         
                        {warningDIVstate} 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <div style={{backgroundColor:"#AAF0D1"}} >
      <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Edit Shipping Order</font></h4></center></h4>            
     
      {shippingnamewidget}
      {headwidget}
      {shippingtypewidget}
       
      
      <br/>
      {shippingdatewidget}

      {shipingtimeFieldWidget}
      
      {statusOptionsWidget}
       
        <br/>

     
        
       

      
       
      </div>
     
    </Box>   
    <br/>


    <table class="table table-borderless productionOrderReportSearchTable" style={{backgroundColor:"#AAF0D1"}}>
                            <tbody>
                             
                              <tr>
                                <td class="productionOrderReportSearchTD">Source location</td>
                                <td class="productionOrderReportSearchTD">
                                  {sourcelocationwidget}
                                </td>
                              </tr>
                              <tr>
                                <td class="productionOrderReportSearchTD">Destination location</td>
                                <td class="productionOrderReportSearchTD">
                                  {destinationlocationwidget}
                                </td>
                              </tr>
                  
                            
                              <tr>
                                <td class="productionOrderReportSearchTD">Subject name</td>
                                <td class="productionOrderReportSearchTD">
                                  {subjectwidget}
                                </td>
                              </tr>
                           
                            
                             
                              
                            <tr></tr>
                            
                          </tbody>
                        </table> 



                     <div className="row">
                      <div className="col-4">

                      </div>
                      <div className="col-4">
                     <center><button
                                  type="submit"
                                  className="btn btn-primary"   
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </button></center> 
                        </div>
                        <div className="col-4">
                        
                        </div>
                     </div>
                            
                               
                           
                                                                             
      </>

    )
};

export default  ShippoDataEdit;

