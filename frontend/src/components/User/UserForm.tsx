import React, { useEffect, useState } from 'react'
import Popup from '../Common/Popup'
import InputField from '../Common/InputField'
import Btn from '../Common/Btn'
import { toast } from 'react-toastify'
import { useUserContext } from '../../context/UserContenxt'

const url: string = "http://127.0.0.1:8000/api"

const UserForm = ({ togglePopup }: { togglePopup: () => void }) => {


  const { loginUser } = useUserContext()

  const [username, setUsername] = useState("")
  const [actionType, setActionType] = useState("Login")
  const subjectOnChangeHandler = (text: string) => {
    setUsername(text)
  }

  const submitSignupHandler = async () => {
    const subjectData = {
      email: username + '@dev.com',
      password: 'dev',
      username: username,
    };
    try {
      const response = await fetch(`${url}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subjectData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit user');
      }
      togglePopup()
      toast.success('User submitted!');
    } catch (error) {
      if (typeof error === 'string') {
        console.error(error);
      } else if (error instanceof Error) {
        console.error(error.message || "Something went wrong");
        toast.error(error.message || "Something went wrong");
      } else {
        console.error("An unknown error occurred");
        toast.error("An unknown error occurred");
      }
    }
  }


  const submitLoginHandler = async () => {
    const subjectData = {
      email: `${username}@dev.com`,
      password: 'dev',
      username: username,
    };
    try {
      const response = await loginUser(subjectData)
      if(response) {
        togglePopup()
      }
      
    } catch (errr) {
      console.log(errr)
    }
  }

  return (
    <Popup togglePopup={togglePopup}>
      <h2 className="text-xl font-semibold mb-4">User signup/login form</h2>
      <div className='flex justify-between'>
        <button className={`w-full flex justify-center ${actionType === "Login" ? 'bg-gray-800 text-white' : 'bg-gray-200 '} `} onClick={() => setActionType("Login")}>Login</button>
        <button className={`w-full flex justify-center bg-gray-200  ${actionType === "Signup" ? 'bg-gray-800 text-white' : 'bg-gray-200 '}`} onClick={() => setActionType("Signup")}>Signup</button>
      </div>
      <InputField label={"Username"} subjectOnChangeHandler={subjectOnChangeHandler} />
      {actionType === "Login" ?
        <Btn handler={submitLoginHandler} text={"Send"} />
        :
        <Btn handler={submitSignupHandler} text={"Send"} />
      }

    </Popup>
  )
}

export default UserForm
