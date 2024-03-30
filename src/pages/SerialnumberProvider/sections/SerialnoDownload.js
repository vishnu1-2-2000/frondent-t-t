import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";

import Select from "react-select";
import moment from "moment";
import Papa from 'papaparse';
import { FormGroup, Label, Input } from "reactstrap";
function SerialnoDownload() {
const[formData,setSerialno]=useState();
const [data, setData] = useState([]);


const navigate=useNavigate();
const{uniqueID}=useParams();
const{operation}=useParams();


// const handleFileUpload = (e) => {
//   const file = e.target.files[0];
//     Papa.parse(file, {
//     header: true,
//     complete: (results) => {
//       setData(results.data);

//     },
//   });
// };


 var serialfield=<input type="text"
                  className="form-control"
                  onChange={(e)=>setSerialno(e.target.value)} 
                  
      /> 


   
const handleSubmit= (e) =>{

  e.preventDefault();

  
  
  
     
  //alert(data)
  axios
  
  .post(window.url+"/master/pool/",
  {
    "serialnumberjson":formData,
    
  })
  .then(()=>{
    navigate("/snprovider") ;            
})        
}            

  return (
    <div>
{serialfield}
<button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit} >
                            Save data
                        </button>
    </div>
  )
  }


export default SerialnoDownload
