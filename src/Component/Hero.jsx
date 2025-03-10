import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center relative">
      {/* Background Gradient */}
      <div className="w-full h-full mx-auto relative bg-gradient-to-r from-black to-white">
        
        {/* Floating Gradient Effects */}
        <div className="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-30 w-[15%] h-[20%] rounded-full blur-3xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        <div className="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-10 w-[50%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>

        {/* Content Section */}
        <div className="container mx-auto h-full flex justify-between items-center">
          
          {/* Text Content */}
          <div className="h-full xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2 justify-center">
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">
              Hi, I'm
            </h1>
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Anurag Patil, a Software Developer
            </h1>
            <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2">
            Efficient Code, Smarter Solutions.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
             <a href="/works"> <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-black duration-1000 ease-in-out rounded-md cursor-pointer">
                View My Work
              </button> </a>
              
            </div>
          </div>

          {/* Right-side Placeholder (Can Add Image Here) */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
