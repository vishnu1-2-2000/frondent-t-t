import React from 'react';
import { useNavigate } from "react-router";
import Sidebar from '../../components/Sidnav/Sidebar';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


const TrashSection= () => {

const navigate=useNavigate();

  const navigateToProductionordertrash = () => {
        navigate("/productionordertrash");
  };
  const navigateToCustomertrash = () => {
    navigate("/customertrash");
};
const navigateToCompanytrash = () => {
    navigate("/companytrash");
};
const navigateToProducttrash = () => {
    navigate("/producttrash");
};
const navigateToRegistereduserstrash = () => {
    navigate("/registereduserstrash");
};
const navigateTolocationtrash = () => {
    navigate("/locationtrash");
};
const navigateToHistorytrash = () => {
    navigate("/historytrash");
};
const navigateToshippotrash = () => {
    navigate("/shippotrash");
};

const navigateTomanufacturinglocationtrash = () => {
    navigate("/manufacturinglocationtrash");
};
const navigateToproductionlinetrash = () => {
    navigate("/productionlinetrash");
};

      

 

   



    return(
    <>
    <br/><br/><br/><br/><br/>
    <h4 ><center><h4 style={{color:"black"}}><font face="times new roman" size="6"> Restore Data </font></h4></center></h4> 
    <hr/>      
    <br/>
       
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
           <ButtonGroup size="small" aria-label="Small button group">
      <button
                                                className="btn btn-primary m-1"
                                               onClick={navigateToProducttrash} 
                                            >
                                            Product Restore
                                            </button>
      </ButtonGroup>
      <ButtonGroup size="small" aria-label="Large button group">
      <button
            className="btn btn-info m-1"
            onClick={navigateToshippotrash} 
        >
            Shippo  Restore
            </button>
      </ButtonGroup>
      <ButtonGroup  size="small" color="secondary" aria-label="Large button group">
      <button
    className="btn btn-primary m-1"
    onClick={navigateToHistorytrash} 
    >
        History Restore
</button>
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="Large button group">
      <button
   className="btn btn-info"
  onClick={navigateTomanufacturinglocationtrash} 
>
Manufacturing Location Restore
</button>
      </ButtonGroup>
    </Box>


   

       <ButtonGroup size="small" aria-label="Small button group">
       <button
                                                className="btn btn-primary m-1"
                                                onClick={navigateToProductionordertrash}>
                                                Productionorder Restore
                                            </button>
      </ButtonGroup>

       <ButtonGroup size="small" aria-label="Small button group">
        
                                            <button
                                            className="btn btn-info m-1"
                                               onClick={navigateToCompanytrash} 
                                            >
                                                Company Restore
                                            </button>
      </ButtonGroup>

       <ButtonGroup size="small" aria-label="Small button group">
       <button
                                                className="btn btn-primary m-1"
                                               onClick={navigateTolocationtrash} 
                                            >
                                            Customer Location Restore
                                            </button>   
      </ButtonGroup>

       <ButtonGroup size="small" aria-label="Small button group">
       <button
                                                className="btn btn-info m-1"
                                               onClick={navigateToRegistereduserstrash} 
                                            >
                                          Registered User Restore
                                            </button>
      </ButtonGroup> 

       <ButtonGroup size="small" aria-label="Small button group">
       <button
                                                className="btn btn-primary m-1"
                                                onClick={navigateToCustomertrash} 
                                            >
                                                Customer Restore
                                            </button>
      </ButtonGroup>

       <ButtonGroup size="small" aria-label="Small button group">
           <button
                                                className="btn btn-info m-1"
                                               onClick={navigateToproductionlinetrash} 
                                            >
                                            Registered System Restore
                                            </button>
      </ButtonGroup>
      <br/>
      <hr/>       
    </>
    )
};

export default TrashSection;