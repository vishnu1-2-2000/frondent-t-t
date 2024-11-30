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
import Tooltip from '@mui/material/Tooltip';
const PoDataEntry =(props) =>{
                    let statusOptions = [ {value:"Draft", label:"Draft"},
                    {value:"Inproduction", label:"Inproduction"},
                    {value:"Closed", label:"Closed"},
                    {value:"Shipping", label:"Shipping"}
                  ];

var warningDIV = <div className="alert alert-success pt-4" role="alert">
                  <h5>Input all the values</h5>
               </div>  


  const [id, setId] = useState(0);
  const [manufacturinglocations,setManufacturinglocations]=useState([]);
  const [manufactureforegin,setManufactureforegin]=useState("");
  // const[man,setMan]=useState("")
  const [products,setProducts]=useState([]);
  const [prodforegin,setProdforegin]=useState("");
  const [productionline,setProductionline]=useState([]);
  const [productionforegin,setProductionforegin]=useState("");
  const [processOrderNumber, setProcessOrderNumber] = useState("");
  const [batch,setBatch]=useState("");
  const [created_by,setCreatedby]=useState("");
  const [status,setStatus]=useState("");
  const [regulation,setRegulation]=useState("");
  const [packaging_Version,setPackVer]=useState("");
  const [expiration_date,setExpir]=useState("");
  const [production_date,setProductiondate]=useState("");
  const [productionOrderEditID, setProductionOrderEditID] = useState();
  const [statusOptionsSelected, setStatusOptionsSelected] = useState("");
  const [statusOptionsState, setStatusOptionsState] = useState(statusOptions);

 
 
  

const[serialno,setSerialno]=useState("")
const[produced,setProduced]=useState("");
const[requested,setRequested]=useState("");
const[line,setLine]=useState("");
const [statusReceivedFromDataGrid, setStatusReceivedFromDataGrid] = useState("");

const[availableprocessordernumber,setAvailableprocessordernumber]=useState('');
const[warningmessage,setWaringmessage]=useState("");
const[imn,setImn]=useState("");

//edit field value display
const[manufactnamevalue,setManufactnameValue]=useState("");
const[manufactnamelabel,setManufactnameLabel]=useState("");

const[productnamevalue,setProductnameValue]=useState("");
const[productnamelabel,setProductnameLabel]=useState("");

const[productionlinevalue,setProductionlineValue]=useState("");
const[productionlinelabel,setproductionlineLabel]=useState("");


const[gtin,setGtin]=useState("");
const[type,setType]=useState("");








const { operation } = useParams();
const { uniqueID } = useParams();
var username = window.localStorage.getItem('username')
var password = window.localStorage.getItem('password')
var userrole= window.localStorage.getItem('userrole')
var loggedInUsername=window.localStorage.getItem('loggedInUsername')

var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
let optionsNew=[]
let optionsNewproduct=[]
let optionsNewline=[]

let availableprocessordernumbers=[]
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
const navigate = useNavigate();

function getProductOrderEditRequestData() {
  // var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
  var productionOrderEditID = uniqueID;
  //alert(productionOrderEditID);
  axios
    .get(window.url+"/master/productionorder/"+productionOrderEditID+"/",
    {
      
    },
    {
      'param': 'vbc' 
    }
  )
  .then((res) => {
    
  
    setCreatedby(res.data[0].created_by);
    setRegulation(res.data[0].regulation);
    setProductiondate(moment(res.data[0].production_date).utc().format('YYYY-MM-DD'));
    setPackVer(res.data[0].packaging_Version);
    //setExpir(res.data[0].expiration_date);
    setExpir(moment(res.data[0].expiration_date).utc().format('YYYY-MM-DD'));
    setStatusOptionsSelected(res.data[0].status);

    setProcessOrderNumber(res.data[0].process_order_number);
    setBatch(res.data[0].batch_number);
    setManufactureforegin(res.data[0].manufacturing_location);
    setProdforegin(res.data[0].product_conn);
    setProductionforegin(res.data[0].Production_line_id);
    selectedManufactname(res.data[0].manufacturing_location);
    selectedProductname(res.data[0].product_conn);
    selectedProductionlinename(res.data[0].Production_line_id);
    setSerialno(res.data[0].serialnoprovider);
    setImn(res.data[0].imn);
    setLine(res.data[0].line);
   

  });
} 
  

// function getRegSystemLinebasedData(){
//   // alert(productionlinevalue)
//   axios
//   .get(window.url+"/productionline/registeredsystem/"+productionlinevalue+"/",
 
// )
// .then((res) => {
//   // alert("klo")
//   // alert(res.data[0].ip_address)

//   setLine(res.data[0].ip_address);
  
 

// });
// }
function selectedManufactname(manufactnameparam) {
  //alert("anu");
  axios
    .get(window.url+"/productionline/manufacturinglocation/",
      {
        
      },
      {
        'param': 'anu' 
      }
    )
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      res.data.map(data => {
      if(data.id==manufactnameparam){
        setManufactnameLabel(data.name);
        setManufactnameValue(data.id);
      }
        

      });  
    
      
      
    });
}

