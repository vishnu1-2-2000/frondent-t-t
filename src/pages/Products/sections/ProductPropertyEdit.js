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

function ProductPropertyEdit() {

      const [id, setId] = useState(0);
      const [GS1_company_prefix ,setGS1companyprefix ] = useState("");
      const [AT_PZN, setATPZN] = useState("");
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
      const[ Manufacturing_Date,setManufacturingDate]=useState("2017-06-01");
      const[ NL_KLMP,setNLKLMP]=useState("");
      const[NRD_Nordic_VNR_Drug_Code,setNRDNordicVNRDrugCode]=useState("");
      const[Packet_type,setPackettype]=useState("");
      const [Revision_Number,setRevisionNumber]=useState("");
      const [  PT_Aim_Number, setPTAimNumber] = useState("");
                    
                  
                  
                  
                  
                  
                    
                   
            ///   For navigate function
  const navigate = useNavigate();
                  
            ////    for receiving the parameters from URL
  const { operation } = useParams();
                  
  const {uniqueID} =useParams();
    var loggedInUsername=window.localStorage.getItem('loggedInUsername')

    var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
                  
                  
    function getPrpoertyEditData(){
            axios
                .get(window.url+"/master/productproperty/"+uniqueID+"/",
                      
                    )
                      .then((res)=>{
                  
                        setId(res.data[0].id);
                      
                        setGS1companyprefix(res.data[0].GS1_company_prefix);
                        setATPZN(res.data[0].AT_PZN);
                        
                        setBEABPCODE(res.data[0].BE_ABP_CODE);
                        setBRAnvisaRegistrationNumber(res.data[0].BR_An_visa_Registration_Number);
                        
                        setCADN(res.data[0].CA_DN);
                        setCHSwillmedic(res.data[0].CH_Swillme_dic);
                        setCNSubtypeCode(res.data[0].CN_Subtype_Code);
                        setDEPPN(res.data[0].DE_PPN);
                        setDEPZN(res.data[0].DE_PZN);
                        setDosage(res.data[0].Dosage);
                        setEAN13(res.data[0].EAN_13);
                        setFormtype(res.data[0].Form_type);
                        setGenericName(res.data[0].Generic_Name);
                        setGREOFCODE(res.data[0].GR_EOF_CODE);
                        setHRCroatiaNationalCode(res.data[0].HR_Croatia_National_Code);
                        setINProductCode(res.data[0].IN_Product_Code);
                        setITBollino(res.data[0].IT_Bollino);
                        setKRKFDACode(res.data[0].KR_KFDA_Code);
                        setLicenseNumber(res.data[0].License_Number);
                        setManufacturingDate(res.data[0].Manufacturing_Date);
                        setNLKLMP(res.data[0].NL_KLMP);
                        setNRDNordicVNRDrugCode(res.data[0].NRD_Nordic_VNR_Drug_Code);
                        setPackettype(res.data[0].Packet_type);
                        setRevisionNumber(res.data[0].Revision_Number);
                        setPTAimNumber(res.data[0].PT_Aim_Number);
                        
                  
                  
                  
                  
                  
                      })
                  
                  
                      
                    } 
  useEffect(() => {
                      
                  getPrpoertyEditData(); 
                }, []);
                    
                    
                    // if(operation === 'new') {
                      // var headwidget=<h3>Properties</h3>
                      // var widget =<select  class="form-select" aria-label="Default select example" onChange={(e) => setErp(e.target.value)}>
                      //    <option value="admin">Select</option>
                      //    <option value="admin">SAP Rpc</option>
                      //    </select>
      var headwidget=
                      <Controls.Input 
                      disabled
                     
                      
                            id="outlined-Company Prefix"
                            // label={<h4 ><pre><h4 style={{color:"white"}}><font face="times new roman" size="6">        Enter Product Property Data </font></h4></pre></h4>}
                           value={loggedInUsername}
                     
                   />
                  
                      var gs1FieldWidget = 
                      // <input
                      //       type="text"
                      //       className="form-control form-control-sm"
                      //       value={GS1_company_prefix}
                      //       onChange={(e) => setGS1companyprefix(e.target.value)}
                      //     /> 
                          <TextField required
                                    id="outline-name"
                                    onChange={(e) => setGS1companyprefix(e.target.value)}
                                    label="GS1 Company Prefix"
                                    value={GS1_company_prefix}
                                  />
      var atpFieldWidget = 
                      // <input
                      //     type="text"
                      //     className="form-control form-control-sm"
                      //     onChange={(e) => setATPZN(e.target.value)}
                      //     value={AT_PZN}
                      //   /> 
                            <TextField required
                                    id="outline-name"
                                    onChange={(e) => setATPZN(e.target.value)}
                                    label="AT PZN"
                                    value={AT_PZN}
                            />
                      
      var beFieldWidget = 
                        // <input
                        //   type="text"
                        //   className="form-control form-control-sm"
                        //   onChange={(e) => setBEABPCODE(e.target.value)}
                        //   value={BE_ABP_CODE}
                        // /> 
                            <TextField required
                                    id="outline-name"
                                    onChange={(e) => setBEABPCODE(e.target.value)}
                                    label="BE ABP CODE"
                                    value={BE_ABP_CODE}
                            />
      var brFieldWidget = 
                      //   <input
                      //   type="text"
                      //   className="form-control form-control-sm"
                      //   onChange={(e) => setBRAnvisaRegistrationNumber(e.target.value)}
                      //   value={BR_An_visa_Registration_Number}
                      // />
                          <TextField required
                                    id="outline-name"
                                    onChange={(e) => setBRAnvisaRegistrationNumber(e.target.value)}
                                    label="BR AN VISA REGISTRATION NUMBER"
                                    value={BR_An_visa_Registration_Number}
                          /> 
                  
                  //   var producedFieldWidget = <input
                  //   type="text"
                  //   className="form-control form-control-sm"
                  //   onChange={(e) => setProduced(e.target.value)}
                  // /> 
                  
      var caFieldWidget = 
                      // <input
                      //       type="text"
                      //       className="form-control"
                      //       aria-describedby="emailHelp"
                      //       onChange={(e) => setCADN(e.target.value)}
                      //      value={CA_DN}
                      //     />
                              <TextField required
                                    id="outline-name"
                                    onChange={(e) => setCADN(e.target.value)}
                                    label="CA DN"
                                    value={CA_DN}
                              />
      var chFieldWidget = 
                        //   <input
                        //   type="text"
                        //   className="form-control"
                        //   aria-describedby="emailHelp"
                        //   onChange={(e) => setCHSwillmedic(e.target.value)}
                        //   value={CH_Swillme_dic}
                        // />
                        <TextField required
                            id="outline-name"
                            onChange={(e) => setCHSwillmedic(e.target.value)}
                            label="CH SWILLME DIC"
                            value={CH_Swillme_dic}
                        />
      var cnFieldWidget = 
                        // <input
                        //   type="text"
                        //   className="form-control"
                        //   aria-describedby="emailHelp"
                        //   onChange={(e) => setCNSubtypeCode(e.target.value)}
                        //   value={CN_Subtype_Code}
                        // />
                        <TextField required
                            id="outline-name"
                            onChange={(e) => setCNSubtypeCode(e.target.value)}
                            label="CN Subtype Code"
                            value={CN_Subtype_Code}
                        />
      var deppnFieldWidget = 
                        // <input
                        //   type="text"
                        //   className="form-control"
                        //   aria-describedby="emailHelp"
                        //   onChange={(e) => setDEPPN(e.target.value)}
                        //   value={DE_PPN}
                        // />
                        <TextField required
                              id="outline-name"
                              onChange={(e) => setDEPPN(e.target.value)}
                              label="DE PPN"
                              value={DE_PPN}
                        />
      var depznFieldWidget = 
                        // <input
                        //   type="text"
                        //   className="form-control"
                        //   aria-describedby="emailHelp"
                        //   onChange={(e) => setDEPZN(e.target.value)}
                        //   value={DE_PZN}
                        // />
                        <TextField required
                            id="outline-name"
                            onChange={(e) => setDEPZN(e.target.value)}
                            label="DE PZN"
                            value={DE_PZN}
                        />
      var dosageFieldWidget = 
                      //   <input
                      //   type="text"
                      //   className="form-control"
                      //   aria-describedby="emailHelp"
                      //   onChange={(e) => setDosage(e.target.value)}
                      //  value={Dosage}
                      // />
                      <TextField required
                        id="outline-name"
                        onChange={(e) => setDosage(e.target.value)}
                        label="Dosage"
                        value={Dosage}
                      />
      var ean13FieldWidget =
                    //    <input
                    //   type="text"
                    //   className="form-control"
                    //   aria-describedby="emailHelp"
                    //   onChange={(e) => setEAN13(e.target.value)}
                    //   value={EAN_13}  
                    // />
                    <TextField required
                        id="outline-name"
                        onChange={(e) => setEAN13(e.target.value)}
                        label="EAN 13"
                        value={EAN_13}  
                    />
      var formFieldWidget = 
                  //   <input
                  //   type="text"
                  //   className="form-control"
                  //   aria-describedby="emailHelp"
                  //   onChange={(e) => setFormtype(e.target.value)}
                  //   value={Form_type}
                  // />
                  <TextField required
                    id="outline-name"
                    onChange={(e) => setFormtype(e.target.value)}
                    label="Form Type"
                    value={Form_type}
                />
      var genericFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setGenericName(e.target.value)}
                  //  value={Generic_Name}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setGenericName(e.target.value)}
                      label="Generic Name"
                      value={Generic_Name}
                  />
      var grFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setGREOFCODE(e.target.value)}
                  //  value={GR_EOF_CODE}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setGREOFCODE(e.target.value)}
                      label="GR EOF CODE"
                      value={GR_EOF_CODE}
                  />
      var hrFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setHRCroatiaNationalCode(e.target.value)}
                  //  value={HR_Croatia_National_Code}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setHRCroatiaNationalCode(e.target.value)}
                      label="HR Croatia National Code"
                      value={HR_Croatia_National_Code}
                  />
      var inFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setINProductCode(e.target.value)}
                  //  value={IN_Product_Code}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setINProductCode(e.target.value)}
                      label="IN Product Code"
                      value={IN_Product_Code}
                  />
      var itFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setITBollino(e.target.value)}
                  //  value={IT_Bollino}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setITBollino(e.target.value)}
                      label="IT_Bollino"
                      value={IT_Bollino}
                  />
      var krFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setKRKFDACode(e.target.value)}
                  //  value={KR_KFDA_Code}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setKRKFDACode(e.target.value)}
                      label="KR KFDA Code"
                      value={KR_KFDA_Code}
                  />
      var licencenumberFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setLicenseNumber(e.target.value)}
                  //  value={License_Number}
                  // />
                  <TextField required
                      id="outline-name"
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      label="License Number"
                      value={License_Number}
                  />
      var manufacturingdateFieldWidget = 
                  //  <input
                  //  type="date"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setManufacturingDate(e.target.value)}
                  //  value={Manufacturing_Date}
                  // />
                  <TextField required
                      id="outline-name"
                      type="date"
                      onChange={(e) => setManufacturingDate(e.target.value)}
                      label="Manufacturing Date"
                      InputLabelProps={{
                        shrink: true,
                  }}

                  value={Manufacturing_Date}
                />
    var nlFieldWidget =
                  //   <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setNLKLMP(e.target.value)}
                  //  value={NL_KLMP}
                  // />
                  <TextField required
                    id="outline-name"
                    date
                    onChange={(e) => setNLKLMP(e.target.value)}
                    label="NL KLMP"
                    value={NL_KLMP}
                  />
    var nrdFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setNRDNordicVNRDrugCode(e.target.value)}
                  //  value={NRD_Nordic_VNR_Drug_Code}
                  // />
                  <TextField required
                      id="outline-name"
                      date
                      onChange={(e) => setNRDNordicVNRDrugCode(e.target.value)}
                      label="NRD Nordic VNR Drug Code"
                      value={NRD_Nordic_VNR_Drug_Code}
                  />
    var packettypeFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setPackettype(e.target.value)}
                  //  value={Packet_type}
                  // />
                  <TextField required
                    id="outline-name"
                    date
                    onChange={(e) => setPackettype(e.target.value)}
                    label="Packet Type"
                    value={Packet_type}
                  />
    var revisionnumberFieldWidget = 
                  //  <input
                  //  type="text"
                  //  className="form-control"
                  //  aria-describedby="emailHelp"
                  //  onChange={(e) => setRevisionNumber(e.target.value)}
                  //  VALUE={Revision_Number}
                  // />
                  <TextField required
                      id="outline-name"
                      date
                      onChange={(e) => setRevisionNumber(e.target.value)}
                      label="Revision_Number"
                      value={Revision_Number}
                  />
    var ptFieldWidget = 
                  // <input
                  // type="text"
                  // className="form-control"
                  // aria-describedby="emailHelp"
                  // onChange={(e) => setPTAimNumber(e.target.value)}
                  // value={PT_Aim_Number}
                  // />
                  <TextField required
                    id="outline-name"
                    date
                    onChange={(e) => setPTAimNumber(e.target.value)}
                    label="PT Aim Number"
                    value={PT_Aim_Number}
                  />
                          
                        
                    // }
                  //   else if(operation === 'edit') {
                  //     var headwidget=<h3>Update</h3>
                  //     var ponoFieldWidget = <input
                  //           type="text"
                  //           className="form-control form-control-sm"
                  //           value = { process_order_number}
                  //           onChange={(e) => setPono(e.target.value)}
                  //         />
                  //         var bnoFieldWidget = <input
                  //         type="text"
                  //         className="form-control form-control-sm"
                  //         value = {manufacturing_location}
                  //         onChange={(e) => setBno(e.target.value)}
                  //       />
                  //       var locationFieldWidget = <input
                  //       type="text"
                  //       className="form-control form-control-sm"
                  //       value = {batch_number}
                  //       onChange={(e) => setLocation(e.target.value)}
                  //     />
                  //     var production_dateFieldWidget = <input
                  //     type="text"
                  //     className="form-control form-control-sm"
                  //     value = {production_date}
                  //     onChange={(e) => setProduction_date(e.target.value)}
                  //   />
                  
                  // //   var producedFieldWidget = <input
                  // //   type="text"
                  // //   className="form-control form-control-sm"
                  // //   value = {produced}
                  // //   onChange={(e) => setProduced(e.target.value)}
                  // // />
                  
                  
                  //     var createdbyFieldWidget = <input
                  //         type="text"
                  //         className="form-control"
                  //         value={created_by}
                  //         aria-describedby="emailHelp"
                  //         onChange={(e) => setCreatedby(e.target.value)}
                  //       />
                  //       var statusWidget =           
                  //       <select value={status} class="form-select" aria-label="Default select example" onChange={(e) => setStatus(e.target.value)}>
                  //        <option value="admin">Inporoduction</option>
                  //           <option value="operator">Paused</option>
                  //           <option value="staff">Running</option>
                  //       </select>
                       
                     
                  //   }
                  
                    const handleSubmit = (e) => {
                      e.preventDefault();
                      console.log("clicked");
                    alert(uniqueID);
                    if(Manufacturing_Date == "Invalid date") 
                    {
                      setManufacturingDate("2017-06-01");
                  }
                      // setCompanyEditID(window.localStorage.getItem("companyEditID"));
                      
                      // if(operation === 'new') {
                        axios
                        .put(window.url+`/master/productproperty/update/${uniqueID}`, 
                          //  alert(AT_PZN),
                          {
                            "GS1_company_prefix":GS1_company_prefix,    
                            "AT_PZN": AT_PZN,
                            "BE_ABP_CODE":BE_ABP_CODE,
                            "BR_An_visa_Registration_Number":BR_An_visa_Registration_Number,
                    
                            
                            "CA_DN":CA_DN,
                            "CH_Swillme_dic":CH_Swillme_dic,
                            'CN_Subtype_Code':CN_Subtype_Code,
                            "DE_PPN":DE_PPN,
                            'DE_PZN':DE_PZN,
                             'Dosage':Dosage,
                             'EAN_13': EAN_13,
                             "Form_type":Form_type,
                            "Generic_Name": Generic_Name,
                            'GR_EOF_CODE': GR_EOF_CODE,
                            "HR_Croatia_National_Code":HR_Croatia_National_Code,
                             'IN_Product_Code':IN_Product_Code,
                             'IT_Bollino':IT_Bollino,
                             'KR_KFDA_Code': KR_KFDA_Code,
                  
                             'License_Number':License_Number,
                             'Manufacturing_Date':Manufacturing_Date,
                             'NL_KLMP': NL_KLMP,
                             "NRD_Nordic_VNR_Drug_Code":NRD_Nordic_VNR_Drug_Code,
                            "Packet_type": Packet_type,
                            'Revision_Number': Revision_Number,
                            "PT_Aim_Number": PT_Aim_Number,
                            "loggedInUsername":loggedInUsername,
                            "loggedInUserrole":loggedInUserrole,

                            "uniqueid":uniqueID,
                          },
                          
                          )
                          .then(() => {
                            navigate("/product");
                          });
                        }
                    //   // }
                    // //   else if(operation === 'edit') {
                    //     axios
                    //       .put(`http://127.0.0.1:8000/master/productionorder/update/${id}`, 
                          
                    //       {
                    //           "process_order_number":process_order_number,    
                    //           "manufacturing_location":manufacturing_location,
                    //           "batch_number":batch_number,
                    //           "production_date":production_date,
                      
                    //           // "produced":produced,
                    //           "created_by": created_by,
                    //           "status":status
                    //       },
                    //       {
                    //         auth: {
                    //           username: username,
                    //           password: password
                    //         }
                    //       }
                    //       )
                    //       .then(() => {
                    //         navigate("/po/podatagrid");
                    //       });
                    //   }
                    // };
                  
  return (
            <>
               <br/><br/><br/><br/><br/>

{/* {warningmessage}         */}
        
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25' },
          }}
          noValidate
          autoComplete="off"
        >
           
          <div style={{backgroundColor:"#AAF0D1"}} >
          <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6">Add Product Property </font></h4></center></h4>            
          {gs1FieldWidget}
                            {atpFieldWidget}
                            {beFieldWidget}
                      
                            {caFieldWidget}
    
    
           
          
          <br/>
       

          {brFieldWidget}
                                {chFieldWidget}
                                {cnFieldWidget}
                                {deppnFieldWidget}<br/>
                                {dosageFieldWidget}
                                {depznFieldWidget}
                                {ean13FieldWidget}
                                {formFieldWidget}<br/>
                                {genericFieldWidget}
                      {grFieldWidget}
                      {hrFieldWidget}
                      {inFieldWidget}<br/>
                      {krFieldWidget}
                      {licencenumberFieldWidget}
                      {manufacturingdateFieldWidget}
                      {nlFieldWidget}<br/>
                      {nrdFieldWidget}
                      {packettypeFieldWidget}
                      {revisionnumberFieldWidget}
                      {ptFieldWidget}<br/>
                      {headwidget}

          <div className="row">
            <div className="col-4">
           
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    );
}

export default ProductPropertyEdit
