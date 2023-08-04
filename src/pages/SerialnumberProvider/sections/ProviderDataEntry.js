import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import moment from "moment";
function ProviderDataEntry() {

  const[id,setId]=useState("");
  const[name,setName]=useState("");
     
  const navigate=useNavigate();
  const {uniqueID} =useParams();
  const {operations}=useParams();

  var namewidget=<input type="text"
  className="form-control"
  onChange={(e)=>setName(e.target.value)}
  />

const handleSubmit=(e)=>{

e.preventDefault();
axios
.post("http://localhost:8000/master/snprovider/",
{
   "name":name ,
   "extrafield":name              
}) 
.then(()=>{
       navigate("/snprovider") ;            
})            


  }

  return (
            <>
                  <br></br>
                  <br></br>
                  <br></br>

                      {/* <Navbar data= {window.localStorage.getItem('username') ? window.localStorage.getItem('username') : ""}/> */}
                      <div className="d-flex justify-content-between m-2">
                        {/* <h2>Create</h2> */}
                       
                        <Link to="/snprovider">
                          <button className="btn btn-primary">Show Data</button>
                        </Link>
                      </div>
                      {/* {warningmessage} */}
                        <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                          <tbody>
                            <tr>
                              <td class="productionOrderReportSearchTD"> Name</td>
                              <td class="productionOrderReportSearchTD">
                                {namewidget}
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
                    </>
                  );
}

export default ProviderDataEntry
