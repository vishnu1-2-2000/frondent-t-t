import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Sidebar from "../../components/Sidnav/Sidebar";
// import { SidebarData } from "../../components/SidebarData";
import { Box,useTheme  } from "@mui/material";
import Slider from "./Slider";
import Loading from '../../components/Common/Loading';
function Home() {
                    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);

                    var username = window.localStorage.getItem('loggedInUsername')
                    var password = window.localStorage.getItem('password')
                    const navigate = useNavigate();   
                    //  alert(window.localStorage.getItem('loggedInUsername'))
                    useEffect(() => {     
                          if(window.localStorage.getItem('loggedInUsername')) {
                            setSelectedDIV( window.localStorage.getItem('loggedInUsername'));
                          }
                          
                          
                    else {
                              navigate("/");
                          }
                        }, []);
                    
  return (
    <div className="homepage">
                   <br></br>
                     
                     
 <Box sx={{ display: 'flex' }}> 
          
          <Sidebar/>
          <div id="slider">
                
          <Slider/>
          </div>
         
{/*           
          <div class="card shadow mb-4" id="homepagecard"> 
          <br></br>
          
          <h2>TRACK & TRACE APPLICATION</h2>
          <div id="welcomecontent">
          Welcome {selectedDIV}
          </div>
          
          </div> */}
           
           <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
                    </Box>
           </Box>
          
    </div>
  )
}

export default Home
