import React from "react";

const ProgressIndicator = ({ progress = 0, circular = false }) => {
  const angle = Math.min(Math.max(progress, 0), 100) * 3.6; // 0–360

  return (
    <>
      {circular ? (
        <CircleIndicator angle={angle} />
      ) : (
        <LineProgressIndicator progress={progress} />
      )}
    </>
  );
};

export default ProgressIndicator;

export const CircleIndicator = ({ angle }) => {
  return (
    <div className="relative size-6 flex items-center justify-center **:ease-in **:duration-150">
      {/* Base */}
      <div className="absolute bg-radial from-surface-100 from-45% to-primary-400 inset-0 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.25),inset_-1px_-1px_2px_rgba(0,0,0,0.25)]"></div>

      {/* Progress ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(var(--color-primary-500) ${angle}deg, transparent ${angle}deg)`,
          mask: "radial-gradient(circle, transparent 50%, black 56%)",
          WebkitMask: "radial-gradient(circle, transparent 55%, black 56%)",
        }}
      />

      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-full blur-[1px]"
        style={{
          background: `conic-gradient(var(--color-primary-400) ${angle}deg, transparent ${angle}deg)`,
          mask: "radial-gradient(circle, transparent 50%, black 6%)",
          WebkitMask: "radial-gradient(circle, transparent 55%, black 56%)",
        }}
      />
    </div>
  );
};

export const LineProgressIndicator = ({ progress }) => {
  return (
    <div className="flex items-center p-px bg-surface-900 rounded-sm **:ease-in **:duration-150">
      <div
        className="bg-primary-400 h-1 rounded-md inset-shadow-[1px_1px_1px] inset-shadow-white/25 drop-shadow-[0px_2px_2px] drop-shadow-black-50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
