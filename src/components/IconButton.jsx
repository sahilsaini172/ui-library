import { Plus } from "lucide-react";
import Badge from "./Badge";

const sizeMap = {
  xs: "size-8 *:size-5",
  sm: "size-10",
  md: "size-14",
  lg: "size-24 *:size-8",
  xl: "size-34 *:size-10",
};

const shapeMap = {
  square: "rounded-md",
  pill: "rounded-full",
};

const variantMap = {
  primary:
    "bg-linear-to-b from-primary-400 to-primary-500 text-primary-100 shadow-[4px_4px_2px] shadow-black/15 inset-shadow-[0px_2px_2px] inset-shadow-white/20 hover:font-medium active:shadow-none active:inset-shadow-[1px_1px_4px] active:scale-95 active:inset-shadow-black",
  secondary:
    "bg-linear-to-b from-secondary-200 to-secondary-400 text-secondary-700 shadow-[4px_4px_2px] shadow-black/15 inset-shadow-[0px_2px_2px] inset-shadow-white/25 hover:text-secondary-900 active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-black active:scale-95",
  tertiary:
    "bg-linear-to-t from-surface-100 to-surface-200 text-surface-700 inset-shadow-[0px_2px_2px] inset-shadow-white/25 hover:text-surface-900 active:inset-shadow-[1px_1px_4px] active:inset-shadow-black active:scale-95",
  standard:
    "bg-surface-100 text-surface-700 hover:text-surface-900 active:inset-shadow-[1px_1px_4px] active:inset-shadow-black/50 active:scale-95",
};

const outerShapeMap = {
  square: "rounded-sm",
  pill: "rounded-full",
};

const outerVariantMap = {
  primary: "bg-surface-950",
  secondary: "bg-surface-950",
  standard: "bg-surface-950/10",
};

const IconButton = ({
  size = "md",
  shape = "pill",
  variant = "primary",
  badge = false,
  children,
  className,
}) => {
  return (
    <div
      className={[
        "p-px relative bg-surface-950 flex items-center justify-center w-fit",
        outerShapeMap[shape],
        outerVariantMap[variant],
      ].join(" ")}
    >
      {badge && (
        <div className="absolute top-1 right-1">
          <Badge />
        </div>
      )}
      <button
        className={[
          `flex items-center justify-center ease-in duration-100 focus:outline-0 cursor-pointer text-center ${className}`,
          sizeMap[size],
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
