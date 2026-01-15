import React from "react";

const ButtonGroup = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`flex p-1 bg-surface-500 rounded-md w-fit items-center gap-px ${className}`}
    >
      <div className="flex items-center gap-0.5 p-px bg-surface-950 rounded-sm">
        {children}
      </div>
    </div>
  );
};

export default ButtonGroup;
