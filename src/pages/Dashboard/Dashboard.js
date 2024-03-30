import React, { useEffect, useState } from 'react';

import DashbordReadAfterLogin from './sections/DashbordReadAfterLogin';


import Loading from '../../components/Common/Loading';
import { useNavigate } from "react-router";

function Dashboard() {
    const [selectedDIV, setSelectedDIV] = useState(<Loading/>);
    const navigate = useNavigate();   
                //  alert(window.localStorage.getItem('loggedInUsername'))
      useEffect(() => {     
                      if(window.localStorage.getItem('loggedInUsername') != null) {
                        setSelectedDIV(<DashbordReadAfterLogin/>);
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

export default Dashboard
