import { useState } from 'react';
import './Alert.css';

function Alert() {
    const [showalert,setShowAlert] = useState(false);
     console.log("showalert",true)


    return (
        <div className='container'>
        {
             showalert ? 
             <div className='alert'> 
             <div className='message'>
             Success
             </div> 
            <button className='btn btn-alert' onClick={ () =>  setShowAlert(false)}>OK</button>
              </div> :
              null
        }
          
       <div className='btn-wrapper'>
         <button className='btn' onClick={ () => setShowAlert(true)} >Click to get alert</button>
       </div>
       </div>
    );
}

export default Alert;