import { useState, useEffect } from "react";
import SettingComponent from "components/Utils/SettingComponent";
import axios from 'axios';
import authHeader from '../../components/services/auth-header';
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";

const Settings = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get(API_URL + 'users/'+localStorage.getItem('userid'), { headers: authHeader() })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }, []);

  function editUserData() {
    return axios.put(API_URL + 'users/'+localStorage.getItem('userid'), { headers: authHeader() });
  }

  function deleteUserData() {
    axios.delete(API_URL + 'users/'+localStorage.getItem('userid'), { headers: authHeader() });
  }

  return (
    userData && <>
    <SettingComponent
    formWidth="8/12"
      formName={"My Account"}
      formTitle={"Your Infos"}
      formElements={userData}
      HandleSaveFunc={editUserData}
      HandleDeleteFunc={deleteUserData}
    ></SettingComponent>
    </>
  );
}

export default Settings;