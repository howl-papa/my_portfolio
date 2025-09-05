import React from "react";
import "./FluidGlass.css";

type FluidGlassProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Visual controls
  blur?: number; // px applied in backdrop-filter
  bgColor?: string; // base background color (usually semi-transparent)
  borderColor?: string; // border color or css border shorthand (if you prefer simple string)
  borderWidth?: number; // px
  borderRadius?: number | string; // px or other CSS unit
  padding?: number | string;
  width?: number | string;
  height?: number | string;
  // Sheen/animation
  sheen?: boolean;
  sheenColor?: string;
  sheenOpacity?: number;
  sheenDuration?: number; // seconds
  // Additional shadow
  shadow?: string | null;
  // Pass-through props
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  role?: string;
  tabIndex?: number;
  "aria-label"?: string;
};

const FluidGlass: React.FC<FluidGlassProps> = ({
  children,
  className = "",
  style,
  blur = 12,
  bgColor = "rgba(255,255,255,0.06)",
  borderColor = "rgba(255,255,255,0.12)",
  borderWidth = 1,
  borderRadius = 16,
  padding = "1rem",
  width = "auto",
  height = "auto",
  sheen = true,
  sheenColor = "linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06), rgba(255,255,255,0.14))",
  sheenOpacity = 0.6,
  sheenDuration = 6,
  shadow = "0 6px 18px rgba(2,6,23,0.45)",
  onClick,
  role,
  tabIndex,
  "aria-label": ariaLabel,
}) => {
  // Build inline CSS variables so we can keep the CSS file generic
  const cssVars: React.CSSProperties = {
    // NOTE: set as string with units
    ["--fg-blur" as any]: `${blur}px`,
    ["--fg-bg" as any]: bgColor,
    ["--fg-border" as any]: borderColor,
    ["--fg-border-width" as any]: `${borderWidth}px`,
    ["--fg-radius" as any]: typeof borderRadius === "number" ? `${borderRadius}px` : `${borderRadius}`,
    ["--fg-padding" as any]: typeof padding === "number" ? `${padding}px` : `${padding}`,
    ["--fg-width" as any]: typeof width === "number" ? `${width}px` : `${width}`,
    ["--fg-height" as any]: typeof height === "number" ? `${height}px` : `${height}`,
    ["--fg-sheen" as any]: sheen ? sheenColor : "transparent",
    ["--fg-sheen-opacity" as any]: String(sheenOpacity),
    ["--fg-sheen-duration" as any]: `${sheenDuration}s`,
    ["--fg-shadow" as any]: shadow ?? "none",
    ...style,
  };

  return (
    <div
      className={`rb-fluid-glass ${className}`.trim()}
      style={cssVars}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      <div className="rb-fluid-glass__content">{children}</div>

      {/* optional sheen overlay. It's included in markup for better layering and pointer-events control */}
      {sheen && <div className="rb-fluid-glass__sheen" aria-hidden="true" />}
    </div>
  );
};

export default FluidGlass;