function selectedProductname(productnameparam) {
  //alert("anu");
  axios
    .get(window.url+"/master/product/",
      {
        
      },
      {
        'param': 'anu' 
      }
    )
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      res.data.map(data => {
      if(data.id==productnameparam){
        setProductnameLabel(data.name);
        setProductnameValue(data.id);
      }
        

      });  
    
      
      
    });
}

function selectedProductionlinename(productionlinenameparam) {
  //alert("anu");
  axios
    .get(window.url+"/productionline/registeredsystem/",
      {
        
      },
      {
        'param': 'anu' 
      }
    )
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      res.data.map(data => {
      if(data.id==productionlinenameparam){
        // alert(data.ip_address)
        setproductionlineLabel(data.line);
        setProductionlineValue(data.id);
        // setLine(data.ip_address)
      }
        

      });  
    
      
      
    });
}






function getManufacturinglocations() {
  axios
    .get(window.url+"/productionline/manufacturinglocation/",
    {
      
    },
    {
      'param': 'anu' 
    })
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      // alert("anu")
      res.data.map(data => {
      optionsNew.push({ value: data.id, label: data.name });
    });
      
    setManufacturinglocations(optionsNew);
    //  alert(optionsNew)
  });
}

function getProducts() {
  axios
  .get(window.url+"/master/product/",
  {
    
  },
  {
    'param': 'anu' 
  })
  .then((res) => {
    // let batchNumberOptionsInitial = "";
    //
    res.data.map(data => {
      if(data.status==true)
      {
        optionsNewproduct.push({ value: data.id, label: data.name });
      }
    });
          
    setProducts(optionsNewproduct);
   
  });
}

function getProductionlines(regsystemline) {
  axios
   .get(window.url+"/productionline/registeredsystem/",
    {
      
    },
    {
      'param': 'anu' 
    })
    .then((res) => {
      // let batchNumberOptionsInitial = "";
      //  alert("jinu")
      res.data.map(data => {
      optionsNewline.push({ value:data.id, label: data.line});
    });
              
    setProductionline(optionsNewline);
      // alert(productionline)
    });
}
useEffect(() => {

  //alert(window.localStorage.getItem("productionOrderEditID"));
  getManufacturinglocations();
  getProducts();
  getProductionlines();
  // getRegSystemLinebasedData();
  if(operation === 'edit') {
    getProductOrderEditRequestData();

  }

}, []);


const statusOptionsChangeFunction = event => {
  //setBatchNumber(event.value);    
  //alert(event.value);

  setStatusOptionsSelected(event.value);
}

