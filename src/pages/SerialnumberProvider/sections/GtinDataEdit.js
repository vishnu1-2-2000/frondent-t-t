import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
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
function GtinDataEdit() {

const[gtin,setGtin]=useState("");
const[gtinnumber,setGtinnumber]=useState("");
const[availablequantity,setAvailableQuantity] =useState("");
const[minimumquantity,setMinimumQuantity] =useState("");
const [renewalquantity,setRenewalQuantity]=useState("");
const[gtinforeign,setGtinforeign]=useState("");
                    

const[gtinlabel,setGtinlabel]=useState("");
const[gtinvalue,setGtinvalue]=useState("");
const navigate=useNavigate();
const{uniqueID}=useParams();
const{operation}=useParams();


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;   
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
}; 
let gtinoptions=[]
var v=""
// function getGtinforeignData(){
//     axios
//     .get("http://127.0.0.1:8000/master/product/")
//     .then((res)=>{
// res.data.map(data =>{
//     gtinoptions.push({value:data.id,label:data.gtin})
    
// })
// setGtin(gtinoptions)
//     })
// }

function getEditData(){
axios
.get("http://localhost:8000//master/gtin/"+uniqueID)
.then((res)=>{
    // alert(res.data[0].snnumbers)
//     gtinoptions.map((temp)=>{
//       if(temp['value']== res.data[0].gtin){
// v=temp['label']
//       } 
//     })
   setGtin(res.data[0].gtin);
   getGtinselectedData(res.data[0].gtin)
   setAvailableQuantity(res.data[0].snnumbers);
   setMinimumQuantity(res.data[0].minimum_quantity);
   setRenewalQuantity(res.data[0].renewal_quantity);

})
}


function getGtinforeignData(gtinparams){
    axios
    .get("http://127.0.0.1:8000//master/product/")
    .then((res)=>{
    res.data.map(data =>{
    gtinoptions.push({value:data.id,label:data.gtin_number})
    
})
setGtin(gtinoptions)
    })
}

function getGtinselectedData(gtinparams){
    axios
    .get("http://127.0.0.1:8000//master/product/")
    .then((res)=>{
    res.data.map(data =>{
        if(data.id==gtinparams){
           setGtinlabel(data.gtin_number );
            setGtinvalue(data.id);
          }
    
})

    })
}

useEffect(()=>{

getGtinforeignData()
if(operation =="edit"){
    getEditData();
}
},[])

// const getGtin = event =>{
//   setGtin(event.value)  
// }

const getGtin = event =>{
    setGtinnumber(event.value)
    // alert(event.label)

    setGtinlabel(event.label)
    setGtinvalue(event.value)  
  }

if(operation=="edit"){
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
                  label={<span ><pre><h4 style={{color:"white"}}>Edit Gtin Data </h4></pre></span>}
                

      />
    </Box>
  
//var gtinfield= <Select className="s" onChange={getGtin} options={gtin}  /> 
var gtinfield=
                    // <input type="text"
                    // className="form-control"
                    // value={gtin}
                    // // label={gtinlabel}
                    // // value={{value:gtinvalue,label:gtinlabel}}
                    // readOnly={true}
                    // onChange={(e)=>getGtin(e.target.value)} 
                    // /> 
                    <TextField required
                    disabled="true"
                    label="Gtin"
                    id="outline-Gtin"
                    value={gtin}
                    onChange={(e)=>getGtin(e.target.value)}  
                    /> 
var availablefield=
            //     <input type="text"
            //    className="form-control"
            //    value={availablequantity}
            //    onChange={(e)=>setAvailableQuantity(e.target.value)} 
            //    /> 
               <TextField required
                    
                    label="Available Quantity"
                    id="outline-availablequantity"
                    value={availablequantity}
                    onChange={(e)=>setAvailableQuantity(e.target.value)} 
                    /> 
               
var minimumfield=
            // <input type="text" 
            //    className="form-control"
            //    value={minimumquantity}
            //    onChange={(e)=>setMinimumQuantity(e.target.value)}
            //    /> 

               <TextField required
                    
                    label="Minimum Quantity"
                    id="outline-minimumquantity"
                    value={minimumquantity}
                    onChange={(e)=>setMinimumQuantity(e.target.value)} 
                    /> 
               
var renewalfield=
            // <input type="text"
            //    className="form-control"
            //    value={renewalquantity}
            //    onChange={(e)=>setRenewalQuantity(e.target.value)} 
            //    />  
               
               <TextField required
                    
                    label="Renewal Quantity"
                    id="outline-renewalquantity"
                    value={renewalquantity}
                    onChange={(e)=>setRenewalQuantity(e.target.value)}  
                    /> 
}

