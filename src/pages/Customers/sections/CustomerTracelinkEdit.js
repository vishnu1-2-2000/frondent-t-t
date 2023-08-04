import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../components/Sidnav/Sidebar";
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

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

function CustomerTracelinkEdit() {

const [id,setId]=useState();
const[title,setTitle]=useState();
const[url,setUrl]=useState();
const[tracelink_username,setTracelinkusername]=useState();
const [siteid,setSiteid]=useState();
const[sftp_port,setSftpport]=useState();
const[ sftp_password,setSftppassword]=useState();
const [file_sender,setFilesender]=useState();
const[sending_system,setsendingsystem]=useState();
const[tracelink_password,setTraclinkpassword]=useState();
const[sftp_host,setSfthost]=useState();
const[sftp_username,setSftpusername]=useState();
const[file_receiver,setfilereceiver]=useState();

const [showPassword, setShowPassword] = React.useState(false);

const navigate=useNavigate();

const {uniqueID}=useParams();

function getCustomerTracelinkdata(){
 
      axios.get("http://127.0.0.1:8000/master/customertracelink/"+ uniqueID+"/"
      )
      .then((res)=>{
        // alert("hi")
        setTitle(res.data[0].title);
        setUrl(res.data[0].url);
        setSftpport(res.data[0].sftp_port);
        setSftppassword(res.data[0].sftp_password);
        setfilereceiver(res.data[0].file_receiver);
        setTracelinkusername(res.data[0].tracelink_username);
        setTraclinkpassword(res.data[0].tracelink_password);
        setsendingsystem(res.data[0].sending_system);
        setSftpusername(res.data[0].sftp_username);
       setSfthost(res.data[0].sftp_host);
       setSiteid(res.data[0].siteid);
       setFilesender(res.data[0].file_sender);

      })              
}

const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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
                  label={<span ><pre><h4 style={{color:"white"}}>   Enter Customer Tracelink Data </h4></pre></span>}
                

/>
</Box>



var title_Widget = 
                    <TextField
                    required
     
                    label="Title"
                    color="secondary"
                    value={title}
                    InputLabelProps={{
                      shrink: true,
                    }}
                   
                  
                    onChange={(e) => setTitle(e.target.value)}
     
   />
   
// var title_Widget =<input
//                     type="text"
//                     className="form-control"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                       /> 
                      
var url_widget =<TextField
                    required

                    label="Url"

                    value={url}
                    InputLabelProps={{
                      shrink: true,
                    }}


                    onChange={(e)=> setUrl(e.target.value)} 

                    />


{/* <input 
                type="text"
                 className="form-control"
                 value={url}
                 onChange={(e)=> setUrl(e.target.value)} 
                 /> */}

var sftpportwidget =<TextField
                      required

                      label="Sftp Port"

                      value={sftp_port}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setSftpport(e.target.value)}

                      />

{/* <input
                 type="text"
                 className="form-control"
                 value={sftp_port}
                 onChange={(e)=> setSftpport(e.target.value)}
                 /> */}

var sftppasswordwidget =
 

                      
                    
                      //  <TextField
                      //  required

                      //  label="Sftp Password"

                      //  value={sftp_password}
                      //  InputLabelProps={{
                      //    shrink: true,
                      //  }}

                      //  onChange={(e)=> setSftppassword(e.target.value)}
                       
                      // />
                      <TextField
                              label='Sftp Password'
                              variant="outlined"
                              InputLabelProps={{
                                      shrink: true,
                                    }}
                              type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                              value={sftp_password}
                              onChange={(e)=> setSftppassword(e.target.value)}
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
                      

                    

                      // <input
                      //   type="text"
                      //   className="form-control"
                      //   value={sftp_password}
                      //   onChange={(e)=> setSftppassword(e.target.value)}
                      //   /> 
var filereceiverwidget =
                        <TextField
                        required

                        label="File Receiver"

                        value={file_receiver}
                        InputLabelProps={{
                          shrink: true,
                        }}


                        onChange={(e)=> setfilereceiver(e.target.value)}
                        />
              // <input
              //    type="text"
              //    className="form-control"
              //    value={file_receiver}
              //    onChange={(e)=> setfilereceiver(e.target.value)}
              //    /> 

