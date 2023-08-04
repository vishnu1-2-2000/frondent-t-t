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
    

      const getLocation=event=>{
        setCustomerid(event.target.value)
    // setSelectCustomerName(event.label)
    setCusnameLabel(event.label)
    setCusnameValue(event.target.value)
    // alert(event.target.value)
    //  alert(event.label)
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
      .get("http://localhost:8000/master/product/"+productEditID+"/",
     
      )
      .then((res)=>{
  
        setGtin(res.data[0].gtin_number);
        setImn(res.data[0].imn);
        setCreatedby(res.data[0].created_by);
        setName(res.data[0].name);
        setCustomerid(res.data[0].customer_id);
        selectedCustomername(res.data[0].customer_id);
        setStatus(res.data[0].status);
      })
    }
    
    function getCustomerId(cuslocfunparam) {
      //alert("anu");
      axios
        .get("http://127.0.0.1:8000/master/customer/",
          
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
        .get("http://127.0.0.1:8000/master/customer/",
    
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
            label={<h4 ><pre><h4 style={{color:"white"}}>   Enter Customer Location Data </h4></pre></h4>}
           
     
   />
   </Box>
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
  
    
 <Box >
 <FormControl sx={{ m: 1,width: 220, minWidth: 150 }} >
 <InputLabel id="demo-simple-select-label">Customer Name</InputLabel>
   <NativeSelect
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    input={<OutlinedInput label="Customer Name" />}
    MenuProps={MenuProps}
    value={cusnamevalue}
    label={cusnamelabel}
   
    label="Customer Name"
    onChange={getLocation}
  >
    {customerLocationOptionsNew.map((data) => (
 
 
  <option key={data.label} value={data.value}>
   
  {data.label}
  
  </option>
  
))}
  </NativeSelect>
</FormControl>
</Box> 
  
          
            // <Select className="s" onChange={getLocation} options={customerLocationOptionsNew}  value={{value:cusnamevalue,label:cusnamelabel}} /> 
            
            
       
  var imnFieldWidget = <TextField required
            id="outline-imn"
            label="Imn" 
            value={imn}
            onChange={(e) => setImn(e.target.value)}
           
          /> 

  var createdbyFieldWidget = <TextField required
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
                        .put(`http://localhost:8000//master/product/update/${productEditID}`, 
                        
                        {"name":name,
                        "customer_id":customer_id,
                        "gtin_number":gtin_number,    
                        "imn":imn,
                        "created_by":loggedInUsername,
                        "status":status,
                        "loggedInUsername":loggedInUsername,

                          "loggedInUserrole":loggedInUserrole
                        
        
                        },
                        
                        )
                        .then(() => {
                          navigate("/product");
                        });
                    }
                  }
    };
  return (
    <>

                
    <br></br>
    <br></br>
    <br></br>
        <div class="container-fluid">
                  <div class="card shadow mb-4" id="customerfullcard"> 
                      <div class="card-header py-3" id="customercardhead">
                          <div className='row'>
                              <div className='col-10' id="customerhead">
                              {headwidget}
                              </div>
                          </div>
                                                          
                      </div>
    
                      <div class="card-body">  
                      <br></br>
        <br></br>
        
        {/* <div id="locationhead">
        {headwidget}
        </div>
        <br></br> */}
        
        <Box id="customerbox"
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
             {nameWidget}
              {imnFieldWidget}
    
            {gtinFieldWidget}
    
            
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}><MdOutlineSave size={38}/>
                                                          
                </button>
              <div>
              {createdbyFieldWidget}
              <div id="producteditselectbox">
              {custnameFieldWidget}
              </div>
             
    <div id="productstatus">
    {/* {statuswidget} */}
    <FormControlLabel  control={<Checkbox 
      
      checked={status}

      onChange={e => setStatus(e.target.checked)}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
      label="Gilad Gray"
    />} label="Status" />
    </div>
            
    
                
              </div>
    
              <div >
             
              
            
              
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

export default ProductDataEdit
