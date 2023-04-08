import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-6">
        Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
        vontade e explore os projetos para ver como foram criados, as
        tecnologias utilizadas e as funcionalidades implementadas.
      </p>
      <Link href="/">
        <HiArrowNarrowLeft size={20} />
        Voltar para Home
      </Link>
    </section>
  )
}
