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
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
function ErpSettings() {
  const [id, setId] = useState(0);
  const [erp, setErp] = useState("");
  const [sap_client, setSapclient] = useState("");
  const [sap_destination ,setDestination] = useState("");
  const [sap_language,setLanguage] = useState("");
  const [sap_password, setPassword] = useState("");
  const [sap_pool_size,setPoolsize] =useState("");
  const[sap_server_host,setServerhost] =useState("");
  const[sap_service,setSapservice]=useState("");
  const[sap_system_id,setSapsystemid]=useState("");
  const[sap_sytem_number,setSystemnumber]=useState("");
  const[sap_user,setUser]=useState("");
  const [companyEditID,setCompanyEditID]=useState("");                    
  const [showPassword, setShowPassword] = React.useState(false);
    ///   For navigate function
  const navigate = useNavigate();
                    
      const { operation } = useParams();
      const {uniqueID} =useParams();
      var loggedInUsername=window.localStorage.getItem('loggedInUsername')

      var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')


    function getErpdataEdit(){
      axios
      .get("http://127.0.0.1:8000/master/companyerp/"+uniqueID+"/",
      )
      
      .then((res)=>{
        setErp(res.data[0].erp);
        setSapclient(res.data[0].sap_client);
        setPoolsize(res.data[0].sap_pool_size);
        setDestination(res.data[0].sap_destination);
        setSapservice(res.data[0].sap_service);
        setLanguage(res.data[0]. sap_language);
        setPassword(res.data[0]. sap_password);
        setSapsystemid(res.data[0].sap_system_id);
        setServerhost(res.data[0].sap_server_host);
        setSystemnumber(res.data[0].sap_sytem_number);
        setUser(res.data[0].sap_user);
      })

    }   
    
  useEffect(()=>{
    getErpdataEdit();
  },[])
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
        borderRadius: 6,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })); 
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
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
                    // if(operation === 'new') {
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
                      // fullWidth
                      
                          id="outlined-Company Prefix"
                          label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                Enter Company Erp Details</font> </h4></pre></h4>}
                           
                     
                   />
                   </Box>
                      
    var erpwidget   =
  //   <FormControl sx={{ m: 1 }} variant="standard" >
  //   <InputLabel htmlFor="demo-customized-select-native">Erp</InputLabel>
  //   <div id="companyerp">
  //   <NativeSelect 
     
  //     id="demo-customized-select-native"
  //     value={erp}
  //     MenuProps={MenuProps}
  //     onChange={(e) => setErp(e.target.value)}
  //     input={<BootstrapInput />}
  //   >
  //     <option aria-label="None" value="" />
  //     <option value="">Select</option>
  //   <option value="sap rpc">SAP Rpc</option>
  //   </NativeSelect>
  //   </div>
  // </FormControl>  

  <FormControl sx={{ m: 1, width: 220 }}>
    <InputLabel id="demo-multiple-name-label">Erp</InputLabel>
      <NativeSelect
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      multiple
      value={erp}
      onChange={(e) => setErp(e.target.value)}
      input={<OutlinedInput label="Erp" />}
      MenuProps={MenuProps}
  >
    <option aria-label="None" value="" />
       <option value="">Select</option>
     <option value="sap rpc">SAP Rpc</option>
     </NativeSelect>
</FormControl>

