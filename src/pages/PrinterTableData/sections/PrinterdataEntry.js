import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Select from "react-select";
import * as  AiIcons from "react-icons/ai";
import * as  FcDownload from "react-icons/fc";
import { azAZ } from "@mui/material/locale";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function PrinterdataEntry() {

 const[id,setId]=useState("");
 const[processordernumber,setProcessOrderNumber]=useState([]);
 const[gtin,setGtin] =useState("");
 const[gtinlabel,setGtinlabel]=useState("");
 const[expiration_date,setExp] =useState("");
 const[lot,setLot]=useState("");
 const[numbers,setNumbers]=useState("");
 const[povalue,setpovalue]=useState("");
 const[polabel,setPolabel]=useState("");
const[processno,setProcessno]=useState("");
 const[type,setType]=useState("");
 const[hrf,setHrf]=useState("");
 const[hrf1,setHrf1]=useState("");
 const[hrf1value,setHrf1value]=useState("")
 const[warningmessage,setWaringmessage]=useState("");

const { operation } = useParams();
const { uniqueID } = useParams();

const navigate=useNavigate();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;   
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 550,
    },
  },
};     
let gtinoptions=[]
let pooptions=[]
var warningDIV = <div className="alert alert-success pt-4" role="alert">
                  <h5>Input all the values</h5>
               </div>  


// function getpo() {
   
//     axios
//     .get("http://127.0.0.1:8000/master/productionorder/")
//     .then((res)=>{
//     //    alert(res.data)
// res.data.map(data =>{pooptions.push({value:data.id,label:data.process_order_number})})
//     })
//     setProcessOrderNumber(pooptions);
//     // alert(pooptions)
// }

function  getpo() {
    axios
    .get("http://127.0.0.1:8000/master/productionorder/",
    {
      
    },
    {
      'param': 'anu' 
    })
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      //
      res.data.map(data => {
      
            pooptions.push({ value: data.id, label: data.process_order_number });
       
      });
            
      setProcessOrderNumber(pooptions);
     
    });
  }
  
function getData(){
                    
    axios
    .get("http://127.0.0.1:8000/master/productionorder/"+povalue+"/")
    .then((res2)=>{
    // var jsonobject=JSON.parse(res2.data[0].hrf)
                    
    //                 alert(jsonobject.hrf1value)
    //                 setHrf1(jsonobject.hrf1);
    //                 setHrf1value(jsonobject.hrf1value)

        setExp(res2.data[0].expiration_date)
        setLot(res2.data[0].batch_number)
        setHrf(res2.data[0].hrf)
        setType(res2.data[0].type)
        setGtin(res2.data[0].gtin_number)

    }) 
    warningDIV =  <div className="alert alert-success pt-4" role="alert">
  <h5>Production order fetched from Productionorder table successfully</h5>
</div>

setWaringmessage(warningDIV);               
}

// function getGtin(){
   
//      axios
//      .get("http://127.0.0.1:8000/master/product/") 
//         .then((res)=>{
//         //    alert("hi")
//         res.data.map(data=>{
//                     gtinoptions.push({value:data.id,label:data.gtin_number})
//         }) 
//         setGtin(gtinoptions)           
//      })              
// }
useEffect(()=>{
   

// getGtin();
getpo();
                   
},[])

// const gtindata=event =>{
//     setGtin(event.value)
//     setGtinlabel(event.label)                
// }
// const getProcessorderdata =event =>{
//     setpo(event.target.value)
//     setPolabel(event.target.label)

// }
const getProcessorderdata = event => {
    // alert(event.value)
    // setProcessno(event.target.value); 
  
    setpovalue(event.target.value)
    setPolabel(event.target.label)

  
  
  }

// var processnowidget=<input
//       type="text"
//       className="form-control"
//       onChange={(e) => setpo(e.target.value)}
      
//     />
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
    fullWidth
    
    id="outlined-Company Prefix"
    label={<h4 ><pre><h4 style={{color:"white"}}>           Enter Productionorder  Data </h4></pre></h4>}
  />
  </Box>
  {/* <Select className="s" options={processordernumber} onChange={getProcessorderdata}/> */}
var powidget=

<Box sx={{  }}>
          <FormControl >
          <InputLabel id="demo-simple-select-label">Production Order Number</InputLabel>
          <NativeSelect 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Production Order Number" />}
          MenuProps={MenuProps}
          style={{width:'220px'}}
          label="Production Order Number"
          onChange={getProcessorderdata}
          ><option>Select Po</option> 
          {processordernumber.map((data) => (


          <option key={data.label} value={data.value}>

          {data.label}

          </option>

          ))}
          </NativeSelect>
          </FormControl>
          </Box> 

var fetchwidget=  <button className="btn btn-info"
          onClick={() => getData()}>
          <FcDownload.FcDownload size={20} />
      </button> 
var expwidget=
//                 <input
//                     type="text"
//                     className="form-control"
//                     value={expiration_date}
//                     onChange={(e) => setExp(e.target.value)}
// />
<TextField required
                      label="Expiration Date"
                      id="outline-expire"
                      value={expiration_date}
                      onChange={(e) => setExp(e.target.value)}
                      /> 

var lotwidget=
                // <input
                //     type="text"
                //     className="form-control"
                //     value={lot}
                //     onChange={(e) => setLot(e.target.value)}
                // />

<TextField required
                      label="Lot Number"
                      id="outline-lot"
                      value={lot}
                      onChange={(e) => setLot(e.target.value)}
                      /> 

// var gtinwidget=<Select className="s" options={gtin} onChange={gtindata}/>

 var gtinwidget=
    // <input
    //   type="text"
    //   value={gtin}
    //   className="form-control"
    //   onChange={(e) => setGtin(e.target.value)}
      
    // />
    <TextField required
                      label="Gtin"
                      id="outline-gtin"
                      value={gtin}
                      onChange={(e) => setGtin(e.target.value)}
                      /> 
var serialnowidget = <input 
                    type="text"
                    className="form-control"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
/>

var typewidget = 
                // <input 
                //     type="text"
                //     className="form-control"
                //     value={type}
                //     onChange={(e) => setType(e.target.value)}
                // />

                <TextField required
                      label="Type"
                      id="outline-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      /> 


const handleSubmit=(e)=>{
e.preventDefault(); 
alert(processno)
if(operation === 'new') {
axios

.post("http://127.0.0.1:8000/master/printer/",

{
            "processordernumber":polabel,
            "lot":lot,
            "gtin":gtin,
            "expiration_date" :expiration_date,
            "numbers":"numbers" ,   
            "type" :type 
})

.then((res2) => {
    //alert("hi")
    //alert(res2.data.lot);
    if(res2.data.processordernumber == "printerdata table with this processordernumber already exists."){
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                          <h5>Process order already downloaded, try another process order</h5>
                        </div>

      setWaringmessage(warningDIV)                         
      }

    else if(res2.data.gtin == "printerdata table with this gtin already exists."){
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                          <h5>Gtin Already Downloaded Try Another Gtin</h5>
                        </div>

      setWaringmessage(warningDIV)                         
      }


      else{
      navigate("/productionorder");
      }
    });

 }

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
                    {warningmessage}
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
                                <td> {fetchwidget}</td>
                            </tr>
                            <tr>
                                <td class="productionOrderReportSearchTD">Exp</td>
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

export default PrinterdataEntry