function getProcessOrderNumberData() {

  //alert(processOrderNumber);
  if(processOrderNumber=="") {
    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
    <h5>Input process order number</h5>
  </div>
  setWaringmessage(warningDIV)
  }

  axios
  .get(window.url+"/sapapp/sapproductionorder/"+processOrderNumber+"/",
    {
       
    },
    {
      'param': 'vbc' 
    }
  )
  .then((res) => {
    if(res.data.length > 0){
      setBatch(res.data[0].batch_number)
// setMan(res.data[0].manufacturing_location)
      setCreatedby(res.data[0].created_by)
      setStatus(res.data[0].status)
      setProductiondate(res.data[0].production_date)
      setExpir(res.data[0].expiration_date)
      setPackVer(res.data[0].packaging_Version)
      setRegulation(res.data[0].regulation)
      setSerialno(res.data[0].serialnoprovider)
      setProduced(res.data[0].produced)
      setRequested(res.data[0].requested)
      setImn(res.data[0].imn)

      warningDIV =  <div className="alert alert-success pt-4" role="alert">
  <h5>Production order fetched from SAP successfully</h5>
</div>

    setWaringmessage(warningDIV);
}
  else {
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5> Process order number does not exists in SAP</h5>
        </div>

          setWaringmessage(warningDIV);
        }
    });
  }


const getManufacturingasoptions = event => {
  // alert(event.value)
  setManufactureforegin(event.value); 

  setManufactnameLabel(event.label);
  setManufactnameValue(event.value);
  //setCustomername(event.label); 
  //window.localStorage.setItem(option); 

}
const getProductasoptions = event => {
  // alert(event.target.value)
  setProdforegin(event.value); 

  setProductnameLabel(event.label);
  setProductnameValue(event.name);
// mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm
// ghghghghghghghghghghghghghghghghghghghghghghghghghghghghghgh
  // setCustomername(event.label);
  //  window.localStorage.setItem(option);
  axios
  .get(window.url+"/master/product/"+event.value+"/",
 
)
.then((res) => {
  // alert("klo")
  // alert(res.data)
  // alert(res.data[0].gtin_number)

  setGtin(res.data[0].gtin_number);
  
 

});

}

const getProductionlineasoptions = event => {
  // alert(event.value)
  setProductionforegin(event.value); 

  setproductionlineLabel(event.label);
  setProductionlineValue(event.value);

//  alert(productionforegin)
   
    axios
    .get(window.url+"/productionline/registeredsystem/"+event.value+"/",
   
  )
  .then((res) => {
    // alert("klo")
    // alert(res.data)
    // alert(res.data[0].ip_address)
  
    setLine(res.data[0].ip_address);
    
   
  
  });
  
  

  // setCustomername(event.label); 
  //  window.localStorage.setItem(option)    
}



     
             
