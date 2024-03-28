import React from 'react'
import { btns } from './static'

interface tabsProps {
    currentTab: number,
    currentTabHandler: (index: number) => void
}

const Tabs = ({currentTab, currentTabHandler}: tabsProps) => {
  return (
    <>
      <ul className='flex gap-2 pt-10'>
        {btns.map((item, index) => {
            return <li key={Math.random() + Date.now()}><button className={`${index === currentTab && 'bg-gray-300'} px-2 rounded-sm text-lg`} onClick={() => currentTabHandler(index)}>{item}</button></li>
        })}
      </ul>
    </>
  )
}

export default Tabs
