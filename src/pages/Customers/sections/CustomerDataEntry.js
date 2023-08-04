import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link ,useParams} from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, Typography, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Statusselect from "../../../components/Statusselect";
import Select from "react-select";
import Skeleton from '@mui/material/Skeleton';
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
function CustomerDataEntry() {
    var warningDIV = <div className="alert alert-success pt-4" role="alert">
          <h5>Input all the values</h5>
                 </div>  

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [company_prefix, setCompany_prefix] = useState("");
    const [company_gln,setCompany_gln] =useState("");
    const[country,setCountry]=useState("");
    const[state,setState]=useState("");
    const[city,setCity]=useState("");
    const [address,setAddress] =useState("");
    const [zip,setZip] =useState("");
    const [created_by, setCreatedby] = useState("");
    const [group,setGroup]=useState("");
    const[status,setStatus]=useState("");
    const [testStatusChecked, setTestStatusChecked] = useState(false);


    const[warningmessage,setWarningmessage]=useState("");


    ///   For navigate function
    const navigate = useNavigate();
    const {uniqueID}=useParams();

  ////    for receiving the parameters from URL
    const { operation } = useParams();
    var username = window.localStorage.getItem('username')
    var password = window.localStorage.getItem('password')
    var currentUserrole = window.localStorage.getItem('userrole')

    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
      ////  Fetch data from local storage
    const[st,setSt]=useState("");
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const currencies = [
    {
      value: 'CMO',
      label: 'CMO',
    },
    {
      value: 'CPO',
      label: 'CPO',
    },
    {
      value: 'Customer',
      label: 'Customer',
    },
    {
      value: 'Destroyer',
      label: 'Destroyer',
    },
  
    {
      value: 'Manufacture',
      label: 'Manufacture',
    },
  
    {
      value: 'Pharmacy',
      label: 'Pharmacy',
    },
  
    {
      value: 'Transporter',
      label: 'Transporter',
    },
  
    {
      value: 'Hospital',
      label: 'Hospital',
    },
  
    {
      value: 'Warehouse',
      label: 'Warehouse',
    },
  
    {
      value: 'Wholesaler',
      label: 'Wholesaler',
    },
  ];
  
  
 
  
  
  const customerstatusfield = [
    {
      value: 'Confirmed',
      label: 'Confirmed',
    },
    {
      value: 'Not Confirmed',
      label: 'Not Confirmed',
    },

    
  ];

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
            
          >
    
          <Controls.Input 
                  disabled
                  fullWidth
                  id="outlined-Company Prefix"
                  // label={<Typography>Customer  Create</Typography>}
                  label={<h4 ><pre><h4 style={{color:"white"}}>         Create New Customer </h4></pre></h4>}
                
   
    />
    
 </Box>

    var nameFieldWidget = 
                    <TextField
                    required
     
                    label="Name"
                    name="name"
                  
                    onChange={(e) => setName(e.target.value)}
     
   />
   
  var companyprefixFieldWidget = <TextField
        required
       id="outlined-Company Prefix"
       label="Company Prefix"
       onChange={(e) => setCompany_prefix(e.target.value)}
       
     />
  var companyglnFieldWidget = <TextField
      required
      id="outlined-Company Gln"
      label="Company Gln"
      // type="password"
      // autoComplete="current-password"
      onChange={(e) => setCompany_gln(e.target.value)}
    />
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
      type="number"
      onChange={(e) => setZip(e.target.value)}
  
    />

//   var groupfield= <TextField
//         id="outlined-select-currency"
//         select
//       label="Select"
//       defaultValue="EUR"
//       helperText="Please select your currency"
//       onChange={(e) => setGroup(e.target.value)} value={group}
     
      
// >
// {currencies.map((option) => (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))}

// </TextField>

var groupfield=<select  class="form-select" id="customerselectbox" aria-label="group" onChange={(e) => setGroup(e.target.value)} value={group}>
      <option value="">Select Group</option>
      <option value="CMO">CMO</option>
      <option value="CPO">CPO</option>
      <option value="Customer">Customer</option>
      <option value="Destroyer">Destroyer</option>
      <option value="Manufacture">Manufacture</option>
      <option value="Pharmacy">Pharmacy</option>
      <option value="Transporter">Transporter</option>
      <option value="Hospital">Hospital</option>
      <option value="Warehouse">Warehouse</option>
      <option value="Wholesaler">Wholesaler</option>

</select>



  var createdbyFieldWidget = <TextField id="outlined-Createdby"
                    required 
                    label="Createdby"
                    onChange={(e) => setCreatedby(e.target.value)}

  />
  
  var statusfield=   <Grid item xs={12}><Controls.Input
      id="outlined-select-Status"
      select
      label="Status"
      defaultValue="EUR"
      helperText="Please select Customer Status"
      onChange={(e) =>setStatus(e.target.value)} value={status}
>
  
{customerstatusfield.map((option1) => (
  <MenuItem key={option1.value} value={option1.value}>
    {option1.label}
  </MenuItem>
))}



</Controls.Input>
</Grid>



      
  }



  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    var customerEditID= uniqueID;
    //alert(address);
    var testPassed = "false";
    if(name!=""){
      testPassed="true"

    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Name</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";
    }

    // var testPassed = "false";
    // if(country!=""){
    //   testPassed="true"

    // }
    // else {
    //   warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  Country</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";
    // }
    // var testPassed = "false";
    // if(state!=""){
    //   testPassed="true"

    // }
    // else {
    //   warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  State</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";
    // }
    // var testPassed = "false";
    // if(city!=""){
    //   testPassed="true"

    // }
    // else {
    //   warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  City</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";
    // }


    // if(testPassed == "true"){
    //   if(company_prefix!=""){
    //     testPassed ="true"
    //   }
    //   else{
    //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  company prefix</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";

    //   }
    // }
    // if(testPassed == "true"){
    //   if(company_gln!=""){
    //     testPassed="true"
    //   }
    //   else{
    //     warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    //       <h5>Input  company gln</h5>
    //     </div>

    //   setWarningmessage(warningDIV);
    //   testPassed = "false";

    //   }
    // }
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
    if(testPassed =="true"){
    if(operation === 'new') {
      // alert( name)
      // alert( company_prefix)
      // alert( company_gln)
      // alert( address)
      // alert( zip)
      // alert( group)
      // alert( created_by)
      // alert( testStatusChecked)
      // alert( loggedInUsername)
      // alert( loggedInUserrole)

      axios
        .post('http://localhost:8000/master/customer/', 
        {
          "name": name,  
          'company_prefix': company_prefix,
          'company_gln':company_gln,
          'address':address,
          'zip':zip , 
          'group':group,   
          "created_by": created_by,
          "status":testStatusChecked,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole
        },
       
        )
        .then(() => {
          navigate("/customer");
        });
        
    }
  }
}
    

  return (
    <>
   {/* <br></br>
    <br></br>
    <div id ="customerhead">
    {headwidget}
    </div>
    <br></br>
    
     <Box id="customerbox"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
      <div>
          {warningmessage}
         
          {nameFieldWidget}

          {companyprefixFieldWidget}

          {companyglnFieldWidget}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

            {addressFieldWidget}

           
            {createdbyFieldWidget}

            {zipFieldWidget}

            
          </div>

          <div >
          {groupfield}
          <br></br>
          
        <div className="col-1">
            <FormControlLabel  control={<Checkbox 
      
              checked={testStatusChecked}

              onChange={e => setTestStatusChecked(e.target.checked)}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
              label="Gilad Gray"
            />} label="Status" />
        </div>
          
      </div>

      <div>
      

    </div>              
 

  </div>
  <div>
      
</div>
      
    </Box> */}
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
      <div>
          {warningmessage}
         
          {nameFieldWidget}

          {companyprefixFieldWidget}

          {companyglnFieldWidget}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

            {addressFieldWidget}

           
            {createdbyFieldWidget}

            {zipFieldWidget}

            
          </div>

          <div >
          {groupfield}
          <br></br>
          
        <div className="col-1">
            <FormControlLabel  control={<Checkbox 
      
              checked={testStatusChecked}

              onChange={e => setTestStatusChecked(e.target.checked)}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
              label="Gilad Gray"
            />} label="Status" />
        </div>
          
      </div>

      <div>
      

    </div>              
 

  </div>
  <div>
      
</div>
      
    </Box> 
    <hr></hr>    
                  </div>
              </div>
          </div>   


{/* <br></br>
    <br></br>
    <br></br>
      <div className="d-flex justify-content-between m-2">
        {/* <h2>Create</h2> */}
        {/* {headwidget}
        <Link to="/customer/cusdatagrid">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      {warningmessage}
       <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                      <tbody>
        <tr>
        
          <td class="productionOrderReportSearchTD">
          {nameFieldWidget}
          </td>

          
          <td class="productionOrderReportSearchTD">
          {companyprefixFieldWidget}
          </td>
        </tr>
        
        <tr>
       
        <td class="productionOrderReportSearchTD">
          {companyglnFieldWidget}
          </td>

          
                      <td class="productionOrderReportSearchTD">
          {addressFieldWidget}
          </td>
        </tr>
        
        <tr>
       
                      <td class="productionOrderReportSearchTD">
          {zipFieldWidget}
          </td>

          
                      <td class="productionOrderReportSearchTD">
          {groupfield}
          </td>
        </tr>
       

        <tr>
        
                      <td class="productionOrderReportSearchTD">
          {createdbyFieldWidget}
          </td>

          
                      <td class="productionOrderReportSearchTD">
                      {statusfield}
                      </td>
        </tr>

     
      <tr>
      <td class="productionOrderReportSearchTD">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        </td>
        </tr>
      </tbody>
      </table>
     */}

    </>
  );
}

export default CustomerDataEntry
