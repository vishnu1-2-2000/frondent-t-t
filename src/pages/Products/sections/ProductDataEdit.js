import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineSave } from 'react-icons/md';
import { Grid, } from '@material-ui/core';
import { useForm,Form } from "../../../components/useForm";
import Controls from "../../../components/Controls";
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

import Autocomplete from '@mui/material/Autocomplete';
function ProductDataEdit() {

  var warningDiv= <div className="alert alert-success pt-4" role="alert">
  <h5>Input all the values</h5>
      </div>
    const [id, setId] = useState(0);

    const [gtin_number, setGtin] = useState("");
    const [imn, setImn] = useState("");
    const [created_by, setCreatedby] = useState("");
    const [name, setName] = useState("");
    const [customer_id, setCustomerid] = useState("");
    const [customerLocationOptionsNew,setCustomerlocationoptionsnew]=useState([]);
    const[customername,setCustomername]=useState("");
    const[status,setStatus]=useState("");
    const navigate = useNavigate();
    const [warningmessage,setWarningmessage]=useState(warningDiv);

    const[cusnamelabel,setCusnameLabel] =useState("");
    const[cusnamevalue,setCusnameValue]=useState("")   
    const [testStatusChecked, setTestStatusChecked] = useState(false);

    //   const getLocation=event=>{
    //     setCustomerid(event.target.value)
    // // setSelectCustomerName(event.label)
    //   setCusnameLabel(event.label)
    //   setCusnameValue(event.target.value)
    // // alert(event.target.value)
    // //  alert(event.label)
    // }

    const getLocation = (event, value) => {
      setCusnameLabel(value)
      setCusnameValue(value)
     
      axios
    .get(window.url+"/master/customername/"+value+"/",
   
  )
  .then((res) => {
   
  
    setCustomerid(res.data[0].id);
    
   
  
  });
      
  
      
      
  }
  // const getLocation=event=>{
  //   setCustomerid(event.value)
  //   // setSelectCustomerName(event.label)
  //   setCusnameLabel(event.label);
  // setCusnameValue(event.value);
  //   // alert(event.value)
  //   //  alert(event.label)
  //   }
    const { operation } = useParams();
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  
    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
    let optionsNew = [];
    let temparray=[]
  
    const {uniqueID}=useParams();
    
    let optionsname=[];
    let demolist=[]
    //  Fetch data from local storage
  
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
    
    function getProductEditRequestData(){
      var productEditID= uniqueID;
  
      axios
      .get(window.url+"/master/product/"+productEditID+"/",
     
      )
      .then((res)=>{
  
        setGtin(res.data[0].gtin_number);
        setImn(res.data[0].imn);
        setCreatedby(res.data[0].created_by);
        setName(res.data[0].name);
        setCustomerid(res.data[0].customer_id);
        selectedCustomername(res.data[0].customer_id);
        setTestStatusChecked(res.data[0].status);
  
      })
    }
    
    function getCustomerId(cuslocfunparam) {
      //alert("anu");
      axios
        .get(window.url+"/master/customer/",
          
      )
      .then((res) => {
         
          // let batchNumberOptionsInitial = "";
        res.data.map(data => {
          if(data.status==true){
              // alert("anu");
              // optionsname.push({ label:data.name })
            optionsNew.push({ value:data.id,label:data.name});
              // temparray.push({ value: data.id,label:data.name});
              
          }
            // alert(demolist)
            // if(data.id==cuslocfunparam ){
            //           setCuslocLabel(data.name);
            //           setCuslocvalue(data.id);
            //         }
            // optionsNew.push({ value: data.id,label:data.name});
            
  
          });
        
          setCustomerlocationoptionsnew(optionsNew);
          // setOptionName((localStorage.setItem(optionsName)))
          // alert(optionsNew)
          // setTransferData(temparray)
          
        });
    }
    const customStyles = {
          control: base => ({
            ...base,
            height: 55,
            minHeight: 55,
            width:223  
          })
      };
    function selectedCustomername(cusnamefunparam) {
      //alert("anu");
      axios
      .get(window.url+"/master/customer/",
    
      )
      .then((res) => {
          // let batchNumberOptionsInitial = "";
        res.data.map(data => {
          if(data.id==cusnamefunparam){
            setCusnameLabel(data.name);
            setCusnameValue(data.id);
          }
                
    
        });    
      });
    }
  
  
    useEffect(() => {
      if(operation=="edit"){
        getProductEditRequestData();
      }

      getCustomerId();
    }, []);
    if(operation === 'edit') {
      var headwidget=
      <Controls.Input 
      disabled
      // fullWidth
      
      id="outlined-Company Prefix"
     // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                         Edit Product Data </font></h4></pre></h4>}
  value={loggedInUsername}
   />
    
  var gtinFieldWidget = <TextField required
                            label="Gtin"
                            id="outline-gtin"
                            value={gtin_number}
                            onChange={(e) => setGtin(e.target.value)}
                          /> 
//   var fetchwidget=<button className="btn btn-primary"
//   onClick={() => getProductNumberData()}>
//   <AiIcons.AiOutlineCloudDownload size={35}/>
// </button>
  var nameWidget = <TextField required
                    id="outline-name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    label="Name"
                  />
     
  var custnameFieldWidget = 
          //       <Box>
          //         <FormControl sx={{ m: 1,width: 220, minWidth: 150 }} >
          //           <InputLabel id="demo-simple-select-label">Customer Name</InputLabel>
          //             <NativeSelect
          //               labelId="demo-simple-select-label"
          //               id="demo-simple-select"
          //               input={<OutlinedInput label="Customer Name" />}
          //               MenuProps={MenuProps}
          //               value={cusnamevalue}
          //               label={cusnamelabel}
                        
          //               label="Customer Name"
          //               onChange={getLocation}
          //             >
          //           {customerLocationOptionsNew.map((data) => (
                      
                      
          //           <option key={data.label} value={data.value}>
                        
          //             {data.label}
                    
          //           </option>
                    
          //         ))}
          //     </NativeSelect>
          //   </FormControl>
          // </Box> 
  
          
            // <Select className="s" onChange={getLocation} options={customerLocationOptionsNew}  value={{value:cusnamevalue,label:cusnamelabel}} /> 
            

            <Autocomplete
            disablePortal

            id="combo-box-demo"
            value={cusnamelabel}
            options={customerLocationOptionsNew}
            onInputChange={getLocation}
            sx={{ width: 200 }}
            renderInput={(params) => <TextField {...params}  label="Select Customer" />}
            /> 
            
       
  var imnFieldWidget =<TextField required
                        id="outline-imn"
                        label="Imn" 
                        value={imn}
                        onChange={(e) => setImn(e.target.value)}
                        
                      /> 

  var createdbyFieldWidget =<TextField required
                              id="outline-createdby"
                              label="Created by"
                              value={created_by}
                              disabled
                
                              value={loggedInUsername}
                            />
  var statuswidget= <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)}/>
