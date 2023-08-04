import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import * as  AiIcons from "react-icons/ai";

function PrinterDataEdit() {

const[id,setId]=useState("");
const[processordernumber,setProcessOrderNumber]=useState("");
const[gtin,setGtin] =useState("");
const[expiration_date,setExp] =useState("");
const[lot,setLot]=useState("");
const[numbers,setNumbers]=useState("");
const[po,setpo]=useState("");
const[type,setType]=useState("");
const[warningmessage,setWaringmessage]=useState("");

const[polabel,setPolabel]=useState("");
const[povalue,setPovalue]=useState("");
                   
const { operation } = useParams();
const { uniqueID } = useParams();
                   
const navigate=useNavigate();

let gtinoptions=[]
let pooptions=[]
var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                    </div>  




function getpo() {
                    axios
                    .get("http://127.0.0.1:8000/master/master/productionorder/")
                    .then((res)=>{
                res.data.map(data =>{pooptions.push({value:data.id,label:data.process_order_number})})
                    })
                    setProcessOrderNumber(pooptions);
                }

// function getData(){
                                    
//                     axios
//                     .get("http://127.0.0.1:8000/master/productionorder/"+po+"/")
//                     .then((res2)=>{
                     
                                    
//                                     // alert(res.data[0].expiration_date)
//                         setExp(res2.data[0].expiration_date)
//                         setLot(res2.data[0].batch_number)
                
//                     })                
//                 }


function getPrinterEditData(){
                    axios
                    .get("http://127.0.0.1:8000/master/printer/"+uniqueID+"/")
                    .then((res)=>{
                                  //alert(res.data[0].gtin)
                       setProcessOrderNumber(res.data[0].processordernumber);
                       setGtin(res.data[0].gtin);
                       setExp(res.data[0]. expiration_date);
                       setLot(res.data[0].lot);
                       setType(res.data[0].type)
                       //SelectedPo(res.data[0].processordernumber)
              
                    })              
              }  
              
              
function SelectedPo(poparams){
axios
.get("http://127.0.0.1:8000/master/master/productionorder/")
.then((res)=>{
    res.data.map(data =>{
       if(data.id==poparams) {
       
                    setPolabel(data.process_order_number);
                    setPovalue(data.id);
       }            
    })                
})
}              

                useEffect(() => {
                    if(operation == 'edit') {
                   
                      
                     getPrinterEditData();
                    
                   
                    }
                   getpo();
                  }, []);

                                   
                    
const gtindata=event =>{
                    setGtin(event.value)                
                    }

const getProcessorderdata =event =>{
                    setpo(event.value)
                    setPolabel(event.label);
                    setPovalue(event.process_order_number)
                    }
                    

//var powidget=<Select className="s" options={processordernumber} onChange={getProcessorderdata} value={{label:polabel,value:povalue}}/>

// var fetchwidget=  <button className="btn btn-primary"
//           onClick={() => getData()}>
//           <AiIcons.AiOutlineCloudDownload size={30}/>
//       </button> 
var powidget=<input
                    type="text"
                    className="form-control"
                    value={processordernumber}
                    readOnly={true}
                    onChange={(e) => setProcessOrderNumber(e.target.value)}
/>
var expwidget=<input
                    type="text"
                    className="form-control"
                    value={expiration_date}
                    readOnly={true}
                    onChange={(e) => setExp(e.target.value)}
/>

var lotwidget=<input
                    type="text"
                    className="form-control"
                    value={lot}
                    readOnly={true}
                    onChange={(e) => setLot(e.target.value)}
/>

var typewidget = <input 
                    type="text"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
/>

//var gtinwidget=<Select className="s" options={gtin} onChange={gtindata}/>

 var gtinwidget=<input
      type="text"
      className="form-control"
      value={gtin}
      readOnly={true}
      onChange={(e) => setGtin(e.target.value)}
      
    />
var serialnowidget = <input 
                    type="text"
                    className="form-control"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
/>

const handleSubmit=(e)=>{
                    e.preventDefault(); 
                    //alert(polabel)
                    axios
                    .put(`http://127.0.0.1:8000/master/master/printer/update/${uniqueID}`,
                    {
                        "processordernumber":po,
                        "lot":lot,
                        "gtin":gtin,
                        "expiration_date" :expiration_date,
                        "type" :type ,

                        "numbers":"numbers"      
                    })
                    //  alert(res.data.gtin);
                        navigate("/productionorder");       
                    }
                    
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
              
                    <Link to="/printerpool">
                        <button className="btn btn-primary">Show Data</button>
                    </Link>
                    <br></br>
                    <br></br>
                    {warningmessage}
                    <button className="btn btn-info">Only Serialnumbers are Editable</button>
                    <br></br>
                    <br></br>
                        
                    <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                        <tbody>
                            <tr>
                                <td class="productionOrderReportSearchTD">Gtin</td>
                                    <td class="productionOrderReportSearchTD">
                                        {gtinwidget}
                                </td>
                            </tr>
                            <tr>
                                <td class="productionOrderReportSearchTD">Productionnumber</td>
                                <td class="productionOrderReportSearchTD">
                                                            {/* {processnowidget} */}
                                    {powidget}
                                </td>
                           {/* <td> {fetchwidget}</td> */}
                            </tr>
                            <tr>
                                <td class="productionOrderReportSearchTD">Expiry Date</td>
                                <td class="productionOrderReportSearchTD">
                                    {expwidget}
                                </td>
                            </tr>
                            <tr>
                                <td class="productionOrderReportSearchTD">Lot</td>
                                <td class="productionOrderReportSearchTD">
                                    {lotwidget}
                                </td>
                            </tr>
                            <tr>
                                                <td class="productionOrderReportSearchTD">Printing Type</td>
                                                <td class="productionOrderReportSearchTD">
                                                    {typewidget}
                                                </td>
                                            </tr>
                    
                                                    {/* <tr>
                                                        <td class="productionOrderReportSearchTD">Serialnumbers</td>
                                                        <td class="productionOrderReportSearchTD">
                                                            {serialnowidget}
                                                        </td>
                                                    </tr> */}
                                           
                            <tr></tr>
                            <tr>
                                <td class="productionOrderReportSearchTD">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={handleSubmit} >
                                            Save data
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>              
                </div>              
            </div>   
        </div>
        )
    }

export default PrinterDataEdit
