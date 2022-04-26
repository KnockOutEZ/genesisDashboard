import {useState,useEffect} from "react";
import SkillsCardTable from "components/Sections/Skills/SkillsCardTable.js";
import EducationCardTable from "components/Sections/Education/EducationCardTable.js";
import axios from 'axios';
import authHeader from "components/services/auth-header";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";
// components


const Tables = () => {
  const [mySkills, setMySkillsData] = useState([]);
  const [MyEducation, setMyEducationData] = useState([]);

  useEffect(() => {
    axios.get(API_URL + 'myskills', { headers: authHeader() })
      .then((response) => {
        setMySkillsData(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });

      axios.get(API_URL + 'myeducation', { headers: authHeader() })
      .then((response) => {
        setMyEducationData(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }, []);

  function deleteMySkill(id){
    axios.delete(API_URL + 'skills/' + id, { headers: authHeader() })
      .then((response) => {
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }

  function deleteMyEducation(id){
    axios.delete(API_URL + 'education/' + id, { headers: authHeader() })
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
          <SkillsCardTable color= {"light"} getData={mySkills} deleteMySkill={deleteMySkill}/>
          <EducationCardTable color= {"light"} getData={MyEducation} deleteMySkill={deleteMyEducation}/>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

export default Tables;