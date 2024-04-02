import React, { useState } from 'react'
import CreateMailPopup from '../CreateMail/CreateMailPopup'
import Btn from '../Common/Btn';
import UserForm from '../User/UserForm';

const Header = () => {
    const [isMailPoupupOpen, setMailPoupupOpen] = useState<boolean>(false);
    const [isUserFormOpen, setIsUserFormOpen] = useState<boolean>(false)
    const toggleMailPopup = () => {
        setMailPoupupOpen(!isMailPoupupOpen);
    };

    const toggleUserFormPopup = () => {
        setIsUserFormOpen(!isUserFormOpen);
    }

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
            <div className='flex gap-2'>
                <div>
                    <Btn handler={toggleMailPopup} text={"Create Mail"} />
                    <div className='relative'>
                        {isMailPoupupOpen && <CreateMailPopup togglePopup={toggleMailPopup} />}
                    </div>
                </div>
                <div>
                    <Btn handler={toggleUserFormPopup} text={"User"} />
                    <div className='relative'>
                        {isUserFormOpen && <UserForm togglePopup={toggleUserFormPopup} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