// var erpwidget =<select  class="form-select" aria-label="Default select example" onChange={(e) => setErp(e.target.value)} value={erp}>
//                                         <option value="">Select</option>
//                                         <option value="sap rpc">SAP Rpc</option>
//                                         </select>
                                    
    var sapclientFieldWidget = <TextField required
                                        id="outlined-sapclient"
                                        label="Sap Client"
                                        onChange={(e) => setSapclient(e.target.value)}
                                        value={sap_client}
                                        /> 
    var sapdestinationFieldWidget = <TextField

                                        required
                                        id="outlined-sapdestination"
                                        label="Sap Destination"
                                        onChange={(e) => setDestination(e.target.value)}
                                        value={sap_destination}
                                        /> 
                                        
    var langFieldWidget = <TextField  required
                                        id="outlined-saplanguage"
                                        label="Sap Language"
                                        onChange={(e) => setLanguage(e.target.value)}
                                        value={sap_language}
                                        /> 
    var passwordFieldWidget = <TextField required
                                  id="outlined-sappassword"
                                  label="Sap Password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={sap_password}
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                  // value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                    )
                                  }}
                                        /> 
                                    
                                    //   var producedFieldWidget = <input
                                    //   type="text"
                                    //   className="form-control form-control-sm"
                                    //   onChange={(e) => setProduced(e.target.value)}
                                    // /> 
                                    
    var poolFieldWidget = <TextField required
                                      
                                        id="outlined-sappoolsize"
                                        label="Sap poolsize"
                                        onChange={(e) => setPoolsize(e.target.value)}
                                        value={sap_pool_size}
                                        />
      var serverFieldWidget = <TextField required
                                        label="Sap Serverhost"
                                        id="outlined-serverhost"
                                        onChange={(e) => setServerhost(e.target.value)}
                                        value={sap_server_host}
                                        />
      var serviceFieldWidget = <TextField
                                        required
                                        label="Sap Service"
                                        id="outlined-sapservice"
                                        onChange={(e) => setSapservice(e.target.value)}
                                        value={sap_service}
                                        />
      var systemidFieldWidget = <TextField required
                                        id="outlined-sapsystemid"
                                        label="Sap SystemId"
                                        onChange={(e) => setSapsystemid(e.target.value)}
                                        value={sap_system_id}
                                        />
                                    
      var systemnumberFieldWidget = <TextField required
                                        id="outlined-sapsystemnumber"
                                        label="Sap SystemNumber"
                                        onChange={(e) => setSystemnumber(e.target.value)}
                                        value={sap_sytem_number}
                                        />
      var userFieldWidget = <TextField required
                                        id="outlined-sapuser"
                                        label="Sap User"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={sap_user}
                                        />
                    // }
                    
    const handleSubmit = (e) => {
              e.preventDefault();
                  console.log("clicked");
                                        //alert(address);
                                        // companyEditID=uniqueID;
                    //  alert(sap_service);
                                        // if(operation === 'new') {
                        axios
                            .put(`http://127.0.0.1:8000/master/companyerp/update/${uniqueID}`, 
                                          
                                {
                                  "erp":erp,    
                                  "sap_client":sap_client,
                                  "sap_destination":sap_destination,
                                  "sap_language":sap_language,
                                      
                                              
                                  "sap_password":sap_password,
                                  "sap_pool_size":sap_pool_size,
                                  'sap_server_host':sap_server_host,
                                             
                                  "sap_service":sap_service,
                                  'sap_system_id':sap_system_id,
                                  'sap_sytem_number':sap_sytem_number,
                                  'sap_user': sap_user,
                                  "loggedInUsername":loggedInUsername,

                                  "loggedInUserrole":loggedInUserrole
                                               
                                               
                              },
                                            
                        )
                        .then(() => {
                                      navigate("/company");
                                    });
                                  }
  return (
            <>

<br></br>
    <div class="container-fluid">
              <div class="card shadow mb-4" id="companyerpfullcard"> 
                  <div class="card-header py-3" id="customercardhead">
                      <div className='row'>
                          <div className='col-10' id="companyerphead">
                          {headwidget}
                          </div>
                      </div>
                                                      
                  </div>

                  <div class="card-body">  
                  <br></br>
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
      {/* <div id= "companyerp">
         {erpwidget}

         
         </div> */}
      <div>
          {/* {warningmessage} */}
         
         
         {/* <span id ="companyerp">{erpwidget}</span> */}
         {sapclientFieldWidget}

          {sapdestinationFieldWidget}
          {langFieldWidget}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

          {passwordFieldWidget}

           
          {poolFieldWidget}

          {serverFieldWidget}
        

            
          </div>

          <div >
         
          {systemidFieldWidget}
          {systemnumberFieldWidget}
          {userFieldWidget}
         

      <div id= "companyerp">
         {erpwidget}
         

         
         </div>
         <div id="companyservice">
         {serviceFieldWidget}
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




                    
                                                           
{/*                    
                              <div className="d-flex justify-content-between m-2">
                                        <h2>Erp settings</h2>
                                        <Link to="/company/tracelinkdatagrid">
                                        <button className="btn btn-primary">Show Data</button>
                                         </Link>
                                       </div>
                                                       
                    <div class="container">
                         <div class="row">
                           
                               <div class="col-12">
                                                       
                                        <div className="d-flex justify-content-between m-2">
                                                            
                                        </div>
                                                          
                                                       
                                                       
                    <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                    <tbody>
                    <tr>
                                        <td class="productionOrderReportSearchTD">Erp</td>
                                        <td class="productionOrderReportSearchTD">
                                        {erpwidget}
                                        </td>

                                       
                                         <td class="productionOrderReportSearchTD"> Sapclient</td>
                                         <td class="productionOrderReportSearchTD">
                                         {sapclientFieldWidget}
                                        </td>

                                       
                                        <td class="productionOrderReportSearchTD">Sap destination</td>
                                         <td class="productionOrderReportSearchTD">
                                         {sapdestinationFieldWidget}
                                        </td>
                                        
                                        
                                        
                                        </tr>
                                        <br></br>
                                                       
                                                       
                                       
                                         
                                                       
                                      <tr>
                                        <td class="productionOrderReportSearchTD"> Sap Language</td>
                                        <td class="productionOrderReportSearchTD">
                                          {langFieldWidget}
                                        </td>

                                       
                                        <td class="productionOrderReportSearchTD">Sap Password</td>
                                        <td class="productionOrderReportSearchTD">
                                          {passwordFieldWidget}
                                        </td>

                                       
                                        <td class="productionOrderReportSearchTD"> Sap PoolSize</td>
                                        <td class="productionOrderReportSearchTD">
                                          {poolFieldWidget}
                                        </td>
                                      
                                      
                                      </tr>
                                      
                                      <br></br>
                                      <tr>
                                        <td class="productionOrderReportSearchTD"> Sap Serverhost</td>
                                        <td class="productionOrderReportSearchTD">
                                          {serverFieldWidget}
                                        </td>

                                        
                                          <td class="productionOrderReportSearchTD">Sap Service</td>
                                          <td class="productionOrderReportSearchTD">
                                            {serviceFieldWidget}
                                          </td>
                                        
                                          
                                          <td class="productionOrderReportSearchTD">Sap systemid</td>
                                          <td class="productionOrderReportSearchTD">
                                            {systemidFieldWidget}
                                          </td>
                                        
                                      </tr>
                                        <br></br>
                                        
                                        <tr>
                                          <td class="productionOrderReportSearchTD">Sap SystemNumber</td>
                                          <td class="productionOrderReportSearchTD">
                                            {systemnumberFieldWidget}
                                          </td>

                                        
                                          <td class="productionOrderReportSearchTD">Sap User</td>
                                          <td class="productionOrderReportSearchTD">
                                            {userFieldWidget}
                                          </td>
                                       
                                        </tr>
                                        
                             <br></br>
                                        <tr>
                                          <td class="productionOrderReportSearchTD">
                                            <button className="btn btn-primary" onClick={handleSubmit} >Save</button>      
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                                       
                                  </div>
                                </div>
                              </div> */}
                                 
                            </>
                      )
}

export default ErpSettings
