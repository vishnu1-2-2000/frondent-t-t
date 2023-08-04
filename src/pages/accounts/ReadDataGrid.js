import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navigation/Navbar";
import SideBar from "../../components/Sidebar/SideBar";

// import { SidebarData } from "../../components/SidebarData";

// import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
//   GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';

import { DataGrid, GridToolbar,GridToolbarContainer,GridToolbarFilterButton, GridToolbarColumnsButton,GridToolbarDensitySelector, GridToolbarExport } from "@mui/x-data-grid";

const ReadDataGrid = () => {

  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  const [userDataRows, setUserDataRows] = useState([]);

  // ///   For navigate function
  const navigate = useNavigate();

  // function logout() {
  //   window.localStorage.removeItem("username");
  //   window.localStorage.removeItem("password");

  //   navigate("/");
  // }

  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
  // //  alert(window.localStorage.getItem('username'));


  // function handleDelete(id) {
  //   axios
  //     .delete(`http://localhost:8000/accounts/delete/${id}`,
  //       {
  //        auth: {
  //        username: username,
  //         password: password
  //        }
  //     }
  //     )
  //     .then(() => {
  //       //getData();
  //       alert("anu");
  //       navigate("/account/ReadDataGrid");
  //     });
  // }

  // const setToLocalStorage = (id, Name, email, date_birth, userRole, address) => {
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("Name", Name);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("date_birth", date_birth);
  //   localStorage.setItem("userRole", userRole);
  //   localStorage.setItem("address", address);
  // };

  let userDataColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'NAME', width: 170 },
    { field: 'email', hide:true ,headerName: 'Email', width: 190 },
    { field: 'date_birth', headerName: 'DOB', width: 120 },
    { field: 'userRole', headerName: 'User Role', width: 150 },
    { field: 'address', headerName: 'Address', width: 170 },
    {
      field: 'edit',
      headerName: 'Edit',
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
          navigate("/account/create/edit/"+ thisRow.id)
          // setToLocalStorage(
          //   thisRow.id,
          //   thisRow.name,
          //   thisRow.email,
          //   thisRow.date_birth,
          //   thisRow.userRole,
          //   thisRow.address,
          // );
  
          //return alert(JSON.stringify(thisRow, null, 4));
        };
  
        //alert(currentUserrole);


        if(currentUserrole == 'admin') {
          return <button
            className="btn btn-primary" 
            onClick={onClick}><i class="fa-solid fa-pen"></i></button>;
         
        }
        else {
          return <button
            className="btn btn-primary" 
           disabled="true"
            onClick={onClick}><i class="fa-solid fa-pen"></i></button>;
        }
      },
    },
    {
      field: 'delete',
      headerName: 'Delete',
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
    
          //return alert(JSON.stringify(thisRow, null, 4));

          axios
          .delete(`http://localhost:8000/accounts/delete/${thisRow.id}`,
            {
              auth: {
                username: username,
                password: password
              }
            }
          )
          .then(() => {
            getData();
            //alert("anu");
            //navigate("/account/read");
            window.location.reload();
          });
        };
        if(currentUserrole == 'admin'||currentUserrole=='staff') {
        return <button
          className="btn btn-danger" 
          onClick={onClick}><i class="fa-solid fa-trash"></i></button>;
        }
        else{
          return <button
          className="btn btn-danger" 
          disabled="true"
          onClick={onClick}><i class="fa-solid fa-trash"></i></button>;
        }
      },
    },
  ];  


  function createRows(rowDatas) {
    //alert(rowDatas.length);

    let editButton = <button></button>;  

    rowDatas.map(rowData => {
      //alert(rowData.id);
      setUserDataRows( userDataRows => [
        ...userDataRows,
        {'id':rowData.id, 'name':rowData.Name, 'email':rowData.email, 'date_birth':rowData.date_birth, 'userRole':rowData.userRole, 
        'address':rowData.address},
      ]);

    })
  }

  function getData() {
    // alert("anu");
    axios
      .get("http://127.0.0.1:8000/accounts/register/",
        {
          auth: {
            username: username,
            password: password
          }
        },
        {
          'param': 'anu' 
        }
      )
      .then((res) => {
        // alert(res.data.length);
        setData(res.data);
        createRows(res.data);
      });
  }

  function handleDelete(id) {
    axios
    .delete(`http://localhost:8000/accounts/delete/${id}`,
      {
        auth: {
          username: username,
          password: password
        }
      }
    )
    .then(() => {
      getData();
    });
  }

  const navigateToCreatePage = () => {
    navigate("/account/create/new/new");
  };

  useEffect(() => {
    //console.log('i fire once');
    if(window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
      getData();
    }
    else{
      navigate("/");
    }
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
      <SideBar> 
      <Navbar/> 
      <div style={{ height: 700, width: '100%' ,backgroundImage: `url("https://img.freepik.com/free-vector/abstract-white-gold-background_23-2149290000.jpg?size=626&ext=jpg&ga=GA1.1.1508111170.1671688676")`}}>
        <h4>DataGrid</h4>
        <button align='right'
          disabled={ currentUserrole==="staff"|| currentUserrole==="operator" ? true : false}
          onClick={navigateToCreatePage} 
          className="btn btn-success">Create</button>
        {/* <DataGrid rows={userDataRows} columns={userDataColumns} pageSize={10} components={{ Toolbar: CustomToolbar }}/>
        */}
       
        <DataGrid
          rows={userDataRows}
          columns={userDataColumns}
          components={{ Toolbar: GridToolbar}}
        />
      
      </div>
      </SideBar>
    </>
  );
};

export default ReadDataGrid;