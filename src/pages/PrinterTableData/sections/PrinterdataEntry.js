import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import * as  AiIcons from "react-icons/ai";
import { Alert } from "bootstrap";
import moment from "moment";
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
import * as  FcDownload from "react-icons/fc";
function PrinterdataEntry() {

  const[id,setId]=useState("");
 const[processordernumber,setProcessOrderNumber]=useState([]);
 const[gtin,setGtin] =useState("");
 const[gtinvalue,setGtinvalue]=useState("");
 const[gtinlabel,setGtinlabel]=useState("");
 const[expiration_date,setExp] =useState("");
 const[lot,setLot]=useState("");
 const[numbers,setNumbers]=useState("");
 const[po,setpo]=useState("");
 const[polabel,setPolabel]=useState("");
 const[type,setType]=useState("");
 const[hrf,setHrf]=useState("");
 const[hrf1,setHrf1]=useState("");
 const[hrf1value,setHrf1value]=useState("")
 const[warningmessage,setWaringmessage]=useState("");
 const[processno,setProcessno]=useState("");
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
 
 
 function getProductionorder() {
  axios
  .get("http://127.0.0.1:8000/master/productionorder/")
  
  .then((res) => {
    // let batchNumberOptionsInitial = "";
    //
    res.data.map(data => {
     
      pooptions.push({ value: data.id, label: data.process_order_number  });
      
    });
          
    setProcessOrderNumber(pooptions);
   
  });
}

// function getGtin() {
//   axios
//   .get("http://127.0.0.1:8000/master/product/") 
  
//   .then((res) => {
//     // let batchNumberOptionsInitial = "";
//     //
//     res.data.map(data => {
     
//       gtinoptions.push({ value: data.id, label: data.gtin_number});
      
//     });
          
//    setGtin(gtinoptions);
   
//   });
// }


function getData(){
                    
  axios
  .get("http://127.0.0.1:8000/master/productionorder/"+po+"/")
  .then((res2)=>{
  // var jsonobject=JSON.parse(res2.data[0].hrf)
                  
  //  alert(res2.data[0].expiration_date)
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
useEffect(()=>{
   
 
  // getGtin();
  getProductionorder();
                     
  },[])

  const productionorderevent=event =>{
    setProcessno(event.target.value);
    setpo(event.target.value);
    setPolabel(event.target.label);
  }

  
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
          label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                                   Create Printer Data </font></h4></pre></h4>}
         
   
 />
 </Box>
   var powidget=  
    // <Select className="s" onChange={getmanlocation} options={manufactureLocationOptionsNew} /> 
    <Box sx={{  }}>

                          <FormControl >
                          <InputLabel id="demo-simple-select-label">Production Order</InputLabel>
                          <NativeSelect 
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          input={<OutlinedInput label="Production Order" />}
                          MenuProps={MenuProps}
                          style={{width:'220px'}}
                          label="Production Order"
                          onChange={ productionorderevent}
                          ><option>Select Production Order</option> 
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
              <TextField required
                  label="Expiration Date"
                  id="outline-Experi"
                  value={expiration_date}
                  onChange={(e) => setExp(e.target.value)}
              /> 
                        // var hjwidget=<label className="form-label">Batch Number</label> 
      var lotwidget=
              <TextField required
              label="Lot Number"
              id="outline-Lot Number"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
          /> 
                    
  var gtinwidget=
                <TextField required
                label="Gtin"
                id="outline-gtin"
                value={gtin}
                onChange={(e) => setGtin(e.target.value)}
            /> 

var typewidget = 
            <TextField required
            label="Type"
            id="outline-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
           /> 
        
var serialnowidget = <input 
                    type="text"
                    className="form-control"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
/>
 
 const handleSubmit=(e)=>{
  e.preventDefault(); 
  //alert(po)
  if(operation === 'new') {
      alert(processno)
  axios
  
  .post("http://127.0.0.1:8000/master/printer/",
  
  {
              "processordernumber":po,
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
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<div class="container-fluid">
<div class="card shadow mb-4" id="printerfullcard"> 
   <div class="card-header py-3" id="printercardhead">
       <div className='row'>
           <div className='col-10' id="printerhead">
           {headwidget}
           </div>
       </div>
      
   </div>
   <br></br>
   <Link to="/printerpool">
                      &nbsp; &nbsp;  <button className="btn btn-primary">Show Data</button>
                    </Link>
   <div class="card-body">  
  


{/* <div id="locationhead">
{headwidget}
</div>
<br></br> */}

                <div id="gtincreatebox"
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <br></br>
                <div>
                {warningmessage}
                <div id="gtincreateselectbox">
                {powidget}

                </div>
                <br></br>
                <div id="fetchbutton">
                {fetchwidget}
                </div>
                <br></br>
                <br></br> &nbsp;&nbsp;&nbsp;


                {gtinwidget}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                {expwidget} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {lotwidget}

                <div id="printbutton">


                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                    
                </button>





                </div>

                <div >

                <br></br>

                <div  id="printype">
                {typewidget}
                </div>

                </div>

                <div>


                </div>              


                </div>
                <div>

                </div>

                </div> 
                <hr></hr>    
                </div>
                </div>
                </div>  
                </> 
  )
}

export default PrinterdataEntry
