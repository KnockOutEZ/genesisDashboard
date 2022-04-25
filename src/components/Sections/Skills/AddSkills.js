import SkillsForm from "./SkillsForm";
import {useState,useEffect} from "react";
import axios from 'axios';
import authHeader from "components/services/auth-header";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";

const AddSkills = () =>{
    const [mySkills, setMySkillsData] = useState();
  useEffect(() => {
    axios.get(API_URL + 'skills/15', { headers: authHeader() })
      .then((response) => {
        setMySkillsData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }, []);

  function AddASkill(){
    axios.post(API_URL + 'skills',{mySkills}, { headers: authHeader() })
      .then((response) => {
        setMySkillsData(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }

    return(
        <>
        <SkillsForm formWidth={"12/12"} formName={"Create New Skill"} formTitle={"Skill Infos"} formElements = {mySkills} handleSubmit={AddASkill}/>
        </>
    )
}

export default AddSkills;