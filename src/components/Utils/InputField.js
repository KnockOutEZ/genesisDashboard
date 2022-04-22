const InputField = (props) => {
    return ( 
        <div className={`w-full lg:w-`+props.width +` px-4`}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {props.FieldName}
                  </label>
                  <input
                    type={props.type}
                    className={"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"}
                    value={props.value}
                  />
                </div>
              </div>
     );
}
 
export default InputField;