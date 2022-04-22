import React from "react";

// components

import Form from "components/Utils/Form";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <Form
            width="6/12"
            // formName={value.formName}
            // formTitle={value.formTitle}
            // HandleSaveFunc={HandleSaveFunc}
            // HandleDeleteFunc={HandleDeleteFunc}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
