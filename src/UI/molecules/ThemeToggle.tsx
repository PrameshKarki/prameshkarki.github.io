import { useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "../../data/theme";

enum ThemeMode {
  DARK = "Dark",
  LIGHT = "Light",
}
const ThemeToggle = () => {
  const [theme, setTheme] = useState(ThemeMode.DARK);

  useEffect(() => {
    toggleTheme();
  }, [theme]);

  const toggleTheme = () => {
    const styles = document.documentElement.style;
    switch (theme) {
      case ThemeMode.DARK:
        styles.setProperty("--primary-color", DarkTheme.primaryColor);
        styles.setProperty("--secondary-color", DarkTheme.secondaryColor);
        styles.setProperty(
          "--primary-background-color",
          DarkTheme.primaryBackgroundColor
        );
        styles.setProperty(
          "--secondary-background-color",
          DarkTheme.secondaryBackgroundColor
        );
        styles.setProperty("--text-color", DarkTheme.primaryTextColor);
        break;
      case ThemeMode.LIGHT:
        styles.setProperty("--primary-color", LightTheme.primaryColor);
        styles.setProperty("--secondary-color", LightTheme.secondaryColor);
        styles.setProperty(
          "--primary-background-color",
          LightTheme.primaryBackgroundColor
        );
        styles.setProperty(
          "--secondary-background-color",
          LightTheme.secondaryBackgroundColor
        );
        styles.setProperty("--text-color", LightTheme.primaryTextColor);
        break;
    }
  };

  return (
    <button
      className="tw-bg-red tw-text-white"
      onClick={() => {
        setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
      }}
    >
      Toggle
    </button>
  );
};

export default ThemeToggle;
