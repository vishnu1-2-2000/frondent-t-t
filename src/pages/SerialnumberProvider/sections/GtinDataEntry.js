import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import * as  AiIcons from "react-icons/ai";
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
function GtinDataEntry() {

const[gtin,setGtin]=useState([]);
const[gtinnumber,setGtinnumber]=useState("");
const[availablequantity,setAvailableQuantity] =useState("");
const[minimumquantity,setMinimumQuantity] =useState("");
const [renewalquantity,setRenewalQuantity]=useState("");
const[id,setId]=useState("");
const[serialnumbers,setSerialnumbers]=useState("");
const[available,setAvailable]=useState("")
const[newsnnumber,setNewsnnumber]=useState("");
const[gtinlabel,setGtinlabel]=useState("");
const[gtinvalue,setGtinvalue]=useState("");
const[warningmessage,setWaringmessage]=useState("");
const navigate=useNavigate();
const{uniqueID}=useParams();
const{operation}=useParams();

let gtinoptions=[]
let serialnumberoptions=[];
var warningDIV = <div className="alert alert-success pt-4" role="alert">
                  <h5>Input all the values</h5>
               </div>

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
function getGtinforeignData(){
    axios
    .get("http://127.0.0.1:8000//master/product/")
    .then((res)=>{
    res.data.map(data =>{
    gtinoptions.push({value:data.gtin_number,label:data.gtin_number})
    
})
setGtin(gtinoptions)
    })
}

// function getAvailable(){
//     axios
//     .get("http://127.0.0.1:8000/master/pool/")
//     .then((res)=>{
       

//         res.data.map(data=>{

//             serialnumberoptions.push({value:data.id,label:data.id})

            
//         })
//         setAvailableQuantity(serialnumberoptions)
      
//     })

// }

// function getLength (){
//     let tempArrayFunction = [];
//     axios
//     .get("http://127.0.0.1:8000/master/printer/",
                        
//             {
//                 'param': 'anu' 
//              }
//           )
//                     .then((res) => {
//                         let c=0; 
//                         //setNewsnnumber(res.data2.length);
//                         res.data.map(data2 => {
//                             setNewsnnumber(data2.numbers .count);
//                             //alert(data2.serialnumberjson .length)
                                                                    
//                     if(data2. numbers !="")  
                                                                    
//                             {
//                                  c++;                           
//                               // optionsNewproduct.push();
//                                             //alert(optionsNewproduct.length)  
//                             }
//                             setNewsnnumber(c) 
//                         })
                    
//                       });
// }
function getSerialnumber(){
  
    axios
    .get("http://127.0.0.1:8000/http://localhost:8000//master/pool/"+available+"/")
    .then((res)=>{
       

        
        //alert(res.data[0].serialnumberjson)
        setSerialnumbers(res.data[0].serialnumberjson)
    })

}


useEffect(()=>{
   
    getGtinforeignData();
    // getAvailable();
    // getLength();
   
   
    },[])
    


const getGtin = event =>{
    setGtinnumber(event.target.value)
    setGtinlabel(event.target.label)
    setGtinvalue(event.target.value) ; 
  }

  const getSerialnumberoptions=event =>{
// alert(event.value)
    setAvailable(event.value);
  }


if (operation=="new"){
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
                  label={<span ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">   Enter Gtin Data </font></h4></pre></span>}
                

      />
    </Box>

var gtinfield= 
//  <Select className="s" onChange={getGtin} options={gtin}  />  
 <Box sx={{ minWidth: 70 }}>
          <FormControl >
          <InputLabel id="demo-simple-select-label">Gtin</InputLabel>
          <NativeSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Gtin" />}
          MenuProps={MenuProps}
          style={{width:'224px'}}
          label="Gtin"
          onChange={getGtin}
          ><option>Select Gtin</option> 
          {gtin.map((data) => (


          <option key={data.label} value={data.value}>

          {data.label}

          </option>

          ))}
          </NativeSelect>
          </FormControl>
          </Box>  
// var gtinfield=<input type="text"
//                     className="form-control"
//                     onChange={(e)=>setGtin(e.target.value)} 
//                     /> 
var availablefield=
                    // <input type="text"
                    // className="form-control"
                    // onChange={(e)=>setAvailableQuantity(e.target.value)} 
                    // /> 
                  <TextField required
                    label="AvailableQuantity"
                    id="outline-AvailableQuantity"
                   
                    onChange={(e)=>setAvailableQuantity(e.target.value)} 
                    /> 
//var availablefield= <Select className="s" onChange={getSerialnumberoptions} options={availablequantity}  /> 
// var fetchwidget=  <button className="btn btn-primary"
//           onClick={() =>  getSerialnumber()}>
//           <AiIcons.AiOutlineCloudDownload size={35}/>
//       </button>
// var serrialnofield=<textarea type="textarea"
// className="form-control"
// value={serialnumbers}
// onChange={(e)=>setSerialnumbers(e.target.value)} 
// />   

var newserrialnofield=<textarea type="textarea"
className="form-control"

onChange={(e)=>setNewsnnumber(e.target.value.split(","))} 
/>   
var minimumfield=
                // <input type="text"
                //     className="form-control"
                //     onChange={(e)=>setMinimumQuantity(e.target.value)}
                // /> 
                <TextField required
                label="MinimumQuantity"
                id="outline-MinimumQuantity"
               
                onChange={(e)=>setMinimumQuantity(e.target.value)}
                /> 
                    
var renewalfield=
                // <input type="text"
                //     className="form-control"
                //     onChange={(e)=>setRenewalQuantity(e.target.value)} 
                // />  
                <TextField required
                label="RenewalQuantity"
                id="outline-RenewalQuantity"
               
                onChange={(e)=>setRenewalQuantity(e.target.value)}
                />                  
}
const handleSubmit= (e)=>{
                    e.preventDefault();
                    //alert(minimumquantity)
                 axios
                 .post("http://localhost:8000//master/gtin/",
                 {
                    // "numbers":JSON.stringify({
                    //     serialnumbers
                      
                        
                    // }), 
                   "gtin":gtinnumber,
                  //  "gtin":gtinlabel,
                   //"available_quantity":available,
                //    "numbers":serialnumbers,
                   "minimum_quantity":minimumquantity,
                   "renewal_quantity":renewalquantity,
                   "snnumbers":"45"
                 })
                 .then((res)=>{
                    if(res.data.gtin == "gtins with this gtin already exists."){
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                          <h5>Gtin Already Exist Try Another Gtin </h5>
                                        </div>
                
                      setWaringmessage(warningDIV)                         
                      }
                      else{ 
                        navigate("/gtinpool")
                      }
                    
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

                  <div class="card-body">  
                  <br></br>
   
    
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
          {warningmessage}
         <div id="gtincreateselectbox">
         {gtinfield}
         
         </div>
         <br></br>
        
         {availablefield}
         

          {minimumfield}
          {renewalfield}
            
          <div id="gtincreatebutton">

        
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

export default GtinDataEntry
