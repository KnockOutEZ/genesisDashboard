
const AddSkillsForm = (props) => {
  let formData = {}
  const handleSubmit = (event) => {
    event.preventDefault()
    let data = formData
    data.skill_name = event.target.elements.skill_name.value
    data.skill_title = event.target.elements.skill_title.value
    data.skill_progress = event.target.elements.skill_progress.value
    data.skill_description = event.target.elements.skill_description.value
    data.skill_links = event.target.elements.skill_links.value
    data.skill_icon = event.target.elements.skill_icon.value
    data.user_id = JSON.parse(localStorage.getItem('userid'))
    console.log(data)
    props.handleSubmit(data)
  }

  return (
      <div className="flex flex-wrap">
        <div className={`w-full lg:w-` + props.formWidth + ` px-4`}>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  {props.formName}
                </h6>
                <div>
                  <button
                    form="skills-add-form"
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                  {/* <button
                    onClick={props.HandleDeleteFunc}
                    className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="skills-add-form" onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  {props.formTitle}
                </h6>
                <div className="flex flex-wrap">
                  <div className={`w-full lg:w-` + "6/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Skill Name
                      </label>
                      <input
                        type="text"
                        className={
                          "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        }
                        name="skill_name"
                        // defaultValue={props.formElements.skill_name}
                      />
                    </div>
                  </div>
                  <div className={`w-full lg:w-` + "6/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Skill Title
                      </label>
                      <input
                        type="text"
                        className={
                          "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        }
                        name="skill_title"
                        // defaultValue={props.formElements.skill_title}
                      />
                    </div>
                  </div>

                  <div className={`w-full lg:w-` + "6/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Progress
                      </label>
                      <input
                        type="text"
                        className={
                          "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        }
                        name="skill_progress"
                        // defaultValue={props.formElements.skill_progress}
                      />
                    </div>
                  </div>
                  <div className={`w-full lg:w-` + "6/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Skill Link
                      </label>
                      <input
                        type="text"
                        className={
                          "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        }
                        name="skill_links"
                        // defaultValue={props.formElements.skill_links}
                      />
                    </div>
                  </div>
                  <div className={`w-full lg:w-` + "12/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Skill Image/Icon (link)
                      </label>
                      <input
                        type="text"
                        className={
                          "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        }
                        name="skill_icon"
                        // defaultValue={props.formElements.skill_icon}
                      />
                    </div>
                  </div>
                  <div className={`w-full lg:w-` + "12/12" + ` px-4`}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Skill Description
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="skill_description"
                        // defaultValue={props.formElements.skill_description}
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddSkillsForm;
