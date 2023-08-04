import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Box,useTheme  } from "@mui/material";
import Piechart from "../Piechart";
import Card from "./Card";
import TaskTable from "./TaskTable";
//import Tables from "./Tables";
function DashboardDataGrid() {
                    // const[Data,setData] = useState([])
                    // const [userDataRows, setUserDataRows] = useState([]);
                  

                    // const[table,setTable]=useState();

                    // let userDataColumns = [
                    //                     { field: 'id', headerName: 'Id', width:100 },
                    //                     { field: 'modelname',headerName: 'Model Name', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                    //                     { field: 'donedatetime', headerName: 'doneDateTime', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                    //                     ]

                    //                     function createRows(rowDatas) {
                    //                                         //alert(rowDatas.length);
                                                        
                    //                                         // let editButton = <button></button>;  
                                                        
                    //                                         rowDatas.map(rowData => {
                    //                                           //alert(rowData.id);
                    //                                           setUserDataRows( userDataRows => [
                    //                                             ...userDataRows,
                    //                                             {'id':rowData.id, 'modelname':rowData.modelname,'donedatetime':rowData.donedatetime,
                    //                                             },
                    //                                           ]);
                                                        
                    //                                         })
                    //                                       }
                    //                                       function getData() {
                    //                                         //alert("anu");
                    //                                         axios
                    //                                           .get("http://localhost:8000/accounts/history/",
                                                                
                    //                                             {
                    //                                               'param': 'anu' 
                    //                                             }
                    //                                           )
                    //                                           .then((res) => {
                                                           
                    //                                             //alert(res.data.length);
                    //                                             setData(res.data);
                    //                                             createRows(res.data);
                    //                                           });
                    //                                       }                   
                    
                    
      // function getProduct() {
      //                                   //alert("anu");
      //               axios
      //                   .get("http://127.0.0.1:8000/master/product",
                                            
      //                           {
      //                               'param': 'anu' 
      //                            }
      //                         )
      //                                   .then((res) => {
      //                                       setProductlength(res.data.length);
                                         
      //                                     });
      //                                 }
                                  
      // function getProductionorder() {
      //                                   //alert("anu");
      //                                 axios
      //                                     .get("http://127.0.0.1:8000/master/productionorder",
                                            
      //                                       {
      //                                         'param': 'anu' 
      //                                       }
      //                                     )
      //                                     .then((res) => {

      //                                       setProductionorderlength(res.data.length);
                                         
      //                                     });
      //                                 }
      //   function getCustomers() {
      //                                   //alert("anu");
      //                               axios
      //                                     .get("http://127.0.0.1:8000/master/customer",
                                            
      //                                       {
      //                                         'param': 'anu' 
      //                                       }
      //                                     )
      //                                     .then((res) => {
      //                                       setCustomerslength(res.data.length);
                                         
      //                                     });
      //                                 }
      //     function getStock() {
      //                                   //alert("anu");
      //                             axios
      //                                 .get("http://127.0.0.1:8000/master/stock",
                                            
      //                                       {
      //                                         'param': 'anu' 
      //                                       }
      //                                     )
      //                                     .then((res) => {
      //                                       setStocklength(res.data.length);
                                         
      //                                     });
      //                                 }

          // useEffect(() => {
          //                               //console.log('i fire once');
          //                     getData();
          //                     // getProduct();
          //                     // getProductionorder();
          //                     // getCustomers();
          //                     // getStock();
          //                               //alert("anu");
          //               }, []);
                                  
                                              
  return (
    <div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <Card/>
      {/* <br></br>
      <br></br>
      <br></br>
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
                   
                    </div>  */}
<br></br>
{/* <div class="card shadow mb-2" id ="tablecard">
    <Box sx={{ height: 350, width: '94%', }} id="tablebox" >
      <h2>Tasks</h2>
      <DataGrid 
        rows={userDataRows}
        columns={userDataColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>  */}
    <TaskTable/>
    
    <div class="card shadow mb-2" id="piedash" style={{width:"380px" }}><Piechart id="image"/> </div>  
    </div>
    
  )
}

export default DashboardDataGrid
