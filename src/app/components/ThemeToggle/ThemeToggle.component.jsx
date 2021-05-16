// Import: Dependencies
import React from "react";
import { useSelector } from "react-redux";

// Import: Elements
import { Button, Checkbox, Label, ScaleSwitch } from "./ThemeToggle.elements";

// Component: ThemeToggle
export default function ThemeToggle({ isOn, handleToggle, onColor }) {
  // Redux: isGlobalThemeDark
  const isGlobalThemeDark = useSelector(
    (state) => state.globalTheme.isGlobalThemeDark
  );

  return (
    <ScaleSwitch>
      <Checkbox
        checked={isOn}
        onChange={handleToggle}
        id={`theme-toggle`}
        type="checkbox"
      />

      <Label
        style={{ background: isOn && onColor }}
        htmlFor={`theme-toggle`}
        isGlobalThemeDark={isGlobalThemeDark}
      >
        <Button isGlobalThemeDark={isGlobalThemeDark} />
      </Label>
    </ScaleSwitch>
  );
}
