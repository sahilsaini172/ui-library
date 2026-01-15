import { Menu, Minus, Plus } from "lucide-react";
import IconButton from "./IconButton";

const SearchBar = ({
  placeholder = "Search Product",
  leading = false,
  leadingIcon = <Plus />,
  trailing = false,
  trailingIcon = <Minus />,
}) => {
  return (
    <div className="flex items-center gap-px text-surface-700 p-px bg-surface-950 overflow-visible rounded-full flex-1 h-full">
      {leading && (
        <IconButton variant="standard">
          {leading ? leadingIcon : null}
        </IconButton>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder:text-surface-600 flex-1 flex items-center bg-surface-variant-100 py-2 px-4 max-h-14 h-14 rounded-full w-full focus:outline-0 focus:inset-shadow-[1px_1px_4px] focus:inset-shadow-black/50 ease-in duration-150"
      />
      {trailing && (
        <IconButton variant="standard">
          {trailing ? trailingIcon : null}
        </IconButton>
      )}
    </div>
  );
};

export default SearchBar;
