import React, { useState,useEffect } from "react";
import Quiz from "./components/Quiz";
import Ballpit from './components/Ballpit';
import { assets } from "./assets/assets";
 

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
 
  const startQuiz = () => {
    setQuizStarted(true);
  };

  const containerHeight = "400px";  // Fixed height for the container
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const newOpacity= Math.max(0,1 - (daysPassed * 0.05) ;// Delay to trigger animation
  }, []);

  return (
    <div style = {{opacity}} className={`relative min-h-screen bg-transparent overflow-hidden transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
      {/* Ballpit (Canvas) covering the full screen */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -10,  // Send it to the background
        }}
      >
        <Ballpit
          count={300}
          colors={[
            [0, 255, 0], // Green
            [0, 0, 255], // Blue
            [0, 255, 255], // Cyan
          ]}
          gravity={0.1}
          friction={0.9975}
          wallBounce={1.0}
          followCursor={true}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-center min-h-screen z-10">
        <div
          className="w-full max-w-md mx-auto flex items-center justify-center p-4 h-[650px]  bg-white rounded-3xl"
          // Set fixed height for quiz container
        >
          {!quizStarted ? (
            <div className="grid grid-cols-2 ">
              <div className=" h-full pt-5 z-10 ">
              <video
                  className="w-52 h-32 overflow-visible object-cover "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={assets.content1} type="video/webm" />
                </video>
              </div>
              <div className="h-full pt-5 ">
              <video
                  className="w-52 h-32 overflow-visible object-cover "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={assets.content2} type="video/webm" />
                </video>
              </div>  
            <div className="relative col-span-2 place-items-center px-2  object-contain">
              <img className=" px-5 py-5"
               src={assets.main} alt="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-transparent p-4 rounded">
                <h2 className="text-4xl pt-4 text-center poppins-light font-bold">Welcome to the BrainRush!</h2>
                <p className="mt-5 text-lg poppins-extralight text-center"> <span class="inline-block mt-0 rounded-lg font-medium text-blue-800 bg-blue-100 px-1 relative">Ignite Your Mind, Conquer the <br /> Quiz! 🚀🧠</span></p>
              </div>
            </div>
            <div className=" h-full  ">
              <video
                  className="w-52 h-32 overflow-visible object-cover "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={assets.content3} type="video/webm" />
                </video>
              </div>
              <div className="h-full  ">
              <video
                  className="w-52 h-32 overflow-visible object-cover "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={assets.content4} type="video/webm" />
                </video>
              </div>
              <a href="#_" onClick={startQuiz} className="relative col-span-2 text-center px-5 py-3 overflow-hidden font-medium text-black bg-gray-500 border border-gray-100 rounded-lg shadow-inner group ">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Start Quiz</span>
              </a>
            </div>
          ) : (
            <Quiz />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
