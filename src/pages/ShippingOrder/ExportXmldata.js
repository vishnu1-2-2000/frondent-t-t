import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import moment from "moment";
import Sidebar from "../../components/Sidnav/Sidebar";
import Box from '@mui/material/Box';

function ExportXmldata() {

const [data, setData] = useState([]);
const[data2,setData2]=useState([]);
const {processnumber}=useParams();
const{uniqueID}=useParams();
const[shipmentdown,setShipmentdown]=useState();
const[commissdown,setCommissdown]=useState();
const[destroydown,setDestroydown]=useState();

const[downloadallxmlfiles,setDownloadallxml]=useState();
const navigate = useNavigate();
var processno= processnumber
                    // const [processordernumber,setProcessordernumber]=useState();
function getData(){
                    //alert("successfully Get Data")
                    axios
                    .get(window.url+"/master/shippoint/"+uniqueID+"/",
                     
                    )
                    .then((res) => {
                  
                    setData(res.data);
                        
                      });
                  
                  
                    }  
                    
                    useEffect(()=>
                    {
                      getData();
                     
                    },[]);

    function Upload(){
                      // alert(processnumber)
                      axios
                      .post(window.url+"/master/uploadxml/",
                      {
                               
                        
                                  "process_order_number":processnumber,
                                     
                       
                                       // "password":pass
                                     })
                       .then((res) => {
                                 
                         navigate("/shippingorder");
                         
                       });
                    
                    }
                    
    function UploadShipmentxml(){
                      // alert(processnumber)
                      axios
                      .post(window.url+"/master/uploadshipmentxml/",
                      {
                               
                        
                                  "process_order_number":processnumber,
                                     
                       
                                       // "password":pass
                                     })
                       .then((res) => {
                                 
                         navigate("/shippingorder");
                         
                       });
                    
                    }  


    function UploadDestroyxml(){
                      // alert(processnumber)
                      axios
                      .post(window.url+"/master/uploaddestroyxml/",
                      {
                               
                        
                                  "process_order_number":processnumber,
                                     
                       
                                       // "password":pass
                                     })
                       .then((res) => {
                                 
                         navigate("/shippingorder");
                         
                       });
                    
                    }                  
                    

function DownloadCommissioningxml(){
                                        // alert(processnumber)
                  axios
                  .post(window.url+"/master/downloadcommissioningxml/",
                        {
                                                 
                                          
                            "process_order_number":processnumber,

                                                       
                                         
                                          // "password":pass
                        })
                        .then((res) => {
                                                   
                          navigate("/shippingorder");
                                           
                            });
                                      
              }  

function DownloadShipmentxml(){
                          // alert(shipmentdown)
            axios
              .post(window.url+"/master/downloadshipmentxml/",
                {
                                   
                            
                  "process_order_number":processnumber,
                  "downloadstatus_shipment":shipmentdown
                                         
                           
                            // "password":pass
                })
                  .then((res) => {
                                     
                    navigate("/shippingorder");
                             
                  });
                        
          } 

function DownloadDestroyxml(){
            // alert(shipmentdown)
          axios
              .post(window.url+"/master/downloaddestroyxml/",
    {
                     
              
        "process_order_number":processnumber,
        "downloadstatus_destroy":destroydown
                           
             
              // "password":pass
  })
    .then((res) => {
                       
      navigate("/shippingorder");
               
    });
          
}         

function DownloadAllxml(){
           
            axios
            .post(window.url+"/master/downloadallxml/",
          {
                     
              
            "process_order_number":processnumber,
            "downloadstatus_allxml":downloadallxmlfiles
                           
             
              // "password":pass
      })
        .then((res) => {
                       
          navigate("/shippingorder");
               
    });
    // alert(downloadallxmlfiles)
          
}       
          
  const StatusCheckShipment=(event)=>{

        setShipmentdown(event.target.checked);
        
    }

  const StatusCheckCommisioningxml=(event)=>{

    setCommissdown(event.target.checked);
        
  }

  const StatusCheckDestroyxml=(event)=>{
          // alert(event.target.checked)
        setDestroydown(event.target.checked);
        
  }

const StatusCheckAllxml=(event)=>{
            // alert(event.target.checked)
        setDownloadallxml(event.target.checked);
          
}

      //     const StatusCheckAllxml=(event)=>{
      //      if(event.target.checked=="true"){
      //     setDownloadallxml(true)
      //       }
      //   else{
      // setDownloadallxml(false)
      //   }
      //       // setDownloadallxml(event.target.checked);
        
         
        
      //     }        

                                      
  const navigateToCreatePage = () => {
            navigate("/shipment/export/"+processnumber+"/"+uniqueID);
              };
  const navigateToCommissioningxmlPage = () => {
          navigate("/commissioning/export/"+processnumber+"/"+uniqueID);
                                      };
  const navigateToDestroyxmlPage = () => {
          navigate("/destroy/export/"+processnumber);
                                                                    };                                   
                                      // const navigateToUploadCommissioningxmlPage = () => {
                                      //   navigate("/uploadcommissioning/export/"+processnumber);
                                      // };                   
  return (
                    <>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
     <div className="container">
     <Box sx={{ display: 'flex' }}>
                                 
                                 <Sidebar/>
      <div className="row">
      <div className="col-4"></div>
  
  <div className="col-4" id="colmiddle">
  <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Data Export To Xml</font></h4></center></h4>            
    <hr></hr>
  <h5>Shipping Files</h5>
  <br></br>
{/* <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input> */}
  <a id="downloadData" style={{ display: "none" }}></a>
  {/* <br></br><br></br><button
          type="submit"
          className="btn btn-primary"   
          onClick={getData}
          >
          Get
        </button> */}
        &nbsp;&nbsp;
        {/* <input type="checkbox" 
              name="Product_read" 
              checked={shipmentdown} onChange={()=>setShipmentdown(!shipmentdown)}>
              </input> &nbsp;&nbsp; */}
            {/* <input type="checkbox"  onChange={ StatusCheckShipment}/>&nbsp;&nbsp; */}
  <button id="b1"
    
    className="btn btn-success"
    onClick={DownloadShipmentxml}  
  >
    Download
  </button> &nbsp;&nbsp;


  
  <button align='right'
                    
                      onClick={navigateToCreatePage} 
                      className="btn btn-success">Generate</button>&nbsp;&nbsp;

  <button align='right'
                    
                    onClick={UploadShipmentxml} 
                    className="btn btn-success">Upload</button>&nbsp;&nbsp;

 

  <hr id="hr"></hr>

    <h5>Commissioning Files</h5>
  <br></br>
{/* <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input> */}
  <a id="downloadData" style={{ display: "none" }}></a>
  
        &nbsp;&nbsp;
        {/* <input type="checkbox" 
              name="Product_read" 
              checked={commissdown} onChange={()=>setCommissdown(!commissdown)}>
              </input> &nbsp;&nbsp; */}
              
<button id="b1"
        onClick={DownloadCommissioningxml} 
        className="btn btn-success" 
  >
    Download
  </button> &nbsp;&nbsp;


  <button align='right'
                    
                    onClick={navigateToCommissioningxmlPage} 
                    className="btn btn-success">Generate</button>&nbsp;&nbsp;

<button align='right'
                    
                    onClick={Upload} 
                    className="btn btn-success">Upload</button>&nbsp;&nbsp;
<hr id="hr"></hr>



  <h5>Destroy Files</h5>
  <br></br>
{/* <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input> */}
  <a id="downloadData" style={{ display: "none" }}></a>
  
        &nbsp;&nbsp;
        
        {/* <input type="checkbox"  onChange={ StatusCheckDestroyxml}/>&nbsp;&nbsp; */}
<button id="b1"
        onClick={DownloadDestroyxml} 
        className="btn btn-success" 
  >
    Download
  </button> &nbsp;&nbsp;
<button align='right'
                    
                  onClick={navigateToDestroyxmlPage} 
                  className="btn btn-success">Generate</button>&nbsp;&nbsp;

<button align='right'
                    
                    onClick={UploadDestroyxml} 
                    className="btn btn-success">Upload</button>&nbsp;&nbsp;

 <hr></hr>

 <div id="downloadallxmlfilesbutton">
 <input type="checkbox"  onChange={StatusCheckAllxml} name="downloadallxmlfiles"/>&nbsp;&nbsp;

 <button align='right'
                    
                    onClick={DownloadAllxml} 
                    className="btn btn-primary">Download All Files</button>&nbsp;&nbsp;
                    </div>
  <br></br>
  </div>

  <div className="col-4">

</div>

                    </div>
                    
      </Box> 
              
                    </div> 
    </>             
  )
}

export default ExportXmldata
