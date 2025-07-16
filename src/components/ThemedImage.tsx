import React from "react";

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
  return (
    <>
      <img
        src={lightSrc}
        alt={alt}
        style={centered ? { display: "block", margin: "0 auto" } : undefined}
        className="themed-image-light"
      />
    </>
  );
};

export default ThemedImage;
