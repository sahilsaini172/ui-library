import { CalendarRange, Menu, Search } from "lucide-react";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";

const AppBar = ({
  searchBar = true,
  withSearchBarProps = {},
  withoutSearchBarProps = {},
}) => {
  return (
    <div className="bg-surface-100 border-b border-b-surface-200 p-2 flex items-center justify-between gap-4">
      <IconButton variant="secondary">
        <Menu />
      </IconButton>

      {searchBar ? (
        <WithSearchBar {...withSearchBarProps} />
      ) : (
        <WithourSearchBar {...withoutSearchBarProps} />
      )}
    </div>
  );
};

export const WithSearchBar = ({ trailingLabel = "S" }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <SearchBar/>
      <IconButton shape="pill" variant="primary">
        {trailingLabel}
      </IconButton>
    </div>
  );
};

export const WithourSearchBar = ({
  title = "Title",
  subTitle = "Subtitle",
  trailing1 = false,
  trailing1Icon = <Search />,
  trailing2 = false,
  trailing2Icon = <CalendarRange />,
}) => {
  return (
    <div className="flex items-center gap-4 flex-1">
      <div className="flex flex-col flex-1 text-secondary-900">
        <h2 className="font-semibold">{title}</h2>
        <h2 className="text-sm font-medium">{subTitle}</h2>
      </div>
      {trailing1 && <IconButton variant="outline">{trailing1Icon}</IconButton>}
      {trailing2 && <IconButton variant="outline">{trailing2Icon}</IconButton>}
    </div>
  );
};

export default AppBar;
