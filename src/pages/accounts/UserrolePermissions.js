import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
// import Sidebar from '../Common/Sidebar';
//import Header from '../Common/Header';
import axios from 'axios';

//import Footer from '../Common/Footer';
import Sidebar from '../../components/Sidnav/Sidebar';
import { Box } from '@mui/material';

const UserrolePermissions = () => {

   
    const navigate = useNavigate();

    const [userrole_state, setUserRoleState] = useState("");
    const [permission,setPermission]=useState("");

    const [Registeredusers_read_checked_state, setRegisteredusers_read_checked_state] = useState(false);
    const [Registeredusers_create_checked_state, setRegisteredusers_create_checked_state] = useState(false);
    const [Registeredusers_update_checked_state, setRegisteredusers_update_checked_state] = useState(false);
    const [Registeredusers_delete_checked_state, setRegisteredusers_delete_checked_state] = useState(false);
    
    const [History_read_checked_state, setHistory_read_checked_state] = useState(false);
    const [History_create_checked_state, setHistory_create_checked_state] = useState(false);
    const [History_update_checked_state, setHistory_update_checked_state] = useState(false);
    const [History_delete_checked_state, setHistory_delete_checked_state] = useState(false);

    const [Productionorder_read_checked_state, setProductionorder_read_checked_state] = useState(false);
    const [Productionorder_create_checked_state, setProductionorder_create_checked_state] = useState(false);
    const [Productionorder_update_checked_state, setProductionorder_update_checked_state] = useState(false);
    const [Productionorder_delete_checked_state, setProductionorder_delete_checked_state] = useState(false);


    // const [SendtoShipping_read_checked_state, setSendtoShipping_read_checked_state] = useState(false);
    // const [SendtoShipping_create_checked_state, setSendtoShipping_create_checked_state] = useState(false);
    // const [SendtoShipping_update_checked_state, setSendtoShipping_update_checked_state] = useState(false);
    // const [SendtoShipping_delete_checked_state, setSendtoShipping_delete_checked_state] = useState(false);



    const [ShippingOrder_read_checked_state, setShippingOrder_read_checked_state] = useState(false);
    const [ShippingOrder_create_checked_state, setShippingOrder_create_checked_state] = useState(false);
    const [ShippingOrder_update_checked_state, setShippingOrder_update_checked_state] = useState(false);
    const [ShippingOrder_delete_checked_state, setShippingOrder_delete_checked_state] = useState(false);


    const [Stock_read_checked_state, setStock_read_checked_state] = useState(false);

    const [Company_read_checked_state, setCompany_read_checked_state] = useState(false);
    const [Company_create_checked_state, setCompany_create_checked_state] = useState(false);
    const [Company_update_checked_state, setCompany_update_checked_state] = useState(false);
    const [Company_delete_checked_state, setCompany_delete_checked_state] = useState(false);

    const [Customer_read_checked_state, setCustomer_read_checked_state] = useState(false);
    const [Customer_create_checked_state, setCustomer_create_checked_state] = useState(false);
    const [Customer_update_checked_state, setCustomer_update_checked_state] = useState(false);
    const [Customer_delete_checked_state, setCustomer_delete_checked_state] = useState(false);


    const [CustomerLocation_read_checked_state, setCustomerLocation_read_checked_state] = useState(false);
    const [CustomerLocation_create_checked_state, setCustomerLocation_create_checked_state] = useState(false);
    const [CustomerLocation_update_checked_state, setCustomerLocation_update_checked_state] = useState(false);
    const [CustomerLocation_delete_checked_state, setCustomerLocation_delete_checked_state] = useState(false);


    const [Product_read_checked_state, setProduct_read_checked_state] = useState(false);
    const [Product_create_checked_state, setProduct_create_checked_state] = useState(false);
    const [Product_update_checked_state, setProduct_update_checked_state] = useState(false);
    const [Product_delete_checked_state, setProduct_delete_checked_state] = useState(false);


    const [Manufact_read_checked_state, setManufact_read_checked_state] = useState(false);
    const [Manufact_create_checked_state, setManufact_create_checked_state] = useState(false);
    const [Manufact_update_checked_state, setManufact_update_checked_state] = useState(false);
    const [Manufact_delete_checked_state, setManufact_delete_checked_state] = useState(false);


    const [RegisteredSystem_read_checked_state, setRegisteredSystem_read_checked_state] = useState(false);
    const [RegisteredSystem_create_checked_state, setRegisteredSystem_create_checked_state] = useState(false);
    const [RegisteredSystem_update_checked_state, setRegisteredSystem_update_checked_state] = useState(false);
    const [RegisteredSystem_delete_checked_state, setRegisteredSystem_delete_checked_state] = useState(false);

    const [Dashboard_read_checked_state, setDashboard_read_checked_state] = useState(false);


    const [SnProvider_read_checked_state, setSnProvider_read_checked_state] = useState(false);
    const [SnProvider_create_checked_state, setSnProvider_create_checked_state] = useState(false);
    const [SnProvider_update_checked_state, setSnProvider_update_checked_state] = useState(false);
    const [SnProvider_delete_checked_state, setSnProvider_delete_checked_state] = useState(false);


    const[Gtinpool_read_checked_state,setGtinpool_read_checked_state]=useState(false);
    const[Gtinpool_create_checked_state,setGtinpool_create_checked_state]=useState(false);
    const[Gtinpool_update_checked_state,setGtinpool_update_checked_state]=useState(false);
    const[Gtinpool_delete_checked_state,setGtinpool_delete_checked_state]=useState(false);


    const[Printerpool_read_checked_state,setPrinterpool_read_checked_state]=useState(false);
    const[Printerpool_create_checked_state,setPrinterpool_create_checked_state]=useState(false);
    const[Printerpool_update_checked_state,setPrinterpool_update_checked_state]=useState(false);
    const[Printerpool_delete_checked_state,setPrinterpool_delete_checked_state]=useState(false);

    const [Auditreport_read_checked_state, setAuditreport_read_checked_state] = useState(false);
    const [Auditreport_create_checked_state, setAuditreport_create_checked_state] = useState(false);
    const [Auditreport_update_checked_state, setAuditreport_update_checked_state] = useState(false);
    const [Auditreport_delete_checked_state, setAuditreport_delete_checked_state] = useState(false);


    const [Shippingreport_read_checked_state, setShippingreport_read_checked_state] = useState(false);
    const [Shippingreport_create_checked_state, setShippingreport_create_checked_state] = useState(false);
    const [Shippingreport_update_checked_state, setShippingreport_update_checked_state] = useState(false);
    const [Shippingreport_delete_checked_state, setShippingreport_delete_checked_state] = useState(false);


    const [Productionreport_read_checked_state, setProductionreport_read_checked_state] = useState(false);
    const [Productionreport_create_checked_state, setProductionreport_create_checked_state] = useState(false);
    const [Productionreport_update_checked_state, setProductionreport_update_checked_state] = useState(false);
    const [Productionreport_delete_checked_state, setProductionreport_delete_checked_state] = useState(false);


    const [Applicationserver_Changepassword_read_checked_state, setApplicationserver_Changepassword_read_checked_state] = useState(false);
    const [Applicationserver_Changepassword_create_checked_state, setApplicationserver_Changepassword_create_checked_state] = useState(false);
    const [Applicationserver_Changepassword_update_checked_state, setApplicationserver_Changepassword_update_checked_state] = useState(false);
    const [Applicationserver_Changepassword_delete_checked_state, setApplicationserver_Changepassword_delete_checked_state] = useState(false);

    const [Inspectiondashboard_read_checked_state, setInspectiondashboard_read_checked_state] = useState(false);

    const [Rework_read_checked_state,setRework_read_checked_state] = useState(false);
    const [Rework_create_checked_state,setRework_create_checked_state] = useState(false);
    const [Rework_delete_checked_state,setRework_delete_checked_state] = useState(false);

    const [Applicationserver_History_read_checked_state, setApplicationserver_History_read_checked_state] = useState(false);
    const [Applicationserver_History_delete_checked_state, setApplicationserver_History_delete_checked_state] = useState(false);

    const [Applicationserver_Backup_read_checked_state, setApplicationserver_Backup_read_checked_state] = useState(false);
    const [Applicationserver_Backup_create_checked_state,setApplicationserver_Backup_create_checked_state] = useState(false);
    const [Applicationserver_Backup_update_checked_state,setApplicationserver_Backup_update_checked_state] = useState(false);
    const [Applicationserver_Backup_delete_checked_state, setApplicationserver_Backup_delete_checked_state] = useState(false);

    const [Manualupload_read_checked_state, setManualupload_read_checked_state] = useState(false);
    const [Manualupload_create_checked_state,setManualupload_create_checked_state] = useState(false);
    const [Manualupload_update_checked_state,setManualupload_update_checked_state] = useState(false);
    const [Manualupload_delete_checked_state, setManualupload_delete_checked_state] = useState(false);

    const [Applicationserver_Report_read_checked_state, setApplicationserver_Report_read_checked_state] = useState(false);

    const [Printerjobs_read_checked_state, setPrinterjobs_read_checked_state] = useState(false);
    const [Printerjobs_create_checked_state,setPrinterjobs_create_checked_state] = useState(false);
    const [Printerjobs_update_checked_state,setPrinterjobs_update_checked_state] = useState(false);
    const [Printerjobs_delete_checked_state, setPrinterjobs_delete_checked_state] = useState(false);

    const [Scannerjobs_read_checked_state, setScannerjobs_read_checked_state] = useState(false);

    const [Sapdata_read_checked_state, setSapdata_read_checked_state] = useState(false);
    const [Sapdata_create_checked_state,setSapdata_create_checked_state] = useState(false);
    const [Sapdata_update_checked_state,setSapdata_update_checked_state] = useState(false);
    const [Sapdata_delete_checked_state, setSapdata_delete_checked_state] = useState(false);


    const [Trash_read_checked_state, setTrash_read_checked_state] = useState(false);
    const [Trash_delete_checked_state, setTrash_delete_checked_state] = useState(false);

    const [Registeredusers_read, setRegisteredusers_read] = useState("");
    const [saveButtonText_state, setSaveButtonText_state] = useState("Save the data");
    const [saveButtonMode_state, setSaveButtonMode_state] = useState(false);


    const [insert, setInsert] = useState("");
    const [update, setUpdate] = useState("");
    const [del, setDel] = useState("");

    function handleEdit() {

        //e.preventDefault();
        //alert(Registeredusers_read);

        //alert(Registeredusers_checked);

        //alert(Registeredusers_create_checked_state);
        if(userrole_state==="")
        {
            alert("Select userrole");
            return;
        }
        setSaveButtonText_state("Saving Data");
        setSaveButtonMode_state(true);
        axios.post(window.url+'/accounts/userPermissionEdit/', { 
            
            userrole : userrole_state,
            Registeredusers_read:Registeredusers_read_checked_state===true ? "Checked" : "Unchecked",
            Registeredusers_create: Registeredusers_create_checked_state === true ? "Checked" : "Unchecked",
            Registeredusers_update: Registeredusers_update_checked_state === true ? "Checked" : "Unchecked",
            Registeredusers_delete: Registeredusers_delete_checked_state === true ? "Checked" : "Unchecked",


            History_read:History_read_checked_state===true ? "Checked" : "Unchecked",
            // History_create: History_create_checked_state === true ? "Checked" : "Unchecked",
            // History_update: History_update_checked_state === true ? "Checked" : "Unchecked",
            History_delete: History_delete_checked_state === true ? "Checked" : "Unchecked",


            Productionorder_read: Productionorder_read_checked_state === true ? "Checked" : "Unchecked",
            Productionorder_create: Productionorder_create_checked_state === true ? "Checked" : "Unchecked",
            Productionorder_update: Productionorder_update_checked_state === true ? "Checked" : "Unchecked",
            Productionorder_delete: Productionorder_delete_checked_state === true ? "Checked" : "Unchecked",

            // SendtoShip_read: SendtoShipping_read_checked_state === true ? "Checked" : "Unchecked",
            // SendtoShip_create: SendtoShipping_create_checked_state === true ? "Checked" : "Unchecked",
            // SendtoShip_update: SendtoShipping_update_checked_state === true ? "Checked" : "Unchecked",
            // SendtoShip_delete: SendtoShipping_delete_checked_state === true ? "Checked" : "Unchecked",


            ShippingOrder_read: ShippingOrder_read_checked_state === true ? "Checked" : "Unchecked",
            ShippingOrder_create: ShippingOrder_create_checked_state === true ? "Checked" : "Unchecked",
            ShippingOrder_update: ShippingOrder_update_checked_state === true ? "Checked" : "Unchecked",
            ShippingOrder_delete: ShippingOrder_delete_checked_state === true ? "Checked" : "Unchecked",

            Stock_read:Stock_read_checked_state ===true ?"Checked" :"Unchecked",

            Company_read: Company_read_checked_state === true ? "Checked" : "Unchecked",
            Company_create: Company_create_checked_state === true ? "Checked" : "Unchecked",
            Company_update: Company_update_checked_state === true ? "Checked" : "Unchecked",
            Company_delete: Company_delete_checked_state === true ? "Checked" : "Unchecked",


            Customer_read: Customer_read_checked_state === true ? "Checked" : "Unchecked",
            Customer_create: Customer_create_checked_state === true ? "Checked" : "Unchecked",
            Customer_update: Customer_update_checked_state === true ? "Checked" : "Unchecked",
            Customer_delete: Customer_delete_checked_state === true ? "Checked" : "Unchecked",


            CustomerLocation_read: CustomerLocation_read_checked_state === true ? "Checked" : "Unchecked",
            CustomerLocation_create: CustomerLocation_create_checked_state === true ? "Checked" : "Unchecked",
            CustomerLocation_update: CustomerLocation_update_checked_state === true ? "Checked" : "Unchecked",
            CustomerLocation_delete: CustomerLocation_delete_checked_state === true ? "Checked" : "Unchecked",

            Product_read: Product_read_checked_state === true ? "Checked" : "Unchecked",
            Product_create: Product_create_checked_state === true ? "Checked" : "Unchecked",
            Product_update: Product_update_checked_state === true ? "Checked" : "Unchecked",
            Product_delete: Product_delete_checked_state === true ? "Checked" : "Unchecked",


            Manufact_read: Manufact_read_checked_state === true ? "Checked" : "Unchecked",
            Manufact_create: Manufact_create_checked_state === true ? "Checked" : "Unchecked",
            Manufact_update: Manufact_update_checked_state === true ? "Checked" : "Unchecked",
            Manufact_delete: Manufact_delete_checked_state === true ? "Checked" : "Unchecked",


            RegisteredSystem_read:  RegisteredSystem_read_checked_state === true ? "Checked" : "Unchecked",
            RegisteredSystem_create:  RegisteredSystem_create_checked_state === true ? "Checked" : "Unchecked",
            RegisteredSystem_update:  RegisteredSystem_update_checked_state === true ? "Checked" : "Unchecked",
            RegisteredSystem_delete:  RegisteredSystem_delete_checked_state === true ? "Checked" : "Unchecked",


            Dashboard_read :Dashboard_read_checked_state ===true ? "Checked":"Unchecked",

            SnProvider_read:   SnProvider_read_checked_state === true ? "Checked" : "Unchecked",
            SnProvider_create:   SnProvider_create_checked_state === true ? "Checked" : "Unchecked",
            SnProvider_update:   SnProvider_update_checked_state === true ? "Checked" : "Unchecked",
            SnProvider_delete:   SnProvider_delete_checked_state === true ? "Checked" : "Unchecked",


            Gtinpool_read:Gtinpool_read_checked_state ===true?"Checked":"Unchecked",
            Gtinpool_create:Gtinpool_create_checked_state ===true?"Checked":"Unchecked",
            Gtinpool_update:Gtinpool_update_checked_state ===true?"Checked":"Unchecked",
            Gtinpool_delete:Gtinpool_delete_checked_state ===true?"Checked":"Unchecked",


            Printerpool_read:Printerpool_read_checked_state ===true?"Checked":"Unchecked",
            Printerpool_create:Printerpool_create_checked_state===true?"Checked":"Unchecked",
            Printerpool_update:Printerpool_update_checked_state===true?"Checked":"Unchecked",
            Printerpool_delete:Printerpool_delete_checked_state===true?"Checked":"Unchecked",


            Auditreport_read:      Auditreport_read_checked_state === true ? "Checked" : "Unchecked",
            Auditreport_create:   Auditreport_create_checked_state === true ? "Checked" : "Unchecked",
            Auditreport_update:   Auditreport_update_checked_state === true ? "Checked" : "Unchecked",
            Auditreport_delete:   Auditreport_delete_checked_state === true ? "Checked" : "Unchecked",


            Shippingreport_read:     Shippingreport_read_checked_state === true ? "Checked" : "Unchecked",
            Shippingreport_create:   Shippingreport_create_checked_state === true ? "Checked" : "Unchecked",
            Shippingreport_update:   Shippingreport_update_checked_state === true ? "Checked" : "Unchecked",
            Shippingreport_delete:   Shippingreport_delete_checked_state === true ? "Checked" : "Unchecked",


            Productionreport_read:     Productionreport_read_checked_state === true ? "Checked" : "Unchecked",
            Productionreport_create:   Productionreport_create_checked_state === true ? "Checked" : "Unchecked",
            Productionreport_update:   Productionreport_update_checked_state === true ? "Checked" : "Unchecked",
            Productionreport_delete:   Productionreport_delete_checked_state === true ? "Checked" : "Unchecked",
            
            Applicationserver_Changepassword_read:     Applicationserver_Changepassword_read_checked_state === true ? "Checked" : "Unchecked",
            Applicationserver_Changepassword_create:   Applicationserver_Changepassword_create_checked_state === true ? "Checked" : "Unchecked",
            Applicationserver_Changepassword_update:   Applicationserver_Changepassword_update_checked_state === true ? "Checked" : "Unchecked",
            Applicationserver_Changepassword_delete:   Applicationserver_Changepassword_delete_checked_state === true ? "Checked" : "Unchecked",


            Inspectiondashboard_read:Inspectiondashboard_read_checked_state=== true ? "Checked" : "Unchecked",

            Rework_read: Rework_read_checked_state === true ? "Checked" : "Unchecked",
            Rework_create: Rework_create_checked_state === true ? "Checked" : "Unchecked",
            Rework_delete:Rework_delete_checked_state === true ? "Checked" : "Unchecked",

            Applicationserver_History_read:Applicationserver_History_read_checked_state=== true ? "Checked" : "Unchecked",
            Applicationserver_History_delete:Applicationserver_History_delete_checked_state=== true ? "Checked" : "Unchecked",

            Applicationserver_Backup_read:Applicationserver_Backup_read_checked_state=== true ? "Checked" : "Unchecked",
            Applicationserver_Backup_create:Applicationserver_Backup_create_checked_state=== true ? "Checked" : "Unchecked",
            Applicationserver_Backup_update:Applicationserver_Backup_update_checked_state=== true ? "Checked" : "Unchecked",
            Applicationserver_Backup_delete:Applicationserver_Backup_delete_checked_state=== true ? "Checked" : "Unchecked",

            Manualupload_read:Manualupload_read_checked_state=== true ? "Checked" : "Unchecked",
            Manualupload_create:Manualupload_create_checked_state=== true ? "Checked" : "Unchecked",
            Manualupload_update:Manualupload_update_checked_state=== true ? "Checked" : "Unchecked",
            Manualupload_delete:Manualupload_delete_checked_state=== true ? "Checked" : "Unchecked",

            Applicationserver_reports_read:Applicationserver_Report_read_checked_state=== true ? "Checked" : "Unchecked",

            Printerjobs_read: Printerjobs_read_checked_state=== true ? "Checked" : "Unchecked",
            Printerjobs_create: Printerjobs_create_checked_state=== true ? "Checked" : "Unchecked",
            Printerjobs_update:Printerjobs_update_checked_state=== true ? "Checked" : "Unchecked",
            Printerjobs_delete:Printerjobs_delete_checked_state=== true ? "Checked" : "Unchecked",

            Scannerjobs_read:Scannerjobs_read_checked_state=== true ? "Checked" : "Unchecked",

            Sapdata_read:Sapdata_read_checked_state===true ? "Checked" : "Unchecked",
            Sapdata_create: Sapdata_create_checked_state === true ? "Checked" : "Unchecked",
            Sapdata_update: Sapdata_update_checked_state === true ? "Checked" : "Unchecked",
            Sapdata_delete: Sapdata_delete_checked_state === true ? "Checked" : "Unchecked",
            

            Trash_read: Trash_read_checked_state === true ? "Checked" : "Unchecked",
            Trash_delete: Trash_delete_checked_state === true ? "Checked" : "Unchecked",
        

        })
        .then((response) => {
            
            setSaveButtonText_state("Save the data");
            setSaveButtonMode_state(false);
        });
    }



    function getPermission(event) {
        //alert(event.target.value)
        setUserRoleState(event.target.value); 
        axios
         .get(window.url+"/accounts/userrolePermissionsRead",
          {
            // auth: {
            //   username: username,
            //   password: password
            // }
          },
          {
            'param': 'anu' 
          })
          .then((res) => {
     
            res.data.map(data => {
               
                if(data['activity_name']==='registeredUsers')
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setRegisteredusers_read_checked_state(true):setRegisteredusers_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setRegisteredusers_create_checked_state(true):setRegisteredusers_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setRegisteredusers_update_checked_state(true):setRegisteredusers_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setRegisteredusers_delete_checked_state(true):setRegisteredusers_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['CREATE']==="Checked" ?setRegisteredusers_create_checked_state(true):setRegisteredusers_create_checked_state(false);
                        data.supervisor['READ']==="Checked" ?setRegisteredusers_read_checked_state(true):setRegisteredusers_read_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ?setRegisteredusers_delete_checked_state(true):setRegisteredusers_delete_checked_state(false);
                        data.supervisor['UPDATE']==="Checked" ?setRegisteredusers_update_checked_state(true):setRegisteredusers_update_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setRegisteredusers_read_checked_state(true):setRegisteredusers_read_checked_state(false);
                        data.masterdata['CREATE']==='Checked' ?setRegisteredusers_create_checked_state(true):setRegisteredusers_create_checked_state(false);
                        data.masterdata['UPDATE']==='Checked' ?setRegisteredusers_update_checked_state(true):setRegisteredusers_update_checked_state(false);
                        data.masterdata['DELETE']==='Checked' ?setRegisteredusers_delete_checked_state(true):setRegisteredusers_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setRegisteredusers_read_checked_state(true):setRegisteredusers_read_checked_state(false);
                        data.operator['CREATE']==='Checked'? setRegisteredusers_create_checked_state(true):setRegisteredusers_create_checked_state(false);
                        data.operator['UPDATE']==='Checked'? setRegisteredusers_update_checked_state(true):setRegisteredusers_update_checked_state(false);
                        data.operator['DELETE']=='Checked'? setRegisteredusers_delete_checked_state(true):setRegisteredusers_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='productionorder')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setProductionorder_read_checked_state(true):setProductionorder_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setProductionorder_create_checked_state(true):setProductionorder_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setProductionorder_update_checked_state(true):setProductionorder_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setProductionorder_delete_checked_state(true):setProductionorder_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setProductionorder_read_checked_state(true):setProductionorder_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setProductionorder_create_checked_state(true):setProductionorder_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setProductionorder_update_checked_state(true):setProductionorder_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setProductionorder_delete_checked_state(true):setProductionorder_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setProductionorder_read_checked_state(true):setProductionorder_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setProductionorder_create_checked_state(true):setProductionorder_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setProductionorder_update_checked_state(true):setProductionorder_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setProductionorder_delete_checked_state(true):setProductionorder_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setProductionorder_read_checked_state(true):setProductionorder_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setProductionorder_create_checked_state(true):setProductionorder_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setProductionorder_update_checked_state(true):setProductionorder_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setProductionorder_delete_checked_state(true):setProductionorder_delete_checked_state(false);
                    }
                }
              

            // else if(data['activity_name'] ==='sendtoshipping')
            //     //alert(data.activity_name)
            //     //alert(data.admin["READ"])
            //     {
            //         if(event.target.value==="admin")
            //         {
            //             data.admin['READ']==="Checked" ? setSendtoShipping_read_checked_state(true):setSendtoShipping_read_checked_state(false);
            //             data.admin['CREATE']==="Checked"?setSendtoShipping_create_checked_state(true):setSendtoShipping_create_checked_state(false);
            //             data.admin['UPDATE']==="Checked"?setSendtoShipping_update_checked_state(true):setSendtoShipping_update_checked_state(false);
            //             data.admin['DELETE']==="Checked"?setSendtoShipping_delete_checked_state(true):setSendtoShipping_delete_checked_state(false);
            //         }
            //          else if(event.target.value==="supervisor")
                    
            //         {
            //             //alert(data.admin['CREATE'])
            //             data.supervisor['READ']==="Checked" ? setSendtoShipping_read_checked_state(true):setSendtoShipping_read_checked_state(false);
            //             data.supervisor['CREATE']==="Checked"?setSendtoShipping_create_checked_state(true):setSendtoShipping_create_checked_state(false);
            //             data.supervisor['UPDATE']==="Checked"?setSendtoShipping_update_checked_state(true):setSendtoShipping_update_checked_state(false);
            //             data.supervisor['DELETE']==="Checked"?setSendtoShipping_delete_checked_state(true):setSendtoShipping_delete_checked_state(false);
            //         }
            //         else if(event.target.value==="masterdata")
            //         {
            //             data.masterdata['READ']==="Checked" ? setSendtoShipping_read_checked_state(true):setSendtoShipping_read_checked_state(false);
            //             data.masterdata['CREATE']==="Checked"?setSendtoShipping_create_checked_state(true):setSendtoShipping_create_checked_state(false);
            //             data.masterdata['UPDATE']==="Checked"?setSendtoShipping_update_checked_state(true):setSendtoShipping_update_checked_state(false);
            //             data.masterdata['DELETE']==="Checked"?setSendtoShipping_delete_checked_state(true):setSendtoShipping_delete_checked_state(false);
            //         }
            //         else if(event.target.value==="operator")
            //         {
            //             data.operator['READ']==="Checked" ? setSendtoShipping_read_checked_state(true):setSendtoShipping_read_checked_state(false);
            //             data.operator['CREATE']==="Checked"?setSendtoShipping_create_checked_state(true):setSendtoShipping_create_checked_state(false);
            //             data.operator['UPDATE']==="Checked"?setSendtoShipping_update_checked_state(true):setSendtoShipping_update_checked_state(false);
            //             data.operator['DELETE']==="Checked"?setSendtoShipping_delete_checked_state(true):setSendtoShipping_delete_checked_state(false);
            //         }
            //     }


            else if(data['activity_name'] ==='shippingorder')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setShippingOrder_read_checked_state(true):setShippingOrder_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setShippingOrder_create_checked_state(true):setShippingOrder_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setShippingOrder_update_checked_state(true):setShippingOrder_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setShippingOrder_delete_checked_state(true):setShippingOrder_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setShippingOrder_read_checked_state(true):setShippingOrder_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setShippingOrder_create_checked_state(true):setShippingOrder_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setShippingOrder_update_checked_state(true):setShippingOrder_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setShippingOrder_delete_checked_state(true):setShippingOrder_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setShippingOrder_read_checked_state(true):setShippingOrder_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setShippingOrder_create_checked_state(true):setShippingOrder_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setShippingOrder_update_checked_state(true):setShippingOrder_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setShippingOrder_delete_checked_state(true):setShippingOrder_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setShippingOrder_read_checked_state(true):setShippingOrder_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setShippingOrder_create_checked_state(true):setShippingOrder_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setShippingOrder_update_checked_state(true):setShippingOrder_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setShippingOrder_delete_checked_state(true):setShippingOrder_delete_checked_state(false);
                    }
                }


            else if(data['activity_name'] ==='stock')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setStock_read_checked_state(true):setStock_read_checked_state(false);
                        
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setStock_read_checked_state(true):setStock_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setStock_read_checked_state(true):setStock_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setStock_read_checked_state(true):setStock_read_checked_state(false);
                       
                    }
                }

                else if(data['activity_name'] ==='company')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setCompany_read_checked_state(true):setCompany_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setCompany_create_checked_state(true):setCompany_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setCompany_update_checked_state(true):setCompany_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setCompany_delete_checked_state(true):setCompany_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setCompany_read_checked_state(true):setCompany_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setCompany_create_checked_state(true):setCompany_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setCompany_update_checked_state(true):setCompany_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setCompany_delete_checked_state(true):setCompany_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setCompany_read_checked_state(true):setCompany_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setCompany_create_checked_state(true):setCompany_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setCompany_update_checked_state(true):setCompany_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setCompany_delete_checked_state(true):setCompany_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setCompany_read_checked_state(true):setCompany_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setCompany_create_checked_state(true):setCompany_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setCompany_update_checked_state(true):setCompany_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setCompany_delete_checked_state(true):setCompany_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='customer')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setCustomer_read_checked_state(true):setCustomer_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setCustomer_create_checked_state(true):setCustomer_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setCustomer_update_checked_state(true):setCustomer_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setCustomer_delete_checked_state(true):setCustomer_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setCustomer_read_checked_state(true):setCustomer_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setCustomer_create_checked_state(true):setCustomer_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setCustomer_update_checked_state(true):setCustomer_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setCustomer_delete_checked_state(true):setCustomer_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setCustomer_read_checked_state(true):setCustomer_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setCustomer_create_checked_state(true):setCustomer_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setCustomer_update_checked_state(true):setCustomer_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setCustomer_delete_checked_state(true):setCustomer_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setCustomer_read_checked_state(true):setCustomer_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setCustomer_create_checked_state(true):setCustomer_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setCustomer_update_checked_state(true):setCustomer_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setCustomer_delete_checked_state(true):setCustomer_delete_checked_state(false);
                    }
                }


                else if(data['activity_name'] ==='product')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setProduct_read_checked_state(true):setProduct_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setProduct_create_checked_state(true):setProduct_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setProduct_update_checked_state(true):setProduct_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setProduct_delete_checked_state(true):setProduct_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setProduct_read_checked_state(true):setProduct_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setProduct_create_checked_state(true):setProduct_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setProduct_update_checked_state(true):setProduct_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setProduct_delete_checked_state(true):setProduct_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setProduct_read_checked_state(true):setProduct_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setProduct_create_checked_state(true):setProduct_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setProduct_update_checked_state(true):setProduct_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setProduct_delete_checked_state(true):setProduct_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setProduct_read_checked_state(true):setProduct_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setProduct_create_checked_state(true):setProduct_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setProduct_update_checked_state(true):setProduct_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setProduct_delete_checked_state(true):setProduct_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='customerlocation')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setCustomerLocation_read_checked_state(true):setCustomerLocation_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setCustomerLocation_create_checked_state(true):setCustomerLocation_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setCustomerLocation_update_checked_state(true):setCustomerLocation_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setCustomerLocation_delete_checked_state(true):setCustomerLocation_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setCustomerLocation_read_checked_state(true):setCustomerLocation_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setCustomerLocation_create_checked_state(true):setCustomerLocation_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setCustomerLocation_update_checked_state(true):setCustomerLocation_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setCustomerLocation_delete_checked_state(true):setCustomerLocation_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setCustomerLocation_read_checked_state(true):setCustomerLocation_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setCustomerLocation_create_checked_state(true):setCustomerLocation_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setCustomerLocation_update_checked_state(true):setCustomerLocation_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setCustomerLocation_delete_checked_state(true):setCustomerLocation_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setCustomerLocation_read_checked_state(true):setCustomerLocation_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setCustomerLocation_create_checked_state(true):setCustomerLocation_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setCustomerLocation_update_checked_state(true):setCustomerLocation_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setCustomerLocation_delete_checked_state(true):setCustomerLocation_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='manufacturinglocation')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setManufact_read_checked_state(true):setManufact_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setManufact_create_checked_state(true):setManufact_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setManufact_update_checked_state(true):setManufact_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setManufact_delete_checked_state(true):setManufact_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setManufact_read_checked_state(true):setManufact_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setManufact_create_checked_state(true):setManufact_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setManufact_update_checked_state(true):setManufact_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setManufact_delete_checked_state(true):setManufact_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setManufact_read_checked_state(true):setManufact_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setManufact_create_checked_state(true):setManufact_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setManufact_update_checked_state(true):setManufact_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setManufact_delete_checked_state(true):setManufact_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setManufact_read_checked_state(true):setManufact_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setManufact_create_checked_state(true):setManufact_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setManufact_update_checked_state(true):setManufact_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setManufact_delete_checked_state(true):setManufact_delete_checked_state(false);
                    }
                }


                else if(data['activity_name'] ==='registeredsystem')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setRegisteredSystem_read_checked_state(true):setRegisteredSystem_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setRegisteredSystem_create_checked_state(true):setRegisteredSystem_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setRegisteredSystem_update_checked_state(true):setRegisteredSystem_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setRegisteredSystem_delete_checked_state(true):setRegisteredSystem_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setRegisteredSystem_read_checked_state(true):setRegisteredSystem_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setRegisteredSystem_create_checked_state(true):setRegisteredSystem_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setRegisteredSystem_update_checked_state(true):setRegisteredSystem_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setRegisteredSystem_delete_checked_state(true):setRegisteredSystem_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setRegisteredSystem_read_checked_state(true):setRegisteredSystem_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setRegisteredSystem_create_checked_state(true):setRegisteredSystem_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setRegisteredSystem_update_checked_state(true):setRegisteredSystem_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setRegisteredSystem_delete_checked_state(true):setRegisteredSystem_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setRegisteredSystem_read_checked_state(true):setRegisteredSystem_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setRegisteredSystem_create_checked_state(true):setRegisteredSystem_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setRegisteredSystem_update_checked_state(true):setRegisteredSystem_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setRegisteredSystem_delete_checked_state(true):setRegisteredSystem_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='history')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setHistory_read_checked_state(true):setHistory_read_checked_state(false);
                       
                        data.admin['DELETE']==="Checked"?setHistory_delete_checked_state(true):setHistory_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setHistory_read_checked_state(true):setHistory_read_checked_state(false);
                        
                        data.supervisor['DELETE']==="Checked"?setHistory_delete_checked_state(true):setHistory_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setHistory_read_checked_state(true):setHistory_read_checked_state(false);
                        
                        data.masterdata['DELETE']==="Checked"?setHistory_delete_checked_state(true):setHistory_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setHistory_read_checked_state(true):setHistory_read_checked_state(false);
                        
                        data.operator['DELETE']==="Checked"?setHistory_delete_checked_state(true):setHistory_delete_checked_state(false);
                    }
                }

                else if(data['activity_name'] ==='dashboard')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setDashboard_read_checked_state(true):setDashboard_read_checked_state(false);
                        
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setDashboard_read_checked_state(true):setDashboard_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setDashboard_read_checked_state(true):setDashboard_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setDashboard_read_checked_state(true):setDashboard_read_checked_state(false);
                       
                    }
                }

                else if(data['activity_name'] ==='snprovider')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setSnProvider_read_checked_state(true):setSnProvider_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setSnProvider_create_checked_state(true):setSnProvider_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setSnProvider_update_checked_state(true):setSnProvider_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setSnProvider_delete_checked_state(true):setSnProvider_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setSnProvider_read_checked_state(true):setSnProvider_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setSnProvider_create_checked_state(true):setSnProvider_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setSnProvider_update_checked_state(true):setSnProvider_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setSnProvider_delete_checked_state(true):setSnProvider_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setSnProvider_read_checked_state(true):setSnProvider_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setSnProvider_create_checked_state(true):setSnProvider_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setSnProvider_update_checked_state(true):setSnProvider_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setSnProvider_delete_checked_state(true):setSnProvider_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setSnProvider_read_checked_state(true):setSnProvider_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setSnProvider_create_checked_state(true):setSnProvider_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setSnProvider_update_checked_state(true):setSnProvider_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setSnProvider_delete_checked_state(true):setSnProvider_delete_checked_state(false);
                    }
                }



                else if(data['activity_name'] ==="gtinpool"){
                    if(event.target.value ==='admin'){
                        data.admin['READ']==="Checked"?setGtinpool_read_checked_state(true):setGtinpool_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setGtinpool_create_checked_state(true):setGtinpool_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setGtinpool_update_checked_state(true):setGtinpool_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setGtinpool_delete_checked_state(true):setGtinpool_delete_checked_state(false);

                    }

                    else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setGtinpool_read_checked_state(true):setGtinpool_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setGtinpool_create_checked_state(true):setGtinpool_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setGtinpool_update_checked_state(true):setGtinpool_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setGtinpool_delete_checked_state(true):setGtinpool_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setGtinpool_read_checked_state(true):setGtinpool_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setGtinpool_create_checked_state(true):setGtinpool_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setGtinpool_update_checked_state(true):setGtinpool_read_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setGtinpool_delete_checked_state(true):setGtinpool_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setGtinpool_read_checked_state(true):setGtinpool_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setGtinpool_create_checked_state(true):setGtinpool_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setGtinpool_update_checked_state(true):setGtinpool_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setGtinpool_delete_checked_state(true):setGtinpool_delete_checked_state(false);
                    }
                }


                else if(data['activity_name'] ==="printerpool"){
                    if(event.target.value ==='admin'){
                        data.admin['READ']==="Checked"?setPrinterpool_read_checked_state(true):setPrinterpool_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setPrinterpool_create_checked_state(true):setPrinterpool_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setPrinterpool_update_checked_state(true):setPrinterpool_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setPrinterpool_delete_checked_state(true):setPrinterpool_delete_checked_state(false);

                    }

                    else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setPrinterpool_read_checked_state(true):setPrinterpool_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setPrinterpool_create_checked_state(true):setPrinterpool_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setPrinterpool_update_checked_state(true):setPrinterpool_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setPrinterpool_delete_checked_state(true):setPrinterpool_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setPrinterpool_read_checked_state(true):setPrinterpool_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setPrinterpool_create_checked_state(true):setPrinterpool_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setPrinterpool_update_checked_state(true):setPrinterpool_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setPrinterpool_delete_checked_state(true):setPrinterpool_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setPrinterpool_read_checked_state(true):setPrinterpool_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setPrinterpool_create_checked_state(true):setPrinterpool_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setPrinterpool_update_checked_state(true):setPrinterpool_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setPrinterpool_delete_checked_state(true):setPrinterpool_delete_checked_state(false);
                    }
                }


                else if(data['activity_name'] ==='auditreport')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setAuditreport_read_checked_state(true):setAuditreport_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setAuditreport_create_checked_state(true):setAuditreport_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setAuditreport_update_checked_state(true):setAuditreport_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setAuditreport_delete_checked_state(true):setAuditreport_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ?setAuditreport_read_checked_state(true):setAuditreport_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setAuditreport_create_checked_state(true):setAuditreport_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setAuditreport_update_checked_state(true):setAuditreport_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setAuditreport_delete_checked_state(true):setAuditreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setAuditreport_read_checked_state(true):setAuditreport_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setAuditreport_create_checked_state(true):setAuditreport_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setAuditreport_update_checked_state(true):setAuditreport_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setAuditreport_delete_checked_state(true):setAuditreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setAuditreport_read_checked_state(true):setAuditreport_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setAuditreport_create_checked_state(true):setAuditreport_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setAuditreport_update_checked_state(true):setAuditreport_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setAuditreport_delete_checked_state(true):setAuditreport_delete_checked_state(false);
                    }
                }



                else if(data['activity_name'] ==='shippingreport')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setShippingreport_read_checked_state(true):setShippingreport_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setShippingreport_create_checked_state(true):setShippingreport_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setShippingreport_update_checked_state(true):setShippingreport_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setShippingreport_delete_checked_state(true):setShippingreport_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ?setShippingreport_read_checked_state(true):setShippingreport_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setShippingreport_create_checked_state(true):setShippingreport_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setShippingreport_update_checked_state(true):setShippingreport_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setShippingreport_delete_checked_state(true):setShippingreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setShippingreport_read_checked_state(true):setShippingreport_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setShippingreport_create_checked_state(true):setShippingreport_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setShippingreport_update_checked_state(true):setShippingreport_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setShippingreport_delete_checked_state(true):setShippingreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setShippingreport_read_checked_state(true):setShippingreport_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setShippingreport_create_checked_state(true):setShippingreport_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setShippingreport_update_checked_state(true):setShippingreport_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setShippingreport_delete_checked_state(true):setShippingreport_delete_checked_state(false);
                    }
                }



                else if(data['activity_name'] ==='productionreport')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setProductionreport_read_checked_state(true): setProductionreport_read_checked_state(false);
                        data.admin['CREATE']==="Checked"? setProductionreport_create_checked_state(true): setProductionreport_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"? setProductionreport_update_checked_state(true): setProductionreport_update_checked_state(false);
                        data.admin['DELETE']==="Checked"? setProductionreport_delete_checked_state(true): setProductionreport_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setProductionreport_read_checked_state(true): setProductionreport_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"? setProductionreport_create_checked_state(true): setProductionreport_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"? setProductionreport_update_checked_state(true): setProductionreport_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"? setProductionreport_delete_checked_state(true): setProductionreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ?  setProductionreport_read_checked_state(true): setProductionreport_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"? setProductionreport_create_checked_state(true): setProductionreport_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"? setProductionreport_update_checked_state(true): setProductionreport_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"? setProductionreport_delete_checked_state(true): setProductionreport_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ?  setProductionreport_read_checked_state(true): setProductionreport_read_checked_state(false);
                        data.operator['CREATE']==="Checked"? setProductionreport_create_checked_state(true): setProductionreport_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"? setProductionreport_update_checked_state(true): setProductionreport_update_checked_state(false);
                        data.operator['DELETE']==="Checked"? setProductionreport_delete_checked_state(true): setProductionreport_delete_checked_state(false);
                    }

                }


                else if(data['activity_name'] ==='applicationchangepassword')
                // alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setApplicationserver_Changepassword_read_checked_state(true):setApplicationserver_Changepassword_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setApplicationserver_Changepassword_create_checked_state(true):setApplicationserver_Changepassword_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setApplicationserver_Changepassword_update_checked_state(true):setApplicationserver_Changepassword_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setApplicationserver_Changepassword_delete_checked_state(true):setApplicationserver_Changepassword_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ? setApplicationserver_Changepassword_read_checked_state(true):setApplicationserver_Changepassword_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setApplicationserver_Changepassword_create_checked_state(true):setApplicationserver_Changepassword_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setApplicationserver_Changepassword_update_checked_state(true):setApplicationserver_Changepassword_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setApplicationserver_Changepassword_delete_checked_state(true):setApplicationserver_Changepassword_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setApplicationserver_Changepassword_read_checked_state(true):setApplicationserver_Changepassword_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setApplicationserver_Changepassword_create_checked_state(true):setApplicationserver_Changepassword_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setApplicationserver_Changepassword_update_checked_state(true):setApplicationserver_Changepassword_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setApplicationserver_Changepassword_delete_checked_state(true):setApplicationserver_Changepassword_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setApplicationserver_Changepassword_read_checked_state(true):setApplicationserver_Changepassword_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setApplicationserver_Changepassword_create_checked_state(true):setApplicationserver_Changepassword_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setApplicationserver_Changepassword_update_checked_state(true):setApplicationserver_Changepassword_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setApplicationserver_Changepassword_delete_checked_state(true):setApplicationserver_Changepassword_delete_checked_state(false);
                    }
                }

                else if(data['activity_name']==='inspectiondashboard')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setInspectiondashboard_read_checked_state(true):setInspectiondashboard_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['READ']==="Checked" ?setInspectiondashboard_read_checked_state(true):setInspectiondashboard_read_checked_state(false);
                    }  
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setInspectiondashboard_read_checked_state(true):setInspectiondashboard_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setInspectiondashboard_read_checked_state(true):setInspectiondashboard_read_checked_state(false);
                        
                    }
                }

                else if(data['activity_name']==='rework')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setRework_read_checked_state(true):setRework_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setRework_create_checked_state(true):setRework_create_checked_state(false);
                        data.admin['DELETE']==="Checked"?setRework_delete_checked_state(true):setRework_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['CREATE']==="Checked" ?setRework_create_checked_state(true):setRework_create_checked_state(false);
                        data.supervisor['READ']==="Checked" ?setRework_read_checked_state(true):setRework_read_checked_state(false);  
                        data.supervisor['DELETE']==='Checked' ?setRework_delete_checked_state(true):setRework_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setRework_read_checked_state(true):setRework_read_checked_state(false);
                        data.masterdata['CREATE']==='Checked' ?setRework_create_checked_state(true):setRework_create_checked_state(false);
                        data.masterdata['DELETE']==='Checked' ?setRework_delete_checked_state(true):setRework_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setRework_read_checked_state(true):setRework_read_checked_state(false);
                        data.operator['CREATE']==='Checked'? setRework_create_checked_state(true):setRework_create_checked_state(false);
                        data.operator['DELETE']==='Checked'? setRework_delete_checked_state(true):setRework_delete_checked_state(false);
                    }
                }
                else if(data['activity_name']==='applicationserverhistory')
                {
                    //  alert(data.admin['DELETE'])
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setApplicationserver_History_read_checked_state(true):setApplicationserver_History_read_checked_state(false);
                        data.admin['DELETE']==="Checked" ? setApplicationserver_History_delete_checked_state(true):setApplicationserver_History_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['READ']==="Checked" ?setApplicationserver_History_read_checked_state(true):setApplicationserver_History_read_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ? setApplicationserver_History_delete_checked_state(true):setApplicationserver_History_delete_checked_state(false);
                    }  
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setApplicationserver_History_read_checked_state(true):setApplicationserver_History_read_checked_state(false);
                        data.masterdata['DELETE']==="Checked" ? setApplicationserver_History_delete_checked_state(true):setApplicationserver_History_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setApplicationserver_History_read_checked_state(true):setApplicationserver_History_read_checked_state(false);
                        data.operator['DELETE']==="Checked" ?setApplicationserver_History_delete_checked_state(true):setApplicationserver_History_delete_checked_state(false);
                    }
                }

                else if(data['activity_name']==='applicationserverbackup')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ?setApplicationserver_Backup_read_checked_state(true):setApplicationserver_Backup_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setApplicationserver_Backup_create_checked_state(true):setApplicationserver_Backup_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setApplicationserver_Backup_update_checked_state(true):setApplicationserver_Backup_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setApplicationserver_Backup_delete_checked_state(true):setApplicationserver_Backup_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['CREATE']==="Checked" ?setApplicationserver_Backup_read_checked_state(true):setApplicationserver_Backup_read_checked_state(false);
                        data.supervisor['READ']==="Checked" ?setApplicationserver_Backup_create_checked_state(true):setApplicationserver_Backup_create_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ?setApplicationserver_Backup_update_checked_state(true):setApplicationserver_Backup_update_checked_state(false);
                        data.supervisor['UPDATE']==="Checked" ?setApplicationserver_Backup_delete_checked_state(true):setApplicationserver_Backup_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setApplicationserver_Backup_read_checked_state(true):setApplicationserver_Backup_read_checked_state(false);
                        data.masterdata['CREATE']==='Checked' ?setApplicationserver_Backup_create_checked_state(true):setApplicationserver_Backup_create_checked_state(false);
                        data.masterdata['UPDATE']==='Checked' ?setApplicationserver_Backup_update_checked_state(true):setApplicationserver_Backup_update_checked_state(false);
                        data.masterdata['DELETE']==='Checked' ?setApplicationserver_Backup_delete_checked_state(true):setApplicationserver_Backup_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setApplicationserver_Backup_read_checked_state(true):setApplicationserver_Backup_read_checked_state(false);
                        data.operator['CREATE']==='Checked'? setApplicationserver_Backup_create_checked_state(true):setApplicationserver_Backup_create_checked_state(false);
                        data.operator['UPDATE']==='Checked'? setApplicationserver_Backup_update_checked_state(true):setApplicationserver_Backup_update_checked_state(false);
                        data.operator['DELETE']==='Checked'? setApplicationserver_Backup_delete_checked_state(true):setApplicationserver_Backup_delete_checked_state(false);
                    }
                }




                            
                else if(data['activity_name']==='manualupload')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ?setManualupload_read_checked_state(true):setManualupload_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setManualupload_create_checked_state(true):setManualupload_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setManualupload_update_checked_state(true):setManualupload_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setManualupload_delete_checked_state(true):setManualupload_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['CREATE']==="Checked" ?setManualupload_read_checked_state(true):setManualupload_read_checked_state(false);
                        data.supervisor['READ']==="Checked" ?setManualupload_create_checked_state(true):setManualupload_create_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ?setManualupload_update_checked_state(true):setManualupload_update_checked_state(false);
                        data.supervisor['UPDATE']==="Checked" ?setManualupload_delete_checked_state(true):setManualupload_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setManualupload_read_checked_state(true):setManualupload_read_checked_state(false);
                        data.masterdata['CREATE']==='Checked' ?setManualupload_create_checked_state(true):setManualupload_create_checked_state(false);
                        data.masterdata['UPDATE']==='Checked' ?setManualupload_update_checked_state(true):setManualupload_update_checked_state(false);
                        data.masterdata['DELETE']==='Checked' ?setManualupload_delete_checked_state(true):setManualupload_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setManualupload_read_checked_state(true):setManualupload_read_checked_state(false);
                        data.operator['CREATE']==='Checked'? setManualupload_create_checked_state(true):setManualupload_create_checked_state(false);
                        data.operator['UPDATE']==='Checked'? setManualupload_update_checked_state(true):setManualupload_update_checked_state(false);
                        data.operator['DELETE']==='Checked'? setManualupload_delete_checked_state(true):setManualupload_delete_checked_state(false);
                    }
                }

                else if(data['activity_name']==='applicationserverreport')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setApplicationserver_Report_read_checked_state(true):setApplicationserver_Report_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['READ']==="Checked" ?setApplicationserver_Report_read_checked_state(true):setApplicationserver_Report_read_checked_state(false);
                    }  
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setApplicationserver_Report_read_checked_state(true):setApplicationserver_Report_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setApplicationserver_Report_read_checked_state(true):setApplicationserver_Report_read_checked_state(false);
                        
                    }
                }

                else if(data['activity_name']==='printerjobs')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ?setPrinterjobs_read_checked_state(true):setPrinterjobs_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setPrinterjobs_create_checked_state(true):setPrinterjobs_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setPrinterjobs_update_checked_state(true):setPrinterjobs_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setPrinterjobs_delete_checked_state(true):setPrinterjobs_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['CREATE']==="Checked" ?setPrinterjobs_read_checked_state(true):setPrinterjobs_read_checked_state(false);
                        data.supervisor['READ']==="Checked" ?setPrinterjobs_create_checked_state(true):setPrinterjobs_create_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ?setPrinterjobs_update_checked_state(true):setPrinterjobs_update_checked_state(false);
                        data.supervisor['UPDATE']==="Checked" ?setPrinterjobs_delete_checked_state(true):setPrinterjobs_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setPrinterjobs_read_checked_state(true):setPrinterjobs_read_checked_state(false);
                        data.masterdata['CREATE']==='Checked' ?setPrinterjobs_create_checked_state(true):setPrinterjobs_create_checked_state(false);
                        data.masterdata['UPDATE']==='Checked' ?setPrinterjobs_update_checked_state(true):setPrinterjobs_update_checked_state(false);
                        data.masterdata['DELETE']==='Checked' ?setPrinterjobs_delete_checked_state(true):setPrinterjobs_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setPrinterjobs_read_checked_state(true):setPrinterjobs_read_checked_state(false);
                        data.operator['CREATE']==='Checked'? setPrinterjobs_create_checked_state(true):setPrinterjobs_create_checked_state(false);
                        data.operator['UPDATE']==='Checked'? setPrinterjobs_update_checked_state(true):setPrinterjobs_update_checked_state(false);
                        data.operator['DELETE']==='Checked'? setPrinterjobs_delete_checked_state(true):setPrinterjobs_delete_checked_state(false);
                    }
                }
                else if(data['activity_name']==='scannerjobs')
                {
                    // alert("haii")
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setScannerjobs_read_checked_state(true):setScannerjobs_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['READ']==="Checked" ?setScannerjobs_read_checked_state(true):setScannerjobs_read_checked_state(false);
                    }  
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setScannerjobs_read_checked_state(true):setScannerjobs_read_checked_state(false);
                        
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setScannerjobs_read_checked_state(true):setScannerjobs_read_checked_state(false);
                        
                    }
                }

                else if(data['activity_name'] ==='sapdata')
                //alert(data.activity_name)
                //alert(data.admin["READ"])
                {
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setSapdata_read_checked_state(true):setSapdata_read_checked_state(false);
                        data.admin['CREATE']==="Checked"?setSapdata_create_checked_state(true):setSapdata_create_checked_state(false);
                        data.admin['UPDATE']==="Checked"?setSapdata_update_checked_state(true):setSapdata_update_checked_state(false);
                        data.admin['DELETE']==="Checked"?setSapdata_delete_checked_state(true):setSapdata_delete_checked_state(false);
                    }
                     else if(event.target.value==="supervisor")
                    
                    {
                        //alert(data.admin['CREATE'])
                        data.supervisor['READ']==="Checked" ?setSapdata_read_checked_state(true):setSapdata_read_checked_state(false);
                        data.supervisor['CREATE']==="Checked"?setSapdata_create_checked_state(true):setSapdata_create_checked_state(false);
                        data.supervisor['UPDATE']==="Checked"?setSapdata_update_checked_state(true):setSapdata_update_checked_state(false);
                        data.supervisor['DELETE']==="Checked"?setSapdata_delete_checked_state(true):setSapdata_delete_checked_state(false);
                    }
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==="Checked" ? setSapdata_read_checked_state(true):setSapdata_read_checked_state(false);
                        data.masterdata['CREATE']==="Checked"?setSapdata_create_checked_state(true):setSapdata_create_checked_state(false);
                        data.masterdata['UPDATE']==="Checked"?setSapdata_update_checked_state(true):setSapdata_update_checked_state(false);
                        data.masterdata['DELETE']==="Checked"?setSapdata_delete_checked_state(true):setSapdata_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==="Checked" ? setSapdata_read_checked_state(true):setSapdata_read_checked_state(false);
                        data.operator['CREATE']==="Checked"?setSapdata_create_checked_state(true):setSapdata_create_checked_state(false);
                        data.operator['UPDATE']==="Checked"?setSapdata_update_checked_state(true):setSapdata_update_checked_state(false);
                        data.operator['DELETE']==="Checked"?setSapdata_delete_checked_state(true):setSapdata_delete_checked_state(false);
                    }
                }
              

                else if(data['activity_name']==='trash')
                {
                    //  alert(data.admin['DELETE'])
                    if(event.target.value==="admin")
                    {
                        data.admin['READ']==="Checked" ? setTrash_read_checked_state(true):setTrash_read_checked_state(false);
                        data.admin['DELETE']==="Checked" ? setTrash_delete_checked_state(true):setTrash_delete_checked_state(false);
                    }
                    else if(event.target.value==="supervisor")
                    {
                        data.supervisor['READ']==="Checked" ?setTrash_read_checked_state(true):setTrash_read_checked_state(false);
                        data.supervisor['DELETE']==="Checked" ? setTrash_delete_checked_state(true):setTrash_delete_checked_state(false);
                    }  
                    else if(event.target.value==="masterdata")
                    {
                        data.masterdata['READ']==='Checked' ?setTrash_read_checked_state(true):setTrash_read_checked_state(false);
                        data.masterdata['DELETE']==="Checked" ? setTrash_delete_checked_state(true):setTrash_delete_checked_state(false);
                    }
                    else if(event.target.value==="operator")
                    {
                        data.operator['READ']==='Checked'? setTrash_read_checked_state(true):setTrash_read_checked_state(false);
                        data.operator['DELETE']==="Checked" ? setTrash_delete_checked_state(true):setTrash_delete_checked_state(false);
                    }
                }

            });
                    
      
        });
    }

     /*
    function userrolePermissionsRead() {
        axios.get("http://127.0.0.1:8000/accounts/userrolePermissionsRead")
        .then((res) => {
            alert(res.data[0].admin.CREATE);
        });
    }*/

    useEffect(() => {
        // userrolePermissionsRead();
         //getPermissions();
    }, []);











            
              
          
      
   
    

    return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <Box sx={{ display: 'flex' }}> 
        {/* <Sidebar/>   */}

        <div id="permission">
                   
            <Box component="main" sx={{ flexGrow: 3, p: 7 }}>
      
     

      <div id="content-wrapper" class="d-flex flex-column">

      
            <div id="content">

                {/* <Header>
                    
                </Header> */}


                <div class="container-fluid">


                    <div class="card shadow mb-4" id="userrole">
                        <div class="card-header py-3">
                             <h6 class="m-0 font-weight-bold text">Userrole Permissions</h6>                         
                        </div>


                        <div class="card-body pb-1" id="userrole">
                            <div class="medium mb-2">Select the user role</div>

                            <select class="form-select form-select-lg p-2" aria-label=".form-select-lg example" onChange={getPermission} >
                                <option selected>Select the user role</option>
                                <option value="">Select</option>
                                <option value="admin">Admin</option>
                                <option value="masterdata">Masterdata</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="operator">Operator</option>
                                
                            </select>
                        </div>

                        <div class="card-body" >
                            <div class="table-responsive" id="userrole">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                        <th>
                                                <div class="form-check">
                                                    <input type="checkbox" name="selectall" id="selectall_id" class="form-check-input"></input>
                                                    <label class="form-check-label" for="selectall_id">
                                                        Select all/none
                                                    </label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="form-check">
                                                    <input type="checkbox" name="selectall_read" id="selectall_read_id" class="form-check-input"></input>
                                                    <label class="form-check-label" for="selectall_read_id">
                                                        Select all read
                                                    </label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="form-check">
                                                    <input type="checkbox" name="selectall_insert" id="selectall_insert_id" class="form-check-input"></input>
                                                    <label class="form-check-label" for="selectall_insert_id">
                                                        Select all insert
                                                    </label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="form-check">
                                                    <input type="checkbox" name="selectall_update" id="selectall_update_id" class="form-check-input"></input>
                                                    <label class="form-check-label" for="selectall_update_id">
                                                        Select all update
                                                    </label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="form-check">
                                                    <input type="checkbox" name="selectall_delete" id="selectall_delete_id" class="form-check-input"></input>
                                                    <label class="form-check-label" for="selectall_delete_id">
                                                        Select all delete
                                                    </label>
                                                </div>
                                            </th>
                                         
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <th>Read</th>
                                            <th>Insert</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                         
                                        </tr>
                                    </thead>

                                    <tbody id="role">
                                    <tr>
                                            <td>Registered Users</td>
                                            <td><input type="checkbox" 
                                                    name="Registeredusers_read" 
                                                   checked={Registeredusers_read_checked_state} onChange={()=>setRegisteredusers_read_checked_state(!Registeredusers_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Registeredusers_create"
                                                    checked = {Registeredusers_create_checked_state}
                                                    onChange={() => setRegisteredusers_create_checked_state(!Registeredusers_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Registeredusers_update"
                                             checked = {Registeredusers_update_checked_state}
                                             onChange={() => setRegisteredusers_update_checked_state(!Registeredusers_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Registeredusers_delete" 
                                            checked = {Registeredusers_delete_checked_state}
                                            onChange={() => setRegisteredusers_delete_checked_state(!Registeredusers_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        {/* <tr>
                                            <td>History</td>
                                            <td><input type="checkbox" 
                                                    name="Registeredusers_read" 
                                                   checked={History_read_checked_state} onChange={()=>setHistory_read_checked_state(!History_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Registeredusers_create"
                                                    checked = {History_create_checked_state}
                                                    onChange={() => setHistory_create_checked_state(!History_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Registeredusers_update"
                                             checked = {History_update_checked_state}
                                             onChange={() => setHistory_update_checked_state(!History_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Registeredusers_delete" 
                                            checked = {History_delete_checked_state}
                                            onChange={() => setHistory_delete_checked_state(!History_delete_checked_state)}></input></td>
                                        
                                        </tr> */}

                                        {/* <tr>
                                            <td>Productionorder</td>
                                            <td><input type="checkbox"
                                            checked = {Productionorder_read_checked_state}
                                            onChange={() => setProductionorder_read_checked_state(!Productionorder_read_checked_state)}></input></td>
                                            <td><input type="checkbox"  checked = {Productionorder_create_checked_state}
                                            onChange={() => setProductionorder_create_checked_state(!Productionorder_create_checked_state)}></input></td>
                                            <td><input type="checkbox"  checked = {Productionorder_update_checked_state}
                                            onChange={() => setProductionorder_update_checked_state(!Productionorder_update_checked_state)}></input></td>
                                            <td><input type="checkbox" checked = {Productionorder_delete_checked_state}
                                            onChange={() => setProductionorder_delete_checked_state(!Productionorder_delete_checked_state)}></input></td>
                                          
                                        </tr> */}
                                        <tr>
                                            <td>Productionorders</td>
                                            <td><input type="checkbox" 
                                                    name="Productionorder_read" 
                                                   checked={Productionorder_read_checked_state} onChange={()=>setProductionorder_read_checked_state(!Productionorder_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Productionorder_create"
                                                    checked = {Productionorder_create_checked_state}
                                                    onChange={() => setProductionorder_create_checked_state(!Productionorder_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name=" Productionorder_update"
                                             checked = {Productionorder_update_checked_state}
                                             onChange={() => setProductionorder_update_checked_state(!Productionorder_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Productionorder_delete" 
                                            checked = {Productionorder_delete_checked_state}
                                            onChange={() => setProductionorder_delete_checked_state(!Productionorder_delete_checked_state)}></input></td>
                                        
                                        </tr>



                                        {/* <tr>
                                            <td>Create Shippingorder from Productionorder</td>
                                            <td><input type="checkbox" 
                                                    name="SendtoShip_read" 
                                                   checked={SendtoShipping_read_checked_state} onChange={()=>setSendtoShipping_read_checked_state(!SendtoShipping_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="SendtoShip_create"
                                                    checked = {SendtoShipping_create_checked_state}
                                                    onChange={() => setSendtoShipping_create_checked_state(!SendtoShipping_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name=" SendtoShip_update"
                                             checked = {SendtoShipping_update_checked_state}
                                             onChange={() => setSendtoShipping_update_checked_state(!SendtoShipping_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="SendtoShip_delete" 
                                            checked = {SendtoShipping_delete_checked_state}
                                            onChange={() => setSendtoShipping_delete_checked_state(!SendtoShipping_delete_checked_state)}></input></td>
                                        
                                        </tr> */}


                                        <tr>
                                            <td>ShippingOrder</td>
                                            <td><input type="checkbox" 
                                                    name="ShippingOrder_read" 
                                                   checked={ShippingOrder_read_checked_state} onChange={()=>setShippingOrder_read_checked_state(!ShippingOrder_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="ShippingOrder_create"
                                                    checked = {ShippingOrder_create_checked_state}
                                                    onChange={() => setShippingOrder_create_checked_state(!ShippingOrder_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="ShippingOrder_update"
                                             checked = {ShippingOrder_update_checked_state}
                                             onChange={() => setShippingOrder_update_checked_state(!ShippingOrder_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="ShippingOrder_delete" 
                                            checked = {ShippingOrder_delete_checked_state}
                                            onChange={() => setShippingOrder_delete_checked_state(!ShippingOrder_delete_checked_state)}></input></td>
                                        
                                        </tr>


                                        <tr>
                                            <td>Stock</td>
                                            <td><input type="checkbox" 
                                                    name="Stock_read" 
                                                   checked={Stock_read_checked_state} onChange={()=>setStock_read_checked_state(!Stock_read_checked_state)}>
                                                </input>
                                            </td>
                                            
                                        
                                        </tr>

                                        <tr>
                                            <td>Company Details</td>
                                            <td><input type="checkbox" 
                                                    name="Company_read" 
                                                   checked={Company_read_checked_state} onChange={()=>setCompany_read_checked_state(!Company_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Company_create"
                                                    checked = {Company_create_checked_state}
                                                    onChange={() => setCompany_create_checked_state(!Company_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Company_update"
                                             checked = {Company_update_checked_state}
                                             onChange={() => setCompany_update_checked_state(!Company_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Company_delete" 
                                            checked = {Company_delete_checked_state}
                                            onChange={() => setCompany_delete_checked_state(!Company_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        

                                        <tr>
                                            <td>Customers</td>
                                            <td><input type="checkbox" 
                                                    name="Customer_read" 
                                                   checked={Customer_read_checked_state} onChange={()=>setCustomer_read_checked_state(!Customer_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Customer_create"
                                                    checked = {Customer_create_checked_state}
                                                    onChange={() => setCustomer_create_checked_state(!Customer_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name=" Customer_update"
                                             checked = {Customer_update_checked_state}
                                             onChange={() => setCustomer_update_checked_state(!Customer_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Customer_delete" 
                                            checked = {Customer_delete_checked_state}
                                            onChange={() => setCustomer_delete_checked_state(!Customer_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>CustomerLocations</td>
                                            <td><input type="checkbox" 
                                                    name="CustomerLocation_read" 
                                                   checked={CustomerLocation_read_checked_state} onChange={()=>setCustomerLocation_read_checked_state(!CustomerLocation_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="CustomerLocation_create"
                                                    checked = {CustomerLocation_create_checked_state}
                                                    onChange={() => setCustomerLocation_create_checked_state(!CustomerLocation_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="CustomerLocation_update"
                                             checked = {CustomerLocation_update_checked_state}
                                             onChange={() => setCustomerLocation_update_checked_state(!CustomerLocation_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="CustomerLocation_delete" 
                                            checked = {CustomerLocation_delete_checked_state}
                                            onChange={() => setCustomerLocation_delete_checked_state(!CustomerLocation_delete_checked_state)}></input></td>
                                        
                                        </tr>


   
                                        <tr>
                                            <td>Products</td>
                                            <td><input type="checkbox" 
                                                    name="Product_read" 
                                                   checked={Product_read_checked_state} onChange={()=>setProduct_read_checked_state(!Product_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Product_create"
                                                    checked = {Product_create_checked_state}
                                                    onChange={() => setProduct_create_checked_state(!Product_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Product_update"
                                             checked = {Product_update_checked_state}
                                             onChange={() => setProduct_update_checked_state(!Product_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Product_delete" 
                                            checked = {Product_delete_checked_state}
                                            onChange={() => setProduct_delete_checked_state(!Product_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>ManufacturigLocation</td>
                                            <td><input type="checkbox" 
                                                    name="Manufact_read" 
                                                   checked={Manufact_read_checked_state} onChange={()=>setManufact_read_checked_state(!Manufact_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Manufact_create"
                                                    checked = {Manufact_create_checked_state}
                                                    onChange={() => setManufact_create_checked_state(!Manufact_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Product_update"
                                             checked = {Manufact_update_checked_state}
                                             onChange={() => setManufact_update_checked_state(!Manufact_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Product_delete" 
                                            checked = {Manufact_delete_checked_state}
                                            onChange={() => setManufact_delete_checked_state(!Manufact_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>RegisteredSystem</td>
                                            <td><input type="checkbox" 
                                                    name="RegisteredSystem_read" 
                                                   checked={RegisteredSystem_read_checked_state} onChange={()=>setRegisteredSystem_read_checked_state(!RegisteredSystem_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="RegisteredSystem_create"
                                                    checked = {RegisteredSystem_create_checked_state}
                                                    onChange={() => setRegisteredSystem_create_checked_state(!RegisteredSystem_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="RegisteredSystem_update"
                                             checked = {RegisteredSystem_update_checked_state}
                                             onChange={() => setRegisteredSystem_update_checked_state(!RegisteredSystem_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="RegisteredSystem_delete" 
                                            checked = {RegisteredSystem_delete_checked_state}
                                            onChange={() => setRegisteredSystem_delete_checked_state(!RegisteredSystem_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        <tr>
                                                    <td>History</td>
                                                    <td><input type="checkbox" 
                                                            name="Registeredusers_read" 
                                                           checked={History_read_checked_state} onChange={()=>setHistory_read_checked_state(!History_read_checked_state)}>
                                                        </input>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                     
                                                    <td><input type="checkbox" name="Registeredusers_delete" 
                                                    checked = {History_delete_checked_state}
                                                    onChange={() => setHistory_delete_checked_state(!History_delete_checked_state)}></input></td>
                                                
                                                </tr>


                                                <tr>
                                                    <td>DashBoard</td>
                                                    <td><input type="checkbox" 
                                                            name="Dashboard_read" 
                                                           checked={Dashboard_read_checked_state} onChange={()=>setDashboard_read_checked_state(!Dashboard_read_checked_state)}>
                                                        </input>
                                                    </td>
                                                    
                                                
                                                </tr>

                                                <tr>
                                                    <td>SnProvider</td>
                                                    <td><input type="checkbox" 
                                                            name="SnProvider_read" 
                                                           checked={SnProvider_read_checked_state} onChange={()=>setSnProvider_read_checked_state(!SnProvider_read_checked_state)}>
                                                        </input>
                                                    </td>
                                                    <td><input type="checkbox" 
                                                            name="SnProvider_create"
                                                            checked = {SnProvider_create_checked_state}
                                                            onChange={() => setSnProvider_create_checked_state(!SnProvider_create_checked_state)}>
                                                        </input></td>
        
                                                     <td><input type="checkbox" name="SnProvider_update"
                                                     checked = {SnProvider_update_checked_state}
                                                     onChange={() => setSnProvider_update_checked_state(!SnProvider_update_checked_state)}
                                                    ></input></td>
                                                    <td><input type="checkbox" name="SnProvider_delete" 
                                                    checked = {SnProvider_delete_checked_state}
                                                    onChange={() => setSnProvider_delete_checked_state(!SnProvider_delete_checked_state)}></input></td>
                                                
                                                </tr>

                                                <tr>
                                            <td>Restore Data</td>
                                            <td><input type="checkbox"
                                                    name="Trash_read"
                                                   checked={Trash_read_checked_state}
                                                   onChange={()=>setTrash_read_checked_state(!Trash_read_checked_state)}>
                                                </input>
                                            </td>
                                           <td></td>
                                           <td></td>
                                           <td><input type="checkbox"
                                                    name="Trash_delete"
                                                   checked={Trash_delete_checked_state}
                                                   onChange={()=>setTrash_delete_checked_state(!Trash_delete_checked_state)}>
                                                </input></td>
                                           
                                        </tr>


                                                <tr>
                                                    <td>Gtinpool</td>
                                                    <td><input type="checkbox" 
                                                            name="Gtinpool_read" 
                                                           checked={Gtinpool_read_checked_state} onChange={()=>setGtinpool_read_checked_state(!Gtinpool_read_checked_state)}>
                                                        </input>
                                                    </td>
                                                    <td><input type="checkbox" 
                                                            name="Gtinpool_create"
                                                            checked = {Gtinpool_create_checked_state}
                                                            onChange={() => setGtinpool_create_checked_state(!Gtinpool_create_checked_state)}>
                                                        </input></td>
        
                                                     <td><input type="checkbox" name="Gtinpool_update"
                                                     checked = {Gtinpool_update_checked_state}
                                                     onChange={() => setGtinpool_update_checked_state(!Gtinpool_update_checked_state)}
                                                    ></input></td>
                                                    <td><input type="checkbox" name="Gtinpool_delete" 
                                                    checked = {Gtinpool_delete_checked_state}
                                                    onChange={() => setGtinpool_delete_checked_state(!Gtinpool_delete_checked_state)}></input></td>
                                                
                                                </tr>
        
        
                                                <tr>
                                                    <td>PrinterPool</td>
                                                    <td><input type="checkbox" 
                                                            name="Printerpool_read" 
                                                           checked={Printerpool_read_checked_state} onChange={()=>setPrinterpool_read_checked_state(!Printerpool_read_checked_state)}>
                                                        </input>
                                                    </td>
                                                    <td><input type="checkbox" 
                                                            name="Printerpool_create"
                                                            checked = {Printerpool_create_checked_state}
                                                            onChange={() => setPrinterpool_create_checked_state(!Printerpool_create_checked_state)}>
                                                        </input></td>
        
                                                     <td><input type="checkbox" name="Printerpool_update"
                                                     checked = {Printerpool_update_checked_state}
                                                     onChange={() => setPrinterpool_update_checked_state(!Printerpool_update_checked_state)}
                                                    ></input></td>
                                                    <td><input type="checkbox" name="Printerpool_delete" 
                                                    checked = {Printerpool_delete_checked_state}
                                                    onChange={() => setPrinterpool_delete_checked_state(!Printerpool_delete_checked_state)}></input></td>
                                                
                                                </tr>
                                                

                                                <tr>
                                            <td>Audit Report</td>
                                            <td><input type="checkbox" 
                                                    name="Auditreport_read" 
                                                   checked={Auditreport_read_checked_state} onChange={()=>setAuditreport_read_checked_state(!Auditreport_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Auditreport_create"
                                                    checked = {Auditreport_create_checked_state}
                                                    onChange={() => setAuditreport_create_checked_state(!Auditreport_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Auditreport_update"
                                             checked = {Auditreport_update_checked_state}
                                             onChange={() => setAuditreport_update_checked_state(!Auditreport_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Auditreport_delete" 
                                            checked = {Auditreport_delete_checked_state}
                                            onChange={() => setAuditreport_delete_checked_state(!Auditreport_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>Shipping Report</td>
                                            <td><input type="checkbox" 
                                                    name="Shippingreport_read" 
                                                   checked={Shippingreport_read_checked_state} onChange={()=>setShippingreport_read_checked_state(!Shippingreport_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Shippingreport_create"
                                                    checked = {Shippingreport_create_checked_state}
                                                    onChange={() => setShippingreport_create_checked_state(!Shippingreport_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Shippingreport_update"
                                             checked = {Shippingreport_update_checked_state}
                                             onChange={() => setShippingreport_update_checked_state(!Shippingreport_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Shippingreport_delete" 
                                            checked = {Shippingreport_delete_checked_state}
                                            onChange={() => setShippingreport_delete_checked_state(!Shippingreport_delete_checked_state)}></input></td>
                                        
                                        </tr>


                                        <tr>
                                            <td>Production Report</td>
                                            <td><input type="checkbox" 
                                                    name="Productionreport_read" 
                                                   checked={Productionreport_read_checked_state} onChange={()=>setProductionreport_read_checked_state(!Productionreport_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Productionreport_create"
                                                    checked = {Productionreport_create_checked_state}
                                                    onChange={() => setProductionreport_create_checked_state(!Productionreport_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Productionreport_update"
                                             checked = {Productionreport_update_checked_state}
                                             onChange={() => setProductionreport_update_checked_state(!Productionreport_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Productionreport_delete" 
                                            checked = {Productionreport_delete_checked_state}
                                            onChange={() => setProductionreport_delete_checked_state(!Productionreport_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        <tr>
                                            <td>Application Server ChangePassword</td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_Changepassword_read" 
                                                   checked={Applicationserver_Changepassword_read_checked_state} onChange={()=>setApplicationserver_Changepassword_read_checked_state(!Applicationserver_Changepassword_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_Changepassword_create"
                                                    checked = {Applicationserver_Changepassword_create_checked_state}
                                                    onChange={() => setApplicationserver_Changepassword_create_checked_state(!Applicationserver_Changepassword_create_checked_state)}>
                                                </input></td>

                                             <td><input type="checkbox" name="Applicationserver_Changepassword_update"
                                             checked = {Applicationserver_Changepassword_update_checked_state}
                                             onChange={() => setApplicationserver_Changepassword_update_checked_state(!Applicationserver_Changepassword_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Applicationserver_Changepassword_delete" 
                                            checked = {Applicationserver_Changepassword_delete_checked_state}
                                            onChange={() => setApplicationserver_Changepassword_delete_checked_state(!Applicationserver_Changepassword_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>Inspection Dashboard</td>
                                            <td><input type="checkbox" 
                                                    name="Inspectiondashboard_read" 
                                                   checked={Inspectiondashboard_read_checked_state} 
                                                   onChange={()=>setInspectiondashboard_read_checked_state(!Inspectiondashboard_read_checked_state)}>
                                                </input>
                                            </td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Rework</td>
                                            <td><input type="checkbox" 
                                                    name="Rework_read" 
                                                   checked={Rework_read_checked_state} 
                                                   onChange={()=>setRework_read_checked_state(!Rework_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Rework_create"
                                                    checked = {Rework_create_checked_state}
                                                    onChange={() => setRework_create_checked_state(!Rework_create_checked_state)}>
                                                </input></td>
                                             <td></td>
                                            <td><input type="checkbox" name="Rework_delete" 
                                            checked = {Rework_delete_checked_state}
                                            onChange={() => setRework_delete_checked_state(!Rework_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        <tr>
                                            <td>Application Server History</td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_History_read" 
                                                   checked={Applicationserver_History_read_checked_state} 
                                                   onChange={()=>setApplicationserver_History_read_checked_state(!Applicationserver_History_read_checked_state)}>
                                                </input>
                                            </td>
                                           <td></td>
                                           <td></td>
                                           <td><input type="checkbox" 
                                                    name="Applicationserver_History_delete" 
                                                   checked={Applicationserver_History_delete_checked_state} 
                                                   onChange={()=>setApplicationserver_History_delete_checked_state(!Applicationserver_History_delete_checked_state)}>
                                                </input></td>
                                            
                                        </tr>

                                        <tr>
                                            <td>Application Server Backup</td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_Backup_read" 
                                                   checked={Applicationserver_Backup_read_checked_state} 
                                                   onChange={()=>setApplicationserver_Backup_read_checked_state(!Applicationserver_Backup_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_Backup_create"
                                                    checked = {Applicationserver_Backup_create_checked_state}
                                                    onChange={() => setApplicationserver_Backup_create_checked_state(!Applicationserver_Backup_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Applicationserver_Backup_update"
                                             checked = {Applicationserver_Backup_update_checked_state}
                                             onChange={() => setApplicationserver_Backup_update_checked_state(!Applicationserver_Backup_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Applicationserver_Backup_delete" 
                                            checked = {Applicationserver_Backup_delete_checked_state}
                                            onChange={() =>setApplicationserver_Backup_delete_checked_state(!Applicationserver_Backup_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        <tr>
                                            <td>Manual Upload</td>
                                            <td><input type="checkbox" 
                                                    name="Manualupload_read" 
                                                   checked={Manualupload_read_checked_state} 
                                                   onChange={()=>setManualupload_read_checked_state(!Manualupload_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Manualupload_create"
                                                    checked = {Manualupload_create_checked_state}
                                                    onChange={() =>setManualupload_create_checked_state(!Manualupload_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Manualupload_update"
                                             checked = {Manualupload_update_checked_state}
                                             onChange={() => setManualupload_update_checked_state(!Manualupload_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Manualupload_delete" 
                                            checked = {Manualupload_delete_checked_state}
                                            onChange={() =>setManualupload_delete_checked_state(!Manualupload_delete_checked_state)}></input></td>
                                        
                                        </tr>

                                        <tr>
                                            <td>Applicationserver Report</td>
                                            <td><input type="checkbox" 
                                                    name="Applicationserver_reports_read" 
                                                   checked={Applicationserver_Report_read_checked_state} 
                                                   onChange={()=> setApplicationserver_Report_read_checked_state(!Applicationserver_Report_read_checked_state)}>
                                                </input>
                                            </td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Printer Jobs</td>
                                            <td><input type="checkbox" 
                                                    name="Printerjobs_read" 
                                                   checked={Printerjobs_read_checked_state} 
                                                   onChange={()=>setPrinterjobs_read_checked_state(!Printerjobs_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Printerjobs_create"
                                                    checked = {Printerjobs_create_checked_state}
                                                    onChange={() => setPrinterjobs_create_checked_state(!Printerjobs_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Printerjobs_update"
                                             checked = {Printerjobs_update_checked_state}
                                             onChange={() => setPrinterjobs_update_checked_state(!Printerjobs_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Printerjobs_delete" 
                                            checked = {Printerjobs_delete_checked_state}
                                            onChange={() => setPrinterjobs_delete_checked_state(!Printerjobs_delete_checked_state)}></input></td>
                                        
                                        </tr>
                                        
                                        <tr>
                                            <td>Scanner Jobs</td>
                                            <td><input type="checkbox" 
                                                    name="Scannerjobs_read" 
                                                   checked={Scannerjobs_read_checked_state} 
                                                   onChange={()=>setScannerjobs_read_checked_state(!Scannerjobs_read_checked_state)}>
                                                </input>
                                            </td>
                                           
                                        </tr>

                                        <tr>
                                            <td>Sap Database</td>
                                            <td><input type="checkbox" 
                                                    name="Sapdata_read" 
                                                   checked={Sapdata_read_checked_state} onChange={()=>setSapdata_read_checked_state(!Sapdata_read_checked_state)}>
                                                </input>
                                            </td>
                                            <td><input type="checkbox" 
                                                    name="Sapdata_create"
                                                    checked = {Sapdata_create_checked_state}
                                                    onChange={() => setSapdata_create_checked_state(!Sapdata_create_checked_state)}>
                                                </input></td>
                                             <td><input type="checkbox" name="Sapdata_update"
                                             checked = {Sapdata_update_checked_state}
                                             onChange={() => setSapdata_update_checked_state(!Sapdata_update_checked_state)}
                                            ></input></td>
                                            <td><input type="checkbox" name="Sapdata_delete" 
                                            checked = {Sapdata_delete_checked_state}
                                            onChange={() => setSapdata_delete_checked_state(!Sapdata_delete_checked_state)}></input></td>
                                        
                                        </tr>



                                        

                                        <tr>
                                            <td>Send Productionorder to production</td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Download Productionorder codes</td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Import  Productionorder serialnumbers</td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Finalize Productionorder</td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                           
                                        </tr>
                                        {/* <tr>
                                            <td>Create Shippingorder from Productionorder</td>
                                            <td><input type="checkbox" ></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                            <td><input type="checkbox"></input></td>
                                           
                                        </tr> */}
                                        <tr>
                                            <div class="my-3"></div>
                                                <button onClick={handleEdit}  class="btn btn-danger" disabled={saveButtonMode_state}>
                                                    {saveButtonText_state}
                                                </button>
                                            
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            {/* <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer> */}
            {/* <Footer></Footer> */}
            
            
        </div>
      </Box>
    </div>
    </Box>
        </>
    )
}

export default UserrolePermissions