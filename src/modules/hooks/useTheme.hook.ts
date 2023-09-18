import { useEffect, useState } from "react";

type TTheme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<TTheme>(
    localStorage.themeSelected ? localStorage.themeSelected : "light"
  );

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("themeSelected", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("themeSelected", "dark");
    }
  };

  const getTheme = () => {
    if (localStorage.themeSelected) {
      setTheme(localStorage.themeSelected);
    } else if (window.matchMedia("(prefers-color-scheme: white)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const changeDocumentTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    changeDocumentTheme();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return { theme, handleTheme };
};

export default useTheme;
