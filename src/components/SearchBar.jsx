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
    <div className="flex items-center gap-px text-surface-700 p-px bg-surface-900 overflow-visible rounded-full w-full">
      {leading && (
        <IconButton variant="outline" shape="pill">
          {leading ? leadingIcon : null}
        </IconButton>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder:text-surface-500 flex-1 flex items-center bg-surface-200 py-2 px-4 rounded-full w-full focus:outline-0 focus:inset-shadow-[1px_1px_4px] focus:inset-shadow-surface-700 ease-in duration-150"
      />
      {trailing && (
        <IconButton variant="outline" shape="pill">
          {trailing ? trailingIcon : null}
        </IconButton>
      )}
    </div>
  );
};

export default SearchBar;
