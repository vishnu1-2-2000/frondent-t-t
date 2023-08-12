import React, { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiFillHome } from 'react-icons/ai';
import {SiMediamarkt} from 'react-icons/si';
import {GiMedicines} from 'react-icons/gi';
import axios from "axios";
import {FaUserLock} from 'react-icons/fa';



import {FaHistory} from 'react-icons/fa';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import {HiUsers} from 'react-icons/hi';
import {MdDashboard} from 'react-icons/md';
import {FiSend} from 'react-icons/fi';
import {RiStoreFill} from 'react-icons/ri';
import {AiTwotonePropertySafety} from 'react-icons/ai';
import {SiProducthunt} from 'react-icons/si';
import {MdOutlinePersonAddAlt} from 'react-icons/md';
import {RiUserLocationFill} from 'react-icons/ri';
import {MdLocationOn} from "react-icons/md";
import {RiComputerFill} from "react-icons/ri"
import * as  FiIcons from "react-icons/fi"


import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate=useNavigate();
  const [menudata, setMenudata] = useState("Login");
  var loggedInUsername=window.localStorage.getItem('loggedInUsername')

  var loggedInUserrole=window.localStorage.getItem('loggedInUserrole')
  const handleDrawerOpen = () => {
                    setOpen(true);
                  };
function logout() {
  window.localStorage.removeItem('loggedInUsername');

  window.localStorage.removeItem('loggedInUserPassword');

  window.localStorage.removeItem('loggedInUserrole');

 

  axios

  .post('http://127.0.0.1:8000/accounts/logoutController',

  {

    "username": loggedInUsername,    

    "userrole": loggedInUserrole,

  })

  .then((response) => {

      navigate("/");

  })
        } 
                     
  const listStyle3 = {
          background: '#096879',
        
   
          // backgroundImage: `url("https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-your-text-picture_1258-54237.jpg?size=626&ext=jpg&ga=GA1.2.1508111170.1671688676&semt=ais")`,
          color:"#fff"
                  }      
  const listStyle4 = {
    background: '#097279',
          // backgroundColor: '#c33c3c',
          // backgroundImage: `url("https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-your-text-picture_1258-54237.jpg?size=626&ext=jpg&ga=GA1.2.1508111170.1671688676&semt=ais")`,

        
          color:"#fff"
                }    
                
    const listStyle5 = {
            background: '#097966',
            // backgroundImage: `url("https://img.freepik.com/free-photo/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-your-text-picture_1258-54237.jpg?size=626&ext=jpg&ga=GA1.2.1508111170.1671688676&semt=ais")`,
            color:"#fff"
                } 
                               
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       <AppBar id="appbar" position="fixed" open={open}>
       
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          > 
                     
            <MenuIcon />
        
          </IconButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
          <Typography variant="h6" noWrap component="div">
        
          <li className="nav-item1">
     
            <a className="nav-link" >
              Welcome &nbsp;{window.localStorage.getItem('loggedInUsername')}
            </a>
          </li>

          {window.localStorage.getItem('loggedInUsername') ? <li className="logout">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="logout1" 
                type="submit"
                className="btn btn-danger"
                onClick={logout}
              >
                Logout
            </button>
          </li>: ""}
 
            
          </Typography>
       
        </Toolbar>
        
          
      </AppBar>
 
      <Drawer variant="permanent" open={open}  >
        <DrawerHeader >
        <GiMedicines size="1x" color="#014421" />
        <IconButton onClick={()=>{setOpen(!open)}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
         
        </DrawerHeader>
        <Divider />
        <List  id="adminsistraction">
        <ListItemText primary= <h3 id="h3">Administration</h3> sx={{ opacity: open ? 1 : 0 }} />
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <AiFillHome size={30}/>
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            


            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/account/userpermission")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
              <FaUserLock size={30}/>
             </ListItemIcon>
             <ListItemText primary="Role" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
     
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/registeredusers")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <HiUsers size={30}/>
                </ListItemIcon>
                <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/snprovider")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   <FaUserLock size={30}/>
                </ListItemIcon>
                <ListItemText primary="SnProvider" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/history")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
              <FaHistory size= {30}/>
             </ListItemIcon>
             <ListItemText primary="History" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

     </List> 
        
      
        
       
       
      
         
        

     
     {/* <List style={listStyle4}></List> */}
        <List id="serialization">
        <ListItemText primary=<h3 id="h3">Serialization</h3> sx={{ opacity: open ? 1 : 0 }} />
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/productionorder")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
               <MdOutlineProductionQuantityLimits size={30}/>
             </ListItemIcon>
             <ListItemText primary="Productionorder" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/dashboard")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <MdDashboard size={30}/>
             </ListItemIcon>
             <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

        
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/shippingorder")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <FiSend size={30}/>
             </ListItemIcon>
             <ListItemText primary="ShippingOrder" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/stock")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
              <RiStoreFill size={30}/>
             </ListItemIcon>
             <ListItemText primary="Stock" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>


         
        
     </List>
     {/* <List style={listStyle5}> */}
     <List id="masterdata">
        <ListItemText primary=<h3 id="h3">MasterData</h3> sx={{ opacity: open ? 1 : 0 }} />
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/company")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <AiTwotonePropertySafety size={30}/>
             </ListItemIcon>
             <ListItemText primary="Company" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/product")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <SiProducthunt size={30}/>
             </ListItemIcon>
             <ListItemText primary="Product" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
        
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/customer")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <MdOutlinePersonAddAlt size={30}/>
             </ListItemIcon>
             <ListItemText primary="Customers" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/customerlocation")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                 <RiUserLocationFill size={30}/>
             </ListItemIcon>
             <ListItemText primary="CustomerLocations" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>


         
     </List>
     
     {/* <List style={listStyle5}> */}
     <List id="productionline">
        <ListItemText primary=<h3 id="h3">Productionline</h3> sx={{ opacity: open ? 1 : 0 }} />
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/manufacturinglocation")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
               <MdLocationOn size={30}/>
             </ListItemIcon>
             <ListItemText primary="ManufacturingLocation" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
        
        
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/registeredsystem")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                 <RiComputerFill size={30}/>
             </ListItemIcon>
             <ListItemText primary="RegisteredSystem" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

         


         
     </List>
     
    
     <List id="productionline">
        <ListItemText primary=<h3 id="h3">Reports</h3> sx={{ opacity: open ? 1 : 0 }} />
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/auditreport")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <InboxIcon/>
             </ListItemIcon>
             <ListItemText primary="Audit Report" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>
        
        
         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/shippingreport")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <InboxIcon/>
             </ListItemIcon>
             <ListItemText primary="Shipping Report" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

         <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/report/productionorderreport")}}>
           <ListItemButton
             sx={{
               minHeight: 48,
               justifyContent: open ? 'initial' : 'center',
               px: 2.5,
             }}
           >
             <ListItemIcon
               sx={{
                 minWidth: 0,
                 mr: open ? 3 : 'auto',
                 justifyContent: 'center',
               }}
             >
                <InboxIcon/>
             </ListItemIcon>
             <ListItemText primary="Production  Report" sx={{ opacity: open ? 1 : 0 }} />
           </ListItemButton>
         </ListItem>

         

         


         
     </List>

        <Divider />
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
          
      </Box>
    </Box>
  );
}
