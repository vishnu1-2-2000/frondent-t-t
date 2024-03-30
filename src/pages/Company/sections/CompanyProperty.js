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


function CompanyProperty() {

    
  var warningDIV= <div className="alert alert-success pt-4" role="alert">
    <h5>Input all the values</h5>
  </div>
           
    const [id, setId] = useState(0);
    const [central_repository_api_secret, setCentralrepository] = useState("");
    const [gln, setGln] = useState("");
    const [gs1_company_prefix ,setGs1_company_prefix] = useState("");
    const [landmark,setLandmark] = useState("");
    const [sgln_extension, setSglnextension] = useState("");
    const [warningmessage,setWarningDIVstate]=useState(warningDIV);
    const [ to_businessparty_lookupfield,setTo_businessparty_lookupfield] =useState("");
    const[tracelink_file_receiver,setTracelink_file_receiver] =useState("");
                    
                  
                  
                  
                    
                   
      ///   For navigate function
    const navigate = useNavigate();
                  
    ////    for receiving the parameters from URL
    const { operation } = useParams();
    const {uniqueID} =useParams();
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                    ////  Fetch data from local storage
                  
    function getCompanyEditRequestData() {
        axios
            .get(window.url+"/master/companyproperty/"+uniqueID+"/",
                      
                )
                  .then((res)=>{
                  
                    setId(res.data[0].id);
                      
                    setCentralrepository(res.data[0].central_repository_api_secret);
                    setGln(res.data[0].gln);
                        
                    setGs1_company_prefix(res.data[0].gs1_company_prefix);
                    setLandmark(res.data[0].landmark);
                        
                    setSglnextension(res.data[0].sgln_extension);
                    setTo_businessparty_lookupfield(res.data[0].to_businessparty_lookupfield);
                    setTracelink_file_receiver(res.data[0].tracelink_file_receiver);
                        
                  })
            } 

  useEffect(() => {
                      
                    getCompanyEditRequestData(); 
                }, []);
                    // if(operation === 'new') {
  var headwidget=
                  // <Box
                  //       component="form"
                  //       sx={{
                  //           width: 500,
                  //           maxWidth: '100%',
                  //           }}
                  //         noValidate
                  //         autoComplete="off"
                  //   >
                      <Controls.Input 
                      disabled
                      // fullWidth
                      
                          id="outlined-Company Prefix"
                          value={loggedInUsername}
                          // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">              Enter Company Properties </font></h4></pre></h4>}
                           />
                  // </Box>
                      
  var centralFieldWidget =<TextField
                            required
                            id="outlined-central"
                            label="Centralrepository Api Secret"
                            value={central_repository_api_secret}
                            onChange={(e) => setCentralrepository(e.target.value)}
                  
                          />
                 
  var glnFieldWidget = <TextField
                          required
                          
                          id="outlined-gln"
                          label="Gln"
                          onChange={(e) => setGln(e.target.value)}
                          value={gln}
                        /> 
                      
  var landWidget = <TextField
                     
                      required
                      label="Landmark"
                      id="outlined-landmark"
                      onChange={(e) => setLandmark(e.target.value)}
                      value={landmark}
                      /> 
  var gs1FieldWidget = <TextField
                        required
                        id="outlined-gs1"
                        label="Gs1 company prefix"
                        onChange={(e) => setGs1_company_prefix(e.target.value)}
                        value={gs1_company_prefix}
                      /> 
                  
                  //   var producedFieldWidget = <input
                  //   type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setProduced(e.target.value)}
                  // /> 
                  
  var businessFieldWidget = <TextField
                            required
                            id="outlined-businessparty"
                            label="Businessparty lookupid"
                            onChange={(e) => setTo_businessparty_lookupfield(e.target.value)}
                            value={gln}
                          />
  var tracelinkFieldWidget = <TextField
                          required
                          id="outlined-tracelinkfilereceiver"
                          label="Tracelink file receiver"
                          onChange={(e) => setTracelink_file_receiver(e.target.value)}
                          value={gln}
                        />
  var sglnFieldWidget = <TextField
                            required
                            label="Sgln extension"
                            id="outlined-sglnextension"
                            onChange={(e) => setSglnextension(e.target.value)}
                            value={sgln_extension}
                      />
                        
                  
    const handleSubmit = (e) => {
                      e.preventDefault();
                      console.log("clicked");
                      //alert(address);

                      // companyEditID=uniqueID;
                    //  alert(sap_service);
                      // if(operation === 'new') {

                      
                    axios
                        .put(window.url+`/master/companyproperty/update/${uniqueID}`, 
                        
                          {
                            "central_repository_api_secret":central_repository_api_secret,    
                            "gln":gln,
                            "gs1_company_prefix":gs1_company_prefix,
                            "landmark":landmark,
                    
                            
                            "sgln_extension":sgln_extension,
                            "to_businessparty_lookupfield":gln,
                            'tracelink_file_receiver':gln,
                            "loggedInUsername":loggedInUsername,

                            "loggedInUserrole":loggedInUserrole,
                            "uniqueid":uniqueID   
                          },
                          
                          )
                          .then(() => {
                            navigate("/company");
                          });
                        }
                   
                  
  return (
    <>
            
            <br/><br/><br/><br/><br/>

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
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Company Property </font></h4></center></h4>            
          {centralFieldWidget}

          {glnFieldWidget}

          {gs1FieldWidget}

    
    
           
          
          <br/>
          {landWidget}

           
          {sglnFieldWidget}

{headwidget}<br/>
{businessFieldWidget}
{tracelinkFieldWidget}
        
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





















                     {/* <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                      <Box sx={{ display: 'flex' }}>
                      <Sidebar/>
                      <Box component="main" sx={{ flexGrow: 1, p: 1}}>
                        <div className="d-flex justify-content-between m-2">
                         
                          {headwidget}
                          <Link to="/company/comdatagrid">
                            <button className="btn btn-primary">Show Data</button>
                          </Link>
                        </div> */}
                  {/*     
                        <form>
                          <div className="mb-3">
                            <label className="form-label"> central_repository_api_secret</label>
                            {centralFieldWidget}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">gln</label>
                            {glnFieldWidget}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">gs1_company_prefix</label>
                            {gs1FieldWidget}
                          </div>
                            <div className="mb-3">
                            <label className="form-label">landmark</label>
                            {landWidget}
                          </div>
                      
                         
                          <div className="mb-3">
                            <label className="form-label">sgln_extension</label>
                            {sglnFieldWidget}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">to_businessparty_lookupfield</label>
                            {businessFieldWidget}
                          </div>
                          <div className="mb-3">
                            <label className="form-label">tracelink_file_receiver</label>
                            {tracelinkFieldWidget}
                          </div>
                          
                  
                        
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </form> */}
                        {/* <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                        <tbody>
                                  <tr>
                                      <td class="productionOrderReportSearchTD">central_repository_api_secret</td>
                                      <td class="productionOrderReportSearchTD">
                                      {centralFieldWidget}
                                      </td>
                                      &nbsp;   

                                      <td class="productionOrderReportSearchTD"> gln</td>
                                       <td class="productionOrderReportSearchTD">
                                       {glnFieldWidget}
                                      </td>
                                      </tr>
                                                    
                                                     
                                   
                                    <tr>
                                      <td class="productionOrderReportSearchTD">gs1_company_prefix</td>
                                       <td class="productionOrderReportSearchTD">
                                       {gs1FieldWidget}
                                      </td>
                                      &nbsp;  

                                      <td class="productionOrderReportSearchTD"> landmark</td>
                                              <td class="productionOrderReportSearchTD">
                                                  {landWidget}
                                              </td>
                                              &nbsp;       
                                      </tr>
                                      
                                              
                                  
                                    <tr>
                                          <td class="productionOrderReportSearchTD">sgln_extension</td>
                                                <td class="productionOrderReportSearchTD">
                                                     {sglnFieldWidget}
                                                     </td>
                                                     &nbsp;       
                                                     <td class="productionOrderReportSearchTD"> to_businessparty_lookupfield</td>
                                                <td class="productionOrderReportSearchTD">
                                                     {businessFieldWidget}
                                                     </td>
                                                     &nbsp;       
                                                     </tr>
                                    
                                    <tr>
                                          <td class="productionOrderReportSearchTD"> tracelink_file_receiver</td>
                                                  <td class="productionOrderReportSearchTD">
                                                     {tracelinkFieldWidget}
                                                     </td>
                                                     </tr>
                                                    
                                    <tr>
                                        <td class="productionOrderReportSearchTD">
                                                    
                               
                                      <button className="btn btn-primary" onClick={handleSubmit} >Save</button>
                                              
                                      </td>
                                      </tr>
                                </tbody>
                                    </table>
                                                     
                  </Box>
                                    </Box> */}
                  
                      </>
                    );
}

export default CompanyProperty
