import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  className?: string
}

export const Heading = ({ title, className }: HeadingProps) => {
  return (
    <div className={cn("flex flex-col items-center font-museo md:text-6xl text-5xl font-bold relative", className)}>
      <h2>{title}</h2>
      <span className="absolute -bottom-8 opacity-25">{title}</span>
      <span className="absolute -bottom-14 opacity-5">{title}</span>
    </div>
  )
}
