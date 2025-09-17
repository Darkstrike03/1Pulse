import React from "react";
import USection1 from "./USection1";
import USection2 from "./USection2";
import USection3 from "./USection3";
import USection4 from "./USection4";

const UserLayout = ({ onLogout }) => {
  return (
    <div>
        <USection1 />
        <USection2 />
        <USection3 />
        <USection4 />
    </div>
  );
};

export default UserLayout;