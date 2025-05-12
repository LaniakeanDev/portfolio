
interface LSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
}


export default function LSection({children, className='', id='', title}:LSectionProps) {
  return (
    <section 
      className={`w-full pb-48 sm:pb-32 ${className}`}
      id={id}    
    >
      {title && <h2 className="w-full text-center text-4xl font-bold pb-12">{title}</h2>}
      {children}
    </section>
  )
}