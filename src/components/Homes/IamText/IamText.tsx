"use client"
import { useEffect, useState } from "react"
import styles from "./index.module.scss"

export function IamText() {
    const [displayedText, setDisplayedText] = useState("")
    const text = "Olá, eu sou"

    useEffect(() => {
        let i = 0
        let deleting = false

        const type = () => {
            let timeout = 0

            if (!deleting) {
                if (i <= text.length) {
                    setDisplayedText(text.slice(0, i))
                    i++
                    timeout = 120
                } else {
                    deleting = true
                    timeout = 1000
                }
            } else {
                if (i >= 0) {
                    setDisplayedText(text.slice(0, i))
                    i--
                    timeout = 80
                } else {
                    deleting = false
                    i = 0
                    timeout = 100
                }
            }

            setTimeout(type, timeout)
        }

        type()
    }, [text])

    return (
        <h1 className="dark:text-white mt-[5rem] text-3xl font-bold w-[12rem] text-left">
            {displayedText}
            <span className={`${styles.barAnimation} bg-black dark:bg-white`}></span>
        </h1>
    )
}
