import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";


import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import NativeSelect from '@mui/material/NativeSelect';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
function ProviderDataEdit() {
  const[id,setId]=useState("");
  const[ title,setTitle]=useState("");
  const[url,setUrl]=useState("");
  const[tracelink_username,setUsername]=useState("");
  const[siteid,setSiteid]=useState("");
  const[ sftp_port,setSftpport]=useState("");
  const[sftp_password,setSftppassword]=useState("");
  const[file_sender,setFilesender]=useState("");
  const[sending_system,setsendingsystem]=useState("");
  const[tracelink_password,setPassword]=useState("");
  const[sftp_host,setSftphost]=useState("");
  const[sftp_username,setSftpusername]=useState("");
  const[file_receiver,setfilereceiver]=useState("");



  const [erp, setErp] = useState("");
  const [sap_client, setSapclient] = useState("");
  const [sap_destination ,setDestination] = useState("");
  const [sap_language,setLanguage] = useState("");
  const [sap_password, setSapPassword] = useState("");
  const [sap_pool_size,setPoolsize] =useState("");
  const[sap_server_host,setServerhost] =useState("");
  const[sap_service,setSapservice]=useState("");
  const[sap_system_id,setSapsystemid]=useState("");
  const[sap_sytem_number,setSystemnumber]=useState("");
  const[sap_user,setUser]=useState("");
  const [companyEditID,setCompanyEditID]=useState("");   
  //   For navigate function
  const navigate = useNavigate();
 ////    for receiving the parameters from URL
  const {operation} = useParams();
  const {extrafield} = useParams();
  const {uniqueID} =useParams();
 
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
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
  function  getTracelinkEditRequestData() {
    if (extrafield === "tracelink"){

      axios
      .get("http://localhost:8000//master/tracelink/",
      {
      //   auth: {
      //     username: username,
      //     password: password
      //  }
      },
      {
        'param': 'vbc' 
      }
    )
      .then((res)=>{
  //alert(res.data[0].tracelink_username)
        setId(res.data[0].id);
      
        setTitle(res.data[0].title);
        setUrl(res.data[0].url);
        
        setUsername(res.data[0].tracelink_username);
        setSiteid(res.data[0].siteid);
        
        setSftpport(res.data[0].sftp_port);
      
        setSftppassword(res.data[0].sftp_password);
        setFilesender(res.data[0].file_sender);
        setsendingsystem(res.data[0].sending_system);
        setPassword(res.data[0].tracelink_password);
        setSftphost(res.data[0].sftp_host);
        setSftpusername(res.data[0].sftp_username);
        setfilereceiver(res.data[0].file_receiver);
        
    
  
  
      })
  
    }
    else if (extrafield === "sap"){
      axios
      .get("http://localhost:8000//master/erpsettings/")
      .then ((res)=>{
        setId(res.data[0].id);
        setErp(res.data[0].erp);
        setLanguage(res.data[0]. sap_language);
        setSapPassword(res.data[0].sap_password);
        setPoolsize(res.data[0].sap_pool_size);
        setSapclient(res.data[0].sap_client);
        setSapservice(res.data[0].sap_service);
        setServerhost(res.data[0].sap_server_host);
        setSystemnumber(res.data[0].sap_sytem_number);
        setSapsystemid(res.data[0]. sap_system_id);
        setUser(res.data[0].sap_user)
        setDestination(res.data[0].sap_destination);
      })
    }
  
  // if (extrafield == "sap"){
  //   axios
  //   .get("http://127.0.0.1:8000/master/erpsettings/",
  //   {
  //     auth: {
  //       username: username,
  //       password: password
  //    }
  //   },
  //   {
  //     'param': 'vbc' 
  //   }
  //   )
  //   .then((res)=>{
  // alert(res.data[0].tracelink_username)
  //     setId(res.data[0].id);
    
  //     setTitle(res.data[0].title);
  //     setUrl(res.data[0].url);
      
  //     setUsername(res.data[0].tracelink_username);
  //     setSiteid(res.data[0].siteid);
      
  //     setSftpport(res.data[0].sftp_port);
  //     setSftppassword(res.data[0].sftp_port);
  //     setSftppassword(res.data[0].sftp_password);
  //     setFilesender(res.data[0].file_sender);
  //     setsendingsystem(res.data[0].sending_system);
  //     setPassword(res.data[0].tracelink_password);
  //     setSftphost(res.data[0].sftp_host);
  //     setSftpusername(res.data[0].sftp_username);
  //     setfilereceiver(res.data[0].file_receiver);
      
  
  
  
  //   })
  
  
    
  // }

  }








 
  useEffect(() => {
    
    getTracelinkEditRequestData();

  }, []);

  const navigateToCreatePage = () => {
    navigate("/gtinpool");
  };


  if(extrafield==='tracelink'&& operation==='edit'){
    var gtinbutton=<button align='right'

    onClick={navigateToCreatePage} 
    className="btn btn-success">Gtin Pool</button>
    var headwidget=
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
                  
                  
        }}
      >
      <Controls.Input 
                  disabled
                  fullWidth
            
                  id="outlined-Company Prefix"
                  // label={<Typography>Customer  Create</Typography>}
                  label={<span ><pre><h4 style={{color:"white"}}>               Enter Tracelink Data </h4></pre></span>}
                

      />
    </Box>

    var titlelabel=<label >Title</label>
    var titlewidget= 
                  // <input type="text"  
                  //  className="form-control form-control-sm"
                   
                  //  onChange={(e) => setTitle(e.target.value)}
                  //  value={title}
                  //  />
                   <TextField required
                      label="Title"
                      id="outline-Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      /> 
      var urllabel=<label >Url</label>
      var urlwidget= 
                  // <input type="text" 
                  //  className="form-control form-control-sm"
                  //  onChange={(e) => setUrl(e.target.value)}
                  //  value={url}
                  //  />

                   <TextField required
                      label="Url"
                      id="outline-Url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      /> 
        var usernamelabel=<label >Username</label>
        var usernamewidget=
                  // <input type="text" 
                  //  className="form-control form-control-sm"
                  //  value={tracelink_username}
                  //  onChange={(e) => setUsername(e.target.value)}
                  
                  //  />
                   <TextField required
                      label="Username"
                      id="outline-Username"
                      value={tracelink_username}
                      onChange={(e) => setUsername(e.target.value)}
                      /> 
        var siteidlabel=<label >SiteId</label>
        var siteidwidget =
                // <input type="text" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setSiteid(e.target.value)}
                //    value={siteid}
                //    />
                   <TextField required
                      label="SiteId"
                      id="outline-SiteId"
                      value={siteid}
                      onChange={(e)=> setSiteid(e.target.value)}
                      /> 
          var sftpportlabel=<label >Sftpport</label>
          var sftpportwidget =
            // <input type="text"      
            //        className="form-control form-control-sm"
            //        onChange={(e)=> setSftpport(e.target.value)}
            //        value={sftp_port}
            //        />
                   <TextField required
                      label="Sftpport"
                      id="outline-Sftpport"
                      value={sftp_port}
                      onChange={(e)=> setSftpport(e.target.value)}
                      /> 
          var sftppasswordlabel=<label >Sftppassword</label>
          var sftppasswordwidget =
                // <input type="password" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setSftppassword(e.target.value)}
                //    value={sftp_password}
                //    />
                   <TextField required
                      label="Sftppassword"
                      id="outline-Sftppassword"
                      value={sftp_password}
                      onChange={(e)=> setSftppassword(e.target.value)}
                      /> 
            var filesenderlabel=<label >Filesender</label>
            var filesenderwidget =
                // <input type="text" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setFilesender(e.target.value)}
                //    value={file_sender}
                //    />
                   <TextField required
                      label="Filesender"
                      id="outline-Filesender"
                      value={file_sender}
                      onChange={(e)=> setFilesender(e.target.value)}
                      /> 

            var sendingsystemlabel=<label >SendingSystem</label>
            var sendingsystemwidget =
                // <input type="text" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setsendingsystem(e.target.value)}
                //    value={sending_system}
                //    />
                   <TextField required
                      label="SendingSystem"
                      id="outline-SendingSystem"
                      value={sending_system}
                      onChange={(e)=> setsendingsystem(e.target.value)}
                      /> 
                   var passwordlabel=<label >Password</label>   
            
            
            
            
            
            
                   var passwordwidget =
                // <input type="password" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setPassword(e.target.value)}
                //    value={tracelink_password}
                //    />
                   <TextField required
                      label="Password"
                      id="outline-Password"
                      value={tracelink_password}
                      onChange={(e)=> setPassword(e.target.value)}
                      /> 

                   var sftphostlabel=<label >SftpHost</label>
