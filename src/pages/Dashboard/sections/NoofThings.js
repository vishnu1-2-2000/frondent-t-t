import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import * as  BiIcons from "react-icons/bi";
import * as  GiIcons from "react-icons/gi";
import * as  FaIcons from "react-icons/fa";
const NoofThings = () => {
    const [prolen, setProductlength]=useState("");
    const [stocklen, setStocklength]=useState("");
    const [customerlen, setCustomerlength]=useState("");
    const [productionorderlen, setProductionorderlength]=useState("");

    function getProductno() {
     
        axios
          .get(window.url+"/master/product/",
         
        )
        .then((res) => {
            // alert("anu");
         
            // alert(res.data.length);
            setProductlength(res.data.length);
            //  alert(prolen)
        });
    }
  
    function getStock() {
       
        axios
          .get(window.url+"/master/stock/",
      
        )
        .then((res) => {
            // alert("anu");
         
            // alert(res.data.length);
            setStocklength(res.data.length);
            //  alert(prolen)
        });
    }
    function getProductionorderno() {
       
        axios
          .get(window.url+"/master/productionorder/",
       
        )
        .then((res) => {
            // alert("anu");
         
            // alert(res.data.length);
            setProductionorderlength(res.data.length);
            //  alert(prolen)
        });
    }
    function getCustomers() {
       
        axios
          .get(window.url+"/master/customer",
        
        )
        .then((res) => {
            // alert("anu");
         
            // alert(res.data.length);
            setCustomerlength(res.data.length);
            //  alert(prolen)
        });
    }
    useEffect(() => {
        // console.log('i fire once');
        getProductno();
        getProductionorderno();
        getStock();
        getCustomers();
        //alert("anu");
    }, []);
    
    return (
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4"  >
                    <div class="card border-left-primary shadow h-100 py-2" style={{backgroundColor:"cadetblue"}}>
                        <div class="card-body" >
                            <div class="row no-gutters align-items-center" >
                                <div class="col mr-2" >
                                    <div class="text-xs font-weight-bold  text-uppercase mb-1"style={{color:"white"}} >
                                      Products
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{prolen}</div>
                                </div>
                                <div class="col-auto">
                                    <GiIcons.GiMedicines size={35} text-gray-300/>
                              
                                  {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-success shadow h-100 py-2" style={{backgroundColor:"aquamarine"}}>
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold  text-uppercase mb-1" style={{color:"black"}}>
                                      Customers
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold ">{customerlen}</div>
                                </div>
                                <div class="col-auto">
                                    <BiIcons.BiUser size={35} text-gray-300/>
                             
                                  {/* <i class="fas fa-dollar-sign fa-2x text-gray-300"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-info shadow h-100 py-2" style={{backgroundColor:"skyblue"}}>
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold  text-uppercase mb-1" style={{color:"black"}}>Production Order
                                    </div>
                                    <div class="row no-gutters align-items-center">
                                        <div class="col-auto">
                                            <div class="h5 mb-0 mr-3 font-weight-bold ">{productionorderlen}
                                            </div>
                                        </div>
                                        <div class="col">
                                          {/* <div class="progress progress-sm mr-2">
                                             
                                          </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <BiIcons.BiLayer size={35} text-gray-300/>
                                  {/* <i class="fas fa-clipboard-list fa-2x text-gray-300"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2" style={{backgroundColor:"mediumslateblue"}}>
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold  text-uppercase mb-1" style={{color:"white"}}>
                                        Stock
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{stocklen}
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <FaIcons.FaStoreAlt size={35} text-gray-300/>
                           
                                  {/* <i class="fas fa-comments fa-2x text-gray-300"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default NoofThings