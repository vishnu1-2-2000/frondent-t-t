
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
// import Select from "react-select";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

import Autocomplete from '@mui/material/Autocomplete';

function ProductDataEntry() {
  
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

  const [warningmessage,setWarningmessage]=useState(warningDiv);
//properties details
  const [ GS1_company_prefix , setGS1companyprefix ] = useState("");
  const [ AT_PZN, setATPZN] = useState("");
  const [BE_ABP_CODE ,setBEABPCODE] = useState("");
  const [BR_An_visa_Registration_Number,setBRAnvisaRegistrationNumber] = useState("");
  const [CA_DN, setCADN] = useState("");
  const [CH_Swillme_dic,setCHSwillmedic] =useState("");
  const[CN_Subtype_Code ,setCNSubtypeCode ] =useState("");
  const[ DE_PPN,setDEPPN]=useState("");
  const[ DE_PZN,setDEPZN]=useState("");
  const[Dosage,setDosage]=useState("");
  const[EAN_13,setEAN13]=useState("");  
  const [Form_type,setFormtype]=useState("");
  const [ Generic_Name, setGenericName] = useState("");
  const [ GR_EOF_CODE , setGREOFCODE ] = useState("");
  const [HR_Croatia_National_Code  ,setHRCroatiaNationalCode ] = useState("");
  const [IN_Product_Code,setINProductCode] = useState("");
  const [IT_Bollino, setITBollino] = useState("");
  const [KR_KFDA_Code ,setKRKFDACode ] =useState("");
  const[License_Number,setLicenseNumber] =useState("");
  const[ Manufacturing_Date,setManufacturingDate]=useState("");
  const[ NL_KLMP,setNLKLMP]=useState("");
  const[NRD_Nordic_VNR_Drug_Code,setNRDNordicVNRDrugCode]=useState("");
  const[Packet_type,setPackettype]=useState("");
  const [Revision_Number,setRevisionNumber]=useState("");
  const [PT_Aim_Number, setPTAimNumber] = useState("");

  const[productEditID,setProductEditID]=useState("");



  const[showproperties,setProperties]=useState("");

  //Hrf page

  const [hrf1,setHrf1]= useState("");
  const [hrf2,setHrf2]= useState("");
  const [hrf3,setHrf3]= useState("");
  const [hrf4,setHrf4]= useState("");
  const [hrf5,setHrf5]= useState("");

  const[showhrf,setHrf]=useState("");
  const [testStatusChecked, setTestStatusChecked] = useState(false);

  const[cusnamelabel,setCusnameLabel] =useState("");
  const[cusnamevalue,setCusnameValue]=useState("")   
  
     
  
  const navigate = useNavigate();
  const {uniqueID}=useParams();
  const { operation } = useParams();
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  // var userrole =window.localStorage.getItem('userrole')
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  let optionsNew=[]

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
function selectedCustomername(cusnamefunparam) {
  //alert("anu");
  axios
  .get(window.url+"/master/customer/",
    {
        // auth: {
        //   username: username,
        //   password: password
        // }
    },
    {
      'param': 'anu' 
    }
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


  // useEffect(() => {
   
  //   }, []);

  function getProductNumberData() {
      //alert(processOrderNumber);
 
    axios
    .get(window.url+"/sapapp/sapproduct/"+gtin_number+"/",
    {
        //  auth: {
        //    username: username,
        //    password: password
        //  }
    },
    {
      'param': 'vbc' 
    }
    )
    .then((res) => {
    //  alert(res.data[0].status)
      setName(res.data[0].name);
      setImn(res.data[0].imn);
      setCreatedby(res.data[0].created_by);
        // setStatus(res.data[0].status);
        // setDesp(res.data[0].description);
    });
  }



// const getProduct = event => {
//   // alert(event.value)
//   setCustomerid(event.value);

//   setCusnameLabel(event.label);
//   setCusnameValue(event.value);
//       // setCustomername(event.label); 
//       //  window.localStorage.setItem(option)    
//     }
  // const getProduct=event=>{
  
  //   setCustomerid(event.target.value)
  // // setSelectCustomerName(event.label)
  //   setCusnameLabel(event.label)
  //   setCusnameValue(event.target.value)
  // // alert(event.target.value)
  // //  alert(event.label)
  // }

  const getProduct = (event, value) => {
   
    // setCustomerid(value)
  // setSelectCustomerName(label)
    // setCusnameLabel(value)
    // setCusnameValue(value)
    axios
  .get(window.url+"/master/customername/"+value+"/",
 
)
.then((res) => {
 

  setCustomerid(res.data[0].id);
  
 

});
    

    
    
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
  useEffect(() => {
    getCustomerId();
  }, []);


  const StatusCheck=(event)=>{

    setStatus(event.target.checked);
      
       
      
  }

       
 


  const productstatusfield = [
    {
      value: 'Confirmed',
      label: 'Confirmed',
    },
    {
      value: 'Not Confirmed',
      label: 'Not Confirmed',
    },

    
  ];

     
  if(operation === 'new') {
    var headwidget=
      <Controls.Input 
        disabled
        // fullWidth
        
              id="outlined-Company Prefix"
              value={loggedInUsername}
              //label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">                       Enter Product Data </font></h4></pre></h4>}
            
      
      />
     
  var gtinFieldWidget =<TextField required
                            label="Gtin"
                            id="outline-gtin"
    
                            onChange={(e) => setGtin(e.target.value)}
                        /> 
//   var fetchwidget=<button className="btn btn-primary"
//   onClick={() => getProductNumberData()}>
//   <AiIcons.AiOutlineCloudDownload size={35}/>
// </button>
  var nameWidget = <TextField required
                      id="outline-name"
                      onChange={(e) => setName(e.target.value)}
                      label="Name"
                  />
     
  
  
          
    // var custnameFieldWidget  = <Select className="s" 
    // onChange={getProduct} options={customerLocationOptionsNew} 
   
    // /> 
      
    
    var custnameFieldWidget = 
  
    
//   <Box sx={{ minWidth: 70 }}>
//     <FormControl >
//       <InputLabel id="demo-simple-select-label">Customer Name</InputLabel>
//       <NativeSelect
//       labelId="demo-simple-select-label"
//       id="demo-simple-select"
//       input={<OutlinedInput label="Customer Name" />}
//       MenuProps={MenuProps}

//       label="Customer Name"
//       onChange={getProduct}
//       ><option style={{color:"red"}}> Select Customer Name</option> 
//       {customerLocationOptionsNew.map((data) => (


//       <option key={data.label} value={data.value}>

//       {data.label}

//       </option>

// ))}
//   </NativeSelect>
//   </FormControl>
//   </Box> 

      <Autocomplete
                disablePortal

                id="combo-box-demo"

                options={customerLocationOptionsNew}
                onInputChange={getProduct}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params}  label="Select Customer" />}
                /> 
 
//  var custnameFieldWidget = 
//   <Autocomplete
//   id="free-solo-demo"
//   onChange={getProduct}
//   freeSolo
//   options={customerLocationOptionsNew.map((option) => option.label)}
//   options2={customerLocationOptionsNew.map((option2) => option2.value)}
//   renderInput={(params) => <TextField {...params} label="freeSolo" />}
// />
       
  var imnFieldWidget = <TextField required
                          id="outline-imn"
                          label="Imn" 
                          onChange={(e) => setImn(e.target.value)}
           
                      /> 

  var createdbyFieldWidget = <TextField required
                                id="outline-createdby"
                                label="Created by"
                                disabled
                  
                                value={loggedInUsername}
                              />
  var statusfield=<Grid item xs={12}><Controls.Input
                              id="outlined-select-Status"
                              select
                              label="Status"
                              defaultValue="EUR"
                              helperText="Please select Customer Status"
                              onChange={(e) =>setStatus(e.target.value)} value={status}
                            >
            
                              {productstatusfield.map((option1) => (
                                <MenuItem key={option1.value} value={option1.value}>
                                  {option1.label}
                                </MenuItem>
                              ))}
                              </Controls.Input>
                            </Grid>                           
// var statuswidget= <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)}/>
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
          if(testpassed == "true") {
            if(customer_id!=""){
              testpassed="true"
            }
            else{
              warningDiv =<div className="alert alert-danger pt-4" role="alert">
              <h5>Input Customer Name</h5>
              </div>
              setWarningmessage(warningDiv)
              testpassed="false"
            }
          }

            



            if(testpassed =="true"){
            if(operation === 'new') {
            alert(customer_id) 
        
              axios
                .post(window.url+'/master/product/', 
                {
                  "name": name, 
                  "imn":  imn,
                  // "description ":desp,
                  
                  "status":testStatusChecked,   
                  "gtin_number":gtin_number,
                  "created_by":loggedInUsername,
                  "customer_id":customer_id,
                  "loggedInUsername":loggedInUsername,

                  "loggedInUserrole":loggedInUserrole
                  
                },
                {
                  // auth: {
                  //   username: username,
                  //   password: password
                  // }
                }
                )
                .then((res) => {

       

                  //alert(res.data.gtin_number);

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
                  

                  else {

                    navigate("/product");

                  }

                });

                   
              }
            }
              }
            
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
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Product Details </font></h4></center></h4>            
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
    {/*                        
          <br></br>
          <br></br>
          <br/>
                          
          <div class="container">
            <div class="row">
                                   
              <div class="col-12">
                          
                <div className="d-flex justify-content-between m-2">
                  <h2>Product</h2>
                </div>
                {warningmessage}
                          
                          
                <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                  <tbody>
                    <tr>
                      <td class="productionOrderReportSearchTD">Gtin Number</td>
                      <td class="productionOrderReportSearchTD">
                        {gtinFieldWidget}
                      </td>
                          
                      <td class="productionOrderReportSearchTD">
                        {fetchwidget}
                      </td>
                          
                          
                    </tr>
                    <tr>
                      <td class="productionOrderReportSearchTD">Name</td>
                      <td class="productionOrderReportSearchTD">
                        {nameWidget}
                      </td>
                    </tr>
                    <tr>
                      <td class="productionOrderReportSearchTD">Imn</td>
                      <td class="productionOrderReportSearchTD">
                        {imnFieldWidget}
                      </td>
                    </tr>
                    <tr>
                      <td class="productionOrderReportSearchTD">Customer id</td>
                      <td class="productionOrderReportSearchTD">
                        {customernameFieldWidget}
                      </td>
                    </tr>
                          
                    <tr>
                      <td class="productionOrderReportSearchTD">Created by</td>
                      <td class="productionOrderReportSearchTD">
                        {createdbyFieldWidget}
                      </td>
                    </tr>
                    <tr>
                      <td class="productionOrderReportSearchTD">Status</td>
                      <td class="productionOrderReportSearchTD">
                        <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)}/>
                      </td>
                      </tr>
                    <tr>
                      <td class="productionOrderReportSearchTD">
                        <button className="btn btn-secondary" onClick={Productproperties}>Show properties &#62;&#62;&#62;</button>&nbsp;&nbsp;
                          {showproperties ? propertiesWidget : null}
                        <button className="btn btn-secondary" onClick={Producthrf}>Show Hrf &#62;&#62;&#62;</button>&nbsp;&nbsp;&nbsp;
                        {showhrf ? hrfwidget :null}   
                        <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
      </>
    )
}

export default ProductDataEntry
