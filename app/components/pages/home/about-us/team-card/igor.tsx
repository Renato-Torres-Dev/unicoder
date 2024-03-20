import { Link } from "@/app/components/links"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const IgorGabriel = () => {
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/igor-gabriel-profile.png"
          alt="Renato Torres"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/unicoder-icon.svg"
            alt=""
          />
          Igor Gabriel
        </h3>
        <p className="text-gray-400 my-6">
          Profissional em desenvolvimento Full Stack, responsável por todas as 
          áreas do projeto, back-end e front-end, desenvolvidos em Delphi e mobile.
          Tech Lead e especialista em mobile.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="HTML5"/>
          <TechBadge name="CSS3"/>
          <TechBadge name="JavaScript"/>
          <TechBadge name="ReactNative"/>
          <TechBadge name="Java"/>
          <TechBadge name="IOS"/>
          <TechBadge name="Android"/>
          <TechBadge name="ReactJS"/>
        </div>

        <Link href="https://www.linkedin.com/in/igor-gabriel-b194a5203/" target="_blank">
          Ver perfil
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}