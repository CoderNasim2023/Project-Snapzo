import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Install <br /> Snapzo App Now 
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="img1" />
        <img src={assets.app_store} alt="img2" />
      </div>
    </div>
  );
}

export default AppDownload