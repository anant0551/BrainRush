import React from "react";
import { assets } from "../assets/assets";

const Result = ({ score, total }) => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center items-center text-center  p-6  max-w-md mx-auto">
      
      {/* Congratulations Message */}
      <h2 className="text-xl font-bold text-gray-900">🎉 Congratulations! 🎉</h2>

      {/* Top Icon / Decoration */}
      <div className="absolute top-14 w-60 h-60 overflow-visible">
        <img src={assets.result2} alt="Icon" className="w-full h-full object-contain" />
      </div>

      {/* Main Quiz Finished Illustration */}
      <div className="relative mt-48">
        <img className="w-full  max-w-xs" src={assets.main} alt="Quiz Finished" />
        <h2 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">
          QUIZ FINISHED!  
        <span className="text-lg mt-2"> <br />{score} / {total}</span>
        </h2>
      </div>

      {/* Congratulatory Message */}
      <p className="px-4 py-2 text-md font-medium bg-yellow-200 text-gray-900 rounded-lg shadow">
      Congratulations on your achievement! Your hard work and dedication have truly paid off. Wishing you continued success in all your future endeavors.      </p>

      {/* Decorative Elements */}

      {/* Restart Button */}
      
     <a href="#_" onClick={() => window.location.reload()} className="relative inline-block px-5 py-3  text-center overflow-hidden font-medium text-black bg-gray-500 border border-gray-100 rounded-lg shadow-inner group ">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Restart Quiz</span>
      </a>
      


    </div>
  );
};

export default Result;
