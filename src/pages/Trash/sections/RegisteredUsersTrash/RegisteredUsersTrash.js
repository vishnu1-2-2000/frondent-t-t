
import React, { useEffect, useState } from 'react';

import RegisteredUsersTrashAfterLoginCheck from './RegisteredUsersTrashAfterLoginCheck';
import Loading from '../../../../components/Common/Loading';
import { useNavigate } from "react-router";

const RegisteredUsersTrash = () => {

    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
// alert(window.localStorage.getItem('loggedInUsername'))
    useEffect(() => {     
      if(window.localStorage.getItem('loggedInUsername') != null) {
        setSelectedDIV(<RegisteredUsersTrashAfterLoginCheck/>);
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

export default RegisteredUsersTrash;


