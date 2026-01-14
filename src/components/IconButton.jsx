import { Plus } from "lucide-react";

const sizeMap = {
  xs: "p-1",
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3",
  xl: "p-4",
};

const widthMap = {
  narrow: "w-8",
  default: "w-10",
  wide: "w-14",
};

const shapeMap = {
  square: "rounded-md",
  pill: "rounded-full",
};

const variantMap = {
  filled:
    "bg-primary-500 text-primary-100 shadow-[4px_4px_4px] shadow-black/25 inset-shadow-[2px_2px_3px] inset-shadow-white/25 active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-black",
  tonal:
    "bg-primary-100 text-primary-700 shadow-[4px_4px_4px] shadow-black/25 inset-shadow-[2px_2px_3px] inset-shadow-white/50 active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-primary-700",
  outline:
    "bg-surface-100 text-surface-700 active:inset-shadow-[1px_1px_4px] active:inset-shadow-black",
  standard:
    "bg-surface-100 text-surface-700 shadow-[4px_4px_4px] shadow-black/25 inset-shadow-[2px_2px_3px] inset-shadow-white/50 active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-black",
};

const outerShapeMap = {
  square: "rounded-sm",
  pill: "rounded-full",
};

const IconButton = ({
  size = "md",
  shape = "square",
  width = "default",
  variant = "standard",
  children,
  className,
}) => {
  return (
    <div
      className={[
        "p-px bg-surface-900 flex items-center justify-center w-fit",
        outerShapeMap[shape],
      ].join(" ")}
    >
      <button
        className={[
          `flex items-center justify-center ease-in duration-150 focus:outline-0 cursor-pointer *:p-1 text-center ${className}`,
          sizeMap[size],
          widthMap[width],
          shapeMap[shape],
          variantMap[variant],
        ].join(" ")}
      >
        {children ? children : <Plus />}
      </button>
    </div>
  );
};

export default IconButton;