// var createdbyFieldWidget =<input
//                             type="text"
//                             className="form-control"
//                             aria-describedby="emailHelp"
//                             onChange={(e) => setCreatedby(e.target.value)}
//                             value={created_by}
//                           />       
}

          
    
        
    
    
  
    
const handleSubmit = (e) => {
  e.preventDefault();
          // console.log("clicked");
          //alert(address);
  // var productEditID=uniqueID;
  var productEditID=uniqueID;
  var testpassed="false";
  if(gtin_number!=""){
    testpassed="true"
  }
  else{
    warningDiv =<div className="alert alert-danger pt-4" role="alert">
    <h5>Input Gtin number</h5>
    </div>
    setWarningmessage(warningDiv)
            // alert(warningmessage)
    testpassed="false"
    }
    if(testpassed == "true") {
      if (name!=""){
        testpassed="true"
      }
      else{
        warningDiv =<div className="alert alert-danger pt-4" role="alert">
        <h5>Input Name</h5>
        </div>
        setWarningmessage(warningDiv)
        testpassed="false"
      }
    }

    if(testpassed == "true") {
      if(imn!=""){
        testpassed="true"
      }
      else{
        warningDiv =<div className="alert alert-danger pt-4" role="alert">
        <h5>Input Imn</h5>
        </div>
        setWarningmessage(warningDiv)
        testpassed="false"
      }
    }
    // if(testpassed == "true") {
    //   if(created_by!=""){
    //     testpassed="true"
    //   }
    //   else{
    //     warningDiv =<div className="alert alert-danger pt-4" role="alert">
    //     <h5>Input Createdby</h5>
    //     </div>
    //     setWarningmessage(warningDiv)
    //     testpassed="false"
    //   }
    // }

          



    if(testpassed =="true"){
            
                   

              
      if(operation === 'edit') {
                      // alert(productEditID)
                      //  alert(name)
                      //  alert(customer_id)
                      //  alert(gtin_number)
                      //  alert(imn)
                      //  alert(created_by)
                      //  alert(status)
                      //  alert(loggedInUsername)
                      //  alert(loggedInUserrole)

        axios
        .put(window.url+`/master/product/update/${productEditID}`, 
                        
          {
            "name":name,
            "customer_id":customer_id,
            "gtin_number":gtin_number,    
            "imn":imn,
            "created_by":loggedInUsername,
            "status":testStatusChecked,
            "loggedInUsername":loggedInUsername,

            "loggedInUserrole":loggedInUserrole,
            "uniqueid":productEditID
                        
        
          },
                        
          )
          .then((res) => {
            if(res.data.gtin_number == "product with this gtin number already exists.") {

              warningDiv =  <div className="alert alert-danger pt-4" role="alert">

                              <h5>Product with this gtin already configured, try another product</h5>

                            </div>



              setWarningmessage(warningDiv);

            }
            else if(res.data.name == "product with this name already exists."){
              warningDiv=  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Product with this name already configured, try another product</h5>
                              </div>
    
              setWarningmessage(warningDiv)                         
            }
            else if(res.data.imn == "product with this imn already exists."){
              warningDiv=  <div className="alert alert-danger pt-4" role="alert">
                                <h5>Product with this imn already configured, try another product imn</h5>
                              </div>
    
              setWarningmessage(warningDiv)                         
            }
            else{
              navigate("/product");
            }
            
          });
        }
      }
    };
  return (
    <>

<br/><br/><br/><br/><br/>

{warningmessage}        
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25' },
          }}
          noValidate
          autoComplete="off"
        >
           
          <div style={{backgroundColor:"#AAF0D1"}} >
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Edit Product Details </font></h4></center></h4>            
          {nameWidget}  
          {imnFieldWidget}
          {gtinFieldWidget}
        

    
    
           
          
          <br/>
        


{headwidget}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<FormControlLabel  control={<Checkbox 
      
      checked={testStatusChecked}
      style={{marginTop:10}}
      onChange={e => setTestStatusChecked(e.target.checked)}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
      label="Gilad Gray"
    />} label="Status" /> 

  {custnameFieldWidget}

          <div className="row">
            <div className="col-4">
           
            </div>
            <div className="col-4">
            <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit} >
                          Save data
                      </button>
            </div>
            <div className="col-4">
            </div>
           
          
          </div>
            
           
          </div>
         
        </Box>
    </>
  )
}

export default ProductDataEdit
