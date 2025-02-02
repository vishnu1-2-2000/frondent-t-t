import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { Box,useTheme  } from "@mui/material";
import { tokens } from '../../../../theme';
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import axios from "axios";
import Sidebar from '../../../../components/Sidnav/Sidebar';
import { RiInsertRowTop } from 'react-icons/ri';
import { MdDownloadForOffline } from 'react-icons/md';
import { SiAddthis } from 'react-icons/si';
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
  const ProductionorderTrashDisplay = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [productionLineSystemName, setProductionLineSystemName] = useState("");
  const [productionOrderCounter, setProductionOrderCounter] = useState(0);
  const [userDataRows, setUserDataRows] = useState([]);

  ///   For navigate function
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    navigate("/account/login");
  }

  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  var index=1;
  let userDataColumns = [
    {field:'index',headerName:'Index',width:12,headerClassName: "MuiDataGrid-columnHeaders",},
    { field: 'id', headerName: 'Id', hide:true, width: 88,headerClassName: "MuiDataGrid-columnHeaders",  },
    { field: 'process_order_number', headerName: 'Po Number ',minWidth: 160, headerClassName: "MuiDataGrid-columnHeaders", },

    { field: 'batch_number', headerName: 'Batch Number ', width: 180,headerClassName: "MuiDataGrid-columnHeaders",  },

    // { field: 'manufacturing_location', headerName: 'Manufacturing Location', minWidth: 150, flex:1,headerClassName: "MuiDataGrid-columnHeaders",  },
    // { field: 'product_conn', headerName: 'Product Name', width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
/*{
    { field: 'Production_line_id', headerName: 'Productionline id ', width: 170 },

*/
    // {field: 'gtin_number', headerName: 'Gtin', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'regulation', headerName: 'Regulation', width: 150,headerClassName: "MuiDataGrid-columnHeaders",},
    // { field: 'production_date', headerName: 'Production Date', width: 150,headerClassName: "MuiDataGrid-columnHeaders",  },
    // { field: 'produced', headerName: 'produced', width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'requested', headerName: 'requested', width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'created_by', headerName: 'created by', width: 170,headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'line', headerName: 'Line', width: 140,headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'type', headerName: 'Type', width: 150,headerClassName: "MuiDataGrid-columnHeaders",},
    { field: 'status', headerName: 'Status', width: 150,headerClassName: "MuiDataGrid-columnHeaders", },
    
/*
    { field: 'packaging_Version', headerName: 'packaging Version', width: 170 },
    { field: 'expiration_date', headerName: 'Expiration Date', width: 170 },
*/

{
  field: 'restore',
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
        "Do you want to restore this productionline?"
      )
      if (confirmBox === true) {
        
        axios
        .delete(window.url+`/master/productionorder/restore/trash/${thisRow.id}`,
        {
          data: { 
            "process_order_number" : thisRow.process_order_number,
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
            .delete(window.url+`/master/productionorder/delete/${thisRow.id}`,
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

        if(props.deleteButtonStatus === "enabled" && thisRow2.status=='Draft') {
          return <button
            className="btn btn-danger" 
            onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
        }
        else if(props.deleteButtonStatus === "disabled"|| thisRow2.status=='Closed'|| thisRow2.status=='Inproduction' ) {
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
    rowDatas.map(rowData => {
      if(rowData.prodcutionorderflag===true){
      axios
      .get(window.url+"/productionline/manufacturinglocation/"+rowData.manufacturing_location,
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
        //alert(res.data[0].name);
        //setProductionLineSystemName(res.data[0].system_name);

        axios
        .get(window.url+"/master/product/"+rowData.product_conn,
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
          //alert(res.data[0].system_name);
          //setProductionLineSystemName(res.data[0].system_name);
  
          //alert(res2.data[0].name);
          setUserDataRows(userDataRows => [
            ...userDataRows,
            { 'index':index++,
              'id':rowData.id, 
              'process_order_number':rowData.process_order_number,
              'batch_number':rowData.batch_number,
              'manufacturing_location':res.data[0].name,
              //'Production_line_id':res.data[0].system_name,
              'product_conn':res2.data[0].name,
              'regulation':rowData.regulation,
              'production_date':rowData.production_date,
              'produced':rowData.produced,
              'requested':rowData.requested,
              'created_by':rowData.created_by,
              'line':rowData.line,
              'gtin_number':rowData.gtin_number,
              'type':rowData.type,
              'status':rowData.status,
            
             
              // 'packaging_Version':rowData.packaging_Version,
              // 'expiration_date':rowData.expiration_date
            
            },
          ]);
        });

      });
    }
    })
  }
  // 'production_date':rowData.production_date,'produced':rowData.produced,'requested':rowData.requested,
  function getData() {
    //alert("anu");
      axios
      .get(window.url+"/master/productionorder/",
        
      )
      .then((res) => {
        //alert(res.data.length);
        setData(res.data);
        createRows(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(window.url+`/master/productionorder/delete/${id}`,
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
    navigate("/productionorder/new/new");
  };
  const navigateToHrfPage =()=>{
    navigate("/po/pohrfcreate/new")
  }
  const navigateToPropertiesPage =()=>{
    navigate("/productionorder/property/new")
  }
  const navigateToIdentifierPage =()=>{
    navigate("/productionorder/identifier")
  }

  const navigateToPrinterdataPage =()=>{
    navigate("/printerpool/new/new")
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

  // function CustomToolbar() {
  //   return (
  //     <GridToolbarContainer>
  //       <GridToolbarColumnsButton />
  //       <GridToolbarFilterButton />
  //       <GridToolbarDensitySelector />
  //       <GridToolbarExport />
  //     </GridToolbarContainer>
  //   );
  // }  

  return (
    <>

    <Box sx={{ display: 'flex' }} id="big-screen"> 

      <Sidebar/>

    
      <Box component="main" sx={{ flexGrow: 3, p: 9 }}>

        <div class="container" id="po">
          <div class="row">
      {/* <div class="col-2">
 
<Sidebar currentPage="Podatagrid"/>
</div> */}
            <div class="col-10">

              <div className="spinner-container">
                <div className="loading-spinner">
                </div>
              </div>

              <div className="prod1" style={{ width:1500 }}>
                <h3>Production Order</h3>
  
             
     {/* <button align='right'
  
      onClick={navigateToHrfPage} 
      className="btn btn-success">HRF</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button align='right'
  
  onClick={navigateToPropertiesPage} 
  className="btn btn-success">Properties</button> */}

  

            {/* <DataGrid className="da" rows={userDataRows} columns={userDataColumns} pageSize={8}  components={{ Toolbar: CustomToolbar }} /> */}
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

export default ProductionorderTrashDisplay
