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
import Tooltip from '@mui/material/Tooltip';
import Autocomplete from '@mui/material/Autocomplete';


function AllocateNumbers() {

 const[id,setId]=useState("");
 const[po,setPo]=useState("");
 const[lot,setLot]=useState("");
 const[minqty,setMinqty]=useState("");
 const[availableqty,setAvailableqty]=useState("") 
 const[gtin,setGtin]=useState("") 
 const[povalue,setPovalue]=useState("")
 const[polabel,setPolabel]=useState("")
 const [saveButtonText_state, setSaveButtonText_state] = useState("Allocate Numbers");
 const [saveButtonMode_state, setSaveButtonMode_state] = useState(false);
 const [warningmessage,setWarningmessage]=useState(warningDIV);
 const navigate=useNavigate();
const{uniqueID}=useParams();
const{operation}=useParams();
var loggedInUsername=window.localStorage.getItem('loggedInUsername')
var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')

var warningDIV= <div className="alert alert-success pt-4" role="alert">
<h5>Input all the values</h5>
</div>
  let poOption=[]
 function getproductionorder(){
    axios
    .get(window.url+"/master/productionorder/")
    .then((res)=>{
    res.data.map(data =>{
    poOption.push({value:data.process_order_number,label:data.process_order_number})
    
})
setPo(poOption)
    })
}


                  
                   
                        
                  
                       
                  
                      
                  
                  
useEffect(()=>{
   
 getproductionorder();
                   
  },[])
  const customStyles = {
    control: base => ({
      ...base,
      // height: 55,
      // minHeight: 55,
      width:330,
      // marginLeft:30
      
      
    })
  };
  
  const getponumber = event => {
                  
                    //  alert(event.value)
                    setPolabel(event.label)
                      // setGtinlabel(label)
                     setPovalue(event.value) ; 
                     axios
                     .get(window.url+"/master/productionorderidinprintertable/"+event.value+"/",
                      
                     )
                     .then((res) => {
                    //   alert('haiii')
                    //  alert(res.data[0].gtin_number)
                      setGtin(res.data[0].gtin_number)
                      setLot(res.data[0].batch_number)
                      // alert(res.data[0].gtin_number)start
                    
                 
               
                      axios
                      .get(window.url+"/master/gtinrcb/"+res.data[0].gtin_number+"/",
                       
                      )
                      .then((res1) => {
                        alert(res1.data[0].available_quantity)
                          setAvailableqty(res1.data[0].available_quantity)
                      
                     
                       
                      }) 

                    
                                        
                     })
                    
               
                     
                    // this.setState({ ...this.state, [event.target.id.split("-")[0]]: event.value });
                    
                }
                
                // gtinrcb/<int:id>/
             
                // const gtinshow = event => { 
                //   alert(event.value)
                 
                // }
        
                var headwidget=
                    
                      <Controls.Input 
                                  disabled
                                  // fullWidth
                            
                                  id="outlined-Company Prefix"
                                  value={loggedInUsername}
                                
                
                      />
                  
                
                  var pofield= 
                  <Select className="is" styles={customStyles} placeholder="Select productionorder Number"    options={po} onChange={getponumber}/>
             
                
//                  <Autocomplete
//                 disablePortal
                
//                 id="combo-box-demo"
                
//                 options={po}
//                 onInputChange={getponumber}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params}  label="Select Production order" />}
//                 /> 
               
                  var availablefield=
                                    
                                  <TextField required
                                    label="AvailableQuantity"
                                    id="outline-AvailableQuantity"
                                   value={availableqty}
                                    onChange={(e)=>setAvailableqty(e.target.value)}
                                    InputProps={{
                                      readOnly: true,
                                    }}
                                    /> 
               
                    var lotfield=
                             
                                    <TextField required
                                    label="Lot"
                                    id="outline-Lot"
                                    value={lot}
                                    onChange={(e)=>setLot(e.target.value)}
                                    InputProps={{
                                      readOnly: true,
                                    }}
                                    /> 
                 
                  var minimumfield=
                             
                                <TextField required
                                label="Enter Minimum Quantity"
                                id="outline-MinimumQuantity"
                               
                                onChange={(e)=>setMinqty(e.target.value)}
                                // InputProps={{
                                //   readOnly: true,
                                // }}
                                /> 
                    
            var gtinfield=
                             
                  <TextField required
                  label="Gtin"
                  id="outline-Gtin"
                 value={gtin}
                 onChange={(e)=>setGtin(e.target.value)} 
                 InputProps={{
                  readOnly: true,
                }}
                  />        
                  
            var createdbyfield=
                             
            <Controls.Input 
                 
                  id="outlined-Created By"
                  value={loggedInUsername}
                 
                  />        
                           
          
                
                const handleSubmit= (e)=>{
                    e.preventDefault();
           
                    // alert(minimumquantity)
                    var testpassed="false"
                    if(po!=""){
                      // alert(gtin)
                      testpassed="true"
                    }
                    else{
                      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                  <h5>Input  po</h5>
                                </div>
                              setWarningmessage(warningDIV);
                      testpassed="false"
                    }
                    
                                     
                    if(testpassed=="true"){
                      // alert(testpassed)  
                      if(minqty!="")
                      {
                        testpassed="true"
                      }
                      else{
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5>Input  Mininmum Quantity</h5>
                      </div>
                    setWarningmessage(warningDIV);
                    testpassed="false"
                      }
                    }
                   
                    if(testpassed=="true"){
                      setSaveButtonText_state("Allocate Numbers");
                      setSaveButtonMode_state(true);
                      warningDIV =  <div className="alert alert-primary pt-4" role="alert">
                      <h5>Process For Downloading Serialnumbers Have Been Executing.... </h5>
                    </div>

                  setWarningmessage(warningDIV)     
                 axios
                 .post(window.url+"/master/allocatednumbers/",
                 {
                    // "numbers":JSON.stringify({
                    
                  "id":id,
                   "process_order_number":povalue,
                   "batch_number":lot,
                   "gtin_number":gtin,
                  // "available_quantity":availableqty,
                //    "numbers":serialnumbers,
                   "quantity":minqty,
                   "created_by":loggedInUsername,
                   "loggedInUsername":loggedInUsername,

                    "loggedInUserrole":loggedInUserrole,
                   
                 })
                 .then((res)=>{
                    if(res.data.process_order_number == "allocatednumbers with this process order number already exists."){
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                          <h5>This Productionorder Already  Allocated Try Another Productionorder number </h5>
                                        </div>
                
                setWarningmessage(warningDIV)                         
                      }
                     
                      else if(res.data ==  500){
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                          <h5>No Such CSV File Related With This Gtin.Download That File And Try Again! </h5>
                                        </div>
                
                        setWarningmessage(warningDIV)                         
                      } 
                      else if(res.data ==  600){
                        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                                          <h5>No Serialnumbers Available in This File.Download More Numbers And Try Again  </h5>
                                        </div>
                
                        setWarningmessage(warningDIV)                         
                      } 
                    
                      else if(res.data ==  700){
                        warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                                          <h5>Please Enter Minimum Quantity Below One Lakh Number.Maximum Number Of SerialNumber Allocated In a Batch Is One Lakh! </h5>
                                        </div>
                
                        setWarningmessage(warningDIV)                         
                      } 
                      else if(res.data ==  800){
                        warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                                          <h5>Insufficient Serialnumbers.Please Check The Available Quantity! </h5>
                                        </div>
                
                        setWarningmessage(warningDIV)                         
                      } 
                    
                    
                 
                   
                     else if(res.data == 200){
                      setSaveButtonText_state("Allocate Numbers");
                      setSaveButtonMode_state(false);
                        warningDIV =  <div className="alert alert-success pt-4" role="alert">
                                          <h5>Serialnumbers Allocated Successfully </h5>
                                        </div>
                
                setWarningmessage(warningDIV)                         
                      } 
                      // else{ 
                      //   alert("Serialnumbers Allocated Successfully")
                      // }
                    
                 })   
}
  }              

  return (
                    <><br/><br/><br/><br/><br/><br/><br/><br/>


                    <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 4, width: '25' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    {warningmessage}     
                    <div style={{backgroundColor:"#AAF0D1"}} >
                    <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">  SerialNumbers Allocating to Batch</font></h4></center></h4> <br/>
                    <div></div>
                        
                    <div className="row">
  <div className="col-4"></div>
  <div className="col-4">{pofield} </div>
  <div className="col-4"></div>
 </div>

                    {lotfield}{gtinfield}{availablefield}{createdbyfield}  
                          {minimumfield}
                    
                   
                    <br/>
                   
                    
                    
                    
                     
                    
                    
                    <div className="row">
                      <div className="col-4">
                     
                      </div>
                      <div className="col-4">
                      <center> <button
                                  type="submit"
                                  className="btn btn-primary"
                                  onClick={handleSubmit}
                                  disabled={saveButtonMode_state} >
                                   {saveButtonText_state}
                                </button></center>
                      </div>
                      <div className="col-4">
                      </div>
                     
                    
                    </div>
                      
                     
                    </div>
                    
                    </Box>
                </>
  )
}

export default AllocateNumbers
