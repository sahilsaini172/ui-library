import { Check } from "lucide-react";
import { useState } from "react";

const CheckBox = ({ onClick }) => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="flex items-center justify-center p-px bg-surface-900 rounded-sm w-fit">
      <button
        onClick={() => setSelected(!selected)}
        className={`flex items-center ${
          selected
            ? "bg-primary-100 text-primary-500"
            : "bg-surface-100 text-transparent"
        } w-fit justify-center rounded-sm *:size-4 size-4 ease-in duration-150`}
      >
        <Check size={8} />
      </button>
    </div>
  );
};

export default CheckBox;
