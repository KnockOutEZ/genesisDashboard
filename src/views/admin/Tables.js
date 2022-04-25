import {useState,useEffect} from "react";
import CardTable from "components/Cards/CardTable.js";
import axios from 'axios';
import authHeader from "components/services/auth-header";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";
// components


const Tables = () => {
  const [mySkills, setMySkillsData] = useState([]);

  useEffect(() => {
    axios.get(API_URL + 'myskills', { headers: authHeader() })
      .then((response) => {
        setMySkillsData(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }, []);

  function setSkills(arg){
    setMySkillsData(arg)
  }

  function deleteMySkill(id){
    axios.delete(API_URL + 'skills/' + id, { headers: authHeader() })
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }


  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable color= {"light"} getData={mySkills} deleteMySkill={deleteMySkill}/>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

export default Tables;