import React from "react";
import InputField from "./InputField";

// components

export default function Form(props) {
  console.log(props)
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
        {/* <InputField
          FieldName={}
          type={value.type}
          value={value.value}
        /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