const handleSubmit =(e)=>{
    // alert(gtinlabel)
          axios
         
          .put(`http://127.0.0.1:8000/master/gtin/update/${uniqueID}`,
          {
                    "gtin":gtin,
                    "available_quantity":availablequantity,
                    "minimum_quantity":minimumquantity,
                    "renewal_quantity":renewalquantity

          })
          .then(()=>{
                    navigate("/gtinpool")
          })          
}
  return (
                    <>
                   
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
    <div class="container-fluid">
              <div class="card shadow mb-4" id="gtincreatefullcard"> 
                  <div class="card-header py-3" id="gtincreatecardhead">
                      <div className='row'>
                          <div className='col-10' id="gtincreatehead">
                          {headwidget}
                          </div>
                      </div>
                                                      
                  </div>
                  <button className="btn btn-info">Gtin Could Not Be Edit</button>                        
                  <div class="card-body">  
                  
   
                  
    {/* <div id="locationhead">
    {headwidget}
    </div>
    <br></br> */}
    
    <Box id="gtincreatebox"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <br></br>
      
      <div>
             
        
         {gtinfield}
         
        
        
         {availablefield}
         
<div>
{minimumfield}
          {renewalfield}
</div>
          
            
          <div id="gtineditbutton">

        
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                      
            </button>
           
            

            
          </div>

          <div >
          
          <br></br>
          
        <div className="col-1">
            
        </div>
          
      </div>

      <div>
      

    </div>              
 

  </div>
  <div>
      
</div>
      
    </Box> 
    <hr></hr>    
                  </div>
              </div>
          </div>   
                   </>
  )
}

export default GtinDataEdit
//........................................................................................

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import { Link, useParams } from "react-router-dom";

// import Select from "react-select";
// import moment from "moment";
// function GtinDataEdit() {
// const[gtin,setGtin]=useState("");
// const[availablequantity,setAvailableQuantity] =useState("");
// const[minimumquantity,setMinimumQuantity] =useState("");
// const [renewalquantity,setRenewalQuantity]=useState("");

// const[gtinoptions,setGtinoptions]=useState("");

// const[gtinlabel,setGtinlabel]=useState("");
// const[gtinvalue,setGtinValue]=useState("");


// const navigate=useNavigate();
// const{uniqueID}=useParams();
// const{operation}=useParams();

// let optionsNew = [];


// function getGtinEditRequestData() {
//     // var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
//     //alert(productionOrderEditID);
//     var cuslocEditID = uniqueID;
//     // alert(productionOrderEditID);
//     axios
//       .get("http://127.0.0.1:8000/master/gtin/"+cuslocEditID+"/",
     
//     )
//     .then((res) => {
//         //alert(res.data[0].gtin)
//         //setGtin(res.data[0].gtin);
//         setSelectedGtinFunction(res.data[0].gtin)
//         setAvailableQuantity(res.data[0].snnumbers);
//         setMinimumQuantity(res.data[0].minimum_quantity);
//         setRenewalQuantity(res.data[0].renewal_quantity);
      
      
     
//     });
//   }
  
//   function setSelectedGtinFunction(selectedGtinFunParam) {
//     // alert(selectedCustomerFunParam);
//     axios
//       .get("http://127.0.0.1:8000/master/product/",
//     )
//       .then((res) => {
//         // let batchNumberOptionsInitial = "";
//         // alert("anu")
//         res.data.map(data => {
//           alert(selectedGtinFunParam);
//         if(data.id === selectedGtinFunParam) {
        
//           //alert(data.gtin_number)
//           //alert(data.id)
//           setGtinlabel(data.label);
//           setGtinValue(data.id);
           
          
//         }
//       });
//       setGtinoptions(optionsNew);
//     });
//   }

