import Image from "next/image";


interface ThemedIconProps {
  src: string;
  alt?: string;
  hasDarkVersion?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function ThemedIcon({src, alt='illustration', hasDarkVersion, className, width, height}:ThemedIconProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width}
      />
      {hasDarkVersion && <Image
          src={src}
          alt={alt}
          className={className}
          height={height}
        />
      }
    </>
  )
}