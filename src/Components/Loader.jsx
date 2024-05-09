import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="loader text-white ease-linear rounded-full border-8 border-t-8 border-blue-500 h-24 w-24 animate-spin">
        .
      </div>
    </div>
  );
};

export default Loader;
