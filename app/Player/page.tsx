"use client";

import React from "react";
import PlayerStats from "./PlayerStats"; // Import the PlayerStats component
import DarkSection from "./DarkSection"; // Import the DarkSection component

const Home: React.FC = () => {
  return (
    <>
      {/* Gradient Background Section */}
      <div className="w-screen min-h-[30rem] bg-gradient-to-r from-[#6e41a8] via-[#842d79] to-[#dd8258] flex items-center justify-center">
        <PlayerStats /> {/* Render the PlayerStats component */}
      </div>
      <DarkSection /> {/* Render the DarkSection component */}
    </>
  );
};

export default Home;