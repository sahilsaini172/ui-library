import { Children, cloneElement, isValidElement, useState } from "react";
import IconButton from "./IconButton";
import { ChevronDown } from "lucide-react";

const Accordian = ({ children, className, type = "single" }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev[0] === value ? [] : [value];
      } else {
        return prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
      }
    });
  };
  return (
    <div
      className={`bg-surface-950 p-px flex flex-col gap-0.5 rounded-sm ${className}`}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
          openItems,
          toggleItem,
        });
      })}
    </div>
  );
};

const AccordianItem = ({ value, children, openItems = [], toggleItem }) => {
  const open = openItems.includes(value);

  return (
    <div
      key={value}
      className="flex flex-col **:ease-in-out **:duration-200 bg-surface-100 rounded-sm group"
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
          open,
          toggle: () => toggleItem(value),
        });
      })}
    </div>
  );
};

const AccordianTrigger = ({ children, className, toggle, open }) => {
  return (
    <div
      onClick={toggle}
      className={`flex group text-sm font-medium group-hover:bg-surface-variant-100 px-4 py-2  items-center justify-between text-surface-900 select-none ${className} ${
        open ? "rounded-t-md" : "rounded-md"
      }`}
    >
      {children}

      <IconButton variant="standard" size="xs">
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </IconButton>
    </div>
  );
};

const AccordianContent = ({ children, className, open }) => {
  return (
    <div
      className={[
        "overflow-hidden flex flex-col items-center transition-all duration-300 ease-in-out",
        open ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
      ].join(" ")}
    >
      <div
        className={`px-4 text-sm group-hover:bg-surface-variant-100 bg-surface-100 py-2 text-surface-800 ${className} rounded-b-md`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
export { AccordianItem, AccordianTrigger, AccordianContent };
