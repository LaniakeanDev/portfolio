import Image from "next/image";

// type stackIconProps = {
//   src: string;
//   alt: string;
//   title: string;
// }

const StackIcon = ({id}: {id: string}) => {
  return (
    <div className="flex flex-col gap-2 stackItem items-center">
      <Image
        src={'/' + id + '.png'}
        alt={id + ' Icon'}
        width={50}
        height={50}
      />
      <p>{id}</p>
    </div>
  )
}

export default StackIcon