'use client'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export function About() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'))
        checkDark()

        // opcional: observar mudanças caso você queira que o gradiente mude ao vivo
        const observer = new MutationObserver(checkDark)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

        return () => observer.disconnect()
    }, [])
    return (
        <section
            id="sobre"
            className={`flex flex-col items-center min-h-[calc(100vh-5rem)] p-8 md:p-16 transition-colors duration-500 ${isDark ? styles.animatedGradientDark : styles.animatedGradientLight}`}
        >
            <h1 className="text-3xl md:text-5xl font-bold text-white dark:text-stone-900 mb-6">
                Sobre mim
            </h1>

            <p className="max-w-3xl text-[0.8rem] md:text-sm mt-[3rem] text-stone-300 dark:text-stone-800 leading-relaxed mb-10">
                Sou <strong>Atila Araujo</strong>, formado em <em>Engenharia de Software</em> e em constante evolução
                como <strong>desenvolvedor</strong> apaixonado por tecnologia. Comecei na <em>web</em>, mas ampliei
                meus horizontes para o desenvolvimento <strong>mobile</strong>, <strong>desktop</strong> e <strong>backend</strong>. Tenho uma base sólida em <strong>TI</strong>, reforçada por cursos e prática
                constante. Gosto de entender o todo — da <em>interface</em> ao <em>servidor</em> — e busco sempre
                soluções <strong>bem pensadas</strong>, <strong>criativas</strong> e <strong>funcionais</strong>.
                Curioso por natureza, encaro cada projeto como uma chance de <em>aprender</em> e <em>crescer</em>.
                <strong>Fora do código</strong>, trago influências da <em>música</em>, do <em>RPG</em> e da
                <em>filosofia</em>, que me ajudam a enxergar o desenvolvimento com mais <strong>empatia</strong>,
                <strong>criatividade</strong>, <strong>lógica</strong> e <strong>originalidade</strong>.
            </p>

            <h3 className="text-x1 md:text-2xl font-bold text-white dark:text-stone-900 mb-6 mt-2 md:mt-[4rem]">
                Formação Acadêmica
            </h3>

            <div className="w-full max-w-4xl gap-3 md:gap-8">
                <div className="flex items-center justify-center">
                    <div className="p-6 w-[30rem]">
                        <h3 className="text-sm md:text-base font-semibold text-white dark:text-stone-900 mb-[1rem] flex flex-row items-center gap-2">
                            {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */} 
                            <ion-icon name="code-working-outline" className="dark:text-black text-white text-[2rem] hover:text-amber-500 transition-colors duration-200" ></ion-icon>
                            Engenharia de Software
                        </h3>
                        <p className="text-xs text-stone-300 dark:text-stone-800">
                            Formação sólida em desenvolvimento web e mobile, com ênfase em boas práticas de codificação,
                            estrutura de dados, algoritmos e design de sistemas. Experiência no planejamento, implementação e manutenção de aplicações escaláveis e eficientes.
                        </p>
                    </div>


                </div>
                <div className="grid grid-col-1 md:grid-cols-2">
                    <div className="p-6 w-[23.5rem] md:w-[30rem] md:pl-[5rem]">
                        <h3 className="text-sm md:text-base font-semibold text-white dark:text-stone-900 mb-[1rem] flex flex-row items-center gap-2">
                            {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */} 
                            <ion-icon name="construct-outline" className="dark:text-black text-white text-[2rem] hover:text-amber-500 transition-colors duration-200" />
                            Técnico em Informática
                        </h3>
                        <p className="text-xs text-stone-300 dark:text-stone-800">
                            Desenvolvimento de competências em redes, manutenção de sistemas e programação, com foco em aplicações web.
                            Experiência prática em ambientes de TI e resolução de problemas técnicos de forma eficiente.
                        </p>
                    </div>

                    <div className="p-6 w-[23.5rem] md:w-[30rem] md:pl-[5rem]">
                        <h3 className="text-sm md:text-base font-semibold text-white dark:text-stone-900 mb-[1rem] flex flex-row items-center gap-2">
                            {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */} 
                            <ion-icon name="cog-outline" className="dark:text-black text-white text-[2rem] hover:text-amber-500 transition-colors duration-200" ></ion-icon>
                            Robótica
                        </h3>

                        <p className="text-xs text-stone-300 dark:text-stone-800">
                            Introdução à lógica de programação e controle de sistemas automatizados, com primeiros contatos com linguagens como C e C++.
                            Desenvolvimento de raciocínio lógico, resolução de problemas e integração de software com hardware.
                        </p>
                    </div>


                </div>
            </div>


        </section>
    );
}
