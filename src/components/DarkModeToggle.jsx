import { useState, useEffect } from "react";
import IconButton from "./IconButton";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      name="Theme toggle"
      onClick={toggleDark}
      className="transition-all ease-in duration-150"
    >
      {dark ? (
        <IconButton variant="standard" size="xs">
          <Sun className="text-yellow-500"/>
          <Sun className="absolute blur-xs text-yellow-500"/>
        </IconButton>
      ) : (
        <IconButton variant="standard" size="xs">
          <Moon/>

        </IconButton>
      )}
    </button>
  );
};

export default DarkModeToggle;
