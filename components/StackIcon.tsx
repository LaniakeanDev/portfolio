import Image from "next/image";

interface StackIconProps {
  id: string;
  hasDarkVersion?: boolean;
  ext?: 'png' | 'svg';
  src?: string;
}

const StackIcon = ({id, hasDarkVersion, ext, src}: StackIconProps) => {
  return (
    <div className="flex flex-col gap-2 stackItem items-center">
      <Image
        // src={'/' + id + ext === 'svg' ? '.svg' : '.png'}
        src={src ? src :`/${id}${ext === 'svg' ? '.svg' : '.png'}`}
        alt={id + ' Icon'}
        width={50}
        height={50}
        className={ hasDarkVersion ? "hide-on-dark" : ""}
      />
      {hasDarkVersion && <Image
        // src={'/' + id + ext === 'svg' ? '-dark.svg' : '-dark.png'}
        src={src ? `${src}-dark` : `/${id}${ext === 'svg' ? '-dark.svg' : '-dark.png'}`}
        alt={id + ' Icon'}
        width={50}
        height={50}
        className="show-on-dark"
      />
      }
      <p>{id}</p>
    </div>
  )
}

export default StackIcon