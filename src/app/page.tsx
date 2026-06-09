'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap, faCheckCircle, faPlay, faArrowRight,
  faUsers, faVideo, faStar, faHeadset,
  faFileAlt, faChartLine, faMobileAlt, faUserPlus,
  faShoppingCart, faBook, faMedal,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [activeTestimonial] = useState(0)

  return (
    <main className="bg-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="bg-[#0D2B5E] sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image src="/assets/logoaxis.png" alt="Axis Center" width={48} height={48} />
            <div className="leading-tight">
              <p className="text-sm font-black text-white tracking-widest">AXIS</p>
              <p className="text-[10px] text-white/70 tracking-widest uppercase">Center</p>
              <p className="text-[8px] text-white/50 tracking-widest uppercase">Escola Online</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            <a href="#" className="text-[#F97316] border-b-2 border-[#F97316]">Início</a>
            <a href="#cursos" className="hover:text-white transition-colors">Cursos</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="rounded border border-white/30 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors">
              Entrar
            </Link>
            <Link href="/register" className="rounded bg-[#F97316] px-4 py-2 text-xs font-bold text-white hover:bg-[#EA6C0A] transition-colors">
              Assine Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#0D2B5E] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 z-10 relative">
            <span className="inline-block rounded bg-[#F97316] px-3 py-1 text-xs font-bold text-white uppercase tracking-widest">
              Do Básico ao Avançado
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              DOMINE MATEMÁTICA<br />
              <span className="text-[#F97316]">E GARANTA SUA APROVAÇÃO!</span>
            </h1>
            <p className="text-white/75 text-base max-w-lg">
              Aulas didáticas, exercícios resolvidos, simulados e suporte completo para transformar seus estudos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 rounded bg-[#F97316] px-6 py-3 text-sm font-bold text-white hover:bg-[#EA6C0A] transition-colors">
                EXPERIMENTAR GRÁTIS <FontAwesomeIcon icon={faPlay} className="h-3 w-3" />
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 rounded border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                QUERO SER ALUNO <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute top-2 right-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white text-center">
                <p className="font-bold text-[#F97316]">ASSISTA AO</p>
                <p>VÍDEO DE BOAS-VINDAS</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-800 aspect-video flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-white/60">
                  <div className="w-14 h-14 rounded-full bg-[#F97316] flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlay} className="h-5 w-5 text-white ml-1" />
                  </div>
                  <p className="text-xs">Aula 12 – Equações do 2º Grau</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: faUsers, value: '+1.500', label: 'Alunos Matriculados' },
              { icon: faGraduationCap, value: '+500', label: 'Aprovados' },
              { icon: faVideo, value: '+250', label: 'Aulas Gravadas' },
              { icon: faStar, value: '4.9/5', label: 'Avaliação dos Alunos' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0D2B5E] text-[#0D2B5E]">
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-lg font-black text-[#0D2B5E]">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSSOS CURSOS ── */}
      <section id="cursos" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-px w-12 bg-[#F97316]" />
              <h2 className="text-2xl font-black text-[#0D2B5E]">NOSSOS CURSOS</h2>
              <span className="h-px w-12 bg-[#F97316]" />
            </div>
            <p className="text-slate-500 text-sm">Escolha o caminho ideal para o seu sucesso</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: 'ENSINO BÁSICO', tagColor: 'bg-[#F97316]',
                title: 'Matemática Ensino de Base',
                desc: 'Conteúdos essenciais de matemática para construir uma base sólida.',
                topics: ['Aritmética', 'Geometria', 'Números e Operações', 'Problemas do dia a dia'],
              },
              {
                tag: 'ENSINO MÉDIO', tagColor: 'bg-[#0D2B5E]',
                title: 'Matemática Ensino Médio',
                desc: 'Do básico ao avançado para você mandar bem no ensino médio.',
                topics: ['Álgebra', 'Funções', 'Trigonometria', 'Geometria Espacial'],
              },
              {
                tag: 'SUPERIOR E CONCURSEIROS', tagColor: 'bg-slate-700',
                title: 'Matemática Superior e Concursos',
                desc: 'Matemática para universidades e concursos públicos.',
                topics: ['Cálculo', 'Matemática Financeira', 'Raciocínio Lógico', 'Questões de Concursos'],
              },
            ].map(({ tag, tagColor, title, desc, topics }) => (
              <div key={tag} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold text-white ${tagColor} mb-4`}>{tag}</span>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 text-4xl">📚</div>
                    <div>
                      <h3 className="font-bold text-[#0D2B5E] text-base">{title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-4">
                    {topics.map(t => (
                      <li key={t} className="flex items-center gap-2 text-xs text-slate-600">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-3 w-3 text-[#F97316] shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-slate-100 px-6 py-3">
                  <button className="flex items-center gap-2 text-xs font-bold text-[#0D2B5E] hover:text-[#F97316] transition-colors">
                    VER CURSO <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE ESTUDAR ── */}
      <section className="py-14 bg-[#0D2B5E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-black text-white mb-10">
            POR QUE ESTUDAR NA <span className="text-[#F97316]">AXIS CENTER</span>?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: faVideo, title: 'Aulas Objetivas', desc: 'Direto ao ponto, sem enrolação.' },
              { icon: faHeadset, title: 'Suporte Rápido', desc: 'Professores disponíveis para tirar suas dúvidas.' },
              { icon: faFileAlt, title: 'Exercícios Resolvidos', desc: 'Aprenda praticando com exercícios comentados.' },
              { icon: faChartLine, title: 'Simulados', desc: 'Teste seus conhecimentos e acompanhe seu progresso.' },
              { icon: faMobileAlt, title: 'Acesso em Qualquer Lugar', desc: 'Estude quando e onde quiser, pelo celular ou PC.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F97316]/20 text-[#F97316]">
                  <FontAwesomeIcon icon={icon} className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-12 bg-[#F97316]" />
            <h2 className="text-2xl font-black text-[#0D2B5E]">COMO FUNCIONA</h2>
            <span className="h-px w-12 bg-[#F97316]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Steps */}
            <div>
              <div className="flex items-center gap-3 flex-wrap justify-between">
                {[
                  { icon: faUserPlus, num: '1', label: 'Crie sua conta', desc: 'É rápido e fácil.' },
                  { icon: faPlay, num: '2', label: 'Explore grátis', desc: 'Assista algumas aulas gratuitas.' },
                  { icon: faShoppingCart, num: '3', label: 'Escolha seu plano', desc: 'Escolha o plano que cabe no seu bolso.' },
                  { icon: faBook, num: '4', label: 'Acesse o conteúdo', desc: 'Tenha acesso completo às aulas e materiais.' },
                  { icon: faMedal, num: '5', label: 'Conquiste sua aprovação!', desc: 'Estude, pratique e alcance seus objetivos.' },
                ].map(({ icon, num, label, desc }, i, arr) => (
                  <div key={num} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316] text-white">
                        <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                      </div>
                      <p className="text-[10px] font-bold text-[#0D2B5E]">{num}</p>
                      <p className="text-[10px] font-semibold text-[#0D2B5E] text-center max-w-[70px]">{label}</p>
                      <p className="text-[9px] text-slate-400 text-center max-w-[70px]">{desc}</p>
                    </div>
                    {i < arr.length - 1 && <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 text-slate-300 mb-8" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Prof card */}
            <div className="rounded-2xl bg-[#0D2B5E] p-6 text-white flex flex-col gap-4">
              <h3 className="font-black text-lg text-center">CONHEÇA O PROFESSOR HÉLDER</h3>
              <p className="text-sm text-white/70 text-center">
                Professor de matemática com anos de experiência e milhares de alunos aprovados.
              </p>
              <ul className="space-y-2">
                {['Didática simples e eficiente', 'Aulas claras e objetivas', 'Compromisso com o seu sucesso'].map(t => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-[#F97316] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded bg-[#F97316] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#EA6C0A] transition-colors">
                SAIBA MAIS <FontAwesomeIcon icon={faPlay} className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-12 bg-[#F97316]" />
            <h2 className="text-2xl font-black text-[#0D2B5E]">O QUE NOSSOS ALUNOS DIZEM</h2>
            <span className="h-px w-12 bg-[#F97316]" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Juliana M.', role: 'Estudante',
                text: '"As aulas do professor Hélder são simplesmente incríveis! Consegui entender o que nunca tinha entendido antes."',
              },
              {
                name: 'Carlos A.', role: 'Aprovado em Engenharia',
                text: '"Graças à Axis Center fui aprovado no exame de admissão! Recomendo a todos que querem resultados de verdade."',
              },
              {
                name: 'Mariana K.', role: 'Estudante de Medicina',
                text: '"A plataforma é excelente, o suporte é rápido e os conteúdos são muito completos. Vale cada centavo!"',
              },
            ].map(({ name, role, text }) => (
              <div key={name} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4 text-[#F97316]" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic mb-4">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#0D2B5E] flex items-center justify-center text-white text-sm font-bold">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D2B5E]">{name}</p>
                    <p className="text-xs text-slate-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map(i => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === activeTestimonial ? 'bg-[#F97316]' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#F97316] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="text-xl font-black text-white">COMECE HOJE SUA JORNADA</h3>
              <p className="text-white/80 text-sm">O sucesso é a soma de pequenos esforços repetidos todos os dias.</p>
            </div>
          </div>
          <div className="bg-[#0D2B5E] rounded-xl p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-black text-white">ASSINE AGORA</p>
              <p className="text-white/70 text-xs">E TRANSFORME SEUS SONHOS EM REALIDADE!</p>
            </div>
            <Link href="/register" className="flex items-center justify-center h-10 w-10 rounded-full bg-[#F97316] text-white hover:bg-[#EA6C0A] transition-colors">
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contato" className="bg-[#0D2B5E] pt-12 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/assets/logoaxis.png" alt="Axis Center" width={40} height={40} />
                <div>
                  <p className="text-sm font-black text-white">AXIS CENTER</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">Escola Online</p>
                </div>
              </div>
              <p className="text-xs text-white/60">A Axis Center é a escola online que transforma dificuldades em conquistas.</p>
              <div className="flex gap-3">
                {['f', 'yt', 'ig', 'wa'].map((label, i) => (
                  <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs font-bold hover:bg-[#F97316] transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Navegação */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Navegação</p>
              <ul className="space-y-2">
                {['Início', 'Cursos', 'Como Funciona', 'Sobre Nós', 'Depoimentos', 'Contato'].map(item => (
                  <li key={item}><a href="#" className="text-xs text-white/60 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Cursos */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Cursos</p>
              <ul className="space-y-2">
                {['Ensino de Base', 'Ensino Médio', 'Superior e Concursos'].map(item => (
                  <li key={item}><a href="#" className="text-xs text-white/60 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contato</p>
              <ul className="space-y-2 text-xs text-white/60">
                <li>📞 +244 000 000 000</li>
                <li>✉️ contato@axiscenter.ao</li>
                <li>📍 Luanda, Angola</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/40">© 2024 Axis Center. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
