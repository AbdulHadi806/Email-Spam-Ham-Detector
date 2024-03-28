import React, { useState } from 'react'
import CreateMailPopup from '../CreateMail/CreateMailPopup'
import Btn from '../Common/Btn';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className='flex justify-between items-center w-[86%]'>
            <div>
                <a href="#">Abdul Haadi</a>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className="text-3xl font-bold">
                    Mail Predictor (Spam or Ham)
                </h1>
                <span className='text-md block pt-2 font-semibold'>Machine learning + Django + React</span>
            </div>
            <div>
                <Btn handler={togglePopup} text={"Create Mail"} />
                <div className='relative'>
                    {isOpen && <CreateMailPopup togglePopup={togglePopup} />}
                </div>
            </div>
        </div>
    )
}

export default Header
