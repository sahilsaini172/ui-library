import React from "react";

const variantMap = {
  filled:
    "bg-primary-100 text-primary-700 inset-shadow-[2px_2px_3px] inset-shadow-white/50",
  outline:
    "bg-surface-100 text-surface-700 inset-shadow-[2px_2px_3px] inset-shadow-white/50",
  elevated:
    "bg-surface-100 text-surface-700 shadow-[4px_4px_8px] shadow-surface-700 inset-shadow-[2px_2px_3px] inset-shadow-white",
};

const Card = ({
  outerClassName = "",
  innerClassName = "",
  variant = "outline",
  children,
}) => {
  return (
    <div
      className={`p-px bg-surface-900 rounded-sm flex items-center justify-center ${outerClassName}`}
    >
      <div
        className={[
          `p-4 rounded-md w-full flex flex-col ${innerClassName} `,
          variantMap[variant],
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
