import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
function TracelinkSetting() {
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
                 
  const [showPassword, setShowPassword] = React.useState(false);              
                    //   For navigate function
  const navigate = useNavigate();
          ////    for receiving the parameters from URL
  const { operation } = useParams();
  const {uniqueID} =useParams();
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
                 
                 

  function getTracelinkEditdata(){
       
        axios
            .get("http://127.0.0.1:8000/master/tracelink/"+uniqueID+"/")
                .then((res)=>{
                  // alert(res.data[0].file_sender)
                    setFilesender(res.data[0].file_sender);
                    setTitle(res.data[0].title);
                    setSftphost(res.data[0].sftp_host);
                    setSftppassword(res.data[0].sftp_password);
                    setSftpport(res.data[0].sftp_port);
                    setPassword(res.data[0].tracelink_password);
                    setSftpusername(res.data[0].sftp_username);
                    setSiteid(res.data[0].siteid);
                    setUrl(res.data[0].url);
                    setUsername(res.data[0].tracelink_username)
                    setfilereceiver(res.data[0].file_receiver);
                    setsendingsystem(res.data[0].sending_system)
                    })
            }
            
            
  useEffect(()=>{
    getTracelinkEditdata()
  },[]) 
  
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
                   //if(operation=='new'){
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
              label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">            Enter Company Tracelink Details </font></h4></pre></h4>}
             
       
     />
     </Box>
        
   

  var titlewidget= <TextField required
  id="outlined-title"
  label="Title"
               
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                 
  var urlwidget= <TextField required
                  id="outlined-url"
                  label="Url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                 
  var usernamewidget=<TextField required
                      id="outlined-tracelinkusername"
                      label="Tracelink Username"
                      value={tracelink_username}
                      onChange={(e) => setUsername(e.target.value)}
                      />
                 
  var siteidwidget =<TextField required 
                      id="outlined-siteid"
                      label="Site Id"
                      value={siteid}
                      onChange={(e)=> setSiteid(e.target.value)}
                    />
                 
  var sftpportwidget =<TextField required     
                        label="Sftp Port"
                        id="outlined-sftpport"
                        value={sftp_port}
                        onChange={(e)=> setSftpport(e.target.value)}
                      />
                 
  var sftppasswordwidget =<TextField required 
                            id="outlined-sftppassword"
                            label="Sftp Password"
                            value={sftp_password}
                            onChange={(e)=> setSftppassword(e.target.value)}

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
                 
  var filesenderwidget =<TextField required 
                       id="outlined-filesender"
                       label="File Sender"
                        value={file_sender}
                        onChange={(e)=> setFilesender(e.target.value)}
                        />
                 
                 
  var sendingsystemwidget =<TextField required
                            
  id="outlined-sendingsystem"
  label="Sending System"
                            value={sending_system}
                            onChange={(e)=> setsendingsystem(e.target.value)}
                          />
                                     
  var passwordwidget =<TextField required
                      id="outlined-tracelinkpassword"
                      label="Tracelink Password"
                        value={tracelink_password}
                        onChange={(e)=> setPassword(e.target.value)}

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
                 
                 
  var sftphostwidget =<TextField required
                        id="outlined-sftphost"
                        label="Sftp Host"
                        value={sftp_host}
                        onChange={(e)=> setSftphost(e.target.value)}
                      />
                 
                 
                 
                 
  var sftpusernamewidget =<TextField required
                            id="outlined-sftpusername"
                            label="Sftp Username"
                            value={sftp_username}
                            onChange={(e)=> setSftpusername(e.target.value)}
                          />
                 
                 
  var filereceiverwidget =<TextField required
                            id="outlined-filereceiver"
label="File Receiver"
                            value={file_receiver}
                            onChange={(e)=> setfilereceiver(e.target.value)}
                          />
                 //}
                 
  const handleSubmit = (e) => {
                                e.preventDefault();
                                console.log("clicked");
                                     // alert(address);
                 
                 //if(operation === 'new') {
                  // alert(siteid)            // alert(company_name)
        axios
         
            .put(`http://127.0.0.1:8000/master/tracelink/update/${uniqueID}`, 
                                                   
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
                                     
                      )
                        .then(() => {
                                  navigate("/company");
                                });
                                                     
                      }
                 //}
                                 
  return (
            <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    <div class="container-fluid">
              <div class="card shadow mb-4" id="companytracelinkfullcard"> 
                  <div class="card-header py-3" id="customercardhead">
                      <div className='row'>
                          <div className='col-10' id="companytracelinkcardhead">
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
          {/* {warningmessage} */}
         
          {titlewidget}

          {urlwidget}

          {usernamewidget}
  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
          <div>

        
          {siteidwidget}
           
          {sftpportwidget}

          {sftppasswordwidget}
        
            
          </div>

          <div >
          {filesenderwidget}
          {sendingsystemwidget}
        
          {passwordwidget}
       
        
          
      </div>

      <div>
      {sftphostwidget}
      {sftpusernamewidget}
      {filereceiverwidget}
    

    </div>              
   

  </div>
  <br></br> 
  <div>
     
</div>

    </Box> 
    <br></br>
    <hr></hr>    
                  </div>
              </div>
          </div>  


                {/* <br></br>
                <br></br>
                <br></br>
                      <Box sx={{ display: 'flex' }}> 
                      
                        <Box component="main" sx={{ flexGrow: 1, p: 1}}>


                                   

                                       
                                
                                       <div className="d-flex justify-content-between m-2">
                     <h2>Tracelink Settings</h2>
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
                    <td class="productionOrderReportSearchTD">Title</td>
                    <td class="productionOrderReportSearchTD">
                    {titlewidget}
                    </td>

                   
                     <td class="productionOrderReportSearchTD"> Url</td>
                     <td class="productionOrderReportSearchTD">
                    {urlwidget}
                    </td>

                  
                    <td class="productionOrderReportSearchTD">Username</td>
                     <td class="productionOrderReportSearchTD">
                    {usernamewidget}
                    </td>
                                  
                    
                    </tr>
                    <br></br>
                                   
                                   
                   
                     
                    
                                   
                                   <tr>
                                   <td class="productionOrderReportSearchTD"> SiteId</td>
                                   <td class="productionOrderReportSearchTD">
                                   {siteidwidget}
                                   </td>
                                

                                   
                                   <td class="productionOrderReportSearchTD">Sftp Port</td>
                                   <td class="productionOrderReportSearchTD">
                                   {sftpportwidget}
                                   </td>

                                 
                                   <td class="productionOrderReportSearchTD"> Sftp Password</td>
                                   <td class="productionOrderReportSearchTD">
                                   { sftppasswordwidget}
                                   </td>
                                  
                                  
                                   </tr>
                                   <br></br>
                                   
                                   
                                   <tr>
                                   <td class="productionOrderReportSearchTD"> File Sender</td>
                                   <td class="productionOrderReportSearchTD">
                                   {filesenderwidget}
                                   </td>

                                  
                                   <td class="productionOrderReportSearchTD">Sending System</td>
                                   <td class="productionOrderReportSearchTD">
                                   {sendingsystemwidget}
                                   </td>
                                   
                                   <td class="productionOrderReportSearchTD">Password</td>
                                   <td class="productionOrderReportSearchTD">
                                   {passwordwidget}
                                   </td>
                                   
                                  
                                   </tr>
                                   
                                   <br></br>
                                   <tr>
                                   <td class="productionOrderReportSearchTD">Sftp Host</td>
                                   <td class="productionOrderReportSearchTD">
                                   {sftphostwidget}
                                   </td>

                                  
                                   <td class="productionOrderReportSearchTD">Sftp Username</td>
                                   <td class="productionOrderReportSearchTD">
                                   {sftpusernamewidget}
                                   </td>
                                   
                                   
                                   <td class="productionOrderReportSearchTD">File Receiver</td>
                                   <td class="productionOrderReportSearchTD">
                                   {filereceiverwidget}
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
                                       </div>
                              </Box>
                              </Box> */}
                                  </>
                   )
}

export default TracelinkSetting
