import "./App.css";
//import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Login from "./pages/accounts/Login";
import UserrolePermissions from "./pages/accounts/UserrolePermissions";

import Permission from "./pages/accounts/Permission";

import RegisteredUsers from "./pages/RegisteredUsers/RegisteredUsers";
import RegisteredUserscreate from "./pages/RegisteredUsers/RegisteredUserscreate";

import Productionorder from "./pages/Productionorder/Productionorder";
import ProductionorderCreate from "./pages/Productionorder/ProductionorderCreate";
import PoPropertys from "./pages/Productionorder/PoPropertys";
import Identifiers from "./pages/Productionorder/Identifiers";
import PoHrf from "./pages/Productionorder/PoHrf";
import PoView from "./pages/Productionorder/PoView";

//import UserDataGrid from "./pages/RegisteredUsers/sections/UserDataGrid";
import ShippingOrder from "./pages/ShippingOrder/ShippingOrder";
import ShippingCreate from "./pages/ShippingOrder/ShippingCreate";
// import ShippingProperties from "./pages/ShippingOrder/ShippingProperties";
import Property from "./pages/ShippingOrder/Property";
import XMLExport from "./pages/ShippingOrder/XMLExport";
import ShippoDataGrid from "./pages/ShippingOrder/sections/ShippoDataGrid";
import ShipmentdataEntry from "./pages/ShippingOrder/ShipmentdataEntry";
import Commissioningxml from "./pages/ShippingOrder/Commissioningxml";
import Destroyxml from "./pages/ShippingOrder/Destroyxml";
import ExportXmldata from "./pages/ShippingOrder/ExportXmldata";

import Stock from "./pages/Stock/Stock";

import Company from "./pages/Company/Company";
import CompanyCreate from "./pages/Company/CompanyCreate";
import CompanyProperty from "./pages/Company/sections/CompanyProperty";
import TracelinkCreate from "./pages/Company/TracelinkCreate";
import ErpCreate from "./pages/Company/ErpCreate";
import CompanyPropertyCreate from "./pages/Company/CompanyPropertyCreate";

import Customer from "./pages/Customers/Customer";
import CustomerCreate from "./pages/Customers/CustomerCreate";
import Tracelink from "./pages/Customers/Tracelink";
import Customerproperty from "./pages/Customers/Customerproperty";

import CustomerLocation from "./pages/CustomerLocations/CustomerLocation";
import CustomerLocationCreate from "./pages/CustomerLocations/CustomerLocationCreate";
import LocationPropertys from "./pages/CustomerLocations/LocationPropertys";

import Product from "./pages/Products/Product";
import ProductCreate from "./pages/Products/ProductCreate";
import ProductProperty from "./pages/Products/ProductProperty";
import ProductErp from "./pages/Products/ProductErp";
import ProductHrf from "./pages/Products/ProductHrf";

import ManufacturingLocation from "./pages/ManufacturingLocations/ManufacturingLocation";
import ManufactCreate from "./pages/ManufacturingLocations/ManufactCreate";

import RegisteredSystem from "./pages/RegisteredSystem/RegisteredSystem";
import RegSystemCreate from "./pages/RegisteredSystem/RegSystemCreate";

import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Demo from "./pages/Customers/Demo";
import AuditReport from "./pages/Auditreport/Auditreport";
import ShippingAuditreport from "./pages/Auditreport/sections/ShippingAuditreport";
import UserAuditReport from "./pages/Auditreport/sections/UserAuditReport";

import Dashboard from "./pages/Dashboard/Dashboard";

import Provider from "./pages/SerialnumberProvider/Provider";
import ProviderCreate from "./pages/SerialnumberProvider/ProviderCreate";
import GtinRead from "./pages/SerialnumberProvider/GtinRead";
import Gtin from "./pages/SerialnumberProvider/Gtin";

import Printerdata from "./pages/PrinterTableData/Printerdata";
import PrinterdataRead from "./pages/PrinterTableData/PrinterdataRead";

import Downloadcodes from "./pages/Productionorder/sections/Downloadcodes";


// import ShippingReport from "./pages/ShippingReport/ShippingReport";
import ShippingReportPage from "./pages/ShippingReport/ShippingReportPage";
import Productionreport from "./pages/ProductionReport/Productionreport";

