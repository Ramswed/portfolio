import React from "react";

const OptimizedImage = ({
  src,
  webp,
  alt = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  className = "",
  onClick,
  style,
  ...props
}) => {
  if (!webp) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        className={className}
        onClick={onClick}
        style={style}
        {...props}
      />
    );
  }

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        className={className}
        onClick={onClick}
        style={style}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
