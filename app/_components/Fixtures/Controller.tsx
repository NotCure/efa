import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Controller = () => {
  return (
    <div className="w-full md:w-96 h-14 flex md:justify-start justify-center items-start md:px-0 px-9">
      <div className="w-full p-2 bg-[#1d1d1c] rounded-sm flex justify-between items-center">
        <button className="w-10 h-10 hover:text-white text-[#1e1e1d] transition-all duration-300 bg-[#7c51ae] hover:bg-transparent border border-transparent hover:border-[#7c51ae] rounded-sm flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-grow h-9 text-center">
          <div className="text-[#f7f7f6] text-lg font-normal leading-9">
            today
          </div>
        </div>
        <button className="hover:text-white text-[#1e1e1d] duration-300 w-10 h-10 transition-all bg-[#fb6209] hover:bg-transparent border border-transparent hover:border-[#fb6209] rounded-sm flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Controller;