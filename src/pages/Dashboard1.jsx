import React from 'react';
import '../style/dashboard.css';
import { MdOutlineWaterDrop} from "react-icons/md";
import { FaFan } from "react-icons/fa";
import { RiSettings2Line } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";

const Dashboard = () => {
  const temp="45°C";
  const moisture="50%";
  const fan="OFF";
  const motor="OFF";
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
            <FaFan />
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