import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Box,useTheme  } from "@mui/material";

function Card() {
                    const [productlength, setProductlength] = useState([]);
                    const [productionorderlength, setProductionorderlength] = useState([]);
                    const [customerslength, setCustomerslength] = useState([]);
                    const[stocklength,setStocklength]=useState([]);


                    function getProduct() {
                                        //alert("anu");
                    axios
                        .get("http://127.0.0.1:8000//master/product",
                                            
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
                                          .get("http://127.0.0.1:8000//master/productionorder",
                                            
                                            {
                                              'param': 'anu' 
                                            }
                                          )
                                          .then((res) => {

                                            setProductionorderlength(res.data.length);
                                         
                                          });
                                      }
        function getCustomers() {
                                        //alert("anu");
                                    axios
                                          .get("http://127.0.0.1:8000//master/customer",
                                            
                                            {
                                              'param': 'anu' 
                                            }
                                          )
                                          .then((res) => {
                                            setCustomerslength(res.data.length);
                                         
                                          });
                                      }
          function getStock() {
                                        //alert("anu");
                                  axios
                                      .get("http://127.0.0.1:8000//master/stock",
                                            
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
    <div>
     <div className="container">
                    
                    <div class="card shadow mb-2" id="dascardbg">
                     <div className="card bg-success text-white h-2"id="card1" >
<div>
<div className="card-body">
<i class="fa fa-user fa-2x"></i>
<h6 class="text-uppercase">ProductionOrders</h6>
<h1 class="display-4">{productionorderlength}</h1>    

</div>
</div>
</div> 
&nbsp;&nbsp;&nbsp;

<div className="card bg-success text-white h-2"id="card2" >

<div className="card-body">
<i class="fa fa-user fa-2x"></i>
<h6 class="text-uppercase">Stock</h6>
<h1 class="display-4">{stocklength}</h1>    

</div>

</div> 
&nbsp;&nbsp;&nbsp;
<div>
<div className="card bg-success text-white h-2"id="card3" >

<div className="card-body">
<i class="fa fa-user fa-2x"></i>
<h6 class="text-uppercase">Product</h6>
<h1 class="display-4">{productlength}</h1>    
</div>
</div>

</div> 
&nbsp;&nbsp;&nbsp;
<div>
<div className="card bg-success text-white h-2"id="card4" >

<div className="card-body">
<i class="fa fa-user fa-2x"></i>
<h6 class="text-uppercase">Customers</h6>
<h1 class="display-4">{customerslength}</h1>    

</div>
</div>
</div> 
                                        
                                        
                     </div>                                    
                   
                    </div>  
    </div>
  )
}

export default Card
