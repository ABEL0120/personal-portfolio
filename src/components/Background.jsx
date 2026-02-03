import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-white dark:bg-black transition-colors duration-300">
      {/* Pure background - White in light mode, Black in dark mode */}
    </div>
  );
};

export default Background;
