"use client"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

interface ModalDetalhesProjetoProps {
    onClose: () => void
    nome: string
    img: string
    descricao: string
    tecnologia: string[]
    linkDeploy: string
    linkGitHub: string
    descricaoLonga: string
}

export default function ModalDetalhesProjeto({
    onClose,
    nome,
    img,
    descricao,
    tecnologia,
    linkDeploy,
    linkGitHub,
    descricaoLonga
}: ModalDetalhesProjetoProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return ReactDOM.createPortal(
        <div className="fixed inset-0 roun  bg-black/50 flex items-center justify-center z-50">
            <div className="bg-amber-50 dark:bg-stone-900 rounded-t-2xl shadow-2xl md:w-[50rem] w-full relative overflow-hidden flex flex-col md:h-[90%] h-[100vh]">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-white dark:bg-stone-800 bg-opacity-70 dark:bg-opacity-70 text-gray-800 dark:text-gray-200 hover:bg-amber-500 hover:text-white rounded-full w-8 h-8 flex items-center justify-center text-xl shadow-md z-50"
                >
                    ✕
                </button>

                <div className="relative w-full h-60  md:h-[25rem] flex-shrink-0">
                    <Image
                        src={img}
                        alt={nome}
                        fill
                        className="object-cover rounded-t-2xl"
                    />
                </div>

                <div className="p-6 flex flex-col gap-4 border-b border-stone-200 dark:border-stone-700 flex-shrink-0">
                    <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50">{nome}</h2>
                    <div className="flex flex-wrap gap-2">
                        {tecnologia.map((tec, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-amber-500 hover:text-white transition-colors"
                            >
                                {tec}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a
                            href={linkGitHub}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-600 text-white hover:bg-amber-600 transition-colors"
                        >
                            <FaGithub /> GitHub
                        </a>
                        <a
                            href={linkDeploy}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                        >
                            <FiExternalLink /> Deploy
                        </a>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto flex-1">
                    <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300 whitespace-pre-line">
                        {descricao} <br/> <br/>
                        {descricaoLonga}
                    </p>
                </div>
            </div>
        </div>,
        document.body
    )
}
