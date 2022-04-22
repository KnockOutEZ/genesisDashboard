import React from "react";
import InputField from "./InputField";
// components

export default function Form(props) {
  console.log(props)

  let value = [
    {
      name: "*Username",
      type: "text",
      value:props.formElements.name,
      width:"6/12",
    },
    {
      name: "*Email",
      type: "email",
      value:props.formElements.email,
      width:"6/12",
    },
    {
      name: "Age",
      type: "text",
      value:props.formElements.age,
      width:"6/12",
    },
    {
      name: "What Do You Do",
      type: "text",
      value:props.formElements.what_do_you_do,
      width:"6/12",
    },
    {
      name: "Your Moto/Title",
      type: "textarea",
      value:props.formElements.moto,
      width:"6/12",
    },
    {
      name: "Contact Number",
      type: "text",
      value:props.formElements.phone_number,
      width:"6/12",
    },
    {
      name: "Profile Image (link)",
      type: "text",
      value:props.formElements.profile_img,
      width:"6/12",
    },
    {
      name: "profile_icon (link/anchor tag)",
      type: "text",
      value:props.formElements.value,
      width:"6/12",
    },
    {
      name: "New Password",
      type: "password",
      value:"",
      width:"12/12",
    },

    {
      name: "About You",
      type: "textarea",
      value:props.formElements.about_you,
      width:"12/12",
    }
  ];


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              {props.formName}
            </h6>
            <div>
              <button
                onClick={props.HandleSaveFunc}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Save
              </button>
              <button
                onClick={props.HandleDeleteFunc}
                className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              {props.formTitle}
            </h6>
            <div className="flex flex-wrap">
            {
              value.map((item,i) => <InputField key={i}
              FieldName={item.name}
              type={item.type}
              value={item.value}
              width={item.width}
            /> )
            }
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
