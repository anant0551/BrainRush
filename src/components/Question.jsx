import { useEffect, useState } from "react";
import React from "react";
import { assets } from "../assets/assets";

const Question = ({ index, question, selectedOption, onSelectOption, onNext, isLastQuestion }) => {
  const [progress, setProgress] = useState(0);
  const [clicked, setClicked] = useState(null); // Track clicked animation state


  useEffect(() => {
    setTimeout(() => {
      setProgress(100); // Start the animation
    }, 100);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto px-2 py-2  h-[650px] flex flex-col justify-between">
      
      {/* Progress Bar & Question Count */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded-md">Question {index + 1}/10</span>
          
        </div>
        <div className="w-full bg-gray-300 rounded-full h-[3px] overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-[3000ms]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div>
        <h2 className="text-md font-semibold mt-4">{question.description}</h2>
      </div>

      {/* Options */}
      <div className="flex ml-11 flex-col text-sm space-y-1">
        {question.options.map((option) => (
          <input
            key={option.id}
            type="text"
            value={option.description}
            readOnly
            className={`w-full px-4 py-1 border rounded-md cursor-pointer transition-all duration-300 ease-in-out 
              ${selectedOption?.id === option.id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}
            `}
            onClick={() => onSelectOption(option)}
          />
        ))}
      </div>

      {/* Submit Button */}
      
      <button
        onClick={onNext}
        disabled={!selectedOption}
        class="relative left-52 flex h-[50px]  w-40 items-center rounded-full justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
      >
       <span class="relative z-10">Next</span>
      </button>

      {/* Illustration or Video */}
      <div className="flex justify-center items-baseline ">
        <video className="w-80 h-72 object-cover" autoPlay loop muted playsInline>
          <source src={assets.test} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Question;
