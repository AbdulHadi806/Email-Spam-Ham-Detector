import React from 'react'

const Btn = ({handler, text}: {handler: () => void; text: string}) => {
    return (
        <button onClick={handler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] py-2 px-4 rounded">
            {text}
        </button>
    )
}

export default Btn
