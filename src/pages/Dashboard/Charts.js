import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Box,useTheme  } from "@mui/material";
import { useNavigate } from "react-router";
import Chart from "highcharts-react-official";
import Highcharts from "highcharts";
function Charts() {
const [pieChartData,setPieChartData] = useState("");
const [productionorderlength, setProductionorderlength] = useState([]);
const [productlength, setProductlength] = useState([]);
const[selecteddivstate,setSelectedDiv]=useState()
const[piedatagrid,setPiedataGrid]=useState("");
let productionorderarray=[];
let productarray=[];
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

function createrows(jkl){
                    jkl.map(jk =>{
                   productionorderarray.map((po) =>{
setProductionorderlength(productionorderarray.length)

//alert(productionorderarray.length)
                   })
                    })

}

function Productionorder(){
                    
                    axios
                    .get("http://localhost:8000//master/productionorder"
                   
                    )
                    .then((res) => {
                                        var productionorderle=res.data.length;
                                        res.data.map(data2 => {

                                                            //  alert(data2.length)
                                                            
                                                            
                                                            
                                        productionorderarray.push({ value: data2.id });
                                                             //alert(productionorderarray.length)
                                                            //  setProductionorderlength(productionorderarray.length);
                                                            
                                                            
                                                            
                                                            
                                        });

                    
                    axios
                      .get("http://localhost:8000//master/product"
                        
                      
                      )
                    .then((res2) => {
                                    createrows(res2.data)


                       
                 
                    }) 
                
                    setPieChartData([
                                        ["process_order_number",productionorderlength],
                                        ["product_conn",productlength]                     
                                    ])
                         
                   
                    });
                   
setPiedataGrid(<Chart highcharts={Highcharts} options={pieChartOptions} /> )
}                             

                         
                                      //alert("anu");
                                               
                                        //alert("anu");)
                                   
                                 
                                              


                                      useEffect(() => {
                                      
                                       
                                     Productionorder();
                                  
                                      
                                        
                                        //alert("anu");
                                      }, []);                            


  return (
    <div>
     {piedatagrid}
    </div>
  )
}

export default Charts
