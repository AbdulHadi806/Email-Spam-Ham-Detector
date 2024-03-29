import React, { useEffect, useState } from 'react';
import Tabs from './Tabs';

interface Mail {
  id: number;
  subject: string | null;
  isHam: boolean;
}

interface MailList {
  mails: Mail[];
}

const url: string = "http://127.0.0.1:8000/api";

const MailsMainComp = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [mails, setMails] = useState<MailList | null>(null);

  const currentTabHandler = (index: number): void => {
    setCurrentTab(index);
  };

  const getMails = async () => {
    try {
      const response = await fetch(`${url}/mail/list/`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch mails');
      }

      const data: MailList = await response.json();
      setMails(data);
      console.log(data);
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const update_mail_isHam_handler = async (id: number) => {
    try {
      const response = await fetch(`${url}/model/retrain/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch mails');
      }
    } catch (error) {
      console.error(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  useEffect(() => {
    getMails();
  }, []);
  
  return (
    <div className='w-[25%]'>
      <Tabs currentTabHandler={currentTabHandler} currentTab={currentTab} />
      <ul className='pt-8 list-disc'>
        {mails && mails.mails.map((item: Mail, index: number) => {
          if ((currentTab === 1 && !item.isHam) || (currentTab === 0 && item.isHam)) {
            return <li key={item.id} className='max-w-[500px] bg-gray-50 leading-7'>{item.subject} <button onClick={(e)=>{e.preventDefault();update_mail_isHam_handler(item.id)}} className='bg-gray-200 px-1 ml-2'>Undo</button></li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default MailsMainComp;
