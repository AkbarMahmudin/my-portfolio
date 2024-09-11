import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { CalendarCheck } from "lucide-react"

interface CardStoryProps {
  name: string
  role: string
  date: string
}

export const CardStory = ({
  name,
  role,
  date
}: CardStoryProps) => {
  return (
    <Card className="max-w-[350px] w-full bg-background border text-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl font-bold font-museo uppercase">
          {name}
        </CardTitle>
        <p className="text-sm lg:text-lg text-gray-200 capitalize">
          {role}
        </p>
      </CardHeader>
      <CardFooter className="flex flex-shrink text-sm text-gray-300">
        <CalendarCheck size={20} />
        <span className="ml-2">
          {date}
        </span>
      </CardFooter>
    </Card>
  )
}
