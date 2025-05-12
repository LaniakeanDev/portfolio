import Image from "next/image";
import ThemedIcon from "./ThemedIcon";

interface StackIconProps {
  id: string;
  hasDarkVersion?: boolean;
  ext?: 'png' | 'svg';
  src?: string;
}

const StackIcon = ({id, hasDarkVersion, ext, src}: StackIconProps) => {
  return (
    <div className="flex flex-col gap-2 stackItem items-center">
        <ThemedIcon
          src={src ? src :`/${id}${ext === 'svg' ? '.svg' : '.png'}`}
          darkSrc={hasDarkVersion ? (src ? `${src}-dark` : `/${id}${ext === 'svg' ? '-dark.svg' : '-dark.png'}`) : undefined}
          alt={id + ' Icon'}
          width={50}
          height={50}
        />
      <p>{id}</p>
    </div>
  )
}

export default StackIcon