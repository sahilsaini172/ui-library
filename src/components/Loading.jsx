import React from "react";

const Loading = () => {
  return (
    <div class="relative size-6 flex items-center justify-center">
      <div class="absolute bg-radial from-surface-100 from-45% to-primary-400 inset-0 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_rgba(0,0,0,0.25)]"></div>

      <div class="absolute z-1 inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin delay-[3]" />
      <div class="absolute inset-0 rounded-full border-4 blur-[1px] border-transparent border-t-primary-400 animate-spin" />
    </div>
  );
};

export default Loading;
