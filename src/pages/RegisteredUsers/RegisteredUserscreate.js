import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import RegisteredUsersCreateAfterLoginCheck from "./sections/RegisteredUsersCreateAfterLoginCheck";
// import Loading from "../Common/Loading";
import RegisteredUsersCreateAfterLoginCheck from "./sections/RegisteredUsersCreateAfterLoinCheck";
import Loading from "../../components/Common/Loading";

const RegisteredUserscreate = () => {

  const navigate = useNavigate(); 

  const [selectedDIV_state, setSelectedDIV_state] = useState(<Loading/>);

  useEffect(() => {
    if(window.localStorage.getItem('loggedInUsername') != null) {
      setSelectedDIV_state(<RegisteredUsersCreateAfterLoginCheck/>);
    }
    else {
        navigate("/");
    }
  }, []);

  return (
    <>
      {selectedDIV_state}
    </>
  );
};

export default RegisteredUserscreate;