import { useState } from "react";

const StandardList = ({
  items = [],
  renderItem,
  renderLeading,
  renderTrailing,
  keyExtractor = (item, index) => index,
  selectionMode = "none",
  defaultSelected = [0, 1],
  selectedClassName = "bg-primary-700 text-primary-100 font-medium",
  itemClassName = "",
  className = "",
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const getKey = (item, index) => keyExtractor(item, index);

  const isSelected = (key) => selected.includes(key);

  const toggleSelect = (key) => {
    console.log("Clicked:", key); // debug

    if (selectionMode === "none") return;

    let next;
    if (selectionMode === "single") {
      next = [key];
    } else {
      next = isSelected(key)
        ? selected.filter((k) => k !== key)
        : [...selected, key];
    }

    console.log("Next selected:", next); // debug
    setSelected(next);
    onChange?.(next);
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const key = getKey(item, index);
        const active = isSelected(key);

        return (
          <div
            key={key}
            onClick={() => toggleSelect(key)}
            className={[
              `flex items-center gap-4 p-2 cursor-pointer transition rounded-md ${
                renderLeading || (renderTrailing && "p-1")
              }`,
              itemClassName,
              active
                ? selectedClassName
                : "bg-surface-100 text-surface-900 hover:bg-surface-200",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {renderLeading && <div>{renderLeading(item, index)}</div>}
            <div className="flex-1">
              {renderItem ? renderItem(item, index) : String(item)}
            </div>
            {renderTrailing && (
              <div className="flex items-center gap-2">
                {renderTrailing(item, index)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StandardList;
