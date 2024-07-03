import Image from "next/image";

interface CheckBoxProps {
  isChecked: boolean;
  className: string;
  width: number;
  height: number;
}

export default function CheckBox( { isChecked, className, width, height } : CheckBoxProps) {
  return (
    <Image 
      src={ isChecked ? '/checked-box.svg' : '/unchecked-box.svg' }
      alt={ isChecked ? 'checked GDPR acceptance check-box' : '/unchecked GDPR acceptance check-box' }
      className={className}
      width={width}
      height={height}
    />
  )
}