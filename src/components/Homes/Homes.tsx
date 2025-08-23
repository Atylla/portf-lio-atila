import Image from "next/image"
import { IamText } from "./IamText/IamText"


export function Homes() {
    return (
        <section className="bg-amber-50 dark:bg-stone-900 h-[calc(100vh-5rem)] grid grid-cols-2 transition-colors duration-500">
            <div className="flex flex-col items-center mt-[6rem]">
                <div>
                    <IamText />
                    <h1 className="mt-4 text-[3rem] text-black dark:text-white">Atila Souza de Araujo</h1>
                    <p className="mt-2 text-lg text-stone-400 dark:text-stone-400">Engenheiro de Software/Desenvolvedor Front-End</p>
                </div>


                <div className="mt-[4rem] w-[13rem] flex items-center justify-between">
                 {/*  <LinkedinIcon className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500"/> */}
                    {/* @ts-expect-error */}
                    <ion-icon name="logo-linkedin" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500"></ion-icon>
                    {/* @ts-expect-error */}
                    <ion-icon name="logo-github" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500"></ion-icon>
                    {/* @ts-expect-error */}
                    <ion-icon name="mail-outline" className="dark:text-white text-black text-[2rem] hover:cursor-pointer hover:text-amber-500"></ion-icon>
                </div>


            </div>

            <div className="relative p-0">
                <div className="absolute top-25 left-[20%] w-100 h-100 rounded-full overflow-hidden dark:dark:shadow-[0_0_15px_5px_rgba(250,204,21,0.7)] transition-shadow duration-600">
                    <Image
                        src="/assets/foto-perfil.jpg"
                        alt="Foto de Perfil"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}