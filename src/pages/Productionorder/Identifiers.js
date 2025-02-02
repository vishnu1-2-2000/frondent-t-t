import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../components/Navigation/Navbar';
import Select from "react-select";
import * as  AiIcons from "react-icons/ai";
import Sidebar from "../../components/Sidnav/Sidebar";
import Box from '@mui/material/Box';
function Identifiers() {
                    const { operation } = useParams();
                    const { uniqueID } = useParams();
                    var username = window.localStorage.getItem('username')
                    var password = window.localStorage.getItem('password')
                    var userrole= window.localStorage.getItem('userrole')
                    
                    const navigate = useNavigate();
                    
                      return (
                     <>
                     <br></br>
                     <br></br>
                     <Box sx={{ display: 'flex' }}> 
                    
                     <Sidebar/>                       
                    
                     
                    <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
                    
                                    
                                   
                    {/* <Navbar data= {window.localStorage.getItem('username') ? window.localStorage.getItem('username') : ""}/> 
                                                             
                                        <br/>
                                        <div className="d-flex justify-content-between m-2">
                                        <h2>Identifiers</h2>
                    <Link to="/po/podatagrid">
                                        <button className="btn btn-primary">Show Data</button>
                                        </Link> */}
                                        {/* </div> */}
                                                         
                    <div class="container">
                                        <div class="row" id="identifiers">
                                        <div class="col-12">
                                                         
                                        <div className="d-flex justify-content-between m-2">
                                                              
                                        </div>
                                                               
                                                         
                                                         
                    <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableIDm">
                    <tbody >
                      <div id="identifiersdata">
                    <tr>
                      <td class="productionOrderReportSearchTD"> <h2>Unit Level</h2></td>  </tr>
                    <tr>
                    <td class="productionOrderReportSearchTD"> 2D Application Identifier</td>  </tr>
                          <tr> <td  id="identifierimage">
                                <img src={require("./Images/data-matrix.jpg")} height={150} width={200}/>            
                                        </td></tr>
                                      
                                        
                                                         
                                                        
                    <tr>
                                <td class="productionOrderReportSearchTD">01-Al01 GTIN</td>
                                       
                                        </tr>
                    <tr>
                                <td class="productionOrderReportSearchTD">21-Al 21 Serial Number</td>
                                       
                                        </tr>
                    
                                        <tr>
                                        <td class="productionOrderReportSearchTD">10-Al 10 Lot</td>
                                       
                                        </tr>
                    
                                        <tr>
                                        <td class="productionOrderReportSearchTD">17-Al 17 Expiration Date</td>
                                       
                                        </tr>
                    
                                         <tr>
                                        <td class="productionOrderReportSearchTD">To be Scanned:Yes</td>
                                       
                                        </tr>
                                        </div>                                           
                    </tbody>
                    </table>
                                                         
                     </div>
                      </div>
                     </div>
                     </Box>
                      </Box>              
                    </>
                      )
}

export default Identifiers