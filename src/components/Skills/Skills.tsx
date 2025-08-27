import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt, FaGithub, FaSass, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";
import { SiStyledcomponents, SiExpress, SiZod } from "react-icons/si";

import styles from './index.module.scss'

export function Skills() {
    return (
        <section
            id="skills"
            className={`flex flex-col items-center min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-5rem)] p-8 md:p-16 transition-colors duration-500`}
        >
            <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-stone-900 mb-6">
                Habilidades
            </h1>

            <div className="md:w-2/3 w-[95%]">
                <h2 className={`text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6 ${styles.shinyText}`}>
                    Atualmente:
                </h2>

                <div className="flex flex-row justify-between gap-2">
                    <div className=" flex flex-col items-center gap-1">
                        <DiJavascript className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-amber-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">JavaScript</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <BiLogoTypescript className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">TypeScript</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <BiLogoReact className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-400 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">ReactJS</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <TbBrandReactNative className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-600 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">ReactNative</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <RiNextjsFill className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-stone-800 dark:text-stone-100 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">NextJS</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between gap-4 mt-[5rem]">
                    <div className=" flex flex-col items-center gap-1">
                        <FaGitAlt className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-red-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">Git</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <FaGithub className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-purple-950 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">GitHub</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <FaSass className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-pink-800 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">Sass/Scss</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <BiLogoTailwindCss className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-400 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">TailwindCss</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <SiStyledcomponents className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-pink-800 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50 w-[4rem] md:w-[7rem]">Styled-components</p>
                    </div>
                </div>

                <div className="flex flex-row justify-around gap-4 md:mt-[3rem] mt-[4rem]">
                    <div className=" flex flex-col items-center gap-1">
                        <SiZod className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-600 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">Zod</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <FaNodeJs className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-green-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">NodeJS</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <SiExpress className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-green-400 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">ExpressJS</p>
                    </div>
                </div>

            </div>

            <div className="md:w-2/3 w-[95%] md:mt-[3rem]">
                <h2 className={`md:mt-1 mt-[3rem] text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6 ${styles.shinyText}`}>
                    Aprendendo:
                </h2>

                <div className="flex flex-row justify-around">
                    <div className=" flex flex-col items-center gap-1">
                        <FaDocker className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-sky-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">Docker</p>
                    </div>
                    <div className=" flex flex-col items-center gap-1">
                        <FaDatabase className="w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] text-red-500 hover:scale-[1.1] transition-scale duration-200" />
                        <p className="text-[0.8rem] md:text-lg font-bold text-stone-900 dark:text-stone-50">SQL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}