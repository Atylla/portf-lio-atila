import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

interface Props {
    nome: string
    img: string
    linkDeploy: string
    linkGitHub: string
    tecnologia: string[]
    descricao: string
}

export function ComponentProjeto({ nome, img, linkDeploy, linkGitHub, tecnologia, descricao }: Props) {
    return (
        <div className="bg-stone-900 text-stone-50 shadow-md overflow-hidden p-1 flex flex-col gap-3 hover:scale-[1.02] transition">
            <a href={linkDeploy} target="_blank" rel="noreferrer">
                <div className="w-full h-[22rem] relative">
                    <Image
                        src={img}
                        alt={nome}
                        fill
                        className="object-cover cursor-pointer"
                    />
                </div>
            </a>


            <h2 className="text-xl font-bold ml-3">{nome}</h2>
            <p className="text-sm opacity-80 ml-3">{descricao}</p>

            <div className="flex flex-wrap gap-2 ml-3">
                {tecnologia.map((tec, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-stone-800 rounded-lg hover:bg-amber-800">{tec}</span>
                ))}
            </div>

            <div className="flex gap-4 mt-auto ml-3 mb-3">
                <a href={linkGitHub} target="_blank" rel="noreferrer">
                    <FaGithub size={22} className="hover:text-amber-700"/>
                </a>
                <a href={linkDeploy} target="_blank" rel="noreferrer">
                    <FiExternalLink size={22} className="hover:text-amber-700"/>
                </a>
                <button className="ml-auto mr-3 px-3 py-1 rounded-lg bg-stone-700 hover:bg-amber-700">
                    Saiba mais
                </button>
            </div>
        </div>
    )
}
