import { Dispatch, SetStateAction, useEffect, useState } from "react";

type DarkModeHookType = [
  iconMode: "light" | "dark",
  setTheme: Dispatch<SetStateAction<"light" | "dark">>
];

const useDarkMode = (): DarkModeHookType => {
  const [theme, setTheme] = useState<"light" | "dark">(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const iconMode = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(iconMode);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [iconMode, setTheme];
};

export default useDarkMode;
