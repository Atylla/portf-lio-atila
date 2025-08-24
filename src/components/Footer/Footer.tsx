'use client'
import { openLink } from "@/utils/openLink"

export function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-stone-900 to-stone-800 dark:from-stone-black dark:to-stone-950 text-white py-12 px-6 flex flex-col items-center justify-center gap-6">
            
            <div className="text-center space-y-2">
                <h3 className="text-lg md:text-md tracking-wide text-white">Sobre esse Site</h3>
                <p className="text-sm md:text-base text-stone-300">
                    Feito com <span className="text-green-300 font-medium">NextJS</span>,{' '}
                    <span className="text-sky-300 font-medium">TailwindCSS</span>,{' '}
                    <span className="text-pink-300 font-medium">SCSS / CSS Modules</span>
                </p>
            </div>

            <div className="text-center space-y-2 mt-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-wide text-amber-500">Contato</h3>
                <div className="flex gap-6 justify-center mt-4">
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon 
                        onClick={() => openLink('linkedin')} 
                        name="logo-linkedin" 
                        className="text-2xl md:text-3xl hover:text-amber-500 cursor-pointer transition-colors duration-300"
                    />
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon 
                        onClick={() => openLink('github')} 
                        name="logo-github" 
                        className="text-2xl md:text-3xl hover:text-amber-500 cursor-pointer transition-colors duration-300"
                    />
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon 
                        onClick={() => openLink('email')} 
                        name="mail-outline" 
                        className="text-2xl md:text-3xl hover:text-amber-500 cursor-pointer transition-colors duration-300"
                    />
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon 
                        onClick={() => openLink('instagram')}
                        name="logo-instagram"
                        className="text-2xl md:text-3xl hover:text-amber-500 cursor-pointer transition-colors duration-300"
                    />
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-xs md:text-sm text-stone-400">
                    &copy; 2025 <span className="font-medium">Atila Souza de Araujo</span> — Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