if(operation=='new') {

  var headwidget=
<Controls.Input 
    disabled
    // fullWidth
    
    id="outlined-Company Prefix"
    value={loggedInUsername}
    //label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">            Enter Productionorder  Data </font></h4></pre></h4>}
  />

  var processnowidget= 
                      <TextField 
                        required
                        label="Productionorder Number"
                        id="outlined-Productionorder"

                        onChange={(e) => setProcessOrderNumber(e.target.value)}
                      /> 
  // var processnowidget=<input
  //     type="text"
  //     className="form-control"
  //     onChange={(e) => setProcessOrderNumber(e.target.value)}
      
  //   />

  var fetchwidget=  <button className="btn btn-primary"
                    onClick={() => getProcessOrderNumberData()}>
                    <AiIcons.AiOutlineCloudDownload size={35}/>
                  </button>

    var productwidget=
  <Select className="s"     options={products} onChange={getProductasoptions}/>

    // <Box sx={{  }}>
    //       <FormControl>
    //         <InputLabel id="demo-simple-select-label">Product</InputLabel>
    //         <NativeSelect 
    //         labelId="demo-simple-select-label"
    //         id="demo-simple-select"
    //         input={<OutlinedInput label="Product" />}
    //         MenuProps={MenuProps}
    //         style={{width:'220px'}}
    //         label="Product"
    //         onChange={getProductasoptions}
    //         ><option>Select Product</option> 
    //         {products.map((data) => (


    //       <option key={data.label} value={data.value}>

    //       {data.label}

    //       </option>

    //       ))}
    //       </NativeSelect>
    //       </FormControl>
    //       </Box> 
  var batchnowidget=
  // <input
  //     type="text"
  //     className="form-control"
  //     value={batch}
  //     onChange={(e) => setBatch(e.target.value)}
  //     /> 
                  <TextField required
                      label="Batch Number"
                      id="outlined-Batch"
                      value={batch}
                      InputProps={{
                        readOnly: true,
                      }}
                      onChange={(e) => setBatch(e.target.value)}
                  /> 
  var manufactwidget= 
  <Select className="s" options={manufacturinglocations} onChange={getManufacturingasoptions}/>
  // <Box sx={{ minWidth: 70 }}>
  //         <FormControl >
  //         <InputLabel id="demo-simple-select-label">Manufacturing Location</InputLabel>
  //         <NativeSelect
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"
  //         input={<OutlinedInput label="Manufacturing Location"/>}
  //         MenuProps={MenuProps}
  //         style={{width:'224px'}}
  //         label="Manufacturing Location"
  //         onChange={getManufacturingasoptions}
  //         ><option>Select Manufacturing Location</option> 
  //         {manufacturinglocations.map((data) => (


  //         <option key={data.label} value={data.value}>

  //         {data.label}

  //         </option>

  //         ))}
  //         </NativeSelect>
  //         </FormControl>
  //         </Box> 
  
  var createdbywidget=
  // <input
  //     type="text"
  //     className="form-control"
  //     value={created_by}
  //     onChange={(e) => setCreatedby(e.target.value)}
  //     /> 
                          <TextField required
                              label="Created By"
                              id="outlined-CreatedBy"
                              value={created_by}
                              InputProps={{
                                readOnly: true,
                              }}
                              onChange={(e) => setCreatedby(e.target.value)}
                          /> 
  var regulationwidget= 
  // <input
  //     type="text"
  //     className="form-control"
  //     value={regulation}
  //     onChange={(e) => setRegulation(e.target.value)}
  //     /> 
      <TextField required
        label="Regulation"
        id="outlined-Regulation"
        value={regulation}
        InputProps={{
          readOnly: true,
        }}
        onChange={(e) => setRegulation(e.target.value)}
      /> 
  var productiondatewidget=
    // <input
    //     type="text"
    //     className="form-control"
    //     value={production_date}
    //     onChange={(e) => setProductiondate(e.target.value)}
    //   />

                    <TextField required
                      label="Production Date"
                      id="outlined-ProductionDate"
                      value={production_date}
                      InputProps={{
                        readOnly: true,
                      }}
                      onChange={(e) => setProductiondate(e.target.value)}
                    /> 
  var serialnowidget=
  // <input
  //     type="text"
  //     className="form-control"
  //     value={serialno}
  //     onChange={(e) => setSerialno(e.target.value)}
  //     /> 
                      <TextField required
                        label="SeialNumber"
                        id="outlined-SeialNumber"
                        value={serialno}
                        InputProps={{
                          readOnly: true,
                        }}
                        onChange={(e) => setSerialno(e.target.value)}
                      /> 
  var packageverwidget=
  // <input
  //     type="text"
  //     className="form-control"
  //     value={packaging_Version}
  //     onChange={(e) => setPackVer(e.target.value)}
  //     />
                      <TextField required
                          label="Packaging Version"
                          id="outlined-Packaging"
                          value={packaging_Version}
                          InputProps={{
                            readOnly: true,
                          }}
                          onChange={(e) => setPackVer(e.target.value)}
                      /> 
  var imnwidget=
  // <input
  //     type="text"
  //     className="form-control"
  //     value={imn}
  //     onChange={(e) => setImn(e.target.value)}
  //     /> 

      <TextField required
                  label="Imn"
                  id="outlined-imn"
                  value={imn}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={(e) => setImn(e.target.value)}
      /> 
  var expwidget=
  // <input
        // type="text"
        // className="form-control"
        // value={expiration_date}
        // onChange={(e) => setExpir(e.target.value)}
        // /> 
                      <TextField required
                          label="Expiration Date"
                          id="outlined-exp"
                          value={expiration_date}
                          InputProps={{
                            readOnly: true,
                          }}
                          onChange={(e) => setExpir(e.target.value)}
                      /> 
  var linewidget=
  // <input
  //       type="text"
  //       className="form-control"
  //       value={line}
  //       onChange={(e) => setLine(e.target.value)}
  //       /> 

                      <TextField required
                        label="Line"
                        id="outlined-line"
                        value={line}
                        InputProps={{
                          readOnly: true,
                        }}
                        // onChange={Regsystemlnedata}

                        // onChange={(e) => setLine(e.target.value)}
                      /> 

//     var statusOptionsWidget=  <Select onChange={statusOptionsChangeFunction} 
//     options={statusOptionsState}
//     value={{label:statusOptionsSelected, value:statusOptionsSelected}}
// />
var statusOptionsWidget=
// {/* <input
//         type="text"
//         className="form-control"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         />  */}
                      <TextField required
                          label="Status"
                          id="outlined-status"
                          value={status}
                          InputProps={{
                            readOnly: true,
                          }}
                          onChange={(e) => setStatus(e.target.value)}
                      /> 
  var productionlinewidget= 
   <Select className="s" options={productionline} onChange={getProductionlineasoptions}/>
          // <Box sx={{ minWidth: 70 }}>
          // <FormControl >
          // <InputLabel id="demo-simple-select-label">Production Line</InputLabel>
          // <NativeSelect
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          // input={<OutlinedInput label="Production Line" />}
          // MenuProps={MenuProps}
          // style={{width:'223px'}}
          // label="Production Line"
          // onChange={getProductionlineasoptions}
          // ><option>Select Production Line</option> 
          // {productionline.map((data) => (


          // <option key={data.label} value={data.value}>

          // {data.label}

          // </option>

          // ))}
          // </NativeSelect>
          // </FormControl>
          // </Box> 

  var gtinwidget=

                <TextField required
                    label="Gtin"
                    id="outlined-Gtin"
                    value={gtin}
                    InputProps={{
                      readOnly: true,
                    }}
                    // onChange={(e) => setGtin(e.target.value)}
                />    


    var typewidget=

                  <TextField required
                      label="Type"
                      id="outlined-Type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                  />    

}



