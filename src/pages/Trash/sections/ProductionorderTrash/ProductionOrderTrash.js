
import React, { useEffect, useState } from 'react';

import ProductionorderTrashAfterloginCheck from './ProductionorderTrashAfterloginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const ProductionOrderTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ProductionorderTrashAfterloginCheck/>);
      }
      else {
        navigate("/");
      }
    }, []);
   
    return (
       <>
          {selectedDIV}
       </>
  )
}

export default ProductionOrderTrash;


