import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import * as  MdIcons from "react-icons/md";
import { DataGrid, GridToolbar, GridApi, GridCellValue, GridToolbarContainer, GridToolbarColumnsButton, 
GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@material-ui/data-grid';
import axios from "axios";
import Sidebar from '../../../components/Sidnav/Sidebar';
import { Box,useTheme  } from "@mui/material";
import { tokens } from "../../../theme";
import { MdAddLink } from 'react-icons/md';
const GtinDataGrid=(props)=> {

const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [data, setData] = useState([]);
const [tabledark, setTableDark] = useState("");
                  
const [userDataRows, setUserDataRows] = useState([]);

const[selectedDIV_state,setSelectedDIV_state] =useState("");

const[gtindata,setGtinData]=useState("");

                  
                    ///   For navigate function
 const navigate = useNavigate();                

  let userDataColumns= [
                { field: 'id', headerName: 'Id', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
                { field: 'gtin', headerName: 'Gtin', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
                { field: 'quantity', headerName: 'Available Quantity', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
                //{ field: 'available_quantity', headerName: 'Available Quantity', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
                { field: 'minimum_quantity', headerName: 'Minimum Quantity', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
                { field: 'renewal_quantity', headerName: 'renewal quantity', width:200,headerClassName: "MuiDataGrid-columnHeaders", },
               
                    

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
                            
                          navigate("/gtin/edit/"+ thisRow.id);
                              
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
                                        .delete(window.url+`/master/gtin/delete/${thisRow.id}`,
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
 ]

 
//  let gtinoptions=[]
//  function getGtinData(){
//   axios
//   .get("http://127.0.0.1:8000/master/product/")
//   .then((res)=>{
// res.data.map(data =>{
//   gtinoptions.push({value:data.id,label:data.gtin_number})
  
// })
// setGtinData(gtinoptions)
//   })
// }
// const getGtin = event =>{
//   setGtinData(event.value)  
// }


//   function createRows (rowdatas){
//         let temparray =[] 
//               rowdatas.map(rowdata =>{

               
               
//                     temparray.push({'id':rowdata.id,'gtin':{gtindata},'available_quantity':rowdata.available_quantity,
//                                 "minimum_quantity":rowdata.minimum_quantity,"renewal_quantity":rowdata.renewal_quantity})
//                     })
                


//         setSelectedDIV_state(
//                 <DataGrid
//                   rows={temparray}
//                   columns={userDataColumns}
//                   components={{ Toolbar: GridToolbar}}
//                 />
//         )
//       }
function createRows(rowDatas) {
      let temparray=[]            
  //  alert(customer_id);                
rowDatas.map(rowData => {   
  // alert(rowData.gtin) 

  temparray.push({
    'id':rowData.id,
  // 'gtin':rowdata.gtin,
  'gtin':rowData.gtin,
  //'available_quantity':rowdata.available_quantity,
  "minimum_quantity":rowData.minimum_quantity,
  "renewal_quantity":rowData.renewal_quantity,
  "quantity":rowData.snnumbers
  })
})

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
     rows={temparray}
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


function getData(){
 
    axios
        .get(window.url+"/master/gtin/")

            .then((res)=>{
             

                  // alert(res2.data[0].gtin_number)
                 setData(res.data);
                  createRows(res.data)
        } )  
      }

const navigateToCreatePage =()=>{
  navigate("/gtin/new/new")
}

useEffect(()=>{
  getData();
},[])

function handleDelete(id) {
  axios
    .delete(window.url+`/master/gtin/${id}`,
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
        <div class="container" id="gtindatagrid">
          <div class="row">
            <div class="col-10">
              <div className="spinner-container">
                <div className="loading-spinner">
                </div>
              </div>

              <div className="prod1"  style={{ height: 590,width:1200 }}>
                <div id="prod1">
                <h3>Gtin Serial Pool</h3>
                </div>
               
                <Box m="20px">
                  <Box display="flex" justifyContent="space-between" alignItems="center">
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
                  <div id="prod1">
                    <button align=''
                        
                        onClick={navigateToCreatePage} 
                            className="btn btn-success">Create</button>
                    </div>
 
              {selectedDIV_state}
           
                 
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

export default GtinDataGrid
