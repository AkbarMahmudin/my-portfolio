import { Separator } from "@radix-ui/react-separator";
import { Calendar, Circle } from "lucide-react";

interface SkillCertificateItemProps {
  name: string;
  institution: string;
  date: string;
}

export const SkillCertificateItem = ({
  name,
  institution,
  date,
}: SkillCertificateItemProps) => {
  return (
    <li className="group flex flex-col gap-1 items-center mx-8 transition-all">
      <div className="bg-background min-w-40 w-max p-4 flex flex-col items-start gap-1 font-normal border-2 border-white/10 text-left capitalize rounded">
        <p className="font-semibold text-base">
          {name}
        </p>
        <p className="text-sm mb-2 text-white/80 italic">{institution}</p>
        <p className="flex gap-1 items-center text-xs text-gray-400">
          <Calendar size={14} /> {date}
        </p>
      </div>
      <Separator className="w-0.5 h-12 bg-white/10" orientation="vertical" />
      <Circle size={14} className="stroke-background stroke-4 fill-primary" />
    </li>
  );
};
