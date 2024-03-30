import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import Sidebar from "../../../../components/Sidnav/Sidebar";
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../../theme";
import { FcSettings } from 'react-icons/fc';
import { SiAddthis } from 'react-icons/si';
import { MdAddLink } from 'react-icons/md';
import { RiInsertRowTop } from 'react-icons/ri';
// import { SidebarData } from "../../components/SidebarData";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
const ProductDataGrid= (props)=> {
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
                        .delete(window.url+`/master/product/delete/${id}`,
                          
                        )
                        .then(() => {
                          //getData();
                          // alert("anu");
                          navigate("/product/productdatagrid");
                        });
                    }
                    

    const setToLocalStorage = (id,gtin_number,customer_id,imn,created_by,name) => {
                      localStorage.setItem("id", id);
                      localStorage.setItem("customer_id,",customer_id );
                      localStorage.setItem("gtin_number",gtin_number );
                      localStorage.setItem("imn",imn );
                      localStorage.setItem("created_by",created_by);
                      localStorage.setItem("name",name);
                };
                  
      let userDataColumns = [
                      
                      { field: 'id', headerName: 'Id', width: 100, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'name', headerName: 'Name', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'gtin_number', headerName: 'Gtin Number ', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'customer_id', headerName: 'Customer Id ', width: 170, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'imn', headerName: 'Imn', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                      { field: 'created_by', headerName: 'created by', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                    
                      { field: 'status', headerName: 'Status', width: 150, headerClassName: "MuiDataGrid-columnHeaders", },
                      {
                        field: 'restore',
                        headerName: 'Restore',
                        headerClassName: "MuiDataGrid-columnHeaders",
                        // flex : 1,
                        width: 150,
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
                              "Do you want to restore this customerlocation?"
                            )
                            if (confirmBox === true) {
                              
                              axios
                              .delete(window.url+`/master/product/restore/trash/${thisRow.id}`,
                              {
                                data: { 
                                    "name":thisRow.name, 
                                    "email" : thisRow.email,
                                    "userRole" : thisRow.userRole,
                                    "customer_name" : thisRow.customer_id,
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
                                    .delete(window.url+`/master/product/delete/${thisRow.id}`,
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
                      //  alert(customer_id);                
    rowDatas.map(rowData => {  
      // alert(rowData.productflag)  
      if(rowData.productflag===true){       
      axios          
        .get(window.url+"/master/customer/"+rowData.customer_id,
         )    
        .then((res2) => {
         // alert(res2.data[0].name);
          if(rowData.status==true){
            rowData.status="Confirmed"
          }
          else{
            rowData.status="Not Confirmed"
          }       
          setUserDataRows(userDataRows => [
            ...userDataRows,    
            {
                  
                                    // 'id':rowData.id,
                  
                                    // 'name':rowData.name,
                  
                                    // 'customer_id':res2.data[0].name,
                  
                                    // // 'product_conn':,
                  
                                    // 'created_by':rowData.created_by,
                                    // 'address':rowData.address,
                                    // 'zip':rowData.zip,
                                    // 'state':rowData.state,
                  
                                    // 'loc_gln':rowData.loc_gln    
              'id':rowData.id,
              'gtin_number':rowData.gtin_number,
              'customer_id':res2.data[0].name,
              'imn':rowData.imn,
              'created_by':rowData.created_by,
              'name':rowData.name,   
              'status':rowData.status
            },
                  
          ]);
                  
        });               
      }         
      })
                  
    }
                    // {'id':rowData.id, 'gtin_number':rowData.gtin_number,'customer_id':rowData.customer_id,'imn':rowData.imn,
                    // 'created_by':rowData.created_by,'name':rowData.name},
                  
  function getData() {
                      //alert("anu");
    axios
    .get(window.url+"/master/product/",
    )
    .then((res) => {
                          //alert(res.data.length);
      setData(res.data);
      createRows(res.data);
    });
  }
                  
  function handleDelete(id) {
    axios
    .delete(window.url+`/master/product/delete/${id}`,
     )
    .then(() => {
      getData();
    });
  }
                  
  const navigateToCreatePage = () => {
    navigate("/product/productcreate/new/new");
  };
                  
                    // const navigateToHrfPage = () => {
                    //   navigate("/product/producthrf/new/new");
                    // };
  const navigateToMarketsPage = () => {
    navigate("/products/markets/new");
  };
                    // const navigateToPropertiesPage = () => {
                    //   navigate("/product/properties/");
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
              <br/>  
              <div class="container" id="product">
                <div class="row">
                  <div class="col-10">
                    <div style={{  width: '140%'}}>
                      <h3>Product</h3>
                      
                  
                  
                     
                    {/* <button align='right'
                    disabled={currentUserrole==="operator" || currentUserrole==="staff" ? true : false}
                    onClick={navigateToHrfPage} 
                    className="btn btn-success">WHOLESALERS</button> */}
                          
                          
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
              </div>
            </div>
          </Box>
        </Box>
      </>
    );
}

export default ProductDataGrid