var sftphostwidget =
              // <input type="text" 
              //      className="form-control form-control-sm"
              //      onChange={(e)=> setSftphost(e.target.value)}
              //      value={sftp_host}
              //      />
                   <TextField required
                      label="SftpHost"
                      id="outline-SftpHost"
                      value={sftp_host}
                      onChange={(e)=> setSftphost(e.target.value)}
                      /> 



var sftpusernamelabel=<label >Sftpusername</label>


var sftpusernamewidget =
                  // <input type="text" 
                  //  className="form-control form-control-sm"
                  //  onChange={(e)=> setSftpusername(e.target.value)}
                  //  value={sftp_username}
                  //  />
                   <TextField required
                   label="Sftpusername"
                   id="outline-Sftpusername"
                   value={sftp_username}
                   onChange={(e)=> setSftpusername(e.target.value)}
                   /> 
                   var filereceiverlabel=<label >File Receiver</label>

var filereceiverwidget =
                // <input type="text" 
                //    className="form-control form-control-sm"
                //    onChange={(e)=> setfilereceiver(e.target.value)}
                //    value={file_receiver}
                //    />

                   <TextField required
                   label="File Receiver"
                   id="outline-File Receiver"
                   value={file_receiver}
                   onChange={(e)=> setfilereceiver(e.target.value)}
                   /> 
}

