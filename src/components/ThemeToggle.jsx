import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import cn from "../lib/utils"; // remove if not using cn()

const ThemeToggle = ({ inNavbar = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* 🖥️ Desktop button (fixed top-right, hidden on small) */}
      {!inNavbar && (
        <button
          onClick={toggleTheme}
          className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300",
            "hover:scale-105 focus:outline-none"
          )}
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-blue-800" />
          )}
        </button>
      )}

      {/* 📱 Mobile version (for NavBar left side) */}
      {inNavbar && (
        <button
          onClick={toggleTheme}
          className={cn(
            "sm:hidden p-2 rounded-full bg-white dark:bg-gray-800 transition-all duration-300",
            "hover:scale-110 focus:outline-none"
          )}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-blue-800" />
          )}
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
