import Header from './components/Header/Header';
import MailsMainComp from './components/Mails/MailsMainComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='flex justify-center flex-col items-center pt-10'>
      <Header />
      <MailsMainComp />
      <ToastContainer />
    </div>
  );
}

export default App;