else if(extrafield==="sap"&& operation==='edit'){
  var headwidget=
  <Box
                sx={{
                width: 500,
                maxWidth: '100%',
                  
                  
                }}
                >
      <Controls.Input 
                  disabled
                  fullWidth
            
                  id="outlined-Company Prefix"
                  // label={<Typography>Customer  Create</Typography>}
                  label={<span ><pre><h4 style={{color:"white"}}>                   Enter Erp Data </h4></pre></span>}
                

/>
</Box>
  var erplabel=<label >Erp</label>
  var erpwidget =
  // <select  class="form-select" aria-label="Default select example" onChange={(e) => setErp(e.target.value)} value={erp}>
  //                     <option value="">Select</option>
  //                     <option value="sap rpc">SAP Rpc</option>
  //                     </select>
                      
  <FormControl sx={{ m: 1, width: 225 }}>
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
    var sapclientlabel=<label >Sap Client</label>              
  var sapclientFieldWidget = 
                  // <input
                  //     type="text"
                  //     className="form-control form-control-sm"
                  //     onChange={(e) => setSapclient(e.target.value)}
                  //     value={sap_client}
                  //     /> 
                      <TextField required
                      label="Sap Client"
                      id="outline-Sap Client"
                      value={sap_client}
                      onChange={(e) => setSapclient(e.target.value)}
                      /> 
                      var sapdestinationlabel=<label >Sap Destination</label>
  var sapdestinationFieldWidget = 
                  // <input
                  //     type="text"
                  //     className="form-control form-control-sm"
                  //     onChange={(e) => setDestination(e.target.value)}
                  //     value={sap_destination}
                  //     /> 
                      <TextField required
                      label="Sap Destination"
                      id="outline-Sap Destination"
                      value={sap_destination}
                      onChange={(e) => setDestination(e.target.value)}
                      /> 
                      var languagelabel=<label >Language</label>                 
  var langFieldWidget = 
                  // <input
                  //     type="text"
                  //     className="form-control form-control-sm"
                  //     onChange={(e) => setLanguage(e.target.value)}
                  //     value={sap_language}
                  //     /> 
                      <TextField required
                      label="Language"
                      id="outline-Language"
                      value={sap_language}
                      onChange={(e) => setLanguage(e.target.value)}
                      /> 
                      var sappasswordlabel=<label >Sap Password</label>
  var passwordFieldWidget = 
                    // <input
                    //   type="text"
                    //   className="form-control form-control-sm"
                    //   onChange={(e) => setSapPassword(e.target.value)}
                    //   value={sap_password}
                    //   /> 
                      <TextField required
                      label="Sap Password"
                      id="outline-Sap Password"
                      value={sap_password}
                      onChange={(e) => setSapPassword(e.target.value)}
                      /> 
                  
                  //   var producedFieldWidget = <input
                  //   type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setProduced(e.target.value)}
var poollabel=<label >Pool</label>         // /> 
                  
var poolFieldWidget = 
                    // <input
                    //   type="text"
                    //   className="form-control"
                    //   aria-describedby="emailHelp"
                    //   onChange={(e) => setPoolsize(e.target.value)}
                    //   value={sap_pool_size}
                    //   />
                      <TextField required
                      label=" Sap Pool Size"
                      id="outline-Sap Password"
                      value={sap_pool_size}
                      onChange={(e) => setPoolsize(e.target.value)}
                      /> 
                    var serverlabel=<label >Server</label>
  var serverFieldWidget = 
                // <input
                //       type="text"
                //       className="form-control"
                //       aria-describedby="emailHelp"
                //       onChange={(e) => setServerhost(e.target.value)}
                //       value={sap_server_host}
                //       />
                      <TextField required
                      label=" Sap Server Host"
                      id="outline-Sap Password"
                      value={sap_server_host}
                      onChange={(e) => setServerhost(e.target.value)}
                      /> 
                      var servicelabel=<label >Service</label>
  var serviceFieldWidget = 
                    // <input
                    //   type="text"
                    //   className="form-control"
                    //   aria-describedby="emailHelp"
                    //   onChange={(e) => setSapservice(e.target.value)}
                    //   value={sap_service}
                    //   />
                      <TextField required
                      label="Service"
                      id="outline-Service"
                      value={sap_service}
                      onChange={(e) => setSapservice(e.target.value)}
                      /> 
                      var systemidlabel=<label >System id</label>
  var systemidFieldWidget = 
                      // <input
                      // type="text"
                      // className="form-control"
                      // aria-describedby="emailHelp"
                      // onChange={(e) => setSapsystemid(e.target.value)}
                      // value={sap_system_id}
                      // />
                      <TextField required
                      label="System Id"
                      id="outline-Service"
                      value={sap_system_id}
                      onChange={(e) => setSapsystemid(e.target.value)}
                      /> 
                      var systemnumberlabel=<label >System Number</label>
  var systemnumberFieldWidget = 
                    // <input
                    //   type="text"
                    //   className="form-control"
                    //   aria-describedby="emailHelp"
                    //   onChange={(e) => setSystemnumber(e.target.value)}
                    //   value={sap_sytem_number}
                    //   />
                      <TextField required
                      label="System Number"
                      id="outline-System Number"
                      value={sap_sytem_number}
                      onChange={(e) => setSystemnumber(e.target.value)}
                      /> 
                      var sapuserlabel=<label > SapUser</label>
  var userFieldWidget = 
                  // <input
                  //     type="text"
                  //     className="form-control"
                  //     aria-describedby="emailHelp"
                  //     onChange={(e) => setUser(e.target.value)}
                  //     value={sap_user}
                  //     />
                      <TextField required
                      label="SapUser"
                      id="outline-SapUser"
                      value={sap_user}
                      onChange={(e) => setUser(e.target.value)}
                      /> 
}

