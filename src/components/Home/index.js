import React,{useState} from "react";
import Login from '../Login/index';
import Signup from '../Signup/index';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export default function Home() {

 
  const [showLoginpanel, setShowLogin] = useState(false);

  const [showSignuppanel, setShowSignup] = useState(false);
  const alreadysignedIn = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
   <div className='content'  >
      <div className='headers'><button className={'btn btn-dark btn-lg'} onClick={() => setShowLogin(true)}>Sign in</button>
        <button className={'btn btn-dark btn-lg'}onClick={() => setShowSignup(true)}>Sign up</button>
       </div>
 

      <Modal show={showLoginpanel} onHide={()=>setShowLogin(false)}    animation={true}>
       
        <Login/>
        
      </Modal>
        <Modal show={showSignuppanel} onHide={()=>setShowSignup(false)}    animation={true} >
       
        <Signup alreadysignedIn={ alreadysignedIn}/>
        
      </Modal>
    </div>
  );
}
