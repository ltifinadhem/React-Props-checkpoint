import React from "react";
import PropTypes from "prop-types";

 function Profile(props) {
  function handleClick() {
    alert(`${props.name}`);
  }
  return (
    <div>
      <div className="flex-container">
        <div onClick={handleClick} className="flex-container" id="profile">
          {props.children}
          <div>
            <h2 style={{ color:"orange" ,fontSize:"29px" }}>{props.name}</h2>
            <p className="title">Bio</p>
            <p style={{ fontSize: "20px" }}>{props.bio}</p>
            <p className="title">Profession</p>
            <p style={{ fontSize: "20px" }}>{props.profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile

Profile.defaultProps = {
    name:"Tarak Dhiab" ,
      bio:" né le 15 juillet 1954 à Tunis, est un footballeur et homme politique tunisien" ,
     profession:"footballeur",
};

Profile.propType = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
};