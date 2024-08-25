import React from 'react';

const Home= () => {
  return (
    <div className="flex flex-col md:flex-row flex-grow h-full p-4 justify-around items-start space-y-4 md:space-y-0 md:space-x-4" id='dashbody'>
      {/* First Box */}
      <div className="flex flex-col h-full w-full md:w-1/3 md:h-full  lg:w-1/3 h-[82.67vh] shadow-lg rounded-lg overflow-hidden" id='outerbox'>
        <div className="flex-1 bg-gray-100 bg-opacity-80 mb-2 rounded-lg p-4 shadow-md">
          {/* Top Content */}
          <h2 className="text-center text-xl font-semibold" id='box1t'>Box 1 Top</h2>
        </div>
        <div className="flex-1 bg-gray-300 bg-opacity-50 mt-2 rounded-lg p-4 shadow-md">
          {/* Bottom Content */}
          <h2 className="text-center text-xl font-semibold"id='box1t'>Box 1 Bottom</h2>
        </div>
      </div>

      {/* Second Box */}
      <div className="flex flex-col h-full w-full md:w-1/3 lg:w-1/3 h-[82.67vh] shadow-lg rounded-lg overflow-hidden"id='outerbox'>
        <div className="bg-opacity-50 bg-gray-200 h-3/4 mb-2 rounded-lg p-4 shadow-md">
          {/* Top Content */}
          <h2 className="text-center text-xl font-semibold" id='box1t'>Box 2 Top</h2>
        </div>
        <div className="bg-gray-300 bg-opacity-50 h-1/4 mt-2 rounded-lg p-4 shadow-md">
          {/* Bottom Content */}
          <h2 className="text-center text-xl font-semibold" id='box1t'>Box 2 Bottom</h2>
        </div>
      </div>

      {/* Third Box */}
      <div className="flex flex-col h-full w-full md:w-1/3 lg:w-1/3 h-[82.67vh] shadow-lg rounded-lg overflow-hidden" id='outerbox'>
        <div className="flex-1 bg-gray-200 bg-opacity-50 mb-2 rounded-lg p-4 shadow-md">
          {/* Top Content */}
          <h2 className="text-center text-xl font-semibold" id='box1t'>Box 3 Top</h2>
        </div>
        <div className="flex-1 bg-gray-300 bg-opacity-50 mt-2 rounded-lg p-4 shadow-md">
          {/* Bottom Content */}
          <h2 className="text-center text-xl font-semibold"id='box1t'>Box 3 Bottom</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
