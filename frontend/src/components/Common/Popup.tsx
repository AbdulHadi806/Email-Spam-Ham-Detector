import React, { ReactNode, useState } from 'react';
import InputField from '../Common/InputField';
import Btn from '../Common/Btn';
import { toast } from 'react-toastify';

const url: string = "http://127.0.0.1:8000/api"

interface PopupProps {
    togglePopup: () => void;
    children: ReactNode; 
}

const Popup = ({ togglePopup, children }: PopupProps) => {

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"></div>

            <div className="relative p-8 bg-white rounded shadow-lg w-96">
                <button onClick={togglePopup} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
