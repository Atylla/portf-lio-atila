"use client"
import { useEffect } from "react"

export function IoniconsLoader() {
  useEffect(() => {
    const scriptModule = document.createElement("script")
    scriptModule.type = "module"
    scriptModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    document.body.appendChild(scriptModule)

    const scriptNoModule = document.createElement("script")
    scriptNoModule.setAttribute("nomodule", "") // <- aqui
    scriptNoModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    document.body.appendChild(scriptNoModule)

    return () => {
      document.body.removeChild(scriptModule)
      document.body.removeChild(scriptNoModule)
    }
  }, [])

  return null
}
