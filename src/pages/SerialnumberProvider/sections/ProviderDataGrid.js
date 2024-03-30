import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import axios from "axios";
import Sidebar from '../../../components/Sidnav/Sidebar';
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import { FcSettings } from 'react-icons/fc';
import { SiAddthis } from 'react-icons/si';
const ProviderDataGrid=(props)=> {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [userDataRows, setUserDataRows] = useState([]);
                  
  const [selectedDIV_state, setSelectedDIV_state] = useState("");                 ///   For navigate function
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
  let fieldname="extrafield"   
                  
  function handleDelete(id) {
              axios
                .delete(window.url+`/productionline/manufacturinglocation/delete/${id}`,
                          
                    )
                      .then(() => {
                          //getData();
                          // alert("anu");
                          navigate("/company/comdatagrid");
                        });
                    }
                  
  const setToLocalStorage = (id,name,gln_number,address,created_by) => {
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("gln_number", gln_number);
          localStorage.setItem("address", address);
          localStorage.setItem("created_by", created_by);
      };
                  
    let userDataColumns = [
                      { field: 'id', headerName: 'Id', width:180,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'name',headerName: 'Name',width:210,headerClassName: "MuiDataGrid-columnHeaders",},
                      { field: 'extrafield',headerName: 'Extrafield',width:110,headerClassName: "MuiDataGrid-columnHeaders",hide:true},
                      {
                          field: 'edit',
                            headerName: 'Edit',
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
                                            // window.localStorage.setItem("shippoEditID",thisRow.id);
                                  
                                    navigate("/snprovider/edit/"+thisRow.extrafield+"/");
                                    
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
                      field: 'gtin',
                        headerName: 'gtin',
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
                                           navigate("/gtinpool")
                                          
                                                  // setToLocalStorage(
                                                  //   thisRow.id,
                                                  //   thisRow.gtin_number,
                                                  //   thisRow.customer_id,
                                                  //   thisRow.imn,
                                                  //   thisRow.created_by,
                                                  //   thisRow.name,
                                                  // );
                                          
                                                  //return alert(JSON.stringify(thisRow, null, 4));
                                           };
                                          
                                                //alert(currentUserrole);
                                                   
                                  
                              if(props.editButtonStatus === "enabled" ) {
                                          return <button
                                                      className="btn btn-success" 
                                                            onClick={onClick}><SiAddthis size={23}/></button>;
                                                    }
                                  else if(props.editButtonStatus === "disabled" ) {
                                              return <button
                                                              className="btn btn-primary" 
                                                              disabled = "true"
                                                              onClick={onClick}><FcSettings size={23}/></button>;
                                               }
                                           
                                              },
                                           
                                            },
                
                    {                            
                      field: 'delete',
                        width:160,
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
                                    .delete(window.url+`/master/snprovider/delete/${thisRow.id}`,
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
                      // alert(rowDatas.length);
                  
                  let editButton = <button></button>;  
                  
                    rowDatas.map(rowData => {
                        //alert(rowData.id);
                        setUserDataRows( userDataRows => [
                          ...userDataRows,
                          {'id':rowData.id, 'name':rowData.name,'extrafield':rowData.extrafield},
                      ]);
                })
    //             let tempArrayFunction = [];
    // rowDatas.map(rowData => {
    //   //alert(rowData.id);

    //   tempArrayFunction.push({'id':rowData.id, 'name':rowData.name,'extrafield':rowData.extrafield 
    //  });

      
      // setUserDataRows( userDataRows => [
      //   ...userDataRows,
      //   {'slno':slno++,'id':rowData.id,'name':rowData.Name, 'email':rowData.email, 'date_birth':rowData.date_birth, 'userRole':rowData.userRole, 
      //   'address':rowData.address},
      // ]);
      
    // })

              //   setSelectedDIV_state(<div class="container-fluid">
              //   {/* <h4 class="m-0 font-weight-bold text-primary">Registered users</h4><br></br>  */}
              //        {/* <div class="card shadow mb-4">  */}
              //            {/* <div class="card-header py-3">
                         
                                                   
              //            </div> */}
             
              //            {/* <div class="card-body pb-1">
                          
              //            </div> */}
             
              //            {/* <div class="card-body">   */}
              //            {/* <button className='btn btn-primary' onClick={navigateToCreatePage}>Register new user</button>  */}
              //            <div class="container" id="shipping">                  
              //                <div className="prr" style={{ height: 700, width: '110%'}} >
              //                <Box m="20px">
              //    <Box display="flex" justifyContent="space-between" alignItems="center">
              //      {/* <Header  subtitle="welcome to you Contacts" /> */}
              //    </Box>
                
              //    <Box
              //      m="8px 0 0 0"
              //      width="100%"
              //      height="80vh"
              //      sx={{
              //        "& .MuiDataGrid-root": {
              //          border: "none",
              //        },
              //        "& .MuiDataGrid-cell": {
              //          borderBottom: "none",
              //        },
              //        "& .name-column--cell": {
              //          color: colors.greenAccent[300],
              //        },
                    
              //        "& .MuiDataGrid-columnHeaders": {
              //          backgroundColor: colors.greenAccent[700],
              //          borderBottom: "none",
              //        },
              //        "& .MuiDataGrid-virtualScroller": {
              //          backgroundColor: colors.primary[400],
              //        },
              //        "& .MuiDataGrid-footerContainer": {
              //          borderTop: "none",
              //          backgroundColor: colors.greenAccent[700],
              //        },
              //        "& .MuiCheckbox-root": {
              //          color: `${colors.greenAccent[200]} !important`,
              //        },
              //        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              //          color: `${colors.grey[100]} !important`,
              //        },
              //      }}
              //    >
                   
              //      < DataGrid
              //       rows={tempArrayFunction}
              //       columns={userDataColumns}
              //       components={{ Toolbar: GridToolbar}}
              //      />
              //    </Box>
              //  </Box>
              //                    {/* <DataGrid rows={tempArrayFunction} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/> */}
              //                </div>
              //            {/* </div> */}
              //        </div>
              //    </div>);
             
            }
                  
  function getData() {
                      //alert("anu");
                      axios
                        .get(window.url+"/master/snprovider/",
                          
                      )
                        .then((res) => {
                          //alert(res.data.length);
                          setData(res.data);
                          createRows(res.data);
                        });
                    }
                  
  function handleDelete(id) {
              axios
                .delete(window.url+`/master/snprovider/delete/${id}`,
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
          navigate("/snprovider/new/new");
    };
                    // const navigateToDownloadPage = () => {
                    //   navigate("/serialnodownload");
                    // };
                  
                           
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
                          <GridToolbarColumnsButton/>
                          <GridToolbarFilterButton/>
                          <GridToolbarDensitySelector/>
                          <GridToolbarExport/>
                        </GridToolbarContainer>
                      );
                    }  
                  
  return (
        <>
          <br></br>
          <Box sx={{ display: 'flex' }}> 
            <Sidebar/>
              <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
                <div className="b2" id="manufact">
                  <div style={{  width:'190%',backgroundColor:'#FFFFFF' }}>
                    <h5>SnProvider</h5>
                    <button align='right'
                      disabled={currentUserrole==="operator" || currentUserrole==="staff" ? true : false}
                      onClick={navigateToCreatePage} 
                      className="btn btn-success">Create</button>&nbsp;&nbsp;&nbsp;

                          {/* <button align='right'
                          disabled={currentUserrole==="operator" || currentUserrole==="staff" ? true : false}
                          onClick={navigateToDownloadPage} 
                          className="btn btn-success">Download Serialnumbers</button> */}
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
                      {/* {selectedDIV_state} */}
                    </Box>
                  </Box>
                </div>
              </div>
            </Box>
          </Box>
        </>
      );
    }

export default ProviderDataGrid
