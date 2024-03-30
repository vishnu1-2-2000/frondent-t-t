import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
  GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import axios from "axios";
import Sidebar from '../../../../components/Sidnav/Sidebar';
import { Box,useTheme  } from "@mui/material";
import { tokens } from '../../../../theme';
import Tooltip from '@mui/material/Tooltip';
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
const RegisteredUsersTrashDisplay = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDIV_state, setSelectedDIV_state] = useState("");

  const navigate = useNavigate();
    
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')
  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  var employeeid=window.localStorage.getItem("employeeid");  
  const setToLocalStorage = (employeeid) => {
    window.localStorage.setItem("employeeid", employeeid);
 
    
};
  let userDataColumns = [
    { field:'slno',headerName:'Sl No', flex : 1, align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders",},
    { field: 'id', headerName: 'ID',  flex : 1,align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders",hide:true },
    { field: 'employeeid', headerName: 'Employee ID',  flex : 1,align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'name', headerName: 'Name',  flex : 1, align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    // { field: 'name', headerName: 'Name',  flex : 1, align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'email', hide:true ,headerName: 'Email', flex : 1,  align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'date_birth', headerName: 'Date of Birth',  flex : 1, align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'userRole', headerName: 'User Role', flex : 1,  align:'left', headerAlign:'left' ,headerClassName: "MuiDataGrid-columnHeaders", },
    { field: 'address', headerName: 'Address',  flex : 1, align:'left', headerAlign:'left', headerClassName: "MuiDataGrid-columnHeaders", },
    
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
            "Do you want to restore this user?"
          )
          if (confirmBox === true) {
            
            axios
            .delete(window.url+`/accounts/register/restore/trash/${thisRow.id}`,
            {
              data: { 
                "Name":thisRow.name, 
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
            .delete(window.url+`/accounts/register/delete/${thisRow.id}`,
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
  
        if(props.deleteButtonStatus === "enabled") {
        
          return   <button
            className="btn btn-danger" 
            onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
            
        }
        else if(props.deleteButtonStatus === "disabled") {
          return <button
            className="btn btn-danger" 
            disabled = "true"
            onClick={onClick}><MdIcons.MdDelete size={23}/></button>;
        }
      },
    },
  ];



   
  function createRows(rowDatas) {
    var slno=1;
    //alert(rowDatas.length);
    let tempArrayFunction = [];
    rowDatas.map(rowData => {
      //alert(rowData.id);
      if(rowData.registerflag===true){

      tempArrayFunction.push({'slno':slno++,'id':rowData.id,'employeeid':rowData.employeeid,'name':rowData.Name, 'email':rowData.email, 'date_birth':rowData.date_birth, 'userRole':rowData.userRole, 
      'address':rowData.address});
      }

      /*
      setUserDataRows( userDataRows => [
        ...userDataRows,
        {'slno':slno++,'id':rowData.id,'name':rowData.Name, 'email':rowData.email, 'date_birth':rowData.date_birth, 'userRole':rowData.userRole, 
        'address':rowData.address},
      ]);
      */
    })


    //alert(userDataRows[0]['id']);
    setSelectedDIV_state(<div class="container-fluid">
   {/* <h4 class="m-0 font-weight-bold text-primary">Registered users</h4><br></br>  */}
        {/* <div class="card shadow mb-4">  */}
            {/* <div class="card-header py-3">
            
                                      
            </div> */}

            {/* <div class="card-body pb-1">
             
            </div> */}

            {/* <div class="card-body">   */}
            {/* <button className='btn btn-primary' onClick={navigateToCreatePage}>Register new user</button>  */}
            <div class="container" id="shipping">                  
                <div className="prr" style={{ height: 700, width: '110%'}} >
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
        rows={tempArrayFunction}
        columns={userDataColumns}
        pageSize={10}
        components={{ Toolbar: GridToolbar}}
      />
    </Box>
  </Box>
                    {/* <DataGrid rows={tempArrayFunction} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/> */}
                </div>
            {/* </div> */}
        </div>
    </div>);

    
  }
 function getData()
 {
  // alert("hi")
    axios
    .get(window.url+"/accounts/register/")
    .then((res)=>{
      // alert("hi")
        createRows(res.data);
    });
 }

//   function getData() {
//     //alert("anu");
    
//     axios
//       .get("http://127.0.0.1:8000/accounts/register/")
//       .then((res) => {
//         createRows(res.data);
//       });
//   }
  
  const navigateToCreatePage = () => {
    navigate("/registeredusers/new/new");
  };

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

  useEffect(() => {
    getData();
    // alert(employeeid)
  }, []);
 
    return(
      <>
        <br></br>
            
              <Box sx={{ display: 'flex' }} id="big-screen"> 
          
             <Sidebar/>
          
              
              <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
          
                  
                        
                     <div className="reguser" id="reguser">
                  
                        <div  style={{ height: 300, width: '100%'}}>
                      <div id="userheadfield">
                        <h5>Registered Users </h5>
                        <br></br>
                          <button align='right'
                        
                          onClick={navigateToCreatePage} 
                          className="btn btn-success">Register new user</button>
                          </div>
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
    )
};

export default RegisteredUsersTrashDisplay;
