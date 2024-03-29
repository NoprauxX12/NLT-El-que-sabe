/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useLayoutEffect, useState } from "react";
import UserData from "../../services/user";

function ProfileScreen(){
    const params = new URLSearchParams(window.location.search);
    const [user, setUser]= useState({});
    const id= params.get("id");

    useLayoutEffect(()=>{
        document.title="freelancer-profile";
        const getUserData= async ()=>{
            UserData.fetchFreelancerById(id, (res)=>{
                setUser(res);
            });
        }

        getUserData();
    },[id]);
    
    return (
      <>
        <div className="main-container">
          <div className="header-container">
            <h1>{user.name}</h1>
          </div>
          <div className="content-container">
            <div className="left-container">
            {!user.profilePhoto? (<>
                        <img className="profile-image" id="profile-image" src="/images/defaultUser.png" alt="usuario por defecto" />
                    </>):(
                        <>
                        <img id="profile-image" src={`data:image/jpeg;base64,${user.profilePhoto}`} className="profile-image" alt="Imagen de Perfil" style={{maxHeight: "30em"}}/>
                        </>
                    )}

            </div>
            <div className="mid-container">
              <div className="content-element">
                <label htmlFor="profession">Profesión:</label>{" "}
                <input
                  readOnly
                  type="text"
                  id="profession"
                  className="profession-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.knowledge}
                />
              </div>
              <div className="content-element">
                <label htmlFor="description">Descripción:</label>
                <textarea
                  readOnly
                  id="description"
                  className="description-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.description}
                />
              </div>
              <div className="content-element">
                <label htmlFor="rating">Puntuación y reseñas:</label>
              </div>
              <div className="content-element">
                <h1>4.8/5.0</h1>
                <a href="#">Ver 182 reseñas</a>
              </div>
            </div>
            <div className="right-container">
              <div className="content-element">
                <label htmlFor="phone">Teléfono:</label>{" "}
                <input
                  readOnly
                  type="tel"
                  id="phone"
                  className="phone-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.cellphone}
                  size={10}
                />
              </div>
              <div>
                <label htmlFor="email">Correo Electrónico:</label>
              </div>
              <div className="content-element">
                <input
                  readOnly
                  type="email"
                  id="email"
                  className="email-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.email}
                />
              </div>
              <div className="content-element">
                <label htmlFor="academic-info">Información Académica:</label>
                <textarea
                  readOnly
                  id="academic-info"
                  className="academic-info-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.academicInfo}
                />
              </div>
              <div className="content-element">
                <label htmlFor="important-info">Información Importante:</label>
                <textarea
                  readOnly
                  id="important-info"
                  className="important-info-box inside-color"
                  style={{ cursor: "default" }}
                  defaultValue={user.importantInfo}
                />
              </div>
            </div>
          </div>
          <div className="portfolio-container">
            <label htmlFor="portfolio">Portafolio:</label>
          </div>
        </div>
      </>
    );
}

export default ProfileScreen;