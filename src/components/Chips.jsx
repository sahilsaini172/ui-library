import { Plus } from "lucide-react";

const variantMap = {
  assist:
    "border bg-transparent px-4 py-1 rounded-md text-surface-700 border-surface-700 shadow-[1px_1px_1px] shadow-surface-700/50",
  filter:
    "bg-primary-100 text-primary-700 shadow-[4px_4px_8px] shadow-primary-700/25 inset-shadow-[2px_2px_3px] inset-shadow-white/50 active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-primary-700",
  outline:
    "bg-surface-100 text-surface-700 active:inset-shadow-[1px_1px_4px] active:inset-shadow-surface-700",
  elevated:
    "bg-surface-100 text-surface-700 shadow-[4px_4px_8px] shadow-surface-700 inset-shadow-[2px_2px_3px] inset-shadow-white active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-surface-700",
  text: "bg-surface-100 text-surface-700 text-shadow-sm active:shadow-none active:inset-shadow-[1px_1px_4px] active:inset-shadow-surface-700 ",
};

const Chips = ({
  variant = "assist",
  className,
  children = <Plus />,
  icon = true,
}) => {
  return (
    <div
      className={[
        `flex items-center gap-1 text-sm justify-center ease-in duration-150 focus:outline-0 cursor-pointer **:size-4 ${className}`,
        variantMap[variant],
      ].join(" ")}
    >
      <span>{icon && children}</span>hi
    </div>
  );
};

export default Chips;
