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
import Tooltip from '@mui/material/Tooltip';

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

  const[ponumber,setPonumber]=useState("");

  const[line,setLine]=useState("");
  const[warningmessage,setWaringmessage]=useState("");
  const[processno,setProcessno]=useState("");
  const { operation } = useParams();
  const { uniqueID } = useParams();

const navigate=useNavigate();
var loggedInUsername=window.localStorage.getItem('loggedInUsername')
var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')  
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
  .get(window.url+"/master/productionorder/")
  
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
  //  alert(po)                 
  axios
  .get(window.url+"/master/productionorderidinprintertable/"+ponumber+"/")
  .then((res2)=>{
    
  // var jsonobject=JSON.parse(res2.data[0].hrf)
                  
   alert(res2.data[0].expiration_date)
  //                 setHrf1(jsonobject.hrf1);
  //                 setHrf1value(jsonobject.hrf1value)

      setExp(res2.data[0].expiration_date)
      setLot(res2.data[0].batch_number)
      setHrf(res2.data[0].hrf)
      setType(res2.data[0].type)
      setGtin(res2.data[0].gtin_number)
      setLine(res2.data[0].line)

  }) 
  warningDIV =  <div className="alert alert-success pt-4" role="alert">
  <h5>Production Order Fetched  Successfully</h5>
  </div>

    setWaringmessage(warningDIV);               
        }
    useEffect(()=>{
      // getGtin();
      
        getProductionorder();
                     
      },[])

  // const productionorderevent=event =>{
  //   setProcessno(event.value);
  //   setpo(event.value);
  //   setPolabel(event.label);
  // }
  const setPonumber1=event =>{
alert(event.target.value)
    setProcessno(event.target.value);
    setpo(event.value);
    setPolabel(event.label);
  }

  
  var headwidget=
    <Controls.Input 
    disabled
    // fullWidth
    value={loggedInUsername}
          id="outlined-Company Prefix"
          //label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                                   Create Printer Data </font></h4></pre></h4>}
         
   
 />
 
   var powidget=  
   <TextField required
            label="Enter Production Order"
            id="outline-Enter Production Order"

            onChange={(e) => setPonumber(e.target.value)}
    /> 
    //  <Select className="s" onChange={productionorderevent} options={processordernumber} /> 
    // <Box sx={{  }}>

    //     <FormControl >
    //       <InputLabel id="demo-simple-select-label">Production Order</InputLabel>
    //         <NativeSelect 
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           input={<OutlinedInput label="Production Order" />}
    //           MenuProps={MenuProps}
    //           style={{width:'220px'}}
    //           label="Production Order"
    //           onChange={ productionorderevent}
    //           ><option>Select Production Order</option> 
    //           {processordernumber.map((data) => (
                
                
    //           <option key={data.label} value={data.value}>
                
    //               {data.label}
                
    //           </option>
                
    //       ))}
    //     </NativeSelect>
    //   </FormControl>
    // </Box>

  var fetchwidget=  <button className="btn btn-info"
    onClick={() => getData()}>
    <FcDownload.FcDownload size={20} />
  </button> 

  var expwidget=
              <TextField required
                  label="Expiration Date"
                  id="outline-Experi"
                  value={expiration_date}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={(e) => setExp(e.target.value)}
              /> 
                        // var hjwidget=<label className="form-label">Batch Number</label> 
  var lotwidget=
              <TextField required
              label="Lot Number"
              id="outline-Lot Number"
              value={lot}
              InputProps={{
                readOnly: true,
              }}
              onChange={(e) => setLot(e.target.value)}
          /> 
                    
  var gtinwidget=
                <TextField required
                label="Gtin"
                id="outline-gtin"
                value={gtin}
                InputProps={{
                  readOnly: true,
                }}
                onChange={(e) => setGtin(e.target.value)}
            /> 

  var typewidget = 
            <TextField required
            label="Type"
            id="outline-type"
            value={type}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setType(e.target.value)}
           /> 
        
  var serialnowidget = <input 
                        type="text"
                        className="form-control"
                        value={numbers}
                        InputProps={{
                          readOnly: true,
                        }}
                        onChange={(e) => setNumbers(e.target.value)}
                      />

  // var linewidget = <input 
  //                     type="text"
  //                     className="form-control"
  //                     value={line}
  //                     onChange={(e) => setLine(e.target.value)}
                      
  //                   />                                            
  var linewidget =  <TextField required
                        label="IpAddress"
                        id="outline-ipaddress"
                        value={line}
                        InputProps={{
                          readOnly: true,
                        }}
                        onChange={(e) => setLine(e.target.value)}
                      />  
    const handleSubmit=(e)=>{
          e.preventDefault(); 
  //         var testPassed = "false";

  //         if(type== "type5" || type== "type1"){
  //           {
  //             if()
  //           }
  //         testPassed = "true";
      
  //         }
  //         else {
  //         warningDIV =  <div className="alert alert-danger pt-4" role="alert">
  //           <h5>Input process order number</h5>
      
          
  //         </div>
  //         setWaringmessage(warningDIV)
  //         testPassed = "false";
  //         }
  // //alert(po)
          if(operation === 'new') {
  //           if(type== "type5" || type== "type1")
  //           {

  //           }
      alert(ponumber)
          axios
  
              .post(window.url+"/master/printer/",
  
            {
              "processordernumber":ponumber,
              "lot":lot,
              "gtin":gtin,
              "expiration_date" :expiration_date,
              "numbers":"numbers" ,   
              "type" :type,
              "ip_address":line,
            

            })
  
      .then((res2) => {
      // alert(res2.data)
      if (res2.data === 400){
       
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
        <h5>Please Add HRF In The ProductionOrder.This Type Is Allocated To HRF</h5>
      </div>

        setWaringmessage(warningDIV) 

      }
          else if(res2.data.processordernumber == "printerdata table with this processordernumber already exists."){
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
        else if(res2.data === 500){
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>No Serialnumbers Available For Printing.Please Download Serial Numbers.</h5>
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
                      
                      <br/>        <br/>        
           {warningmessage} 
          

           <div class="container" style={{display:"flexbox"}}>  
           
  <div className="row">
   
  <div className="col-4"></div>
            <div className="col-4"><br/>
            <h4 ><h4 style={{color:"black"}}><font face="times new roman" size="6">Printer Data Entry </font></h4></h4><br/>                 
             {powidget}&nbsp;&nbsp;&nbsp;
             {fetchwidget} 
              </div>
            {/* <div className="col-2"><br/> 
            
              
            </div>
            <div className="col-2"><br/>  */}
          
              
            {/* </div> */}
            </div>
  
   <Link to="/printerpool">
           &nbsp; &nbsp;  <button className="btn btn-info">Show Data</button>
    </Link>
    <br/> <br/> 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25' },
      }}
      noValidate
      autoComplete="off"
    >
     
       
      <div style={{backgroundColor:"#AAF0D1",alignContent:"flex-end"}} >
     
      &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{gtinwidget}&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{expwidget}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{lotwidget}
    
    <br/>
    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{typewidget}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{linewidget}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{headwidget}


       
      
      
      <div className="row">
        <div className="col-4">
       
        </div>
        <div className="col-4">
          <center>
          <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit} >
                      Save data
                  </button>
          </center>
        
        </div>
        <div className="col-4">
        </div>
       
       
      
      </div>
        
       
      </div>
     
    </Box>
    
    
    </div>
    </> 
  )
}

export default PrinterdataEntry