const handleSubmit = (e) => {

  // var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
  //alert(productionOrderEditID);
    var productionOrderEditID = uniqueID;
    e.preventDefault();
    // console.log("clicked");
  // alert(processOrderNumber)
  // alert(prod);
  // alert(batch)
  // alert(production);
  // alert(manufacture)
  // alert(created_by)
  // alert(status)

  //TESTING

    var testPassed = "false";

    if(processOrderNumber !=""){
    testPassed = "true";

    }
    else {
    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
      <h5>Input process order number</h5>

    
    </div>
    setWaringmessage(warningDIV)
    testPassed = "false";
    }

//////////////////  Product name testing

    if(testPassed == "true") {
    if(prodforegin != "") {
      testPassed = "true";
    }
    else {
    warningDIV =  <div className="alert alert-danger pt-4" role="alert">
      <h5>Input product name</h5>
    </div>
      setWaringmessage(warningDIV)
      testPassed="false";
    }
    }

///////  Batch number testing

    if(testPassed == "true") {
    if(batch != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5>Input batch number</h5>
                    </div>
    setWaringmessage(warningDIV)
    testPassed = "false";
    }
    }

    ///////  Manufacturing location testing

    if(testPassed == "true") {
    if(manufactureforegin != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5>Input manufacturing location</h5>
                    </div>

      setWaringmessage(warningDIV);
      testPassed = "false";
    }
    }

    ////////   Regulation testing

    if(testPassed == "true") {
    if(regulation != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5>Input regulation</h5>
                    </div>

      setWaringmessage(warningDIV);
      testPassed = "false";
    }
    }

    //////////  Packing version testing

    if(testPassed == "true") {
    if(packaging_Version != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5>Input packing version</h5>
                    </div>

    setWaringmessage(warningDIV);
      testPassed = "false";
    }
    }

    ///////////  Production line testing

    if(testPassed == "true") {
    if(productionforegin != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5>Input production line</h5>
                    </div>

      setWaringmessage(warningDIV);
      testPassed = "false";
    }
    }
    if(testPassed == "true") {
    if(line != "") {
      testPassed = "true";
    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                      <h5> line</h5>
                    </div>

      setWaringmessage(warningDIV);
      testPassed = "false";
    }
    }

    if(testPassed == "true") {
      if(gtin != "") {
        testPassed = "true";
      }
      else {
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                        <h5> Input Gtin</h5>
                      </div>
  
        setWaringmessage(warningDIV);
        testPassed = "false";
      }
      }

      if(testPassed == "true") {
        if(type != "") {
          testPassed = "true";
        }
        else {
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                          <h5> Input Type</h5>
                        </div>
    
          setWaringmessage(warningDIV);
          testPassed = "false";
        }
        }


    if(testPassed == "true") {
    warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                    <h5>Verifying data</h5>
                  </div>

    setWaringmessage(warningDIV);
    }




if(testPassed == "true") {
  if(operation === 'new') {
    // alert(processOrderNumber)
    // alert(prodforegin)
    // alert(batch)
    // alert(productionforegin)
    // alert(created_by)
    // alert(status)
    // alert(production_date)
    // alert(regulation)
    // alert(packaging_Version)
    // alert(expiration_date)
    // // alert(produced)
    // alert(requested)
    // alert(serialno)
    // alert(loggedInUsername)
    // alert(loggedInUserrole)
    // alert(imn)
    // alert(line)
    axios
      .post(window.url+'/master/productionorder/', 
      {
        "process_order_number": processOrderNumber, 
        "product_conn":prodforegin,   
        "batch_number": batch, 
        "manufacturing_location" :manufactureforegin,  
        "Production_line_id":productionforegin,
        "created_by": created_by,
        "status": status,
        "production_date":production_date,
        "regulation":regulation,
        "packaging_Version":packaging_Version,
        "expiration_date":expiration_date,
        // "produced":produced,
        "requested":requested,
        "serialnoprovider":serialno,
        "loggedInUsername":loggedInUsername,

        "loggedInUserrole":loggedInUserrole,
        "internal_material_number":imn,
        "line":line,
        "gtin_number":gtin,
        "type":type

       
        // "password":pass
      },
      {
        
      })

      .then((res) => {
        alert(res.data.process_order_number);
        if(res.data.process_order_number == "production order with this process order number already exists."){
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                            <h5>Process order already downloaded, try another process order</h5>
                          </div>

            setWaringmessage(warningDIV)                         
        }
        else if(res.data.batch_number == "production order with this batch number already exists."){
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                            <h5>Batch Number already downloaded, try another Batch Number</h5>
                          </div>

            setWaringmessage(warningDIV)                         
        }
        

        else{
        navigate("/productionorder");
        }
      });

      axios
  
      .post(window.url+"/master/ProdOrderReport/",

    {
      "process_order_number":processOrderNumber,
      "batch_number": batch,
      "gtin":gtin,
      "expiration_date" :expiration_date,
      "numbers":0,   
      "type" :type,
      "ip_address":line,
      "product_name":prodforegin,
      "manufacture_loc_name":manufactureforegin,
      "accepted":0,
      "specimen":0,
      "damaged":0,
     "sample":0,
      "challenged":0,
     "teach":0,
      "inprocess":0,
      "rejectedbycamera":0,
     "unused":0,
     "production_date" :production_date

    })

.then((res2) => {
})
    
          
    }
  

  }
}
  var editSaveButtonDisabled = 
    <button disabled="true" className="btn btn-primary" onClick={handleSubmit}>Save</button>

  var editSaveButtonEnabled = 
    <button className="btn btn-primary" onClick={handleSubmit}>Save</button>

  var editSaveButton = "";
  