const handleSubmit = (e) => {
                   e.preventDefault();
                   console.log("clicked");
                   // alert(address);

if(extrafield === 'tracelink') {
// alert(company_name)
  axios
     .put(`http://localhost:8000//master/tracelink/update/1`, 
                                        
{
                  "title":title,  
                   "url":url, 
                   "tracelink_username":tracelink_username, 
                   "siteid":siteid, 
                   "sftp_port":sftp_port, 
                   "sftp_password":sftp_password,   
                   "file_sender":file_sender,
                   "sending_system":sending_system,
                   "tracelink_password":tracelink_password,
                   "sftp_host":sftp_host,
                   "sftp_username":sftp_username,
                   "file_receiver":file_receiver,
                  

                   },
                   {
                  //  auth: {
                  //  username: username,
                  //   password: password
                  //   }
                   }
                   )
                   .then(() => {
                   navigate("/company");
                   });
                                   
                   }

                  else if(extrafield ==="sap") {

                    axios
                                        .put('http://localhost:8000//master/erp/update/1', 
                                          
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
                                               'sap_user': sap_user
                                               
                                               
                                            },
                                            {
                                              // auth: {
                                              //   username: username,
                                              //   password: password
                                              // }
                                            }
                                            )
                                            .then(() => {
                                              navigate("/company/compropertydatagrid");
                                            });
                  }                
}


               
 return (
  <>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  
  
 <div class="container-fluid">
  
 &nbsp;
           <div class="card shadow mb-4" id="customerfullcard"> 
               <div class="card-header py-3" id="customercardhead">
                   <div className='row'>
                       <div className='col-10' id="customerhead">
                       {headwidget}
                       </div>
                      
                   </div>
                                                   
               </div>
               <br></br>
               <div>
               &nbsp;&nbsp;&nbsp;&nbsp;{gtinbutton}
               </div>

              
               <div class="card-body">  
            
             
   
   <Box 
   component="form"
   sx={{
     '& .MuiTextField-root': { m: 2, width: '25ch' },
   }}
   noValidate
   autoComplete="off"
 >
<div className="container" id="customertracelinkbox" >
 <div className="row" >
   <div className="col-4">
   {titlewidget}
   <br></br>
   <div id="saperpbox">
   {erpwidget}
   </div>

   {urlwidget}{sapclientFieldWidget}

   {usernamewidget}{sapdestinationFieldWidget}

   {siteidwidget} {langFieldWidget}

   </div>
   
   <div className="col-4">
   {sftpportwidget}{passwordFieldWidget}

   { sftppasswordwidget}{poolFieldWidget}

   {filesenderwidget}{serverFieldWidget}

   {sendingsystemwidget}{serviceFieldWidget}
   </div>

   <div className="col-2">
  
   {passwordwidget}{systemidFieldWidget}
   
  
   {sftphostwidget}{systemnumberFieldWidget}

   {sftpusernamewidget}{userFieldWidget}

   {filereceiverwidget}
   </div>

   <div className="col-2" id="sandtlinkbutton" >
   <button  onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                   
   </button>
   </div>


 </div>
</div>
</Box>
<hr></hr>    
               </div>
           </div>
       </div>   
   </>    
 )
}

export default ProviderDataEdit
