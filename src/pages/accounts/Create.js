import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../components/Navigation/Navbar';
// import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
const Create = () => {
  var warningDIV = <div className="alert alert-success pt-4" role="alert">
  <h5>Input all the values</h5>
</div>  


  const [id, setId] = useState(0);
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date_birth, setDob] = useState(new Date());
  const [userRole, setUserRole] = useState("");
  const [address, setAddress] = useState("");
  // const [pass,setPassword]=useState("");
  const[warningmessage,setWarningmessage]=useState("");

  ///   For navigate function
  const navigate = useNavigate();
  const {uniqueID}=useParams();
  ////    for receiving the parameters from URL
  const { operation } = useParams();
  var username = window.localStorage.getItem('username')
  var password = window.localStorage.getItem('password')
  var currentUserrole = window.localStorage.getItem('userrole')
  ////  Fetch data from local storage


  function getAccountEditRequestData(){
    var accountEditID= uniqueID;
  alert(accountEditID)
    axios
      .get("http://localhost:8000/accounts/register/"+accountEditID+"/",
      {
        auth: {
          username: username,
          password: password
       }
      },
      {
        'param': 'vbc' 
      }
      )
      .then((res)=>{
  
        setId(res.data[0].id);
      
        setName(res.data[0].Name);
        
        setEmail(res.data[0].email);

        setDob(res.data[0].date_birth);
        setUserRole(res.data[0].userRole);
        setAddress(res.data[0].address);

  
  
  
      })
  
  
  }

  useEffect(() => {
    if(operation === 'edit') {
      getAccountEditRequestData()
      // setId(localStorage.getItem("id"));
      // setName(localStorage.getItem("Name"));
      // setEmail(localStorage.getItem("email"));
      // setDob(localStorage.getItem("date_birth"));
      // setUserRole(localStorage.getItem("userRole"));
      // setAddress(localStorage.getItem("address"));
      // setPassword(localStorage.getItem("pass"));
    }
  }, []);

  if(operation === 'new') {
    var nameFieldWidget = <input
          type="text"
          className="form-control "
          onChange={(e) => setName(e.target.value)}
        /> 

    var emailFieldWidget = <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />

    var DOBwidget = <input
          type="date"
          className="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setDob(e.target.value)}
        />

    var userRoleWidget =           
      <select class="form-select" aria-label="Default select example" onChange={(e) => setUserRole(e.target.value)}>
        <option value="admin">Select</option>
        <option value="admin">Admin</option>
        <option value="operator">Operator</option>
        <option value="staff">Staff</option>
      </select>

    var addressWidget = 
      <textarea onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
    // var passFieldWidget = <input
    //   type="password"
    //   className="form-control"
    
    //   onChange={(e) => setPassword(e.target.value)}
    // />
      
  }
  else if(operation === 'edit') {
    var nameFieldWidget = <input
          type="text"
          className="form-control"
          value = {Name}
          onChange={(e) => setName(e.target.value)}
        />

    var emailFieldWidget = <input
        type="email"
        className="form-control"
        value={email}
        aria-describedby="emailHelp"
        onChange={(e) => setEmail(e.target.value)}
      />
    
    var DOBwidget = <input
        type="date"
        className="form-control"
        value={date_birth}
        aria-describedby="emailHelp"
        onChange={(e) => setDob(e.target.value)}
      />
    
    var userRoleWidget =           
      <select value={userRole} class="form-select" aria-label="Default select example" onChange={(e) => setUserRole(e.target.value)}>
       <option value="admin">Select</option>
        <option value="admin">Admin</option>
        <option value="operator">Operator</option>
        <option value="staff">Staff</option>
      </select>
    
    var addressWidget = 
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
    // var passFieldWidget = <input
    //   type="password"
    //   className="form-control"
    // value={pass}
    //   onChange={(e) => setPassword(e.target.value)}
    // />
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    var accountEditID= uniqueID;
  
    //alert(address);

    var testPassed = "false";
    if(Name!=""){
      testPassed="true"

    }
    else {
      warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Name</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";
    }
    if(testPassed == "true"){
      if(email!=""){
        testPassed ="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  email</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(date_birth!=""){
        testPassed="true"
      }
      else{
        warningDIV =<div className="alert alert-danger pt-4" role="alert">
          <h5>Input  date_birth</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }
    if(testPassed == "true"){
      if(address!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  Address</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      }
    }

    if(testPassed == "true"){
      if(userRole!=""){
        testPassed="true"
      }
      else{
        warningDIV =  <div className="alert alert-danger pt-4" role="alert">
          <h5>Input  userRole</h5>
        </div>

      setWarningmessage(warningDIV);
      testPassed = "false";

      } 
    }
    
    if(testPassed == "true"){
    if(operation === 'new') {
      axios
        .post('http://127.0.0.1:8000/accounts/register/', 
        {
          "Name": Name,    
          "email": email, 
          "date_birth" :date_birth,  
          "userRole": userRole,
          "address": address,
          // "password":pass
        },
        {
          auth: {
            username: username,
            password: password
          }
        }
        )
        .then(() => {
          navigate("/account/readDataGrid");
        });
        
    }
    else if(operation === 'edit') {
      axios
        .put(`http://localhost:8000/accounts/update/${accountEditID}`, 
        
        {
          "Name": Name,    
          "email": email,  
          "date_birth" : date_birth,  
          "userRole" : userRole,
          "address" : address,
          // "password":pass
        },
        {
          auth: {
            username: username,
            password: password
          }
        }
        )
        .then(() => {
          navigate("/account/readDataGrid");
        });
    }
  };
}

  return (
    <>
    {/* <Navbar data= {window.localStorage.getItem('username') ? window.localStorage.getItem('username') : ""}/>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/account/readdatgrid">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      {warningmessage}
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          {nameFieldWidget}
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          {emailFieldWidget}
        </div>

         <div className="mb-4">
          <label className="form-label">Date of Birth</label>
          {DOBwidget}
        </div>

        <div className="mb-4">
          <label className="form-label">User role</label>
          {userRoleWidget}
        </div>

        <div className="mb-4">
          <label className="form-label">Address</label>
          {addressWidget}
        </div> 
        {/* <div className="mb-4">
          <label className="form-label">Password</label>
          {passFieldWidget}
        </div>  */}

        {/* <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>  */}
    <SideBar>
       <Navbar data= {window.localStorage.getItem('username') ? window.localStorage.getItem('username') : ""}/> 
                          
                          <br/>
                          <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/account/readDataGrid">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
                      
                          <div class="container">
                              <div class="row">
                                  {/* <div class="col-2">
                                      <Sidebar />
                                  </div> */}
                                  <div class="col-12">
                      
                                  <div className="d-flex justify-content-between m-2">
                            <h2>Product</h2>
                          </div>
                          {warningmessage}
                      
                      
                      <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                      <tbody>
                      <tr>
                      <td class="productionOrderReportSearchTD">Name</td>
                      <td class="productionOrderReportSearchTD">
                      {nameFieldWidget}
                      </td>
                      </tr>
                      
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">Email address</td>
                      <td class="productionOrderReportSearchTD">
                      {emailFieldWidget}
                      </td>
                      </tr>
                      <tr>
                      <td class="productionOrderReportSearchTD">Date of Birth</td>
                      <td class="productionOrderReportSearchTD">
                      {DOBwidget}
                      </td>
                      </tr>
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">User role</td>
                      <td class="productionOrderReportSearchTD">
                      {userRoleWidget}
                      </td>
                      </tr>
                      <tr>
                      <td class="productionOrderReportSearchTD">Address</td>
                      <td class="productionOrderReportSearchTD">
                      {addressWidget}
                      </td>
                      </tr>
                      {/* <tr>
                      <td class="productionOrderReportSearchTD">Password</td>
                      <td class="productionOrderReportSearchTD">
                      {passFieldWidget}
                      </td>
                      </tr> */}
                      
                      
                      
                      
                      
                      
                      <tr>
                      <td class="productionOrderReportSearchTD">
                      <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
               
                      </td>
                      </tr>
                      </tbody>
                      </table>
                      
                                  </div>
                              </div>
                          </div>
                          </SideBar>
    </>
  );
};

export default Create;
