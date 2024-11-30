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
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Select from "react-select";
import Tooltip from '@mui/material/Tooltip';

// import Select from '@mui/material/Select';
import { FormControl, InputLabel} from '@material-ui/core';

  function LocationDataEntry() {
    var warningDIV = <div className="alert alert-success pt-4" role="alert">
    <h5>Input all the values</h5>
        </div>  
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [customer_id,setCustomer_id] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const[city,setCity]=useState("");
  const [loc_gln, setLocgln] = useState("");
  const [created_by, setCreatedby] = useState("");
  const [cname,setCname] = useState([]);
  const [CustomerIdOptionsNew, setCustomerOptionsNew] = useState([]);
  const[SelectCustomerName,setSelectCustomerName] =useState("")
  const[status,setStatus]=useState("");
//edit box value display operation
  const[cusloclabel,setCuslocLabel]=useState("");
  const[cuslocvalue,setCuslocvalue]=useState("");
  // const[OptionName,setOptionName]=useState("")
  // const [val,setVal] = useState("")
  ///   For navigate function
  const[warningmessage,setWarningmessage]=useState("");

  const navigate = useNavigate();
  const {uniqueID}=useParams();
  const [ContactValue, setContactValue] = useState('')
  const [TransferData, setTransferData] = useState([])

  ////    for receiving the parameters from URL\
//   const getLocation=event=>{
//     setCustomer_id(event.target.value)
//     // setSelectCustomerName(event.label)
//     setCuslocLabel(event.label)
//     setCuslocvalue(event.target.value)
//     alert(event.target.value)
//      alert(event.label)
// }

const getLocation=event=>{
  setCustomer_id(event.value)
  // setSelectCustomerName(event.label)
  setCuslocLabel(event.label)
  setCuslocvalue(event.value)
  // alert(event.value)
  //  alert(event.label)
  }
  const { operation } = useParams();
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  let optionsNew = [];
  let temparray=[]


  function selectedCustomerlocation(cuslocfunparam) {
    // alert("anu");
    axios
      .get(window.url+"/master/customer/",
        
      )
      .then((res) => {
        // let batchNumberOptionsInitial = "";
        res.data.map(data => {
        if(data.id==cuslocfunparam){
          setCuslocLabel(data.name);
          setCuslocvalue(data.id);
        }
          // optionsname.push({ label:data.name })

        });  
      
        // setCustomerOptionsNew(optionsNew);
        // setOptionName((localStorage.setItem(optionsName)))
        // alert(optionsName)
        
      });
  }
  let optionsname=[];
  let demolist=[]
  //  Fetch data from local storage


  function getLocationEditRequestData(){
    // alert(uniqueID)
    var locationEditID= uniqueID;
  
    axios
      .get(window.url+"/master/locations/"+locationEditID+"/",
      
      )
      .then((res)=>{
  // alert("anu")
        setId(res.data[0].id);
      
        setName(res.data[0].name);
        // getCustomerId(res.data[0].customer_id);
        
        setLocgln(res.data[0].loc_gln);
        setAddress(res.data[0].address);
        setState(res.data[0].state);
        
        setZip(res.data[0].zip);
        setCreatedby(res.data[0].created_by);
        selectedCustomerlocation(res.data[0].customer_id)
  
  
  
      })
  
  
  }
  function getCustomerId(cuslocfunparam) {
    //alert("anu");
    axios
      .get(window.url+"/master/customer/",
        
      )
      .then((res) => {
       
        // let batchNumberOptionsInitial = "";
        res.data.map(data => {
          if(data.status==true){
            // alert("anu");
            // optionsname.push({ label:data.name })
            optionsNew.push({ value:data.id,label:data.name});
            // temparray.push({ value: data.id,label:data.name});
            
           }
          // alert(demolist)
          // if(data.id==cuslocfunparam ){
          //           setCuslocLabel(data.name);
          //           setCuslocvalue(data.id);
          //         }
          // optionsNew.push({ value: data.id,label:data.name});
          

        });
      
        setCustomerOptionsNew(optionsNew);
        // setOptionName((localStorage.setItem(optionsName)))
        // alert(optionsNew)
        // setTransferData(temparray)
        
      });
  }
  const customStyles = {
    control: base => ({
      ...base,
      height: 55,
      minHeight: 55,
      width:230,
      marginLeft:10
      
      
    })
  };
  


  useEffect(() => {
    
    if(operation === 'edit') {
      getLocationEditRequestData()
      // setId(localStorage.getItem("id"));
      // setName(localStorage.getItem("name"));
      // setZip(localStorage.getItem("zip"));
      // setCustomer_id(localStorage.getItem("customer_id"));
      // setAddress(localStorage.getItem("address"));
      // setState(localStorage.getItem("state"));
      // setLocgln(localStorage.getItem("loc_gln"));
      // setCreatedby(localStorage.getItem("created_by"));
     
    }
    getCustomerId();
  }, []);
  if(operation === 'new') {
    var headwidget=
                    <Box
                    component="form"
                    // sx={{
                    //   width: 500,
                    //   maxWidth: '100%',
                      
                      
                    // }}
                    noValidate
                    autoComplete="off"
          ><Controls.Input 
            disabled
            // fullWidth
    
          id="outlined-Company Prefix"
          value={loggedInUsername}

          // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">   Enter Customer Location Data </font></h4></pre></h4>}
         
   
 />
 </Box>

    var locnameFieldWidget = <TextField
                              required
                              id="outlined-Location Name"
                              label="Location Name"
                              onChange={(e) => setName(e.target.value)}
                            />

    var hjwidget=<label className="form-label">Customer Name</label>
        // var custnameFieldWidget = <input
        // type="text"
        // className="form-control form-control-sm"
        // onChange={(e) => setCustomer_id(e.target.value)}
      // /> 
    
   
      var custnameFieldWidget = 

      <Select placeholder="Custermer Name" id="locationselectbox"  styles={customStyles} className="s" onChange={getLocation} options={CustomerIdOptionsNew} /> 
//     var custnameFieldWidget =  


//    <Controls.Input
//       id="outlined-select-currency"
//       select
//       label="Customer Name"
//       options={CustomerIdOptionsNew}
//       helperText="Please select your Customer"
//       onChange={getLocation}


// >
// {CustomerIdOptionsNew.map((data) => (
//   <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>
// ))}

// </Controls.Input> 

        
          // <Select className="s" onChange={getLocation} options={CustomerIdOptionsNew} /> 
          
          
     
  var addressFieldWidget = <TextField
                            required
                            id="outlined-Address"
                            label="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            
                            />
  var zipFieldWidget = <TextField
                            required
                            id="outlined-Zip"
                            label="Zip"
                            onChange={(e) => setZip(e.target.value)}
                            
                        />
    var stateFieldWidget = <TextField
                            required
                            id="outlined-State"
                            label="State"
                            onChange={(e) => setState(e.target.value)}
                            
                          />
 
  var locglnFieldWidget = <TextField
                            required
                            id="outlined-Location Gln"
                            label="Location Gln"
                            onChange={(e) => setLocgln(e.target.value)}
                            
                          />
    var cityFieldWidget = <TextField
                          required
                          id="outlined-Location City"
                          label="City"
                          onChange={(e) => setCity(e.target.value)}
                          
                        />


    var createdbyFieldWidget = <TextField
                                required
                                id="outlined-Createdby"
                                label="Createdby"
                                onChange={(e) => setCreatedby(e.target.value)}
                                
                                />
        
  
      
  }
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    var locationEditID= uniqueID;
   
// alert(2)
    //alert(address);
    var testPassed = "false";
    if(name!=""){
      testPassed="true"

    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Location</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";
    }
    if(testPassed == "true"){
      if(customer_id!=""){
        testPassed ="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  customerid</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(loc_gln!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  location gln</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(address!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Address</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }

    if(testPassed == "true"){
      if(city!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input City</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }

    if(testPassed == "true"){
      if(zip!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Zip</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      } 
    }
    if(testPassed == "true"){
      if(state!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  State</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      } 
    }
    // if(testPassed == "true"){
    //   if(created_by){
    //     testPassed="true"
    //   }
    //   else{
    //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  Createdby</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";

    //   } 
    // }
    if(testPassed == "true"){
    if(operation === 'new') {
    alert(customer_id)
      axios
        .post(window.url+'/master/locations/', 
        {
          "name": name, 
          "customer_id":customer_id,
          "address":address,
          "zip":zip,
          "state":state,   
          "loc_gln":loc_gln,
          "created_by":loggedInUsername,
          "city":city,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole   
        }, 
        )
        .then((res) => {
          if(res.data.loc_gln=='locations with this loc gln already exists.')
            {
              warningDIV=<div className="alert alert-danger pt-4" role="alert">
                <h5>Location With This Gln already registered</h5>
              </div>
              setWarningmessage(warningDIV)
            }
            else{
              navigate("/customerlocation");
            }
          
        });
      // }  
    }
}
  }

  return (
    <>
       
      {/* <br></br>
      <br></br>
                          
                        
                          <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/customerlocation">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
                      
                          <div class="container">
                              <div class="row">
                                 
                                  <div class="col-12">
                      
                                  <div className="d-flex justify-content-between m-2">
                           
                          </div>
                          {warningmessage}
                      
                      
                      <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                      <tbody>
                      <tr>
                     
                      <td class="productionOrderReportSearchTD">
                      {locnameFieldWidget}
                      </td>
                     

                    
                      <td class="productionOrderReportSearchTD">
                     
                      
                          {custnameFieldWidget} 
                     
                      </td>
                      </tr>
                      <br></br>
                      
                     
                      <tr>
                     
                      <td class="productionOrderReportSearchTD">
                      {addressFieldWidget}
                      </td>

                    
                      <td class="productionOrderReportSearchTD">
                      {zipFieldWidget}
                      </td>
                      </tr>
                      
                      <br></br>
                      <tr>
                      <td class="productionOrderReportSearchTD"></td>
                      <td class="productionOrderReportSearchTD">
                      {locglnFieldWidget}
                      </td>

                     
                      <td class="productionOrderReportSearchTD">
                      {stateFieldWidget}
                      </td>
                      </tr>
                      <br></br>
                      <tr>
                    
                      <td class="productionOrderReportSearchTD">
                      {createdbyFieldWidget}
                      </td>
                      </tr>
                      
                      
                      
                      
                      
                      
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">
                      <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
               
                      </td>
                      <br></br>
                      </tr>
                     
                      </tbody>
                      </table>
                      
                                  </div>
                              </div>
                          </div>


                          <br></br>
    <br></br>
    <br></br> */}
   
    <br></br>
    <br></br>
    <br/><br/><br/><br/> 

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
<h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Customer Location Details </font></h4></center></h4>            

{locnameFieldWidget}
 
{zipFieldWidget}

{locglnFieldWidget}
<br/>





{/* {createdbyFieldWidget} */}
{stateFieldWidget}
{addressFieldWidget}
{cityFieldWidget}
{headwidget}
    {custnameFieldWidget}
    <br/> <br/>
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

export default LocationDataEntry
