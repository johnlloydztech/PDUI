import React, { useState, useEffect } from 'react';
import '../style/dashboard.css';
import { MdOutlineWaterDrop} from "react-icons/md";
import { FaFan } from "react-icons/fa";
import { RiSettings2Line } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";


import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../firebaseconfig';

const Dashboard = () => {
  const [temp, setTemp] = useState(null);
  const [moisture, setMoisture] = useState(null);
  const [pH, setpH] = useState(null);
  const [fan, setFan] = useState(null);
  const [motor, setMotor] = useState(null);


  const db = getDatabase(app);
  const tempRef = ref(db, 'Data/Temperature'); //Temperature

  useEffect(() => {
    onValue(tempRef, (snapshot) => {
      const data = snapshot.val();
      setTemp(data);
    });
  }, []);

  const moistureRef = ref(db, 'Data/Moisture'); // Moisture

  useEffect(() => {
    onValue(moistureRef, (snapshot) => {
      const data = snapshot.val();
      setMoisture(data);
    });
  }, []);

  const pHRef = ref(db, 'Data/pH'); // pH

  useEffect(() => {
    onValue(pHRef, (snapshot) => {
      const data = snapshot.val();
      setpH(data);
    });
  }, []);

  const fanRef = ref(db, 'Data/Exhaust_Fan'); // Exhaust Fan

  useEffect(() => {
    onValue(fanRef, (snapshot) => {
      const data = snapshot.val();
      setFan(data);
    });
  }, []);

  const motorRef = ref(db, 'Data/MOTOR'); // Motor

  useEffect(() => {
    onValue(motorRef, (snapshot) => {
      const data = snapshot.val();
      setMotor(data);
    });
  }, []);



  return (
    <div>
      <div className="home-container">

        <div className="box">

          <div className="box-icon">
            <FaTemperatureHigh />
          </div>
          <div className="box-data">
            <span>Temperature</span>
            <h1>{temp}</h1>
          </div>

        </div>

        <div className="box">

          <div className="box-icon">
            <MdOutlineWaterDrop/>
          </div>
          <div className="box-data">
            <span>Moisture</span>
            <h1>{moisture}</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <FaTemperatureHigh />
          </div>
          <div className="box-data">
            <span>pH</span>
            <h1>{pH}</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
          <FaFan/>
          </div>
          <div className="box-data">
            <span>Fan</span>
            <h1>{fan}</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <RiSettings2Line/>
          </div>
          <div className="box-data">
            <span>Motor</span>
            <h1>{motor}</h1>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