//   function getGtin() {
//     // alert("anu")
//     axios
//       .get("http://127.0.0.1:8000/master/product/",
       
//       )
//       .then((res) => {
//         // let batchNumberOptionsInitial = "";
//         res.data.map(data => {
//           optionsNew.push({ value: data.id, label: data.gtin_number });
//           // cusnameoptions.push({ value: data.id, label: data.name });
//         });
        
//        setGtinoptions(optionsNew);
//         // setOption(cusnameoptions)
//       });
//   }

//   const getGtinEventData = event => {

//     setGtin(event.value); 
//     // alert(event.label);
//     // setCustomername(event.label);
//     setGtinlabel(event.label);
//     setGtinoptions(event.value);
//     // setCustomername(event.label); 
//   //    window.localStorage.setItem(option)    
//    }

//    useEffect(() => {
//     if(operation === 'edit') {
   
//       // setAddress(localStorage.getItem("address"));
//       // setState(localStorage.getItem("state"));
//       getGtinEditRequestData();
//       setSelectedGtinFunction()
    
   
//     }
//     getGtin();
//   }, []);

//   var headfield=<h2>Edit</h2>
  
//   //var gtinfield= <Select className="s" onChange={getGtin} options={gtin}  /> 
//   var gtinfield = <Select className="s"  onChange={getGtinEventData} options={gtinoptions} value={{label:gtinlabel, value:gtinoptions}} /> 
//   var availablefield=<input type="text"
//                  className="form-control"
//                  value={availablequantity}
//                  onChange={(e)=>setAvailableQuantity(e.target.value)} 
//                  /> 
                 
//   var minimumfield=<input type="text" 
//                  className="form-control"
//                  value={minimumquantity}
//                  onChange={(e)=>setMinimumQuantity(e.target.value)}
//                  /> 
                 
//   var renewalfield=<input type="text"
//                  className="form-control"
//                  value={renewalquantity}
//                  onChange={(e)=>setRenewalQuantity(e.target.value)} 
//                  /> 

//                   const handleSubmit =(e)=>{
//                               axios
//                               .put(`http://127.0.0.1:8000/master/gtin/update/${uniqueID}`,
//                               {
//                                         "gtin":gtin,
//                                         "available_quantity":availablequantity,
//                                         "minimum_quantity":minimumquantity,
//                                         "renewal_quantity":renewalquantity
                    
//                               })
//                               .then(()=>{
//                                         navigate("/snprovider/edit/tracelink/")
//                               })          
//                     }               
   
//   return (
//     <>
//                          <br></br>
//                        <br></br>
//                          <br></br>
//                          <br></br>
//                          <br></br>
//                          <br></br>
//                          <div className="container">
//                           <div className="row">
//                           <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
//                                               <tbody>
//                                                   <tr>
//                                                       <td class="productionOrderReportSearchTD">Gtin</td>
//                                                       <td class="productionOrderReportSearchTD">
//                                                           {gtinfield}
//                                                       </td>
//                                                   </tr>
                   
//                                                   <tr>
//                                                       <td class="productionOrderReportSearchTD">Available Quantity</td>
//                                                       <td class="productionOrderReportSearchTD">
//                                                           {availablefield}
//                                                       </td>
//                                                   </tr>
                   
//                                                   <tr>
//                                                       <td class="productionOrderReportSearchTD">Minimum Quantity</td>
//                                                       <td class="productionOrderReportSearchTD">
//                                                           {minimumfield}
//                                                   </td>
//                                                   </tr>
                   
//                                                   <tr>
//                                                       <td class="productionOrderReportSearchTD">Renewal Quantity</td>
//                                                       <td class="productionOrderReportSearchTD">
//                                                           {renewalfield}
//                                                       </td>
//                                                   </tr>
                   
                                                 
//                                                   <tr></tr>
//                                                   <tr>
//                                                       <td class="productionOrderReportSearchTD">
//                                                           <button
//                                                              type="submit"
//                                                              className="btn btn-primary"
//                                                              onClick={handleSubmit} >
//                                                              Save data
//                                                          </button>
//                                                      </td>
//                                                  </tr>
//                                              </tbody>
//                                          </table>
                                       
//                                        </div>              
//                                        </div> 
//                        </>
//       )
// }

// export default GtinDataEdit
