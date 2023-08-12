import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import axios from "axios";
import Sidebar from '../../../components/Sidnav/Sidebar';
import { RiInsertRowTop } from 'react-icons/ri';

function PrinterDataGrid(props) {

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
var index=1;
let userDataColumns =[
                    {field:'id',headerName:'Id',width:100,headerClassName: "MuiDataGrid-columnHeaders",},
                    {field:'processordernumber',headerName:'Processordernumber',width:300,headerClassName: "MuiDataGrid-columnHeaders",},
                    {field:'gtin',headerName:'Gtin',width:200,headerClassName: "MuiDataGrid-columnHeaders",},
                    {field:'expiration_date',headerName:'Expiration_date',width:200,headerClassName: "MuiDataGrid-columnHeaders",},
                    {field:'lot',headerName:' Lot',width:160,headerClassName: "MuiDataGrid-columnHeaders",},
                    {field:'type',headerName:'Printing Type',width:160,headerClassName: "MuiDataGrid-columnHeaders",},
                    
                    
{
                    field: 'edit',
                    headerName: 'Edit',
                    width:200,
                    headerClassName: "MuiDataGrid-columnHeaders",
                    sortable: false,
                    renderCell: (params) => {
                      const onClick = (e) => {
                        e.stopPropagation(); // don't select this row after clicking
                
                        const api: GridApi = params.api;
                        const thisRow: Record<string, GridCellValue> = {};
                
                        api
                          .getAllColumns()
                          .filter((c) => c.field !== '__check__' && !!c)
                          .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                          );
                        //alert(thisRow.name);
                        // window.localStorage.setItem("shippoEditID",thisRow.id);
              
                        navigate("/printerpool/edit/"+ thisRow.id)
                
                        // setToLocalStorage(
                        //   thisRow.id,
                        //   thisRow.shipping_order_name,
                        //   thisRow.source_location,
                        //   thisRow.destination_location,
                        //   thisRow.created_by,
                        //   thisRow.subject_name,
                        //   thisRow.shipping_date,
                        //   thisRow.batch_for_export
                        // );
                
                        //return alert(JSON.stringify(thisRow, null, 4));
                      };
                
                      const api2: GridApi = params.api;
      const thisRow2: Record<string, GridCellValue> = {};

      api2
        .getAllColumns()
        .filter((c) => c.field !== '__check__' && !!c)
        .forEach(
          (c) => (thisRow2[c.field] = params.getValue(params.id, c.field)),
        );

    //alert(currentUserrole);

    if(props.editButtonStatus === "enabled" ) {
      return <button
        className="btn btn-success" 
       
        onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
    }
    else if(props.editButtonStatus === "disabled") {
      return <button
        className="btn btn-success" 
        disabled = "true"
        onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
    }
       },
       },

  {                             
      field: 'delete',
      headerName: 'Delete',
      headerClassName: "MuiDataGrid-columnHeaders",
                                   
          sortable: false,
                renderCell: (params) => {
                           const onClick = (e) => {
                         e.stopPropagation(); // don't select this row after clicking
                                
                         const api: GridApi = params.api;
                          const thisRow: Record<string, GridCellValue> = {};
                                    api
                .getAllColumns()
                .filter((c)=>c.field!=='__check__'&&!!c)
                .forEach(
                       (c)=>(thisRow[c.field]=params.getValue(params.id,c.field)),
                );
                              
                                      //   api
                                      //     .getAllColumns()
                                      //     .filter((c) => c.field !== '__check__' && !!c)
                                      //     .forEach(
                                      //       (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                                      //     );
                                        //alert(thisRow.id);
                                  
                                        //return alert(JSON.stringify(thisRow, null, 4));
                              
                const confirmBox = window.confirm(
                                    "Do you really want to delete this user?"
                                    )
          if (confirmBox === true) {
                axios
                .delete(`http://127.0.0.1:8000/master/printer/delete/${thisRow.id}`,
                {
//                 data: { 
                
//                 "loggedInUsername": window.localStorage.getItem('loggedInUsername'),
//                 "loggedInUserrole": window.localStorage.getItem('loggedInUserrole')
//                 }
                })
                .then(() => {
                getData();
                //alert("anju");
                //navigate("/account/read");
                window.location.reload();
                });
                }
                                        
                              
       };
const api2: GridApi = params.api;
const thisRow2: Record<string, GridCellValue> = {};
      api2
      .getAllColumns()
      .filter((c)=>c.field!=='__check__'&&!!c)
      .forEach(
        (c)=>(thisRow2[c.field]=params.getValue(params.id,c.field)),
      );

    if(props.deleteButtonStatus === "enabled" ) {
      return <button
        className="btn btn-danger" 
        onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
    }
    else if(props.deleteButtonStatus === "disabled" ) {
      return <button
        className="btn btn-danger" 
        disabled = "true"
        onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
    }
                    },
                  },
]

function createRows(rowDatas){
                    rowDatas.map(rowData =>{

                      
                      axios
                  
                      .get("http://127.0.0.1:8000/master/productionorder/"+rowData.processordernumber,
              
                        {
              
                          
              
                        },
              
                        {
              
                          'param': 'anu'
              
                        }
              
                      )
              
                      .then((res2) => {
              
                    setUserDataRows(userDataRows =>[
                                        ...userDataRows,
                                        {
                                            'id':rowData.id,
                                            // 'processordernumber':rowData.processordernumber,
                                            'processordernumber':res2.data[0].process_order_number,
                                            'gtin':rowData.gtin,
                                            'expiration_date':rowData.expiration_date,
                                            'lot':rowData.lot,
                                            'type':rowData.type,

                                        }
                    ])                    
                      })

                     })
                  
}
function getData() {
                    //alert("anu");
                    axios
                      .get("http://127.0.0.1:8000/master/printer/",
                        {
                          // auth: {
                          //   username: username,
                          //   password: password
                          // }
                        },
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
                    //  if(window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
                    getData();
                    //  }
                    //  else{
                    //   navigate("/");
                    //  }
                    //alert("anu");
                  }, []);
                  function handleDelete(id) {
                    axios
                      .delete(`http://127.0.0.1:8000/master/printer/delete/${id}`,
                        {
                          // auth: {
                          //   username: username,
                          //   password: password
                          // }
                        }
                      )
                      .then(() => {
                        getData();
                      });
                  }
                  
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
      <div class="card-body">  
        <Box sx={{ display: 'flex' }}> 
          <Sidebar/>
            <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
              <div className="customer">
                <div  style={{ height: 400, width: '100%'}}>
                  <h5>PrinterTable</h5>     
                        {/* <DataGrid rows={userDataRows} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/> */}
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
                    <DataGrid
                        rows={userDataRows}
                        columns={userDataColumns}
                        components={{ Toolbar: GridToolbar}}
                    />
                  </Box>
                </Box>
              </div> 
            </div>         
          </Box>
        </Box>
      </div>                     
    </>
  );
}

export default PrinterDataGrid
