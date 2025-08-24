"use client"
import { useState } from "react"

import { projetos } from "@/utils/dataProjetos" // ajuste o caminho
import { ComponentProjeto } from "./ComponentProjeto/ComponentProjetot"

export function Projetos() {
  const [search, setSearch] = useState("")

  const projetosArray = Object.values(projetos)

  const filtered = projetosArray.filter(p =>
    p.tecnologia.some(tec =>
      tec.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <section
      id="projetos"
      className="flex flex-col items-center min-h-[calc(100vh-5rem)] pt-16 bg-stone-50"
    >
      <h1 className="text-4xl md:text-5xl font-bold dark:text-stone-900 text-stone-50 mb-6 shinyText">
        Projetos
      </h1>

      <div className="w-full flex flex-row items-center justify-center h-[3rem] bg-stone-900 gap-4 px-4">
        <button className="border-b-1 border-stone-50 w-[11rem] h-[2.5rem] text-stone-50">
          All
        </button>
        <input
          type="text"
          placeholder="Pesquisar tecnologia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-2 border-b-1 border-stone-50 bg-transparent text-stone-50 w-[11rem] h-[2.5rem] outline-none"
        />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {(search ? filtered : projetosArray).map((p, idx) => (
          <ComponentProjeto key={idx} {...p} />
        ))}
      </div>
    </section>
  )
}
