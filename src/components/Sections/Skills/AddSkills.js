import {useState,useEffect} from "react";
import SkillsForm from "./AddSkillsForm.jsx";
import axios from 'axios';
import authHeader from "../../services/auth-header";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";

const AddSkills = () =>{
    const [mySkills, setMySkillsData] = useState();
  // useEffect(() => {
  //   axios.get(API_URL + 'skills', { headers: authHeader() })
  //     .then((response) => {
  //       setMySkillsData(response.data)
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log("Error is: " + error);
  //     });
  // }, []);

  function AddASkill(arg){
    console.log(arg)
    axios.post(API_URL + 'skills',arg, { headers: authHeader() })
      .then((response) => {
        // setMySkillsData(response.data)
      })
      .catch((error) => {
        console.log("Error is: " + error);
      });
  }

    return(
        <div>
        <SkillsForm formWidth={"12/12"} formName={"Create New Skill"} formTitle={"Skill Infos"} handleSubmit={AddASkill}/>
        </div>
    )
}

export default AddSkills;