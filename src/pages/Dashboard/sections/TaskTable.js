import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Box,useTheme  } from "@mui/material";

function TaskTable() {

                    const[Data,setData] = useState([])
                    const [userDataRows, setUserDataRows] = useState([]);
                  

                    const[table,setTable]=useState();

                    let userDataColumns = [
                                        { field: 'id', headerName: 'Id', width:100 },
                                        // { field: 'modelname',headerName: 'Model Name', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                                        // { field: 'donedatetime', headerName: 'doneDateTime', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
                                        {field: 'description', headerName: 'description', width: 400,headerClassName: "MuiDataGrid-columnHeaders",}
                                        ]

                                        function createRows(rowDatas) {
                                                            //alert(rowDatas.length);
                                                        
                                                            // let editButton = <button></button>;  
                                                        
                                                            rowDatas.map(rowData => {
                                                              //alert(rowData.id);
                                                              setUserDataRows( userDataRows => [
                                                                ...userDataRows,
                                                                {'id':rowData.id, 
                                                                'description':rowData.description
                                                                // 'modelname':rowData.modelname,'donedatetime':rowData.donedatetime,
                                                                },
                                                              ]);
                                                        
                                                            })
                                                          }
                                                          function getData() {
                                                            //alert("anu");
                                                            axios
                                                              .get("http://localhost:8000//accounts/history/",
                                                                
                                                                {
                                                                  'param': 'anu' 
                                                                }
                                                              )
                                                              .then((res) => {
                                                           
                                                                //alert(res.data.length);
                                                                setData(res.data);
                                                                createRows(res.data);
                                                              });
                                                          } 
                                                          
                                                          useEffect(() => {
                                                            //console.log('i fire once');
                                                  getData();
                                                  // getProduct();
                                                  // getProductionorder();
                                                  // getCustomers();
                                                  // getStock();
                                                            //alert("anu");
                                            }, []);
  return (
    <div>
      <div class="card shadow mb-2" id ="tablecard">
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
    </div> 
    </div>
  )
}

export default TaskTable
