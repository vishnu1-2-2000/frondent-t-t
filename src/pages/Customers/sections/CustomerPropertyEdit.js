import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

function CustomerPropertyEdit() {

 const[id,setId]=useState("");
 const[gln,setGln]=useState("");
 const[gs1_company_prefix,setGs1_company_prefix]=useState("");
 const[tobussinesspartylookupid,setLookupid]=useState("");
 const[landmark,setLandmark]=useState("");
 const[tracelinkfile_receiver,setReceiver]=useState("");
 const[sgln_extension,setSgln_Extension]=useState("")
  
 
const navigate=useNavigate();
const { operation } = useParams();
const {uniqueID} =useParams();

var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')


function getCustomerpropertyEditdata(){
                    axios
                    .get(window.url+"/master/customerproperty/"+uniqueID+"/")
                    .then((res)=>{
                       setGln(res.data[0].company_gln)
                       setGs1_company_prefix(res.data[0].company_prefix)
                       setLandmark(res.data[0].landmark)
                       setLookupid(res.data[0].tobusinessparylookupid) 
                       setReceiver(res.data[0].file_receiver)
                       setSgln_Extension(res.data[0].sgln_extension)  

                    })

                    
                    }

                    useEffect(()=>{
                                        getCustomerpropertyEditdata();                 
                                     },[])  
                                     
var headwidget=<h3> Customer Properties</h3>

var glnwidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setGln(e.target.value)}
                    value={gln}
                    />
                    
                    
var gs1companywidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setGs1_company_prefix(e.target.value)}
                    value={gs1_company_prefix}
                    /> 
                    
var landmarkwidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setLandmark(e.target.value)}
                    value={landmark}
                    />
var lookupidwidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setLookupid(e.target.value)}
                    value={tobussinesspartylookupid}
                    /> 
                    
var filerecivercompanywidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setReceiver(e.target.value)}
                    value={tracelinkfile_receiver}

                    />    
                    
var sglnextensionwidget=<input type="text"
                    className="form-control"
                    onChange={(e) => setSgln_Extension(e.target.value)}
                    value={sgln_extension}

                    />                        

const handleSubmit = (e) => {
                    e.preventDefault();
                    console.log("clicked");
                    //alert(address);
                    // companyEditID=uniqueID;
                    // alert(gln);
                    // alert(gs1_company_prefix);
                    // alert(landmark);
                    // alert(tracelinkfile_receiver);
                    // alert(tobussinesspartylookupid);
                    // alert(sgln_extension);
                    axios
        .put(window.url+`/master/customerproperty/update/${uniqueID}`, 
      
        {
          "company_gln":gln,    
          "company_prefix":gs1_company_prefix,
          "landmark": landmark,
          "file_receiver":tracelinkfile_receiver,
        
  
          
          "tobusinessparylookupid":tobussinesspartylookupid,
          "sgln_extension":sgln_extension,
          "loggedInUsername":loggedInUsername,
            "loggedInUserrole":loggedInUserrole
          
           
        },
        
        )
        .then(() => {
          navigate("/customer");
        });
      }

  return (
                    <>

                                       
                    <br/>
                             <div className="d-flex justify-content-between m-2">
                                       <h2>Customer Properties </h2>
                                       <Link to="/customerlocation">
                                       <button className="btn btn-primary">Show Data</button>
                                        </Link>
                                      </div>
                                                      
                   <div class="container">
                        <div class="row">
                                        {/* <div class="col-2">
                                        <Sidebar />
                                       </div> */}
                              <div class="col-12">
                                                      
                                       <div className="d-flex justify-content-between m-2">
                                                           
                                       </div>
                                                         
                                                      
                                                      
                   <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                        <tbody>
                             <tr>
                          <td class="productionOrderReportSearchTD">  Gln </td>
                               <td class="productionOrderReportSearchTD">
                               {glnwidget}
                          </td>
                   
                          <td class="productionOrderReportSearchTD"> Gs1 Company Prefix</td>
                         <td class="productionOrderReportSearchTD">
                            {gs1companywidget}             
                            </td>
                           </tr>
                                                      
                                                      
                     
                    <tr>
                    <td class="productionOrderReportSearchTD">Landmark</td>
                   <td class="productionOrderReportSearchTD">
                      {landmarkwidget}
                   </td>
                   
                   <td class="productionOrderReportSearchTD"> Sgln Extension</td>
                    <td class="productionOrderReportSearchTD">
                    {sglnextensionwidget}
                    </td>
                   </tr>

                   <tr>
                    <td class="productionOrderReportSearchTD">To Businessparty Lookupid</td>
                   <td class="productionOrderReportSearchTD">
                      {lookupidwidget}
                   </td>
                   
                   <td class="productionOrderReportSearchTD"> Tracelink FileReceiver</td>
                    <td class="productionOrderReportSearchTD">
                    {filerecivercompanywidget}
                    </td>
                   </tr>
                                       
                                                      
                   
                                                     
                   
                                                     
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
                                
                   </>
  )
}

export default CustomerPropertyEdit
