import TooltipCustom from "@/components/tooltip-custom"
import { buttonVariants } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface IconLinkProps {
  icon: LucideIcon
  url: string
  text?: string
  tooltip?: string
}

export const IconLink = ({
  icon: Icon,
  url,
  text = "",
  tooltip = ""
}: IconLinkProps) => {
  return (
    <TooltipCustom description={tooltip}>
      <Link href={url} target="_blank" className={buttonVariants({
        variant: "ghost",
        size: "icon",
        className: "border"
      })}>
        <Icon />
        {text}
      </Link>
    </TooltipCustom>
  )
}
