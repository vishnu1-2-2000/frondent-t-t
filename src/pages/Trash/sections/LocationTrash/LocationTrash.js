
import React, { useEffect, useState } from 'react';

import LocationTrashAfterLoginCheck from './LocationTrashAfterLoginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const LocationTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<LocationTrashAfterLoginCheck/>);
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

export default LocationTrash;


