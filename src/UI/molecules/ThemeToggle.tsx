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
        styles.setProperty("--ternary-color", DarkTheme.ternaryColor);
        styles.setProperty(
          "--code-editor-background",
          DarkTheme.codeEditorBackgroundColor
        );

        styles.setProperty(
          "--primary-background-color",
          DarkTheme.primaryBackgroundColor
        );
        styles.setProperty(
          "--secondary-background-color",
          DarkTheme.secondaryBackgroundColor
        );
        styles.setProperty("--text-color", DarkTheme.primaryTextColor);
        styles.setProperty("--skill-icon-color", DarkTheme.skillIconColor);
        styles.setProperty(
          "--hover-skill-icon-color",
          DarkTheme.hoverSkillIconColor
        );
        break;
      case ThemeMode.LIGHT:
        styles.setProperty("--primary-color", LightTheme.primaryColor);
        styles.setProperty("--secondary-color", LightTheme.secondaryColor);
        styles.setProperty("--ternary-color", LightTheme.ternaryColor);

        styles.setProperty(
          "--code-editor-background",
          LightTheme.codeEditorBackgroundColor
        );
        styles.setProperty(
          "--primary-background-color",
          LightTheme.primaryBackgroundColor
        );
        styles.setProperty(
          "--secondary-background-color",
          LightTheme.secondaryBackgroundColor
        );
        styles.setProperty("--text-color", LightTheme.primaryTextColor);

        styles.setProperty("--skill-icon-color", LightTheme.skillIconColor);
        styles.setProperty(
          "--hover-skill-icon-color",
          LightTheme.hoverSkillIconColor
        );
        break;
    }
  };

  return (
    <div className="tw-flex tw-justify-end">
      <button
        className="theme-toggle-btn"
        onClick={() => {
          setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
