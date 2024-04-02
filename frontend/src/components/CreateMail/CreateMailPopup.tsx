import React, { useState } from 'react';
import InputField from '../Common/InputField';
import Btn from '../Common/Btn';
import { toast } from 'react-toastify';
import Popup from '../Common/Popup';

const url: string = "http://127.0.0.1:8000/api"

const CreateMailPopup = ({ togglePopup }: { togglePopup: () => void }) => {

    const [subject, setSubject] = useState("")

    const submitMailHandler = async () => {
        const subjectData = {
            subject: subject,
            User: 0
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
        <Popup togglePopup={togglePopup}>
            <h2 className="text-xl font-semibold mb-4">Create Mail</h2>
            <InputField label={"Subject"} subjectOnChangeHandler={subjectOnChangeHandler} />
            <Btn handler={submitMailHandler} text={"Send"} />
        </Popup>
    );
};

export default CreateMailPopup;