import Trash from "./pages/Trash/Trash";
import ProductionOrderTrash from "./pages/Trash/sections/ProductionorderTrash/ProductionOrderTrash";
import CustomerTrash from "./pages/Trash/sections/CustomerTrash/CustomerTrash";
import CompanyTrash from "./pages/Trash/sections/CompanyTrash/CompanyTrash";
import ProductTrash from "./pages/Trash/sections/ProductTrash/ProductTrash";
import RegisteredUsersTrash from "./pages/Trash/sections/RegisteredUsersTrash/RegisteredUsersTrash";
import LocationTrash from "./pages/Trash/sections/LocationTrash/LocationTrash";
import HistoryTrash from "./pages/Trash/sections/HistoryTrash/HistoryTrash";
import ShippoTrash from "./pages/Trash/sections/Shippotrash/Shippotrash";
import ManufacturingLocationTrash from "./pages/Trash/sections/ManufacturinglocationTrash/ManufacturingLocationTrash";
import ProductionlineTrash from "./pages/Trash/sections/ProductionlineTrash/ProductionlineTrash";



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account/userpermission" element={<Permission />} />

        <Route path="/registeredusers" element={<RegisteredUsers />} />
        <Route path="registeredusers/:operation/:uniqueID/" element={<RegisteredUserscreate />} />


        <Route path="/productionorder" element={<Productionorder />} />
        <Route path="productionorder/:operation/:uniqueID/" element={<ProductionorderCreate />} />
        <Route path="/productionorder/property/:uniqueID" element={<PoPropertys/>} /> 
        <Route path="/productionorder/identifier" element={<Identifiers/>} />
        <Route path="/productionorder/hrf/:uniqueID" element={<PoHrf />} />
        <Route path="/productionorder/downloadcodes/:gtin/:processnumber" element={<Downloadcodes />} />
        <Route path="productionorderview/:operation/:uniqueID/" element={<PoView/>} />

        <Route path="/shippingorder/shippocreate/:operation/:uniqueID/:processnumber" element={<ShippingCreate />} />
        <Route path="/shippingorder" element={<ShippingOrder />} />
       
        <Route path="/shippingorder/properties/:uniqueID" element={<Property />} />
        {/* <Route path="/shipping/export/" element={<XMLExport/>} />  */}
        <Route path="/shipping/export/:processnumber/:uniqueID" element={<ExportXmldata/>} /> 
        <Route path="/shipment/export/:process/:uniqueID" element={<ShipmentdataEntry/>} />
        <Route path="/commissioning/export/:processnumber/:uniqueID" element={<Commissioningxml/>} /> 
        <Route path="/destroy/export/:processnumber" element={<Destroyxml/>} />

         <Route path="/stock" element={<Stock />}/> 

         <Route path="/company" element={<Company />}/> 

         <Route path="/company/:operation/:uniqueID/" element={<CompanyCreate />} />
        <Route path="/company/properties/:uniqueID" element={<CompanyPropertyCreate/>} /> 
        <Route path="/company/tracelink/:uniqueID" element={<TracelinkCreate/>} /> 
        <Route path="/company/erpsettings/:uniqueID" element={<ErpCreate/>} />

         <Route path="/customer/cuscreate/:operation/:uniqueID" element={<CustomerCreate />} />
        <Route path="/customer" element={<Customer />} /> 
        <Route path="/customer/tracelink/:uniqueID" element={<Tracelink/>} />
        <Route path="/customer/properties/:uniqueID" element={<Customerproperty/>} />

        <Route path="/customerlocation/cusloccreate/:operation/:uniqueID" element={<CustomerLocationCreate />} />
        <Route path="/customerlocation" element={<CustomerLocation />} />
        <Route path="/customerlocation/property/:uniqueID" element={<LocationPropertys />}/>

        <Route path="/product/productcreate/:operation/:uniqueID" element={<ProductCreate />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/properties/:uniqueID" element={<ProductProperty />} />
        <Route path="/product/erp/:uniqueID" element={<ProductErp />} />
        <Route path="/product/producthrf/:uniqueID" element={<ProductHrf />} />

        <Route path="/manufacture/manucreate/:operation/:uniqueID" element={<ManufactCreate />} />
        <Route path="/manufacturinglocation" element={<ManufacturingLocation />} />

        <Route path="/registeredsystem" element={<RegisteredSystem/>}></Route> 
        <Route exact path="/regsystem/regsystemcreate/:operation/:uniqueID" element={< RegSystemCreate/>}></Route>

        <Route exact path="/home" element={<Home/>}></Route> 

        <Route path="/snprovider" element={<Provider />} />
        <Route path="/snprovider/:operation/:extrafield/" element={<ProviderCreate />} />
        <Route path="/gtinpool" element={<GtinRead/>}></Route> 
        <Route path="/gtin/:operation/:uniqueID/" element={<Gtin />} /> 

        <Route path="/printerpool/:operation/:uniqueID" element={<Printerdata />} />
        <Route path="/printerpool" element={<PrinterdataRead />} />

        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        
        <Route exact path="/demo" element={<Demo/>}></Route>  
        <Route exact path="/history" element={<History/>}></Route>
        <Route exact path="/auditreport" element={<AuditReport/>}></Route>    
        <Route exact path="/shippingauditreport" element={<ShippingAuditreport/>}></Route>    
        <Route exact path="/userauditreport" element={<UserAuditReport/>}></Route>   

        <Route exact path="/shippingreport" element={<ShippingReportPage/>}></Route>
        <Route path="/report/productionorderreport" element={<Productionreport />} />     
        <Route path="*" element={<> not found</>} />

        <Route path="/trash" element={<Trash/>}></Route>
          <Route path="/productionordertrash" element={<ProductionOrderTrash/>}></Route>
          <Route path="/customertrash" element={<CustomerTrash/>}></Route>
          <Route path="/companytrash" element={<CompanyTrash/>}></Route>
          <Route path="/producttrash" element={<ProductTrash/>}></Route>
          <Route path="/registereduserstrash" element={<RegisteredUsersTrash/>}></Route>
          <Route path="/locationtrash" element={<LocationTrash/>}></Route>
          <Route path="/historytrash" element={<HistoryTrash/>}></Route>
          <Route path="/shippotrash" element={<ShippoTrash/>}></Route>
          <Route path="/manufacturinglocationtrash" element={<ManufacturingLocationTrash/>}></Route>
          <Route path="/productionlinetrash" element={<ProductionlineTrash/>}></Route>
        </Routes>
     
    </Router>
  );
}

export default App; 
