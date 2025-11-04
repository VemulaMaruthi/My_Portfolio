import React from "react";
import myPhoto from "../assets/photo3.jpg"; // <-- import your image

function ProfilePhoto() {
  return (
    <div className="flex justify-center items-center pl-5">
      <div
        className="w-[400px] h-[533px] rounded-full shadow-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${myPhoto})`,
        }}
      ></div>
    </div>
  );
}

export default ProfilePhoto;
