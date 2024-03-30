import axios from "axios";
import { Series } from "highcharts";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

function Downloadcodes() {

const[serialnumbers,setSerialnumbers]=useState();
const navigate = useNavigate();
const { gtin } = useParams();
const { processnumber } = useParams();
var gtinno=gtin
var processno= processnumber

  useEffect(() => {

                    axios
   .post(window.url+"/master/downloadcodes/",
        {
            
                    "gtin":gtinno,
                    "process_order_number":processno,
                    "serialnumberwithgtin":{
                                      "5855": "56566"
                                    }
                   
                    // "password":pass
                  })
    .then((res) => {
              
      navigate("/productionorder");
      
    });
                                      
      }, []);
                                                          

  return (
    <div>
   
    </div>
  )
}

export default Downloadcodes
