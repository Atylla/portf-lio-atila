'use client'
import Image from "next/image"
import { IamText } from "./IamText/IamText"
import { openLink } from "@/utils/openLink";

export function Homes() {

    return (
        <section id="home" className="bg-amber-50 dark:bg-stone-900 h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2 transition-colors duration-500">
            <div className="flex flex-col items-center mt-[0rem] px-4 md:py-50 md:px-0">
                <div>
                    <IamText />
                    <h1 className="mt-4 text-3xl md:text-5xl text-black dark:text-white">Atila Souza de Araujo</h1>
                    <p className="mt-2 text-base md:text-lg text-stone-400 dark:text-stone-400">Engenheiro de Software/Desenvolvedor Front-End</p>
                </div>


                <div className="mt-8 w-[13rem] flex justify-center md:justify-start gap-6">
                 {/*  <LinkedinIcon className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500"/> */}
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon onClick={() => openLink('linkedin')} name="logo-linkedin" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500 transition-colors duration-200" ></ion-icon>
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon onClick={() => openLink('github')} name="logo-github" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500 transition-colors duration-200"></ion-icon>
                    {/* @ts-expect-error: ion-icon é um web component não reconhecido pelo TS */}
                    <ion-icon onClick={() => openLink('email')} name="mail-outline" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500 transition-colors duration-200"></ion-icon>
                </div>


            </div>

            <div className="relative w-full h-80 md:h-full flex justify-center md:justify-end px-4 md:px-0 mt-0 md:mt-20">
                <div className="absolute -top-10 md:top-25 self-center md:left-[20%] w-64 h-64 md:w-100 md:h-100 rounded-full overflow-hidden dark:dark:shadow-[0_0_15px_5px_rgba(250,204,21,0.7)] transition-shadow duration-600">
                    <Image
                        src="/foto-perfil.jpg"
                        alt="Foto de Perfil"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}