// if(statusReceivedFromDataGrid == "Draft") {
//   editSaveButton = editSaveButtonEnabled;
// }
// else {
//   editSaveButton = editSaveButtonDisabled;
// }
  return(
    <>
      
      <br/>        <br/>       
           
           

           <div class="container" style={{display:"flexbox"}}>  
           
  <div className="row">
   
  <div className="col-3"></div>
            <div className="col-6"><br/>
            
            <h4 ><h4 style={{color:"black"}}><font face="times new roman" size="6">Production Order Data Entry </font></h4></h4><br/>                 
          
            
              </div>
              <div className="col-3">   </div>
            {/* <div className="col-2"><br/> 
             
              
            </div>
            <div className="col-2"><br/>  */}
          
              
            {/* </div> */}
            </div>

            <div className="row">
   
   <div className="col-4">  {processnowidget}&nbsp;&nbsp;&nbsp;
             {fetchwidget} </div>
    
   <div className="col-5"></div>
    
   <div className="col-3"></div>
   </div>
   <br/> 

   
   
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25' },
      }}
      noValidate
      autoComplete="off"
    >
     
   
      <div style={{backgroundColor:"#AAF0D1",alignContent:"flex-end"}} >
      <div className="row">
   
   <div className="col-2"></div>
    
   <div className="col-8">{warningmessage}</div>
    
   <div className="col-2"></div>
   </div>
      
      {batchnowidget}
              {regulationwidget}
              {packageverwidget}
              {productiondatewidget}
                 
                 
                <br/>
                {expwidget}
              {imnwidget} 
              
       
      
        
        {serialnowidget}
        {headwidget}
               <br/>
            
              {gtinwidget}
              {linewidget}
              
               {typewidget}
               {statusOptionsWidget} 
               <br/>
             
           
               </div>
               </Box>
    
    

                <br/>
                <table class="table table-borderless productionOrderReportSearchTable" style={{backgroundColor:"#AAF0D1"}}>
                            <tbody>
                             
                              <tr>
                                <td class="productionOrderReportSearchTD">Product Name</td>
                                <td class="productionOrderReportSearchTD">
                                
{productwidget} 
                                </td>
                              </tr>
                              <tr>
                                <td class="productionOrderReportSearchTD">Production Line</td>
                                <td class="productionOrderReportSearchTD">
                                {productionlinewidget}
                                </td>
                              </tr>
                  
                            
                              <tr>
                                <td class="productionOrderReportSearchTD">Manufacturing Location</td>
                                <td class="productionOrderReportSearchTD">
                                {manufactwidget}
                                </td>
                              </tr>
                           
                            
                             
                              
                            <tr></tr>
                            
                          </tbody>
                        </table> 






      <div className="row">
        <div className="col-4">
       
        </div>
        <div className="col-4">
        <center><button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit} >
                      Save data
                  </button></center>
        </div>
        <div className="col-4">
        </div>
       
       
      
      </div>
        
       
      </div>
     
  
  </>
  )

}

export default PoDataEntry


{/* <div className="row">
   
<div className="col-4"></div>
 
<div className="col-4"></div>
 
<div className="col-4"></div>
</div> */}