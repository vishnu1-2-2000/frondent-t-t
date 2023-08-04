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
function PoDataEdit() {
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
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  let optionsNew=[]
  let optionsNewproduct=[]
  let optionsNewline=[]

  let availableprocessordernumbers=[]

  const navigate = useNavigate();
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
  function getProductOrderEditRequestData() {
    // var productionOrderEditID = window.localStorage.getItem("productionOrderEditID");
    var productionOrderEditID = uniqueID;
    
    axios
      .get("http://127.0.0.1:8000/master/productionorder/"+productionOrderEditID+"/",
      {
        
      },
      {
        'param': 'vbc' 
      }
    )
    .then((res) => {
      
      // alert(res.data[0].imn);
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
      setImn(res.data[0].internal_material_number);
      setLine(res.data[0].line);
      setGtin(res.data[0].gtin_number);
      setType(res.data[0].type);
     
  
    });
  } 
  
  function selectedManufactname(manufactnameparam) {
    //alert("anu");
    axios
      .get("http://localhost:8000/productionline/manufacturinglocation/",
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
      .get("http://localhost:8000/master/product/",
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
      .get("http://localhost:8000/productionline/registeredsystem/",
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
          setproductionlineLabel(data.line);
          setProductionlineValue(data.id);
        }
          
  
        });  
      
        
        
      });
  }


  

  function getManufacturinglocations() {
    axios
      .get("http://localhost:8000/productionline/manufacturinglocation/",
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
    .get("http://localhost:8000/master/product/",
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

  function getProductionlines() {
    axios
     .get("http://localhost:8000/productionline/registeredsystem/",
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
    if(operation === 'edit') {
      getProductOrderEditRequestData();
  
    }
  
  }, []);


  const statusOptionsChangeFunction = event => {
    //setBatchNumber(event.value);    
    //alert(event.value);

    setStatusOptionsSelected(event.target.value);
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
    .get("http://127.0.0.1:8000/sapapp/sapproductionorder/"+processOrderNumber+"/",
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
    setManufactureforegin(event.target.value); 

    setManufactnameLabel(event.target.label);
    setManufactnameValue(event.target.value);
    //setCustomername(event.label); 
    //window.localStorage.setItem(option); 
  
  }
  const getProductasoptions = event => {
    // alert(event.value)
    setProdforegin(event.target.value); 

    setProductnameLabel(event.target.label);
    setProductnameValue(event.target.name);
// mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm,mlm
// ghghghghghghghghghghghghghghghghghghghghghghghghghghghghghgh
    // setCustomername(event.label);
    //  window.localStorage.setItem(option);

  }
  
  const getProductionlineasoptions = event => {
    //alert(event.value)
    setProductionforegin(event.target.value); 

    setproductionlineLabel(event.target.label);
    setProductionlineValue(event.target.value);
    // setCustomername(event.label); 
    //  window.localStorage.setItem(option)    
  }



     
   if(operation==='edit') {
  //   var processnowidget=<input
  //   type="text"
  //   className="form-control"
  //   onChange={(e) => setProcessOrderNumber(e.target.value)}
  //   value={processOrderNumber}
  // />
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
var processnowidget= 
<TextField required
                    label="Productionorder Number"
                    id="outline-gtin"
                    value={processOrderNumber}
                    onChange={(e) => setProcessOrderNumber(e.target.value)}
                    /> 
  var productwidget=
  // <Select className="s" options={products} onChange={getProductasoptions} value={{label:productnamelabel,value:productnamevalue}}/>
  <Box sx={{  }}>
          <FormControl >
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <NativeSelect 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Product" />}
          MenuProps={MenuProps}
          label={productnamelabel}
          value={productnamevalue}
          style={{width:'231px'}}
          label="Product"
          onChange={getProductasoptions}
          ><option>Select Product</option> 
          {products.map((data) => (


          <option key={data.label} value={data.value}>

          {data.label}

          </option>

          ))}
          </NativeSelect>
          </FormControl>
          </Box> 
  var batchnowidget=
  // <input
  // type="text"
  // className="form-control"
  // value={batch}
  // onChange={(e) => setBatch(e.target.value)}
  // /> 

  <TextField required
                    label="Batch Number"
                    id="outline-gtin"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    /> 
  var manufactwidget= 
  // <Select className="s" options={manufacturinglocations} onChange={getManufacturingasoptions} value={{value:manufactnamevalue,label:manufactnamelabel}}/>

  <Box sx={{ minWidth: 70 }}>
          <FormControl >
          <InputLabel id="demo-simple-select-label">Manufacturing Location</InputLabel>
          <NativeSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          input={<OutlinedInput label="Manufacturing Location" />}
          MenuProps={MenuProps}
          label={manufactnamelabel}
          value={manufactnamevalue}
          style={{width:'230px'}}
          label="Manufacturing Location"
          onChange={getManufacturingasoptions}
          ><option>Select Manufacturing Location</option> 
          {manufacturinglocations.map((data) => (


          <option key={data.label} value={data.value}>

          {data.label}

          </option>

          ))}
          </NativeSelect>
          </FormControl>
          </Box>
    var createdbywidget=
    // <input
    //       type="text"
    //       className="form-control"
    //       value={created_by}
    //       onChange={(e) => setCreatedby(e.target.value)}
    //       /> 
          <TextField required
          label="Created By"
          id="outline-gtin"
          value={created_by}
          onChange={(e) => setCreatedby(e.target.value)}
          />        
    var regulationwidget= 
    // <input
    //       type="text"
    //       className="form-control"
    //       value={regulation}
    //       onChange={(e) => setRegulation(e.target.value)}
    //     /> 
        <TextField required
          label="Regulation"
          id="outline-gtin"
          value={regulation}
          onChange={(e) => setRegulation(e.target.value)}
          />   
    var productiondatewidget=
    // <input
    //     type="Date"
    //     className="form-control"
    //     value={production_date}
    //     onChange={(e) => setProductiondate(e.target.value)}
    //   />
      <TextField required
      label="Production Date"
      id="outline-gtin"
      value={production_date}
      onChange={(e) => setProductiondate(e.target.value)}
      /> 
    var serialnowidget=
    // <input
    //   type="text"
    //   className="form-control"
    //   value={serialno}
    //   onChange={(e) => setSerialno(e.target.value)}
    //   /> 
      <TextField required
      label="Serial Number"
      id="outline-gtin"
      value={serialno}
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
      id="outline-gtin"
      value={packaging_Version}
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
      id="outline-gtin"
      value={imn}
      onChange={(e) => setImn(e.target.value)}
      />  
    var expwidget= 
    //  <input
    //     type="Date"
    //     className="form-control"
    //     value={expiration_date}
    //     onChange={(e) => setExpir(e.target.value)}
    //     /> 
        <TextField required
      label="Expiration Date"
      id="outline-gtin"
      value={expiration_date}
      onChange={(e) => setExpir(e.target.value)}
      />  
    var linewidget=
    // <input
    //     type="text"
    //     className="form-control"
    //     value={line}
    //     onChange={(e) => setLine(e.target.value)}
    //     /> 
        <TextField required
      label="Line"
      id="outline-gtin"
      value={line}
      onChange={(e) => setLine(e.target.value)}
      />  

    var statusOptionsWidget=  
    // <Select onChange={statusOptionsChangeFunction} 
    //                                   options={statusOptionsState}
    //                                   value={{label:statusOptionsSelected, value:statusOptionsSelected}}  
    //                                   className="s" />

                                      <Box sx={{ minWidth: 70 }}>
                                      <FormControl >
                                      <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                      <NativeSelect
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      input={<OutlinedInput label="Status" />}
                                      MenuProps={MenuProps}
                                      style={{width:'232px'}}
                                      value={statusOptionsSelected}
                                      label={statusOptionsSelected}
                                      label="Production Line"
                                      onChange={statusOptionsChangeFunction}
                                      ><option>Select Production Line</option>
                                     
                                      {statusOptionsState.map((data) => (
                                  
                                  
                                      <option key={data.label} value={data.value}>
                                  
                                      {data.label}
                                  
                                      </option>
                                  
                                      ))}
                                      </NativeSelect>
                                      </FormControl>
                                      </Box>  
                                      
                                     
    var productionlinewidget= 
    // <Select  className="s" options={productionline} onChange={getProductionlineasoptions} value={{value:productionlinevalue,label:productionlinelabel}}/>

    <Box sx={{ minWidth: 70 }}>
    <FormControl >
    <InputLabel id="demo-simple-select-label">Production Line</InputLabel>
    <NativeSelect
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    input={<OutlinedInput label="Production Line" />}
    MenuProps={MenuProps}
    style={{width:'228px'}}
    value={productionlinevalue}
    label={productionlinelabel}
    label="Production Line"
    onChange={getProductionlineasoptions}
    ><option>Select Production Line</option> 
    {productionline.map((data) => (


    <option key={data.label} value={data.value}>

    {data.label}

    </option>

    ))}
    </NativeSelect>
    </FormControl>
    </Box> 

var gtinwidget=

<TextField required
label="Gtin"
id="outline-Gtin"
value={gtin}
onChange={(e) => setGtin(e.target.value)}
/> 

var typewidget=

<TextField required
label="Type"
id="outline-Type"
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
  warningDIV =  <div className="alert alert-warning pt-4" role="alert">
                  <h5>Verifying data</h5>
                </div>

  setWaringmessage(warningDIV);
}





if(testPassed == "true") {
  
    
       if( operation=== "edit")
      {
        
        alert(statusOptionsSelected);
         
        axios
        .put(`http://127.0.0.1:8000/master/productionorder/update/${productionOrderEditID}`, 
        
        {
          "process_order_number": processOrderNumber, 
          "product_conn":prodforegin,   
          "batch_number": batch, 
          "manufacturing_location" :manufactureforegin,  
          "Production_line_id":productionforegin,
          "created_by": created_by,
          "status": statusOptionsSelected,
          "production_date":production_date,
          "regulation":regulation,
          "packaging_Version":packaging_Version,
          "expiration_date":expiration_date,
          "serialnoprovider":serialno,
          "loggedInUsername":loggedInUsername,
          "loggedInUserrole":loggedInUserrole,
          "internal_material_number":imn,
          "line":line,
          "gtin_number":gtin,
          "type":type
          // "produced":produced,
          // "requested":requested,    
        },
        
          
        )
        // .then(() => {
        //   navigate("/productionorder");
        // });
        .then((res) => {
          //alert(res.data['email']);
      if(res.data['process_order_number'] == 'edit with this process_order_number already exists.') {
          //alert(res.data['email']);
          warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                  <h5>Processordernumber already Exit</h5>
                  </div>
                  setWaringmessage(warningDIV);
      }
      else {
          navigate("/productionorder");
      }

  });
        
        
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
      <br></br> 
      <br></br>
      <br></br>
      <div class="container-fluid">
        <div class="card shadow mb-4" id="productionorderfullcard"> 
          <div class="card-header py-3" id="productionordercardhead">
            <div className='row'>
              <div className='col-10' id="productionorderhead">
                {headwidget}
              </div>
            </div>                                                
          </div>
          <div class="card-body" id="pocardbody">  
            <br></br>
            
        
        {/* <div id="locationhead">
        {headwidget}
        </div>
        <br></br> */}
        
            <Box id="productionorderbox"
              component="form"
              sx={{
              '& .MuiTextField-root': { m: 2, width: '26ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <br></br>
          <div id="pocontant">
              <div >
                {warningmessage}
                {processnowidget}
                {batchnowidget}
                {regulationwidget}
                
               
              </div>
             
              <div id="poeditbutton">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={handleSubmit}><MdOutlineSave size={38}/>                                          
                </button>
              </div>
              <br></br>
             
              <div >
                {productiondatewidget} 
                {imnwidget} 
                </div>
              <div id="poedit2">
                {productwidget}
              </div>
             
              <br></br>
            
              <div>
                {createdbywidget}
                {packageverwidget}
                {linewidget}
              </div>
              
              
  
              <div>
             
                {serialnowidget}
                {expwidget}
                
            
                
                </div>
                <div id="poedit3">
                {manufactwidget}
                </div>
               
                  <br></br>
                  
                 
                <div id="poedit5">
                  {productionlinewidget}
   
                </div>
            
                <div id="poedit6" >
                  {statusOptionsWidget}
                 
                 <br></br>
                  
                </div>
               
               
    
               
              </div>
              <div id="pogtin">
               {gtinwidget}
                </div>
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{typewidget}
                </div>
            </Box> 
            <hr></hr>    
          </div>
        </div>
      </div>  
    </>
    )
}

export default PoDataEdit