import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface ThemedImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

const ThemedImage: React.FC<ThemedImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
}) => {
  const { colorMode } = useColorMode();
  const src = colorMode === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} />;
};

export default ThemedImage;
