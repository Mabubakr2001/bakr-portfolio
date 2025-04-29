export default function InputField({labelFor, labelText, inputType, isRequired = undefined, isReadOnly = undefined}) {
  return (
    <div>
      <label htmlFor={labelFor} className="block text-[1.7rem] mb-1.5">{labelText}</label>
      <input type={inputType} id={labelFor} {...(isRequired ? { required: true } : {})} aria-required={isRequired ? "true" : "false"} {...(isReadOnly ? { readOnly: true } : {})} aria-readonly={isReadOnly ? "true" : "false"} name={labelFor} className="w-full border border-gray-400 rounded py-4 px-5 text-[1.7rem]"/>
    </div>
  )
}
