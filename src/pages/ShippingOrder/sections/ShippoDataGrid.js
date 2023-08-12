import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import Sidebar from "../../../components/Sidnav/Sidebar";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";

// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';

const ShippoDataGrid=(props)=> {
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
                        .delete(`http://127.0.0.1:8000/master/shippo/delete/${id}`,
                         
                        )
                        .then(() => {
                          //getData();
                          //alert("anu");
                          navigate("/shippingorder");
                        });
                    }
                  
          
                  
  let userDataColumns = [
                      { field: 'id', headerName: 'Id', width:100,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'shipping_order_name',headerName: 'shipping_order_name', width: 180,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'source_location', headerName: 'source_location', width: 150 ,headerClassName: "MuiDataGrid-columnHeaders",},
                      { field: 'destination_location', headerName: 'destination_location', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'subject_name', headerName: 'subject_name', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'shipping_date', headerName: 'shipping_date', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'batch_for_export', headerName: 'batch_for_export', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'status', headerName: 'status', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'process_no_original', headerName: 'process order number', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
                  
                  
                  
                      { field: 'created_by', headerName: 'Created By', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
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
                  
                          navigate("/shippingorder/shippocreate/edit/"+thisRow.id+"/"+thisRow.process_no_original);
                    
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
                    .delete(`http://127.0.0.1:8000/master/shippo/delete/${thisRow.id}`,
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
                            //alert(thisRow.name);
                     navigate("/shippingorder/properties/"+ thisRow.id)
                    
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
                  
                  
                    if(props.propertyButtonStatus === "enabled" ) {
                           return <button
                                        className="btn btn-primary" 
                                        onClick={onClick}><i class="fa-solid fa-folder-open"></i></button>;
                                      }
                    else if(props.propertyButtonStatus === "disabled" ) {
                            return <button
                                        className="btn btn-primary" 
                                        disabled = "true"
                                        onClick={onClick}><i class="fa-solid fa-folder-open"></i></button>;
                         }
                        },
                      },
                  
                      {
                        field: 'shipping',
                        headerName: 'Export',
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
                               navigate("/shipping/export/"+ thisRow.process_no_original+"/"+thisRow.id)
                              
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
                            
                            
                              if(props.propertyButtonStatus === "enabled" ) {
                                    return <button
                                                  className="btn btn-info" 
                                                  onClick={onClick}><i class="fa-sharp fa-solid fa-paper-plane"></i></button>;
                                                }
                              else if(props.propertyButtonStatus === "disabled" ) {
                                      return <button
                                                  className="btn btn-info" 
                                                  disabled = "true"
                                                  onClick={onClick}><i class="fa-sharp fa-solid fa-paper-plane"></i></button>;
                                   }
                                  },
                                },
                  
                  
                      
                    ];  
                  
      function createRows(rowDatas) {
                  
                      //alert(rowDatas.length);
                  
                  
                  
                rowDatas.map(rowData => {
                  
                       
                  
                    axios
                  
                        .get("http://127.0.0.1:8000/master/locations/"+rowData.source_location,
                  
                          
                  
                        )
                  
                        .then((res) => {
                  
                          // alert(res.data[0].source_location);
                  
                          //setProductionLineSystemName(res.data[0].system_name);
                  
                  
                  
                          axios
                  
                          .get("http://127.0.0.1:8000/master/locations/"+rowData.destination_location,
                  
                            
                          )
                  
                          .then((res2) => {
                  
                  
                  
                  
                            axios
                  
                            .get("http://127.0.0.1:8000/master/customer/"+rowData.subject_name,
                  
                              
                  
                            )
                  
                            .then((res3) => {
                  
                  
                  
                  
                            //alert(res.data[0].system_name);
                  
                            //setProductionLineSystemName(res.data[0].system_name);
                  
                         
                  
                            //alert(res2.data[0].name);
                  
                   
                  
                            setUserDataRows(userDataRows => [
                  
                              ...userDataRows,
                  
                              {
                  
                                'id':rowData.id,
                  
                                'shipping_order_name':rowData.shipping_order_name,
                  
                                'source_location':res.data[0].name,
                  
                                'destination_location':res2.data[0].name,
                  
                                //'Production_line_id':res.data[0].system_name,
                  
                                'subject_name':res3.data[0].name,
                  
                                'shipping_type':rowData.shipping_type,
                  
                                'shipping_date':rowData.shipping_date,
                                'batch_for_export':rowData.batch_for_export,
                  
                         
                  
                                // 'requested':rowData.requested,
                  
                                'created_by':rowData.created_by,
                  
                                'status':rowData.status,
                                'process_no_original':rowData.process_no_original
                                //'packaging_Version':rowData.packaging_Version,
                  
                                //'expiration_date':rowData.expiration_date
                  
                              },
                  
                            ]);
                  
                          });
                  
                          });
                  
                  
                  
                        });
                  
                  
                  
                      })
                  
                    }
                            
                  
                    // {'id':rowData.id, 'shipping_order_name':rowData.shipping_order_name,'source_location':rowData.source_location,
                    //       'destination_location':rowData.destination_location,
                    //       'created_by':rowData.created_by,'subject_name':rowData.subject_name,'shipping_date':rowData.shipping_date,'batch_for_export':rowData.batch_for_export},
                  
        function getData() {
                      //alert("anu");
                      axios
                        .get("http://127.0.0.1:8000/master/shippo/",
                          
                        )
                        .then((res) => {
                          //alert(res.data.length);
                          setData(res.data);
                          createRows(res.data);
                        });
                    }
                  
        function handleDelete(id) {
                      axios
                        .delete(`http://127.0.0.1:8000/master/shippo/delete/${id}`,
                          
                        )
                        .then(() => {
                          getData();
                        });
                    }
                  
                    const navigateToCreatePage = () => {
                      navigate("/shippingorder/shippocreate/new/new");
                    };
                    const navigateToPropertiesPage = () => {
                      navigate("/shippingorder/properties/");
                    };
                  
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
          
                    <div className="prod1" style={{ height: 590,width:1500 }}>
                      <h3>ShippingOrder</h3>
            
                      
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

export default ShippoDataGrid
