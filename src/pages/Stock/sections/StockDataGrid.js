import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box,useTheme  } from "@mui/material";
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { blue, red } from "@material-ui/core/colors";
import { colors, withTheme } from "@material-ui/core";
import { tokens } from "../../../theme";


const StockDataGrid=(props) =>{
                  const theme = useTheme();
                  const colors = tokens(theme.palette.mode);
                    const [data, setData] = useState([]);
                    const [tabledark, setTableDark] = useState("");
                  
                    const [userDataRows, setUserDataRows] = useState([]);
                  
                    ///   For navigate function
                    const navigate = useNavigate();
                  
                    function logout() {
                      window.localStorage.removeItem("username");
                      window.localStorage.removeItem("password");
                  
                      navigate("/account/login");
                    }
                  
                    var username = window.localStorage.getItem('username')
                    var password = window.localStorage.getItem('password')
                    var currentUserrole = window.localStorage.getItem('userrole')
                    //alert(window.localStorage.getItem('password'));
                  
                  
                    function handleDelete(id) {
                      axios
                        .delete(window.url+`/master/stock/delete/${id}`,
                          
                        )
                        .then(() => {
                          //getData();
                          alert("anu");
                          navigate("/stock/stockdatagrid");
                        });
                    }
                  
                    const setToLocalStorage = (id,process_order_number,product_name,batch_num,stock_quantity,shipped, expiration_date) => {
                      localStorage.setItem("id", id);
                      localStorage.setItem("productionorder_num", process_order_number);
                      localStorage.setItem("product_name", product_name);
                      localStorage.setItem("batch_num", batch_num);
                      localStorage.setItem("stock_quantity", stock_quantity);
                      localStorage.setItem("shipped", shipped);
                      localStorage.setItem("expiration_date", expiration_date);
                    };

                    let userDataColumns = [
                            
                                        { field: 'id', headerName: 'Id', width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'process_order_number', headerName: 'Productionorder Number', width: 200,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'product_conn', headerName: 'Product Name', width: 200,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'batch_number', headerName: 'Batch Number', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'stock_quantity', headerName: 'Stock Quantity', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'shipped', headerName: 'Shipped', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                                        { field: 'expiration_date', headerName: 'Expiration Date', width: 200,headerClassName: "MuiDataGrid-columnHeaders", },
                      
                    ];
                   
                  
                    // function createRows(rowDatas) {
                    //   //alert(rowDatas.length);
                  
                    //   let editButton = <button></button>;  
                  
                    //   rowDatas.map(rowData => {
                  
                    //     //alert(rowData.id);
                    //     setUserDataRows( userDataRows => [
                    //       ...userDataRows,
                    //       {'id':rowData.id, 'process_order_number':rowData.process_order_number,'product_conn':rowData.product_conn,'batch_number':rowData.batch_number,
                    //       'stock_quantity':rowData.stock_quantity,'shipped':rowData.shipped,
                    //       'expiration_date':rowData.expiration_date},
                    //     ]);
                  
                    //   })
                    // }
                    function createRows(rowDatas) {
                  
                      //alert(rowDatas.length);
                  
                  
                  
                       rowDatas.map(rowData => {
                  
                     
                  
                          axios
                  
                          .get(window.url+"/master/product/"+rowData.product_conn,
                  
                            
                  
                          )
                  
                          .then((res2) => {
                  
                         
                  
                            //alert(res2.data[0].name);
                  
                   
                  
                            setUserDataRows(userDataRows => [
                  
                              ...userDataRows,
                  
                              {
                  
                                'id':rowData.id,
                  
                                'process_order_number':rowData.process_order_number,
                  
                                'batch_number':rowData.batch_number,
                  
                                'product_conn':res2.data[0].name,
                                'stock_quantity':rowData.stock_quantity,
                                'shipped':rowData.shipped,
                                'expiration_date':rowData.expiration_date,
                  
                             
                  
                              
                  
                             
                  
                               
                  
                               
                  
                              },
                  
                            ]);
                  
                          });
                  
                  
                  
                   
                  
                  
                  
                       })
                  
                    }
                    function getData() {
                      //alert("anu");
                      axios
                        .get(window.url+"/master/stock/closed",
                          
                        )
                        .then((res) => {
                          //alert(res.data.length);
                          setData(res.data);
                          createRows(res.data);
                        });
                    }
                  
                    function handleDelete(id) {
                      axios
                        .delete(window.url+`/master/stock/delete/${id}`,
                         
                        )
                        .then(() => {
                          getData();
                        });
                    }
                  
                    const navigateToCreatePage = () => {
                      navigate("/stock/stockcreate/new");
                    };
                  
                    useEffect(() => {
                      
                      getData();
                       
                      //alert("anu");
                    }, []);
                  
                    function CustomToolbar() {
                      return (
                        <GridToolbarContainer>
                          <GridToolbarColumnsButton />
                          <GridToolbarFilterButton />
                          <GridToolbarDensitySelector />
                          <GridToolbarExport />
                        </GridToolbarContainer>
                      );
                    }  
                  
                    return (
                      <>
                      <br></br>
              <br></br>
              <Box sx={{ display: 'flex' }}> 
          
             <Sidebar/>
          
              
        <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
          
              <div class="container" id="shipping">
                <div class="row">
                
                  <div class="col-10">
          
                    <div className="spinner-container">
                      <div className="loading-spinner">
                      </div>
                    </div>
          
                    <div className="prod1" style={{ height: 500,width:1300 }}>
                      <h3>Stock</h3>
            
                      
                      <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* <Header  subtitle="welcome to you Contacts" /> */}
    </Box>
   
    <Box
      m="8px 0 0 0"
      width="100%"
      height="80vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
       
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.greenAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.greenAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      
      < DataGrid
        rows={userDataRows}
        columns={userDataColumns}
        components={{ Toolbar: GridToolbar}}
      />
    </Box>
  </Box>
                    </div>
                  </div>
          
                </div>
          </div>
          </Box>
          </Box>
            </>
                    );
}

export default StockDataGrid
