import React from "react";

const Badge = () => {
  return (
    <div className="p-px w-full h-full bg-surface-900 flex items-center justify-center rounded-full">
      <div className="bg-current bg-linear-to-b from-primary-300 to-primary-400 rounded-full size-2" />
      <div className=" absolute animate-ping bg-primary-500 rounded-full size-2" />
    </div>
  );
};

export default Badge;
