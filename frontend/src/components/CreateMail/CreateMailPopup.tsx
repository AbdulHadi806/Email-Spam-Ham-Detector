import React, { useState } from 'react';
import InputField from './InputField';
import Btn from '../Common/Btn';
import { toast } from 'react-toastify';

const url: string = "http://127.0.0.1:8000/api"

const CreateMailPopup = ({ togglePopup }: { togglePopup: () => void }) => {

    const [subject, setSubject] = useState("")

    const submitMailHandler = async () => {
        const subjectData = {
            subject: subject
        };
        try {
            const response = await fetch(`${url}/mail/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subjectData)
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit mail');
            }
            togglePopup()
            toast.success('Mail send!');
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
    
    const subjectOnChangeHandler = (text: string) => {
        setSubject(text)
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className="relative p-8 bg-white rounded shadow-lg w-96">
                <button onClick={togglePopup} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-semibold mb-4">Create Mail</h2>
                <InputField subjectOnChangeHandler={subjectOnChangeHandler} />
                <Btn handler={submitMailHandler} text={"Send"} />
            </div>
        </div>
    );
};

export default CreateMailPopup;
