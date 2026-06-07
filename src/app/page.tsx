import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="bg-[#F4F7FC]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image src="/assets/logoaxis.png" alt="Axis Center" width={80} height={80} className="rounded-lg" />
          <span className="text-xl font-bold text-[#0D2B5E]">Axis Center</span>
        </div>
        <div />
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-[#0D2B5E] sm:text-6xl">
              O eixo da sua <span className="text-[#F97316]">evolução</span> começa aqui.
            </h1>

            <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200 max-w-2xl">
              <h2 className="text-3xl font-extrabold text-[#0D2B5E]">Prof Hélder</h2>
              <p className="mt-1 text-lg font-semibold text-[#F97316]">Matemática sem limites</p>

              <p className="mt-4 text-slate-700">MATEMÁTICA COMPLETA — APRENDA TODA MATEMÁTICA, DESDE O ZERO, DE UMA VEZ POR TODAS DE FORMA RÁPIDA E EFICIENTE PARA GARANTIR SUA APROVAÇÃO</p>

              <ul className="mt-6 space-y-2 text-slate-700 list-inside">
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />MATEMÁTICA DO BÁSICO AO AVANÇADO</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />SIMULADOS POR MÓDULOS</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />AULAS AO VIVO DE REVISÃO</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />APRENDA A INTERPRETAR QUESTÕES</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />COMUNIDADE DE ALUNOS</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />ACESSO COMPLETO</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />EXERCÍCIOS RESOLVIDOS EM VÍDEO</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />ACESSO POR 12 MESES</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />CRONOGRAMA DE ESTUDOS</li>
                <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 w-4 h-4 flex-shrink-0" aria-hidden />TODO CONTEÚDO DO SEU EDITAL</li>
              </ul>

              <div className="mt-6">
                <button className="w-full rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white hover:bg-[#EA6C0A]">ASSINE AGORA!</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0D2B5E]">Diferenciais do curso</h2>
            <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200 max-w-2xl">
              <h3 className="text-xl font-semibold text-[#0D2B5E]">Diferencial do curso</h3>
              <p className="mt-3 text-slate-700 font-semibold">AULAS DIRETAS AO PONTO</p>
              <p className="mt-2 text-slate-600">Vídeos curtos, sem enrolação e focado na resolução de exercícios</p>

              <h3 className="mt-6 text-xl font-semibold text-[#0D2B5E]">Professores</h3>
              <p className="mt-3 text-slate-700 font-semibold">PROFESSORES DISPONÍVEIS</p>
              <p className="mt-2 text-slate-600">A qualquer momento temos professores para ajudar na sua evolução quando você travar em algum exercício</p>

              <h3 className="mt-6 text-xl font-semibold text-[#0D2B5E]">MÉTODO PASSO A PASSO DESDE A MATEMÁTICA BÁSICA</h3>
              <p className="mt-3 text-slate-600">Todo conteúdo de matemática que você precisa para ser aprovado</p>
            </div>
          </div>

          {/* Removed dashboard preview as requested */}
        </section>

        {/* Planos */}
        <section className="py-16" id="planos">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F97316]">Planos que acompanham seu ritmo.</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0D2B5E]">Simples, prático e personalizado.</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Básico</span>
              <h3 className="mt-4 text-3xl font-semibold text-[#0D2B5E]">Plano Grátis</h3>
              <p className="mt-2 text-slate-600">Kz 0/mês</p>
              <ul className="mt-8 space-y-3 text-slate-600 text-sm">
                <li>✅ Acesso a 5 cursos básicos</li>
                <li>✅ Comunidade de alunos</li>
                <li>✅ Certificados básicos</li>
              </ul>
              <Link href="/register" className="mt-8 inline-flex w-full justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                Começar agora
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-[40px] bg-[#0D2B5E] px-8 py-10 text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_20%)]" />
              <div className="relative">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80">Mais popular</span>
                <h3 className="mt-5 text-4xl font-bold">Plano PRO ✨</h3>
                <p className="mt-2 text-lg text-white/80">Kz 89.900/mês</p>
                <ul className="mt-8 space-y-3 text-white/90 text-sm">
                  <li>✅ Acesso ilimitado +200 cursos</li>
                  <li>✅ Desconto de 30% em professores móveis</li>
                  <li>✅ Certificados reconhecidos</li>
                  <li>✅ Suporte VIP 24/7</li>
                </ul>
                <Link href="/register" className="mt-10 inline-flex w-full justify-center rounded-full bg-[#F97316] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#EA6C0A] transition-colors">
                  Assinar PRO
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="pb-20">
          <div className="rounded-[40px] bg-[#0D2B5E] px-8 py-10 text-white shadow-2xl sm:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Pronto para encontrar seu eixo de crescimento?</p>
                <h3 className="mt-3 text-3xl font-bold">Junte-se a milhares de alunos que já estão acelerando seu aprendizado com a Axis.</h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row shrink-0">
                <Link href="/register" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0D2B5E]">
                  Criar conta gratuita
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
