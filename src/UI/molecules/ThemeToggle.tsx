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
    <div className="theme-toggle">
      <input
        checked={theme === ThemeMode.DARK}
        type="checkbox"
        id="toggle_checkbox"
        onChange={(e) => {
          setTheme(e.target.checked ? ThemeMode.DARK : ThemeMode.LIGHT);
        }}
      />
      <label htmlFor="toggle_checkbox">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
