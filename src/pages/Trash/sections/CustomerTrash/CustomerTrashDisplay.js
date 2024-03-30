import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Sidebar from "../../../../components/Sidnav/Sidebar";
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../../theme";
import * as  MdIcons from "react-icons/md";
import { FaLink } from 'react-icons/fa';

import {AiFillFile} from 'react-icons/ai'
import { LiaTrashRestoreAltSolid } from "react-icons/lia";

const CustomerTrashDisplay=(props)=>{

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
                  
                      navigate("/account/login");
                    }
                  
    var username = window.localStorage.getItem('username')
    var password = window.localStorage.getItem('password')
    var currentUserrole = window.localStorage.getItem('userrole')
                    //alert(window.localStorage.getItem('password'));
                  
                  
                    // function handleDelete(id) {
                    //   axios
                    //     .delete(`http://localhost:8000/master/customer/delete/${id}`,
                    //       {
                    //         auth: {
                    //           username: username,
                    //           password: password
                    //         }
                    //       }
                    //     )
                    //     .then(() => {
                    //       //getData();
                    //       alert("anu");
                    //       navigate("/customer/cusdatagrid");
                    //     });
                    // }
                  
    const setToLocalStorage = (id,name,company_prefix,company_gln,address,zip, created_by) => {
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("company_prefix", company_prefix);
          localStorage.setItem("company_gln", company_gln);
          localStorage.setItem("address", address);
          localStorage.setItem("zip", zip);
          localStorage.setItem("created_by", created_by);
    };
                  
    let userDataColumns = [
                      { field: 'id', headerName: 'Id', width: 100,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'name', headerName: 'Name', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'country', headerName: 'Country', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'state', headerName: 'State', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'city', headerName: 'City', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'address', headerName: 'Address', width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'zip', headerName: 'Zip', width: 130,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'group', headerName: 'Group', width: 120,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'created_by', headerName: 'Created By', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'status', headerName: 'Status', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                  
                      {
                        field: 'restore',                                            //for restoring datas to the datagrid
                        headerName: 'Restore',
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
                              "Do you want to restore this customer?"
                            )
                            if (confirmBox === true) {
                              axios
                              .delete(window.url+`/master/customer/restore/trash/${thisRow.id}`,
                              {
                                data: { 
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
                    
                          if(props.deleteButtonStatus === "enabled") {
                            return <button
                            className="btn btn-primary" 
                            onClick={onClick}><LiaTrashRestoreAltSolid  size={23}/></button>;
                          }
                          else if(props.deleteButtonStatus === "disabled") {
                            return <button
                            className="btn btn-primary" 
                            onClick={onClick}><LiaTrashRestoreAltSolid  size={23}/></button>;
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
                    .delete(window.url+`/master/customer/delete/${thisRow.id}`,
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


                            

                                 
                    ];  
                  
                  
    function createRows(rowDatas) {
                      //alert(rowDatas.length);
                  
                      let editButton = <button></button>;
                      let tempArrayfunction=[]  
                      let tempstatus
                  
                      rowDatas.map(rowData => {
                        if(rowData.customerflag==true){
                        //alert(rowData.id);
                       if(rowData.status==true){
                        tempstatus="Confirmed"
                       }
                       else(
                        tempstatus="Not Confirmed"
                       )
                        tempArrayfunction.push({'id':rowData.id, 'name':rowData.name,'country':rowData.country,'state':rowData.state,'city':rowData.city,
                        'address':rowData.address,'zip':rowData.zip,
                        'created_by':rowData.created_by,'group':rowData.group,'status':tempstatus},)  
                        
                       }
                      })
                        setSelectedDIV_state(<div>
                         {/* <div class=""  > 
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Customers</h6>                         
                            </div>
                 
                            <div class="card-body pb-1"> 
                               <button className='btn btn-primary' onClick={navigateToCreatePage}>Create Customer</button>                       
                           </div>  */}
                
                           <div class="card-body">   
                                <div style={{ height: 700, width: '100%'}} >
                                    <DataGrid rows={tempArrayfunction} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/>
                                </div>
                             </div>
                        </div> 
                    // </div>
                    )

                }
                  
    function getData() {
                      //alert("anu");
                      axios
                        .get(window.url+"/master/customer/",
                          
                        )
                        .then((res) => {
                          //alert(res.data.length);
                          setData(res.data);
                          createRows(res.data);
                        });
                    }
                  
    function handleDelete(id) {
                      axios
                        .delete(window.url+`/master/customer/delete/${id}`,
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
                    navigate("/customer/cuscreate/new/new");
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
          
                  
                        
                     <div className="customer">
                  
                        <div  style={{ height: 400, width: '110%'}}>
                  
                        <h5>CUSTOMER </h5>
                          
                          
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

export default CustomerTrashDisplay
