
import React, { useEffect, useState } from 'react';

import CustomerTrashAfterLoginCheck from './CustomerTrashAfterLoginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const CustomerTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<CustomerTrashAfterLoginCheck/>);
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

export default CustomerTrash;


