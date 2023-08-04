import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import { FcSettings } from 'react-icons/fc';
import { SiAddthis } from 'react-icons/si';
import { MdAddLink } from 'react-icons/md';
import { RiInsertRowTop } from 'react-icons/ri';
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';

const RegSystemDataGrid=(props)=> {
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
    .delete(`http://localhost:8000/productionline/registeredsystem/delete/${id}`,
    )
    .then(() => {
      alert("anu");
      navigate("/regsystem/regsystemdatagrid");
    });
  }
                  
                    // const setToLocalStorage = (id,manufacturinglocation_id,ip_address,system_name,line) => {
                    //   localStorage.setItem("id", id);
                    //   localStorage.setItem("manufacturinglocation_id",manufacturinglocation_id );
                    //   localStorage.setItem("ip_address", ip_address );
                    //   localStorage.setItem("system_name", system_name);
                    //   localStorage.setItem("line",line);
                    // };
                  
  let userDataColumns = [
    { field: 'id', headerName: 'Id', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'manufacturinglocation_id', headerName: 'Manufacturing Location', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'ip_address', headerName: 'Ip Address ', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'system_name', headerName: 'System Name', width: 190, headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'line', headerName: 'Line', width: 190, headerClassName: "MuiDataGrid-columnHeaders", },
    {
      field: 'edit',
      width:200,
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
                                      
          navigate("/regsystem/regsystemcreate/edit/"+thisRow.id);
      
                                      
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
            .delete(`http://localhost:8000/productionline/registeredsystem/delete/${thisRow.id}`,
              {
                data: { 
                  "Name" : thisRow.name,
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
  ];  
                  
                  
  function createRows(rowDatas) {
                      //alert(rowDatas.length);
    let editButton = <button></button>;  
                  
    rowDatas.map(rowData => {
      axios

      .get("http://localhost:8000/productionline/manufacturinglocation/"+rowData.manufacturinglocation_id,

        {

          

        },

        {

          'param': 'anu'

        }

      )

      .then((res2) => {

                        //alert(rowData.id);
    setUserDataRows( userDataRows => [
      ...userDataRows,
      {'id':rowData.id, 'manufacturinglocation_id':res2.data[0].name,'ip_address':rowData.ip_address,
      'system_name':rowData.system_name,'line':rowData.line},
      ]);
    })
  })

  }
                  
  function getData() {
                      //alert("anu");
    axios
    .get("http://localhost:8000/productionline/registeredsystem",
    )
    .then((res) => {
                          //alert(res.data.length);
    setData(res.data);
    createRows(res.data);
    });
  }
                  
  function handleDelete(id) {
    axios
    .delete(`http://localhost:8000/productionline/registeredsystem/delete/${id}`,
    )
    .then(() => {
      getData();
    });
  }
  const navigateToCreatePage = () => {
    navigate("/regsystem/regsystemcreate/new/new");
  };
                  
  useEffect(() => {
                      //console.log('i fire once');
   
      getData();
    
  }, []);
                    
                  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
      <GridToolbarColumnsButton/>
      <GridToolbarFilterButton/>
      <GridToolbarDensitySelector/>
      <GridToolbarExport/>
      </GridToolbarContainer>
    );
  }  
                  
  return (
    <>
      <Box sx={{ display: 'flex' }}> 
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
          <br/>
          <div class="container" id="registeredsystem">
            <div class="row">
              <div class="col-10">
                <div style={{ height: 700, width: '480%', }}>
                  <h3>Registered System</h3>
                  <button align='right'
                    disabled={currentUserrole==="operator" || currentUserrole==="staff" ? true : false}
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
                          color: colors.greenAccent[800],
                          
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
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default RegSystemDataGrid
