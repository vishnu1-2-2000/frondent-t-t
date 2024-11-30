import axios from "axios";
import { Series } from "highcharts";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

function Downloadcodes() {

const[serialnumbers,setSerialnumbers]=useState();
const navigate = useNavigate();
var warningDIV = <div className="alert alert-success pt-4" role="alert">
                    <h5>Input all the values</h5>
                 </div>  
const[warningmessage,setWaringmessage]=useState("");
const { batch_number } = useParams();
const { processnumber } = useParams();

var batch_number1=batch_number
var processno= processnumber

  useEffect(() => {

    axios
   .post(window.url+"/master/downloadcodes/",
        {
                    "batch_number":batch_number,
                   
                    "process_order_number":processno,
                    "serialnumberwithgtin":{
                                      "5855": "56566"
                                    }
                   
                    // "password":pass
                  })
    .then((res) => {
      if(res.data == 300) {
        //alert(res.data['email']);
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
                <h5>Such A Csv file related with this batch number Is Not Exist</h5>
                </div>
                setWaringmessage(warningDIV);
    }  
    else{
      navigate("/productionorder");
      
    }     
      
    });
                                      
      }, []);
                                                          

  return (
    <div>
   {warningmessage}
    </div>
  )
}

export default Downloadcodes
