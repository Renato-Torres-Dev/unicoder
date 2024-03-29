import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type TechSkillsProps = {
    icon: ReactNode,
    name: string,
    startDate: string,
}

export const KnowTech = ({ icon, name, startDate }: TechSkillsProps) => {
  const relativeTime = getRelativeTimeString (
    new Date(startDate), "pt-BR",
    ).replace("há", " ")
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-red-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        {icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  )
}