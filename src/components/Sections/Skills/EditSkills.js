import {useState,useEffect} from "react";
import AddSkillsForm from "./AddSkillsForm.jsx";
import axios from 'axios';
import authHeader from "../../services/auth-header";
import { useHistory } from "react-router-dom";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/";


const AddSkills = () =>{
  let history = useHistory()	
    const [mySkills, setMySkillsData] = useState();
    const [error, seterrorData] = useState();
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
        history.push("/admin/tables")
      })
      .catch((error) => {
        seterrorData(error.response.data.error)
        console.log(error.response.data.error)
      });
  }

    return(
        <div>
        <AddSkillsForm formWidth={"12/12"} formName={"Create New Skill"} formTitle={"Skill Infos"} handleSubmit={AddASkill} errormsg={error}/>
        </div>
    )
}

export default AddSkills;