// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
// import { Box,useTheme  } from "@mui/material";
// function Tables() {

//                     const[Data,setData] = useState([])
//                     const [userDataRows, setUserDataRows] = useState([]);
//                     const [productlength, setProductlength] = useState([]);
//                     const [productionorderlength, setProductionorderlength] = useState([]);
//                     const [customerslength, setCustomerslength] = useState([]);
//                     const[stocklength,setStocklength]=useState([]);

//                     let userDataColumns = [
//                                         { field: 'id', headerName: 'Id', width:100 },
//                                         { field: 'modelname',headerName: 'Model Name', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
//                                         { field: 'donedatetime', headerName: 'doneDateTime', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
//                                         ]

//                                         function createRows(rowDatas) {
//                                                             //alert(rowDatas.length);
                                                        
//                                                             // let editButton = <button></button>;  
                                                        
//                                                             rowDatas.map(rowData => {
//                                                               //alert(rowData.id);
//                                                               setUserDataRows( userDataRows => [
//                                                                 ...userDataRows,
//                                                                 {'id':rowData.id, 'modelname':rowData.modelname,'donedatetime':rowData.donedatetime,
//                                                                 },
//                                                               ]);
                                                        
//                                                             })
//                                                           }
//                                                           function getData() {
//                                                             //alert("anu");
//                                                             axios
//                                                               .get("http://localhost:8000/accounts/history/",
                                                                
//                                                                 {
//                                                                   'param': 'anu' 
//                                                                 }
//                                                               )
//                                                               .then((res) => {
                                                           
//                                                                 //alert(res.data.length);
//                                                                 setData(res.data);
//                                                                 createRows(res.data);
//                                                               });
//                                                           }
                                                          
//                                                           useEffect(() => {
//                                                             //console.log('i fire once');
//                                                          getData();
                                                            
//                                                           }, []);
                                                                                               
//   return (

                    
//     <div>
//       <Box sx={{ height: 400, width: '50%', }} id="tablebox">
//       <DataGrid 
//         rows={userDataRows}
//         columns={userDataColumns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box> 
//     </div>
//   )
// }

// export default Tables
