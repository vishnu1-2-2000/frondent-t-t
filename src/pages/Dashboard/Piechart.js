import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Box,useTheme  } from "@mui/material";
import { useNavigate } from "react-router";
import Chart from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';


const Piechart=(props)=> {

const [pieChartData,setPieChartData] = useState("");
const [draft,setDraft]=useState("");
const[inproduction,setInproduction]=useState("");
const[closed,setClosed]=useState("");
const[shipping,setShipping]=useState("");
const[piedatagrid,setPiedataGrid]=useState("");
const [productionorderlength, setProductionorderlength] = useState([]);

//const navigate=useNavigate();
let optionsNewproduct=[];
let optionsNew=[];
const pieChartOptions = {
                    chart: {
                    type: "pie"
                    
                    },
                    title: {
                    text: '',
                    },
                    series: [
                    {
                    type: 'pie',
                    name: 'Browser share',
                    data: pieChartData,
                    dataLabels: {
                    enabled: true, // enable DataLabels
                    format: '{point.name}: {y}', // format to replicatte Traditional Web labels
                    }
                    }
                    ]
                    };
          useEffect(() => {
                          getProductionorder();
                      }, []);
                  
function getProductionorder() {
          
      //alert("anu");
          axios
            .get("http://localhost:8000//master/productionorder/",
                                            
                                          
              )
          .then((res) => {
            let c=0; 
          let s=0;
          let cl=0; 
          let u=0;                        
              res.data.map(data2 => {

                    //alert(data2.status)
                                                            
            if(data2.status==="Draft")
                                                            
                    {
                         c++;                           
                      // optionsNewproduct.push();
                    
                                        //alert(optionsNewproduct.length)  
                    }
            else if(data2.status==="Shipping")
                                                     
                {
                  s++; 
           
                 
                }
                else if(data2.status==="Closed")
                                                     
                {
                  cl++; 
           
                 
                }
                else if(data2.status==="Inproduction")
                                                     
                {
                  u++; 
           
                 
                }
                                                        
                // setDraft(c)   
                // setShipping(s)                                
        
                setPieChartData(
                     
                  [  
                    ['Draft', c],
                    ['Inproduction',u],
                    ['Shipping',s],
                    ['Closed',cl],

                                       // ({'Draft':data2.draft,'Shipping':data2.shipping})
                                                                             
                                                                               
                    ])                      
                                                            
            });  
                                                        
                                         
                });

                              
                                         
  
                                          
                  }
                                      


                                  

                                                                      
               
  return (
    <div >
     <h4  id="image">Production Status</h4>
         <HighchartsReact highcharts={Highcharts} options={pieChartOptions}  /> 
      
    </div>
  )
}

export default Piechart

