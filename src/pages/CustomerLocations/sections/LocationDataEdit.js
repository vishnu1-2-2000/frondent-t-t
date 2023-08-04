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

function LocationDataEdit() {
 
  var warningDIV = <div className="alert alert-success pt-4" role="alert">
  <h5>Input all the values</h5>
</div>  
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [customer_id,setCustomer_id] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [state, setState] = useState("");
    const [loc_gln, setLocgln] = useState("");
    const [created_by, setCreatedby] = useState("");
    const [cname,setCname] = useState([]);
    const [CustomerIdOptionsNew, setCustomerOptionsNew] = useState("");
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

    ////    for receiving the parameters from URL\
    const getLocation=event=>{
    setCustomer_id(event.value)
    // setSelectCustomerName(event.label)
    setCuslocLabel(event.label)
    setCuslocvalue(event.value)
    //  alert(event.value)
    //  alert(event.label)
    }
    const { operation } = useParams();
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
    let optionsNew = [];


function selectedCustomerlocation(cuslocfunparam) {
//alert("anu");
        axios
            .get("http://127.0.0.1:8000/master/customer/",
      
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
//  Fetch data from local storage


function getCustomerId(cuslocfunparam) {
  //alert("anu");
          axios
          .get("http://127.0.0.1:8000/master/customer/",
          
          )
          .then((res) => {
          // let batchNumberOptionsInitial = "";
          res.data.map(data => {
          if(data.status==true){
          // optionsname.push({ label:data.name })
          optionsNew.push({ value: data.id,label:data.name});
           }
          // if(data.id==cuslocfunparam ){
          //           setCuslocLabel(data.name);
          //           setCuslocvalue(data.id);
          //         }
          // optionsNew.push({ value: data.id,label:data.name});
  
  
          });
  
          setCustomerOptionsNew(optionsNew);
          // setOptionName((localStorage.setItem(optionsName)))
          // alert(optionsName)
  
          });
          }

function getLocationEditRequestData(){
// alert(uniqueID)
      var locationEditID= uniqueID;

      axios
      .get("http://localhost:8000/master/locations/"+locationEditID+"/",
      
      )
      .then((res)=>{
      // alert(res.data[0].customer_id)
      setId(res.data[0].id);

      setName(res.data[0].name);
      // getCustomerId(res.data[0].customer_id);

      setLocgln(res.data[0].loc_gln);
      setAddress(res.data[0].address);
      setState(res.data[0].state);

      setZip(res.data[0].zip);
      setCreatedby(res.data[0].created_by);
      selectedCustomerlocation(res.data[0].customer_id)
      setCustomer_id(res.data[0].customer_id);


      })


      }

      const customStyles = {
        control: base => ({
          ...base,
          height: 55,
          minHeight: 55,
          width:225
          
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

 if(operation === 'edit') {
// var headwidget=<h3>Update</h3>

// var locnameFieldWidget = <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           value = {name}
//                           onChange={(e) => setName(e.target.value)}
//                           />
// var custnameFieldWidget = 

// <Select  className="s" onChange={getLocation} options={CustomerIdOptionsNew} value={{value:cuslocvalue,label:cusloclabel}}  /> 


// var addressFieldWidget = <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           value = {address}
//                           onChange={(e) => setAddress(e.target.value)}
//                           />
// var zipFieldWidget = <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       value = {zip}
//                       onChange={(e) => setZip(e.target.value)}
//                     />
// var stateFieldWidget = <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       value = {state}
//                       onChange={(e) => setState(e.target.value)}
//                       />
//   var locglnFieldWidget = <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           value={loc_gln}
//                           aria-describedby="emailHelp"
//                           onChange={(e) => setLocgln(e.target.value)}
//                         />

// var createdbyFieldWidget = <input
//                             type="text"
//                             className="form-control form-control-sm"
//                             value={created_by}
//                             aria-describedby="emailHelp"
//                             onChange={(e) => setCreatedby(e.target.value)}
//                             />
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
          label={<h4 ><pre><h4 style={{color:"white"}}>   Edit Customer Location Data </h4></pre></h4>}
         
   
 />
 </Box>

    var locnameFieldWidget = <TextField
            required
          id="outlined-Location Name"
          label="Location Name"
          value = {name}
          onChange={(e) => setName(e.target.value)}
   
 />
        var hjwidget=<label className="form-label">Customer Name</label>
        // var custnameFieldWidget = <input
        // type="text"
        // className="form-control form-control-sm"
        // onChange={(e) => setCustomer_id(e.target.value)}
      // /> 
    
   
      var custnameFieldWidget = 

      <Select  className="s" onChange={getLocation} options={CustomerIdOptionsNew} placeholder="Custermer Name" id="locationselectbox" styles={customStyles} value={{value:cuslocvalue,label:cusloclabel}}  /> 
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
       value = {address}
       onChange={(e) => setAddress(e.target.value)}
       
     />
      var zipFieldWidget = <TextField
      required
     id="outlined-Zip"
     label="Zip"
     value = {zip}
     onChange={(e) => setZip(e.target.value)}
     
   />
    var stateFieldWidget = <TextField
    required
   id="outlined-State"
   label="State"
   value = {state}
   onChange={(e) => setState(e.target.value)}
   
 />
 
  var locglnFieldWidget = <TextField
  required
 id="outlined-Location Gln"
 label="Location Gln"
 value={loc_gln}
 onChange={(e) => setLocgln(e.target.value)}
 
/>


    var createdbyFieldWidget = <TextField
    required
   id="outlined-Createdby"
   label="Createdby"
   value={created_by} 
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
        <h5>Input  name</h5>
        </div>

        setWarningmessage(warningDIV);
        testPassed = "false";
        }
        // if(testPassed == "true"){
        // if(customer_id!=""){
        // testPassed ="true"
        // }
        // else{
        // warningDIV =  <div className="alert alert-danger pt-4" role="alert">
        // <h5>Input  customerid</h5>
        // </div>

        // setWarningmessage(warningDIV);
        // testPassed = "false";

        // }
        // }
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
        if(testPassed == "true"){
        if(created_by){
        testPassed="true"
        }
        else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
        <h5>Input  Createdby</h5>
        </div>

        setWarningmessage(warningDIV);
        testPassed = "false";

        } 
        }
    if(testPassed == "true"){

      if(operation === 'edit') {
alert(customer_id)
    axios
      .put(`http://localhost:8000/master/locations/update/${locationEditID}`, 


        {
            "name": name,
            "customer_id":customer_id,
            "address":address,
            "zip":zip,
            "state":state,   
            "loc_gln":loc_gln,
            "created_by": created_by,
            "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole
        },
        
        )
        .then(() => {
        navigate("/customerlocation/");
        });
      }
    };
  }

return (
<>


        
        {/* <br/>
        <div className="d-flex justify-content-between m-2">
              <h2>Create</h2>
                    <Link to="/account/readDataGrid">
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
    <td class="productionOrderReportSearchTD">LOCATION</td>
    <td class="productionOrderReportSearchTD">
    {locnameFieldWidget}
    </td>
    </tr>
    
    
    <tr>
    <td class="productionOrderReportSearchTD">Customer name</td>
    <td class="productionOrderReportSearchTD">
    {custnameFieldWidget}
    </td>
    </tr>
    <tr>
    <td class="productionOrderReportSearchTD">ADDRESS</td>
    <td class="productionOrderReportSearchTD">
    {addressFieldWidget}
    </td>
    </tr>
    
    <tr>
    <td class="productionOrderReportSearchTD">zip</td>
    <td class="productionOrderReportSearchTD">
    {zipFieldWidget}
    </td>
    </tr>
    <tr>
    <td class="productionOrderReportSearchTD">Location Gln</td>
    <td class="productionOrderReportSearchTD">
    {locglnFieldWidget}
    </td>
    </tr>
    <tr>
    <td class="productionOrderReportSearchTD">State</td>
    <td class="productionOrderReportSearchTD">
    {stateFieldWidget}
    </td>
    </tr>
    <tr>
    <td class="productionOrderReportSearchTD">Created BY</td>
    <td class="productionOrderReportSearchTD">
    {createdbyFieldWidget}
    </td>
    </tr>
   
    
    
    
    
    
    
    <tr>
    <td class="productionOrderReportSearchTD">
    <button className="btn btn-primary" onClick={handleSubmit}>Save</button>

    </td>
    </tr>
    </tbody>
    </table>
    
                </div>
            </div>
        </div> */}

<br></br>
    <br></br>
    
    <div class="container-fluid">
              <div class="card shadow mb-4" id="customerfullcard"> 
                  <div class="card-header py-3" id="customercardhead">
                      <div className='row'>
                          <div className='col-10' id="locationhead">
                          {headwidget}
                          </div>
                      </div>
                                                      
                  </div>

                  <div class="card-body">  
                  <br></br>
    
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

  <div className="container" id="locationbox" >
    <div className="row" >
    {warningmessage}
      <div className="col-4">
      {locnameFieldWidget}

      {zipFieldWidget}

      {locglnFieldWidget}

     

      </div>
      <div className="col-4">
      {addressFieldWidget}

      {createdbyFieldWidget}

      

      
      </div>

      <div className="col-2">
      
      {stateFieldWidget}
      {custnameFieldWidget}
     
      
      </div>

      <div className="col-2" id="locationbutton" >
      <button  onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
      </button>
      </div>

   
    </div>
  </div>
  </Box>
  </div>
              </div>
          </div>   
    <hr></hr>      
        
</>
);
}

export default LocationDataEdit