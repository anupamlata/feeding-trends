import './Toggle.css';
import { useState } from 'react';

function Toggle() {
    const [isvisible,setIsVisible] = useState(true);

 const onToggleClick = () => {
    setIsVisible(!isvisible);
  }
 
  return (
    <div className="toggle">
      {
        isvisible ?
        <p className='para'>Environmental pollution is proved to be a major threat and their effects have various effects on living organisms including risks in plants. In most cases, pollutants change the plant growth, development, physiological.</p>
        :
    null
      }
       <button className='btn' onClick={onToggleClick}>Toggle Hide</button>
       </div>
  );
}
export default Toggle;