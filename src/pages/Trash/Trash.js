
import React, { useEffect, useState } from 'react';

import TrashAfterLoginCheck from './TrashAfterLoginCheck';
import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";

const Trash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<TrashAfterLoginCheck/>);
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

export default Trash;


