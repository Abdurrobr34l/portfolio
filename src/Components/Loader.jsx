import React from "react";

const Loader = () => {
  return (
    <div className="loader fixed inset-0 flex items-center justify-center bg-primary z-50">
      <div className="w-20 h-20 border-6 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
