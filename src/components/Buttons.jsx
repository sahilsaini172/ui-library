const clickSound =
  typeof Audio !== "undefined" ? new Audio("/click.mp3") : null;

const sizeMap = {
  xs: "h-8 px-3 *:size-5 text-sm",
  sm: "h-10 px-4 *:size-5 text-sm",
  md: "h-14 px-6 *:size-6",
  lg: "h-24 px-12 gap-3 *:size-8 text-[24px]",
  xl: "h-34 px-16 gap-4 *:size-10 text-[32px]",
};

const shapeMap = {
  square: "rounded-md",
  pill: "rounded-full",
};

const variantMap = {
  primary:
    "bg-linear-to-b from-primary-400 to-primary-500 text-primary-100 shadow-[4px_4px_2px] shadow-black/15 inset-shadow-[0px_2px_2px] inset-shadow-white/20 active:shadow-none active:inset-shadow-[1px_1px_4px] active:scale-95 active:inset-shadow-black",
  secondary:
    "bg-linear-to-b from-secondary-200 to-secondary-400 text-secondary-800 shadow-[4px_4px_2px] shadow-black/15 inset-shadow-[0px_2px_2px] inset-shadow-white/25 hover:text-secondary-900 active:shadow-none active:scale-95 active:inset-shadow-[1px_1px_4px] active:inset-shadow-black",
  tertiary:
    "bg-linear-to-t from-surface-100 to-surface-200 text-surface-700 inset-shadow-[0px_2px_2px] inset-shadow-white/25 hover:text-surface-900 active:inset-shadow-[1px_1px_4px] active:inset-shadow-black active:scale-95",
  standard:
    "bg-surface-100 text-surface-700 inset-shadow-[0px_2px_2px] inset-shadow-white/25 hover:text-surface-900 active:inset-shadow-[1px_1px_4px] active:scale-95 active:inset-shadow-black/50",
  text: "active:inset-shadow-[1px_1px_4px] text-surface-900 active:inset-shadow-black/50 active:scale-95",
};

const outerShapeMap = {
  square: "rounded-sm",
  pill: "rounded-full",
};

const outerVariantMap = {
  standard: "bg-surface-950/10",
  text: "bg-transparent",
};

const Buttons = ({
  size = "sm",
  shape = "square",
  variant = "primary",
  icon,
  children = "Buttons",
  className,
  sound = true,
  ...props
}) => {
  const handleClick = (e) => {
    if (sound && clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
    onClick?.(e);
  };
  return (
    <div
      className={[
        "p-px relative w-fit bg-surface-950",
        outerShapeMap[shape],
        outerVariantMap[variant],
      ].join(" ")}
    >
      <button
        {...props}
        onClick={handleClick}
        className={[
          `flex items-center justify-center gap-2 ease-in duration-100 focus:outline-0 cursor-pointer text-center ${className}`,
          sizeMap[size],
          shapeMap[shape],
          variantMap[variant],
        ].join(" ")}
      >
        {icon}
        {children}
      </button>
    </div>
  );
};

export default Buttons;
