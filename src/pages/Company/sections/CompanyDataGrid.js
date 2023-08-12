import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import Sidebar from "../../../components/Sidnav/Sidebar";

import { FaLink } from 'react-icons/fa';
import {AiFillFile} from 'react-icons/ai'


import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';

const CompanyDataGrid=(props)=> {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
                  
  const [userDataRows, setUserDataRows] = useState([]);
  const [selectedDIV_state, setSelectedDIV_state] = useState("");
                    ///   For navigate function
  const navigate = useNavigate();
                  
  function logout() {
                    window.localStorage.removeItem("username");
                    window.localStorage.removeItem("password");
                  
                    navigate("/");
                  }
                  
                 

  var editButtonStatus;
  var deleteButtonStatus;
                    //alert(window.localStorage.getItem('password'));
                  
                  
    function handleDelete(id) {
        axios
            .delete(`http://127.0.0.1:8000/master/company/delete/${id}`,
                          
          )
          .then(() => {
                          //getData();
                        // alert("anu");
                        navigate("/company/comdatagrid");
                        });
                    }
                  
                    
  let userDataColumns = [
                      { field: 'id', headerName:<b>Id</b> , width:100,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'company_name',headerName:<strong>Company Name</strong> , width: 200,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'address', headerName: <strong>Address</strong>, width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'zip', headerName: <strong>Zip</strong>, width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'state', headerName:<strong>State</strong> , width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
                  
                      { field: 'gln', headerName: <strong>GLN</strong>, width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'created_by', headerName: <strong>Created By</strong>, width: 160,headerClassName: "MuiDataGrid-columnHeaders", },
                      {
                        field: 'edit',
                        headerName:<strong>Edit</strong> ,
                        width:100,
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
                                      navigate("/company/edit/"+ thisRow.id);
                                  
                                    
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
                                          className="btn btn-dark" 
                                             
                                          onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
                                      }
                              else if(props.editButtonStatus === "disabled") {
                                            return <button
                                              className="btn btn-dark" 
                                              disabled = "true"
                                              onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
                                          }
                                        },
                                    },
                      {
                        field: 'delete',
                        headerName: <strong>Delete</strong>,
                        headerClassName: "MuiDataGrid-columnHeaders",
                        width:100,            
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
                                            .delete(`http://localhost:8000/master/company/delete/${thisRow.id}`,
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
                                  
                      
                      {
                        field: 'properties',
                        headerName: <strong>Properties</strong>,
                        sortable: false,
                        headerClassName: "MuiDataGrid-columnHeaders",
                        width:100,
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
                              navigate("/company/properties/"+ thisRow.id)
                            
                          };
                  
                       
                  
                            //if(currentUserrole == 'admin') {
                     
                    
                          //alert(currentUserrole);
                  
                          if(props.editButtonStatus === "enabled" ) {
                                        return <button
                                          className="btn btn-dark" 
                                         
                                          onClick={onClick}><AiFillFile size={23}/></button>;
                                      }
                                      else if(props.editButtonStatus === "disabled") {
                                        return <button
                                          className="btn btn-dark" 
                                          disabled = "true"
                                          onClick={onClick}><AiFillFile size={23}/></button>;
                                      }
                        },
                      },
                      {
                        field: 'erp settings',
                        headerName: <strong>Erp Settings</strong>,
                        sortable: false,
                        headerClassName: "MuiDataGrid-columnHeaders",
                        width:100,
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
                              navigate("/company/erpsettings/"+ thisRow.id)
                            
                          };
                  
                       
                  
                            //if(currentUserrole == 'admin') {
                     
                    
                          //alert(currentUserrole);
                  
                          if(props.editButtonStatus === "enabled" ) {
                                        return <button
                                          className="btn btn-dark" 
                                         
                                          onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
                                      }
                                      else if(props.editButtonStatus === "disabled") {
                                        return <button
                                          className="btn btn-dark" 
                                          disabled = "true"
                                          onClick={onClick}><MdIcons.MdCreate size={23}/></button>;
                                      }
                        },
                      },

                      {
                        field: 'tracelink settings',
                        headerName: <strong>Tracelink Settings</strong>,
                        sortable: false,
                        headerClassName: "MuiDataGrid-columnHeaders",
                        width:150,
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
                              navigate("/company/tracelink/"+ thisRow.id)
                            
                          };
                  
                       
                  
                            //if(currentUserrole == 'admin') {
                     
                    
                          //alert(currentUserrole);
                  
                          if(props.editButtonStatus === "enabled" ) {
                                        return <button
                                          className="btn btn-dark" 
                                         
                                          onClick={onClick}> <FaLink size={23}/></button>;
                                      }
                                      else if(props.editButtonStatus === "disabled") {
                                        return <button
                                          className="btn btn-dark" 
                                          disabled = "true"
                                          onClick={onClick}><FaLink size={23}/></button>;
                        }
                },
            },
                  
        ]; 
                  
                  
                  
  function createRows(rowDatas) {
                      //alert(rowDatas.length);
                  
               
    let tempArrayFunction = []; 
    rowDatas.map(rowData => {
                        //alert(rowData.id);
        tempArrayFunction.push( 
          {'id':rowData.id, 'company_name':rowData.company_name,'address':rowData.address,'zip':rowData.zip,
            'state':rowData.state,'gln':rowData.gln,
            'created_by':rowData.created_by},
          );
                  
        })

        setSelectedDIV_state(<div>
                        {/* <div class="card shadow mb-4"> 
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Company</h6>                         
                            </div>
                {/* 
                            <div class="card-body pb-1"> */}
                              {/* <button className='btn btn-primary' onClick={navigateToCreatePage}>Create Company</button>                       */} 
                            {/* </div> */}
                
                            {/* <div class="card-body">   */}
                      <div style={{ height: 700, width: '100%'}} >
                          <DataGrid rows={tempArrayFunction} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/>
                      </div>
                            {/* </div>
                        </div> */}
                    </div>);  
                    }

                               
                  
  function getData() {
                      //alert("anu");
        axios
            .get("http://127.0.0.1:8000/master/company/",
                          
                )
                  .then((res) => {
                          //alert(res.data.length);
                      setData(res.data);
                      createRows(res.data);
                  });
                }
                  
  function handleDelete(id) {
    axios
    .delete(`http://localhost:8000/master/company/delete/${id}`,    
    )
    .then(() => {
      getData();
    });
  }
                  
  const navigateToCreatePage = () => {
    navigate("/company/new/new");
  };
    // const navigateToPropertiesPage = () => {
    //       navigate("/company/properties/new");
    //         };
    // const navigateToTracelinkPage = () => {
    //       navigate("/company/tracelink/new");
    //         };
    // const navigateToErpsettings = () => {
    //       navigate("/company/erpsettings/new");
    //         };
                  
  useEffect(() => {
                      //console.log('i fire once');
            
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
       <Box sx={{ display: 'flex' }} > 

<Sidebar/>

 
 <Box component="main" sx={{ flexGrow: 3, p: 9 }}>
 <div class="container" id="company">
                     
      <div style={{ height: 700, width: '110%'}}>
        <h5>COMPANYS</h5>
        <button align='right'
        
        onClick={navigateToCreatePage} 
        className="btn btn-success">Create</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         {/* <button align='right'
        
        onClick={navigateToPropertiesPage} 
        className="btn btn-success">Properties</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 


        <button align='right'
       
        onClick={navigateToTracelinkPage} 
        className="btn btn-success">Tracelink Settings</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <button align='right'
      
        onClick={navigateToErpsettings} 
        className="btn btn-success">Erp Settings</button> */}
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
      
     
     {selectedDIV_state}
    </Box>
  </Box>
      </div>
    </div>
</Box>
</Box>
    </>
    );
}

export default CompanyDataGrid
