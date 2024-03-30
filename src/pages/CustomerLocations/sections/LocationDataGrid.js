import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Sidebar from "../../../components/Sidnav/Sidebar";
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import * as  MdIcons from "react-icons/md";
import { FaLink } from 'react-icons/fa';


const LocationDataGrid = (props) => {

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
          .delete(window.url+`/master/locations/delete/${id}`,
                          
                )
                  .then(() => {
                          //getData();
                          // alert("anu");
                          navigate("/customerlocation");
                        });
                    }
                  
                    const setToLocalStorage = (id,name,customer_id, address,zip,state,loc_gln,created_by) => {
                      localStorage.setItem("id", id);
                      localStorage.setItem("name", name);
                      localStorage.setItem("customer_id", customer_id);
                      localStorage.setItem("address", address);
                      localStorage.setItem("zip", zip);
                      localStorage.setItem("state", state);
                      localStorage.setItem("loc_gln", loc_gln);
                      localStorage.setItem("created_by", created_by);
                    };
                  
  let userDataColumns = [
                      { field: 'id', headerName: 'Id', width:100, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'name',headerName: 'Name', width: 180, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'customer_id',headerName:'Customer Name', width: 180, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'address', headerName: 'Address', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'zip', headerName: 'Zip', width: 100, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'state', headerName: 'State', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                  
                      { field: 'loc_gln', headerName: 'Location Gln', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'created_by', headerName: 'Created By', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
                      {
                    field: 'edit',
                             headerName: 'Edit',
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
                                  
                                            navigate("/customerlocation/cusloccreate/edit/"+ thisRow.id)
                                    
                                            
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
                                    .delete(window.url+`/master/locations/trash/${thisRow.id}`,
                                    {
                                    data: { 
                                      "id":thisRow.id,
                                      "name" : thisRow.name,
                                    "email" : thisRow.email,
                                    "userRole" : thisRow.userRole,
                                    "loggedInUsername": window.localStorage.getItem('loggedInUsername'),
                                    "loggedInUserrole": window.localStorage.getItem('loggedInUserrole')
                                    }
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
                
                    {
                        field: 'Properties',
                                   headerName: 'Properties',
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
                                            //alert(thisRow.id);
                                      
                                            // window.localStorage.setItem("productionOrderEditID", thisRow.id);
                                      
                                            // navigate("/po/pocreate/edit");
                                            navigate("/customerlocation/property/"+thisRow.id);
                                      
                                           
                                          };
                                      
                                          const api2: GridApi = params.api;
                                          const thisRow2: Record<string, GridCellValue> = {};
                                      
                                          api2
                                            .getAllColumns()
                                            .filter((c) => c.field !== '__check__' && !!c)
                                            .forEach(
                                              (c) => (thisRow2[c.field] = params.getValue(params.id, c.field)),
                                            );
                                      
                                            
                                              if(props.editButtonStatus === "enabled" ) {
                                                return <button
                                                  className="btn btn-primary" 
                                                 
                                                  onClick={onClick}>   <FaLink size={23}/> </button>;
                                              }
                                              else if(props.editButtonStatus === "disabled") {
                                                return <button
                                                  className="btn btn-primary" 
                                                  disabled = "true"
                                                  onClick={onClick}><FaLink size={23}/></button>;
                                              }
                                      
                                          //alert(currentUserrole);
                                      
                                      
                                          
                                        },
                                      },            
                    ];  
                  
                  
function createRows(rowDatas) {
                  
                      // alert(rowDatas.length);
                  
                  
                  
                       rowDatas.map(rowData => {
                  
                        if(rowData.locationflag===false){
                  
                          axios
                  
                          .get(window.url+"/master/customer/"+rowData.customer_id,
                  
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
                  
                          .then((res2) => {
                  
                         
                  
                            // alert(res2.data[0].name);
                  
                   
                  
                            setUserDataRows(userDataRows => [
                  
                              ...userDataRows,
                  
                              {
                  
                                    'id':rowData.id,
                  
                                    'name':rowData.name,
                  
                                    'customer_id':res2.data[0].name,
                  
                                    // 'product_conn':,
                  
                                    'created_by':rowData.created_by,
                                    'address':rowData.address,
                                    'zip':rowData.zip,
                                    'state':rowData.state,
                  
                                    'loc_gln':rowData.loc_gln
                  
                             
                  
                  
                  
                             
                  
                               
                  
                               
                  
                              },
                  
                            ]);
                          
                          });
                  
                  
                  
                   
                  
                  
                        }
                       })
                  
                    }
function getData() {
                      //alert("anu");
                      axios
                        .get(window.url+"/master/locations/",
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
                  
                    function handleDelete(id) {
                      axios
                        .delete(window.url+`/master/locations/delete/${id}`,
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
                  
                    const navigateToCreatePage = () => {
                      navigate("/customerlocation/cusloccreate/new/new");
                    };
                  
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
          
                  
                       
                        <div className="customerlocation">
                  
                     
                        <div style={{ height: 700, width: '104%'}}>
                          <h5>CUSTOMER LOCATIONS</h5>
                          <button align='right'
                        
                          onClick={navigateToCreatePage} 
                          className="btn btn-success">Create</button>
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
      
      < DataGrid
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
                      </>
                    );
}

export default LocationDataGrid