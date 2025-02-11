import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface ThemedImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  centered?: boolean;
}

const ThemedImage: React.FC<ThemedImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
  centered = true,
}) => {
  const { colorMode } = useColorMode();
  const src = colorMode === "dark" ? darkSrc : lightSrc;

  return (
    <img
      src={src}
      alt={alt}
      style={centered ? { display: "block", margin: "0 auto" } : undefined}
    />
  );
};

export default ThemedImage;
