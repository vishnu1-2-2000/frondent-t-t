import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Sidebar from '../../../components/Sidnav/Sidebar';

import axios from "axios";
import Piechart from '../Piechart';
import NoofThings from './NoofThings';
import TaskTable from './TaskTable';
function Card() {
    const [productlength, setProductlength] = useState([]);
    const [productionorderlength, setProductionorderlength] = useState([]);
    const [customerslength, setCustomerslength] = useState([]);
    const[stocklength,setStocklength]=useState([]);


    function getProduct() {
                                        //alert("anu");
        axios
              .get(window.url+"/master/product",
                                            
                          {
                              'param': 'anu' 
                          }
                  )
                    .then((res) => {
                                      setProductlength(res.data.length);
                                         
                                    });
                            }
                                  
  function getProductionorder() {
                                        //alert("anu");
                                    axios
                                        .get(window.url+"/master/productionorder",
                                            
                                            
                                          )
                                          .then((res) => {

                                            setProductionorderlength(res.data.length);
                                         
                                          });
                                      }
        function getCustomers() {
                                        //alert("anu");
                                  axios
                                        .get(window.url+"/master/customer",
                                            
                                            
                                          )
                                          .then((res) => {
                                            setCustomerslength(res.data.length);
                                         
                                          });
                                      }
          function getStock() {
                                        //alert("anu");
                                  axios
                                      .get(window.url+"/master/stock",
                                            
                                            {
                                              'param': 'anu' 
                                            }
                                          )
                                          .then((res) => {
                                            setStocklength(res.data.length);
                                         
                                          });
                                      }

          useEffect(() => {
                                        //console.log('i fire once');
                              getProduct();
                              getProductionorder();
                              getCustomers();
                              getStock();
                                        //alert("anu");
                        }, []);
                                  
  return (
    <>

    <div id="wrapper">

        <Sidebar pageName = "dashboard"/>

        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
        
              

                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                            {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
                    </div>

                    <NoofThings/>
            

                    <div class="row">                                              

                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-4">

                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Tasks</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                           
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                     <TaskTable/> 
             
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-5">
                            <div class="card shadow mb-4">
      
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Production Status</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                     
                                <div class="card-body" style={{backgroundColor:"lightblue"}}>
                              
                                    <Piechart/>
                               
                                
                                </div>
                           
                            </div>
                        </div>

                    </div>

                    <div class="row">  
       



                        <div class="col-lg-6 mb-4">






                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</>

   
  )
}

export default Card
