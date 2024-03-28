import React from 'react'

const InputField = ({subjectOnChangeHandler}: {subjectOnChangeHandler: (text:string) => void}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Subject
      </label>
      <input onChange={(e) => subjectOnChangeHandler(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Add your Subject" />
    </div>
  )
}

export default InputField
