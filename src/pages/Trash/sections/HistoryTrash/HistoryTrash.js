
import React, { useEffect, useState } from 'react';

import HistoryTrashAfterLoginCheck from './HistoryTrashAfterLoginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const HistoryTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<HistoryTrashAfterLoginCheck/>);
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

export default HistoryTrash;


