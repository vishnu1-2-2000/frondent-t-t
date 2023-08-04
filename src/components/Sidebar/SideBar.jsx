// import { NavLink } from "react-router-dom";
// import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import SidebarMenu from "./SidebarMenu";
// import * as RiIcons from "react-icons/ri";
// import * as  IoIcons from "react-icons/io";
// import * as  AiIcons from "react-icons/ai";
// import { BsFillBarChartFill } from "react-icons/bs";
// import {BsFileEarmarkLockFill } from "react-icons/bs";
// import { HiDesktopComputer } from "react-icons/hi";
// import { AiTwotoneShop } from "react-icons/ai";

// import * as BiIcons from "react-icons/bi";



// const routes = [
//   {
//     path: "/",
//     name: <h4>Administration</h4>,
//   },
  
//   {
//     path: "/registeredusers",
//     name: "Users",
//     icon: <FaUser />,
//   },
//   {
//     path: "/account/userpermission",
//     name: "Roles",
//     icon: <FaLock />,
//   },
//   {
//     path: "/settings/billing",
//     name: "Serial Number Provider",
//     icon: <FaMoneyBill />,
//   },
//   {
//     path: "/settings/billing",
//     name: "History",
//     icon: <FaMoneyBill />,
//   },
//   {
//     path: "/settings/billing",
//     name: "Backup",
//     icon: <FaMoneyBill />,
//   },

//   {
//     path: "/file-manager",
//     name: <h4>Serialization</h4>,
    
    
//   },
//   {
//     path: "/dashboard/dashboard",
//     name: "Dashboard ",
//     icon: <FaUser />,
//   },
//   {
//     path: "/productionorder",
//     name: "Production Order",
//     icon: <FaLock />,
    
//   },
//   {
//     path: "/stock/stockdatagrid/",
//     name: "Stock",
//     icon: <FaMoneyBill />,
//   },
//   {
//     path: "/shippo/shippodatagrid",
//     name: "Shipping Order",
//     icon: <FaMoneyBill />,
//   },
  
//   {
//     path: "/settings/billing",
//     name: "Reconciliation",
//     icon: <FaMoneyBill />,
//     },
//     {
//       path: "/file-manager",
//       name: <h4>MasterData</h4>,
      
      
//     },

//   {
//     path: "/settings/profile",
//     name: "Barcode ",
//     icon: <FaUser />,
//   },
  
//   {
//     path: "/company/comdatagrid",
//     name: "Company",
//     icon: <FaLock />,
//   },
  
//   {
//     path: "/product/productdatagrid",
//     name: "Product",
//     icon: <FaMoneyBill />,
//   },
  
//   {
//     path: "/customer/cusdatagrid",
//     name: "Customers",
//     icon: <FaMoneyBill />,
//   },
  
//   {
//     path: "/customerlocation/cuslocdatagrid/",
//     name: "Locations",
//     icon: <FaMoneyBill />,
//   },

//   {
//     path: "/file-manager",
//     name: <h4>Productionline</h4>,
    
    
//   },
//   {
//     path: "/manufacture/manudatagrid",
//     name: "Manufacturing Locations",
//     icon: <FaLock />,
//   },
//   {
//     path: "/regsystem/regsystemdatagrid",
//     name: "Registered System ",
//     icon: <FaUser />,
//   },
  
// ];


// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     show: {
//       width: "140px",
//       padding: "5px 15px",
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? "240px" : "65px",

//             transition: {
//               duration: 0.5,
//               type: "spring",
//               damping: 10,
//             },
//           }}
//           className={`sidebar `}
//         >
//           <div className="top_section">
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.h1
//                   variants={showAnimation}
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   className="logo"
//                 >
                  
//                 </motion.h1>
//               )}
//             </AnimatePresence>

//             <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//           </div>
//           <div className="search">
//             <div className="search_icon">
//               <BiSearch />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   type="text"
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence>
//           </div>
//           <section className="routes">
//             {routes.map((route, index) => {
//               if (route.subRoutes) {
//                 return (
//                   <SidebarMenu
//                     setIsOpen={setIsOpen}
//                     route={route}
//                     showAnimation={showAnimation}
//                     isOpen={isOpen}
//                   />
//                 );
//               }

//               return (
//                 <NavLink
//                   to={route.path}
//                   key={index}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div className="icon">{route.icon}</div>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         variants={showAnimation}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="link_text"
//                       >
//                         {route.name}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </NavLink>
//               );
//             })}
//           </section>
//         </motion.div>

//         <main>{children}</main>
//       </div>
//     </>
//   );
// };

// export default SideBar;

