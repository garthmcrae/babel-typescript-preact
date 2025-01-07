import { useState, useEffect, CSSProperties } from "react";
import { HTMLImageConstructor } from "./HTMLImageConstructor.js";

export const Image = ({
  alt,
  aspectRatio,
  src,
  style,
}: {
  alt: string;
  aspectRatio: string;
  src: string;
  style: CSSProperties;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const HTMLImage = new HTMLImageConstructor();
    HTMLImage.src = src;

    HTMLImage.onload = () => {
      setImageLoaded(true);
    };

    HTMLImage.onerror = () => {
      console.error("Error loading image");
    };

    return () => {
      HTMLImage.onload = null;
      HTMLImage.onerror = null;
    };
  }, [src]);
  const image: CSSProperties = {
    aspectRatio,
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 300ms ease-in-out",
    width: "100%",
    ...style,
  };
  return <img alt={alt} src={src} style={image} />;
};
