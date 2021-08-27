import React from 'react';
import clip from "../images/clip.jpg";
import nier from "../images/nier.png";
import bayo from "../images/bayo2.png";
import osm from "../images/nscwebs.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


function Portfolio() {
//Clippendales
    
    const openPopupboxClip = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={clip} alt="Clippendales Mobile Pet salon website" />
        <p className="popup-text">Clippendales Mobile Pet Salon website created using Hostinger and Wordpress.</p>
        <b className="hyper-text">To visit</b><a className="hyper-link" onClick={() => window.open("https://clippendalesnc.com/")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Clippendales Website",
              },
            },
          });
    }

    const popupboxConfigClip = {
        titleBar: {
            enable: true,
            text: "Clippendales Website"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }
     //NCS
    
     const openPopupboxOsm = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={osm} alt="Neighborly Cleaning Services" />
      <p className="popup-text">Neighborly Cleaning Services website created with WordPress and Hostinger</p>
      <b className="hyper-text">To Visit:</b><a className="hyper-link" onClick={() => window.open("https://neighborlycleaningservices.com/", "_blank")}> Click Here</a> <br/>
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Neighborly Cleaning Services Website",
            },
          },
        });
  }

  const popupboxConfigOsm = {
  
      titleBar: {
          enable: true,
          text: "Neighborly Cleaning Services Website"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }

   //Nier 
    
   const openPopupboxNier = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={nier} alt="Nier Mock Web" />
    <p className="popup-text"> UI Design for the a Nier franchise e-shop  </p>
    <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://xd.adobe.com/view/98e22863-aad1-4c9c-b737-4c780422339c-cdb1/?fullscreen", "_blank")}> Click Here</a> <br/>
    
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Nier E-Shop",
          },
        },
      });
}

const popupboxConfigNier = {

    titleBar: {
        enable: true,
        text: "Nier E-Shop"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

     

      //Bayonetta
    
    const openPopupboxBayo = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={bayo} alt="Bayonetta 2 mock e shop" />
      <p className="popup-text"> Mock Bayonetta 2 launch site made with Adobe XD  </p>
      <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://xd.adobe.com/view/9046650a-f76b-487a-a618-2b223aee4544-c515/?fullscreen", "_blank")}> Click Here</a> <br/>
      
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Bayonetta 2 E-Shop",
            },
          },
        });
  }

  const popupboxConfigBayo = {
  
      titleBar: {
          enable: true,
          text: "Bayonetta 2 E-Shop"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Featured Work</h1>
                < div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxClip}>
                    <img className="portfolio-image" src={clip} alt="Clippendales mobile dog salon website" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                  {/*..*/}
                  <div className="portfolio-image-box" onClick={openPopupboxOsm}>
                    <img className="portfolio-image" src={osm} alt="Neighborly LCeaning Services" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>    
                
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxNier}>
                    <img className="portfolio-image" src={nier} alt=" Nier mock e shop" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>   
                 {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxBayo}>
                    <img className="portfolio-image" src={bayo} alt="Neighborly LCeaning Services" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  
              
        
            </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigClip} />
            <PopupboxContainer {...popupboxConfigOsm} />
            <PopupboxContainer {...popupboxConfigNier} />
            <PopupboxContainer {...popupboxConfigBayo} />
         
            <div id="view">
            <a href="https://github.com/ashechan" target="_blank" className="btn-main-offer">View More</a>
            </div>
        </div>
    )
}

export default Portfolio
