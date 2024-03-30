
import React, { useEffect, useState } from 'react';

import ProductTrashAfterLoginCheck from './ProductTrashAfterLoginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const ProductTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<ProductTrashAfterLoginCheck/>);
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

export default ProductTrash;


