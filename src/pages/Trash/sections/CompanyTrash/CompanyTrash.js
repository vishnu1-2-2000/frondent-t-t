
import React, { useEffect, useState } from 'react';
import CompanyTrashAfterLoginCheck from './CompanyTrashAfterLoginCheck';

import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const CompanyTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<CompanyTrashAfterLoginCheck/>);
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

export default CompanyTrash;