var filesenderwidget =
                      <TextField
                      required

                      label="File Sender"

                      value={file_sender}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setFilesender(e.target.value)}
                      />
                //   <input
                //     type="text"
                //     className="form-control"
                //     value={file_sender}
                //     onChange={(e)=> setFilesender(e.target.value)}
                //  /> 
var tracelinkusernamewidget =
                      <TextField
                      required

                      label="Tracelink Username"

                      value={tracelink_username}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setTracelinkusername(e.target.value)}
                      />
{/* <input
                 type="text"
                 className="form-control"
                 value={tracelink_username}
                 onChange={(e)=> setTracelinkusername(e.target.value)}
                 />  */}

var tracelinkpasswordwidget =
                      // <TextField
                      // required

                      // label="Tracelink Password"

                      // value={tracelink_password}
                      // InputLabelProps={{
                      //   shrink: true,
                      // }}


                      // onChange={(e)=> setTraclinkpassword(e.target.value)}
                      // />

                      <TextField
                      label='Tracelink Password'
                      variant="outlined"
                      InputLabelProps={{
                              shrink: true,
                            }}
                      type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                      value={tracelink_password}
                      onChange={(e)=> setTraclinkpassword(e.target.value)}
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



                
var sending_systemwidget =
                    <TextField
                      required

                      label="Sending System"

                      value={sending_system}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setsendingsystem(e.target.value)}
                      />
                // <input
                //  type="text"
                //  className="form-control"
                //  value={sending_system}
                //  onChange={(e)=> setsendingsystem(e.target.value)}
                //  />
var sftphostwidget =
                    <TextField
                      required

                      label="Sftp Host"

                      value={sftp_host}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setSfthost(e.target.value)}
                      />
              // <input
              //       type="text"
              //       className="form-control"
              //       value={sftp_host}
              //       onChange={(e)=> setSfthost(e.target.value)}
              //    />                 

var siteidwidget =
                    <TextField
                      required

                      label="Site Id"

                      value={siteid}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setSiteid(e.target.value)}
                      />
                // <input
                //     type="text"
                //     className="form-control"
                //     value={siteid}
                //     onChange={(e)=> setSiteid(e.target.value)}
                //  />                           
                             
var sftpusernamewidget =
                    <TextField
                      required

                      label="Sftp Username"

                      value={sftp_username}
                      InputLabelProps={{
                        shrink: true,
                      }}


                      onChange={(e)=> setSftpusername(e.target.value)}
                      />
{/* <input
                 type="text"
                 className="form-control"
                 value={sftp_username}
                 onChange={(e)=> setSftpusername(e.target.value)}
                 />                            */}
                                                                      
  useEffect(() => {
    //setScheduled("2017-06-01");
    //alert(window.localStorage.getItem("productionOrderEditID"));
    getCustomerTracelinkdata();       
}, []);


  const handleSubmit =(e) =>{
      e.preventDefault(); 
      
      axios.put(`http://127.0.0.1:8000/master/customertracelink/update/${uniqueID}`,
      {

          "id":id,
          "title":title,
          "url": url,
          "tracelink_username" :tracelink_username,
          "siteid":siteid,
          "sftp_port":sftp_port,
          "sftp_password":sftp_password,
          "file_sender":file_sender,
          "sending_system" :sending_system,
          "tracelink_password":tracelink_password,
          "sftp_host" :sftp_host,
          "sftp_username":sftp_username,
           "file_receiver":file_receiver      
      })
      .then(() => {
                    navigate("/customer");
                  }); 
  }


  return (
      <>
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
      {title_Widget}

      {url_widget}

      {tracelinkusernamewidget}

      {tracelinkpasswordwidget}

      </div>
      <div className="col-4">
      {siteidwidget}

      {sftpportwidget}

      {sftphostwidget}

      {sftpusernamewidget}
      </div>

      <div className="col-2">
     
      {sftppasswordwidget}
      
     
      {filesenderwidget}

      {filereceiverwidget}

      {sending_systemwidget}
      </div>

      <div className="col-2" id="customertracelinkbutton" >
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

export default CustomerTracelinkEdit



