import Image from "next/image";


interface ThemedIconProps {
  src: string;
  darkSrc?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ThemedIcon({src, darkSrc, alt='illustration', className, width, height}:ThemedIconProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${darkSrc ? 'hide-on-dark' : ''} ${className}`}
        width={width}
        height={height}
      />
      {darkSrc && <Image
          src={darkSrc}
          alt={alt}
          className={`show-on-dark ${className}`}
          width={width}
          height={height}
        />
      }
    </>
  )
}