import React from "react";
import { Footer, Navbar, ProfilePost } from "../compoents/UL";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:[200px] mt-8 flex md:flex-row flex-row-reverse">
        {/* left */}
        <div className="flex flex-col md:w-[70%] w-full">
          <ProfilePost />
        </div>
        {/* right */}
        <div className="right"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
