import React , { useState }from 'react'
import '../style/control.css'
const Control = () => {
  const [button1On, setButton1On] = useState(false);
  const [button2On, setButton2On] = useState(false);
  const [button3On, setButton3On] = useState(false);

  const handleButton1Click = () => {
    setButton1On(!button1On);
  };

  const handleButton2Click = () => {
    setButton2On(!button2On);
  };

  const handleButton3Click = () => {
    setButton3On(!button3On);
  };

  return (
    <div className="toggle-switch">
      <button className={`button ${button1On ? 'on' : 'off'}`} onClick={handleButton1Click}>
      </button>
      <button className={`button ${button2On ? 'on' : 'off'}`} onClick={handleButton2Click}>
      </button>
      <button className={`button ${button3On ? 'on' : 'off'}`} onClick={handleButton3Click}>
      </button>
    </div>
  );
}

export default Control